' This Source Code Form is subject to the terms of the Mozilla Public
' License, v. 2.0. If a copy of the MPL was not distributed with this file,
' You can obtain one at http://mozilla.org/MPL/2.0/.


function showMessage(title As dynamic, message As dynamic, buttons=invalid as dynamic) As object
    port = createObject("roMessagePort")
    dialog = createObject("roMessageDialog")
    dialog.setMessagePort(port)

    dialog.setTitle(title)
    dialog.setText(message)

    if buttons = invalid then
        dialog.addButton(0, "Back")
        dialog.enableBackButton(true)
    else
        index = 0
        for each button in buttons
            dialog.addButton(index, button)
            index = index + 1
        next
    end if

    dialog.show()

    while true
        dlgMsg = wait(0, dialog.getMessagePort())
        if type(dlgMsg) = "roMessageDialogEvent"
            if dlgMsg.isScreenClosed()
                dialog = invalid
                return 0
            else if dlgMsg.isButtonPressed()
                dialog = invalid
                return dlgMsg.getIndex()
            endif
        endif
    end while
end function

function showPopup(title As dynamic, buttons As dynamic) As object
    port = createObject("roMessagePort")
    dialog = createObject("roMessageDialog")
    dialog.setMessagePort(port)

    dialog.setMenuTopLeft(true)
    dialog.enableBackButton(true)
    dialog.enableOverlay(true)

    dialog.setTitle(title)

    index = 0
    for each button in buttons
        if button = "-" then
            dialog.addButtonSeparator()
        else
            dialog.addButton(index, button)
            index = index + 1
        end if
    next

    dialog.show()

    while true
        dlgMsg = wait(0, dialog.getMessagePort())
        if type(dlgMsg) = "roMessageDialogEvent"
            if dlgMsg.isScreenClosed()
                dialog = invalid
                return -1
            else if dlgMsg.isButtonPressed()
                dialog = invalid
                return dlgMsg.getIndex()
            else if dlgMsg.isButtonInfo() then
                dialog = invalid
                return -1
            endif
        endif
    end while
end function
