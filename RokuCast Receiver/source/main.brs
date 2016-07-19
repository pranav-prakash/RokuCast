' This Source Code Form is subject to the terms of the Mozilla Public
' License, v. 2.0. If a copy of the MPL was not distributed with this file,
' You can obtain one at http://mozilla.org/MPL/2.0/.

sub main(params as dynamic)
    this =  {
            port: createObject("roMessagePort")
            screen: createObject("roListScreen")
            content: main_getContentList()
            eventLoop: main_eventLoop
        }

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
        if params.source <> invalid then
            launch = params.source
            if params.version <> invalid then
            
                version = params.version.toInt()

                isHLS = false

                isPlexStream = CreateObject("roRegex", "&mediaIndex=0&partIndex=0&protocol=http", "")
                isM3U8 = CreateObject("roRegex", "m3u8", "")

                if (isPlexStream.IsMatch(params.url))
                    params.url = isPlexStream.replace(params.url, "&mediaIndex=0&partIndex=0&protocol=hls")
                    isHLS = true
                end if
                
                if (isM3U8.IsMatch(params.url))
                    isHLS = true
                end if

                if (params.image = invalid)
                    params.image = ""
                end if

                print params.url
                print params.title
                print params.image

                videoParams = {
                        url: params.url
                        title: params.title
                        poster: params.image
                    }

                        ' TODO: Only save the video to history if it launched successfully
                saveToHistory(videoParams)
                displayVideo(videoParams, isHLS)

            end if
        end if
    end if

    ' Only show the main screen if we were launched via home screen

    print "show main screen"
    this.screen.show()
    this.eventLoop()

    sleep(50)
end sub

function main_eventLoop()
    while true
        event = wait(100, m.screen.getMessagePort())
        if type(event) = "roListScreenEvent" then
            if event.isListItemFocused() then
                m.screen.setBreadcrumbText(m.content[event.getIndex()].Title, "")
            else if event.isListItemSelected() then
                m.content[event.getIndex()].handler()
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
