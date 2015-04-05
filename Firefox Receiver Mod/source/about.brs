' This Source Code Form is subject to the terms of the Mozilla Public
' License, v. 2.0. If a copy of the MPL was not distributed with this file,
' You can obtain one at http://mozilla.org/MPL/2.0/.

function createAbout(server as object)
    this = {
        port: createObject("roMessagePort")
        screen: createObject("roParagraphScreen")
        eventLoop: about_eventLoop
    }

    this.screen.setMessagePort(this.port)
    this.screen.setBreadcrumbText("Home", "Help")

    ipaddr = getFirstIPAddress()
    if ipaddr = invalid then
        ipaddr = "<not connected>"
    end if

    version = getAppVersion()
    if version = invalid then
        version = "<unknown>"
    end if

    this.screen.addHeaderText("Firefox for Roku " + version)
    this.screen.addParagraph("IP Address: " + ipaddr)

    ' Waiting for a real SUMO page
    'this.screen.addParagraph(" ")
    'this.screen.addParagraph("If you are having problems getting the system to work, please go to firefox.com/roku on your phone, tablet or laptop.")

    this.screen.show()

    this.eventLoop()
end function

function about_eventLoop()
    while (true)
        event = wait(0, m.port)
        if type(event) = "roParagraphScreenEvent" then
            exit while
        endif
    end while
end function
