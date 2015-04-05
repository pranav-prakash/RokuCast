' This Source Code Form is subject to the terms of the Mozilla Public
' License, v. 2.0. If a copy of the MPL was not distributed with this file,
' You can obtain one at http://mozilla.org/MPL/2.0/.

sub main(params as dynamic)
    this = {
        port: createObject("roMessagePort")
        screen: createObject("roListScreen")
        content: main_getContentList()
        eventLoop: main_eventLoop
    }

    server = setupServer()

    ' Setup the applicationtheme
    initTheme()

    this.screen.setMessagePort(this.port)
    this.screen.setBreadcrumbText("Home", "")

    this.screen.setContent(this.content)

    ' Determine how we were launched. Values for params.source can be:
    ' * Normal launch: "homescreen"
    ' * Dev install:   "app-run-dev"
    ' * ECP:           "external-control" (we also pass a 'version')
    print "launch params: " params
    launch = "homescreen"
    version = 0
    if params <> invalid then
        print "Got params"
        if params.source <> invalid then
            print "Got source"
            launch = params.source
            if params.version <> invalid then
                print "Got version"
                version = params.version.toInt()
                print params.url
                print params.title

                videoParams = {
                            url: params.url
                            title: params.title
                        }

                        ' TODO: Only save the video to history if it launched successfully
                saveToHistory(videoParams)

                displayVideo(videoParams)
            end if
        end if
    end if

    ' Only show the main screen if we were launched via home screen
    if launch = "external-control" then
        if version <> server.protocolVersion then
            print "Bad version"
            showMessage("Connection Error", "Unable to connect to Firefox.")
        end if
    else
        print "show main screen"
        this.screen.show()
    end if

    this.eventLoop(server)
    server.close()

    sleep(50)
end sub

function main_eventLoop(server as object)
    while true
        server.processEvents()

        event = wait(100, m.screen.getMessagePort())
        if type(event) = "roListScreenEvent" then
            if event.isListItemFocused() then
                m.screen.setBreadcrumbText(m.content[event.getIndex()].Title, "")
            else if event.isListItemSelected() then
                m.content[event.getIndex()].handler(server)
            end if
        end if
    end while
end function

function main_getContentList() as object
    list = [{
        Title: "View recent history",
        HDBackgroundImageUrl: "pkg:/images/history_hd.png",
        SDBackgroundImageUrl: "pkg:/images/history_sd.png",
        handler: createRecentHistory
    }]
    return list
end function
