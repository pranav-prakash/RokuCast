' This Source Code Form is subject to the terms of the Mozilla Public
' License, v. 2.0. If a copy of the MPL was not distributed with this file,
' You can obtain one at http://mozilla.org/MPL/2.0/.

function initTheme() as void
    app = createObject("roAppManager")
    
    app = CreateObject("roAppManager")
    theme = CreateObject("roAssociativeArray")

    theme.OverhangOffsetSD_X = "72"
    theme.OverhangOffsetSD_Y = "10"
    theme.OverhangSliceSD = "pkg:/images/overhang_sd.png"
    theme.OverhangLogoSD = "pkg:/images/logo_sd.png"
    theme.OverhangHeightSD = "70"

    theme.OverhangOffsetHD_X = "70"
    theme.OverhangOffsetHD_Y = "30"
    theme.OverhangSliceHD = "pkg:/images/overhang_hd.png"
    theme.OverhangLogoHD = "pkg:/images/logo_hd.png"
    theme.OverhangHeightHD = "124"

    theme.ListItemHighlightHD = "pkg:/images/selectbar_hd.png"
    theme.ListItemHighlightSD = "pkg:/images/selectbar_sd.png"

    theme.GridScreenLogoOffsetHD_X = "70"
    theme.GridScreenLogoOffsetHD_Y = "30"
    theme.GridScreenOverhangSliceHD = "pkg:/images/overhangmenu_hd.png"
    theme.GridScreenLogoHD = "pkg:/images/logo_hd.png"
    theme.GridScreenOverhangHeightHD = "124"

    theme.GridScreenLogoOffsetSD_X = "72"
    theme.GridScreenLogoOffsetSD_Y = "10"
    theme.GridScreenOverhangSliceSD = "pkg:/images/overhangmenu_sd.png"
    theme.GridScreenLogoSD = "pkg:/images/logo_sd.png"
    theme.GridScreenOverhangHeightSD = "70"

    ' We want to use a dark background throughout, just like the default
    ' grid. Unfortunately that means we need to change all sorts of stuff.
    ' The general idea is that we have a small number of colors for text
    ' and try to set them appropriately for each screen type.

    background = "#282828"
    titleText = "#EAEFF2"
    normalText = "#EAEFF2"
    detailText = "#EAEFF2"
    subtleText = "#EAEFF2"
    listItemHighlightText = "#4D4E53"
    listItemText = "#EAEFF2"
    black = "#000000"
    white = "#ffffff"

    theme.BackgroundColor = background

    theme.GridScreenBackgroundColor = background
    theme.GridScreenRetrievingColor = subtleText
    theme.GridScreenListNameColor = titleText
    theme.CounterTextLeft = titleText
    theme.CounterSeparator = normalText
    theme.CounterTextRight = normalText
    ' Defaults for all GridScreenDescriptionXXX

    theme.ListScreenHeaderText = titleText
    theme.ListItemText = listItemText
    theme.ListItemHighlightText = listItemHighlightText
    theme.ListScreenDescriptionText = normalText

    theme.ParagraphHeaderText = titleText
    theme.ParagraphBodyText = normalText

    theme.ButtonMenuNormalOverlayText = white
    theme.ButtonMenuNormalText = black
    theme.ButtonNormalColor = black
    theme.DialogBodyText = black
    theme.ButtonHighlightColor = white
    theme.DialogTitleText = black

    app.setTheme(theme)
end function
