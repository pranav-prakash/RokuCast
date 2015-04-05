' This Source Code Form is subject to the terms of the Mozilla Public
' License, v. 2.0. If a copy of the MPL was not distributed with this file,
' You can obtain one at http://mozilla.org/MPL/2.0/.

function createRecentHistory(server as object)
    this = {
        server: server
        port: createObject("roMessagePort")
        screen: createObject("roGridScreen")
        history: []
        selectedItem: invalid
        selectInitialItem: history_selectInitialItem
        clearItem: history_clearItem
        clearHistory: history_clearHistory
        eventLoop: history_eventLoop
    }

    this.screen.setMessagePort(this.port)

    ' Set up the grid before calling setupLists()
    this.screen.setBreadcrumbText("Home", "Recent History")
    this.screen.setUpBehaviorAtTopRow("stop")
    this.screen.setDisplayMode("scale-to-fill")
    this.screen.setGridStyle("two-row-flat-landscape-custom")

    this.screen.setupLists(2)
    this.screen.setListNames(["History", "About Mozilla & Firefox"])

    this.history[0] = getRecentHistory()
    this.history[1] = getDefaultHistory()
    this.screen.setContentList(0, this.history[0])
    this.screen.setContentList(1, this.history[1])

    this.selectInitialItem()

    ' Must be called after setupLists()
    this.screen.setDescriptionVisible(false)

    this.screen.show()

    this.eventLoop()
end function

sub history_selectInitialItem()
    ' Hide the history row if we have no history. Also, set the default
    ' selection based on the visible rows
    if m.history[0].count() = 0 then
        m.screen.setListVisible(0, false)
        m.selectedItem = m.history[1][0]
    else
        m.selectedItem = m.history[0][0]
    end if
end sub

function history_eventLoop()
    while (true)
        if m.server <> invalid then
            m.server.processEvents()
        end if

        event = wait(0, m.screen.getMessagePort())
        if type(event) = "roGridScreenEvent" then
            print "msg= "; event.getMessage() " , index= "; event.getIndex(); " data= "; event.getData()
            if event.isListItemFocused() then
                row = event.getIndex()
                selection = event.getData()
                print "list item focused row= "; row; " selection= "; selection
                m.selectedItem = m.history[row][selection]
            else if event.isListItemSelected() then
                row = event.getIndex()
                selection = event.getData()
                print "list item selected row= "; row; " selection= "; selection
                videoParams = {
                    url: m.history[row][selection].videoURL
                }
                displayVideo(videoParams)
            else if event.isRemoteKeyPressed() then
                if event.getIndex() = 0 then '<BACK>
                    m.screen.close()
                else if event.getIndex() = 10 then '<INFO>
                    ' Determine the types of actions
                    actionText = ["Play", "Remove from history", "-", "Clear all history"]
                    actionMap = [0, 1, 2]
                    if m.selectedItem.removable = false then
                        actionText = ["Play", "-", "Clear all history"]
                        actionMap = [0, 2]
                        if m.history[0].count() = 0 then
                            actionText = ["Play"]
                            actionMap = [0]
                        end if
                    end if

                    ' Display a popup
                    result = showPopup("Options", actionText)
                    if actionMap[result] = 0 and m.selectedItem <> invalid then
                        videoParams = {
                            url: m.selectedItem.videoURL
                        }
                        displayVideo(videoParams)
                    else if actionMap[result] = 1 and m.selectedItem <> invalid then
                        m.clearItem(m.selectedItem.videoURL)
                    else if actionMap[result] = 2 then
                        m.clearHistory()
                    end if
                end if
            else if event.isScreenClosed() then
                return -1
            end if
        end if
    end while
end function

sub history_clearItem(url as dynamic)
    result = showMessage("Firefox", "Do you want to remove this video from history?", ["Yes", "No"])
    if result = 0 then
        removeFromHistory({ url: url })

        ' Update the screen
        m.history[0] = getRecentHistory()
        m.screen.setContentList(0, m.history[0])
        m.selectInitialItem()
    end if
end sub

sub history_clearHistory()
    result = showMessage("Firefox", "Do you want to clear all history?", ["Yes", "No"])
    if result = 0 then
        clearHistory()
        m.screen.close()
    end if
end sub

' Global utilities for reading and saving history

function getRecentHistory() as object
    list = []
    json = registryRead("history")
    if json <> invalid then
        history = parseJSON(json)
        for each video in history
            list.push({
                Title: video.title
                Description: video.description
                HDPosterUrl: video.poster
                SDPosterUrl: video.poster
                videoURL: video.url
                removable: true
            })
        end for
        return list
    end if

   return list
end function

function getDefaultHistory() as object
    jsonAsString = readAsciiFile("pkg:/json/defaults.json")
    history = parseJSON(jsonAsString)
    list = []
    for each video in history
        list.push({
            Title: video.title
            Description: video.description
            HDPosterUrl: video.poster
            SDPosterUrl: video.poster
            videoURL: video.url
            removable: false
        })
    end for
    return list
end function

function saveToHistory(args as dynamic)
    history = []
    json = registryRead("history")
    if json <> invalid then
        print json
        history = parseJSON(json)
        if history = invalid then
            history = []
        end if
    end if

    ' If an existing entry is already in history, return without saving
    for each item in history
        if item.url = args.url then
            return false
        end if
    end for

    history.push({
        title: args.title
        description: "Empty"
        poster: ""
        url: args.url
    })

    if history.count() > 10 then
        history.shift()
    end if

    json = toJSON(history)
    print json
    return registryWrite("history", json)
end function

function removeFromHistory(args as dynamic)
    history = []
    json = registryRead("history")
    if json <> invalid then
        history = parseJSON(json)
        if history = invalid then
            return false
        end if
    else
        return false
    end if

    ' Find an existing entry and remove it from history array
    index = 0
    for each item in history
        if item.url = args.url then
            history.delete(index)
            exit for
        end if
        index = index + 1
    end for

    ' If history is empty, just clear the registry
    if history.count() = 0 then
        return clearHistory()
    end if

    json = toJSON(history)
    return registryWrite("history", json)
end function

function clearHistory()
    return registryDelete("history")
end function
