' This Source Code Form is subject to the terms of the Mozilla Public
' License, v. 2.0. If a copy of the MPL was not distributed with this file,
' You can obtain one at http://mozilla.org/MPL/2.0/.

function createIntroduction(server as object)
    this = {
        port: createObject("roMessagePort")
        screen: createObject("roListScreen")
        content: introduction_getContentList()
        eventLoop: introduction_eventLoop
    }

    this.screen.setMessagePort(this.port)
    this.screen.setBreadcrumbText("Home", "Setup")

    this.screen.setContent(this.content)
    this.screen.show()

    this.eventLoop()
end function

function introduction_eventLoop()
    while (true)
        event = wait(0, m.port)
        if type(event) = "roListScreenEvent" then
            if event.isRemoteKeyPressed() then
                if event.getIndex() = 0 then '<BACK>
                    m.screen.close()
                end if
            else if event.isScreenClosed() then
                exit while
            endif
        endif
    end while
end function

function introduction_getContentList() as object
    list = [{
        Title: "Get the latest Firefox for Android",
        HDBackgroundImageUrl: "pkg:/images/introduction_step1_hd.png",
        SDBackgroundImageUrl: "pkg:/images/introduction_step1_sd.png",
    },
    {
        Title: "Set up devices on the same Wifi network",
        HDBackgroundImageUrl: "pkg:/images/introduction_step2_hd.png",
        SDBackgroundImageUrl: "pkg:/images/introduction_step2_sd.png",
    },
    {
        Title: "Send a video to your Roku",
        HDBackgroundImageUrl: "pkg:/images/introduction_step3_hd.png",
        SDBackgroundImageUrl: "pkg:/images/introduction_step3_sd.png",
    }]
    return list
end function
