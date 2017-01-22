# RokuCast
Cast videos from chrome to roku

Comprised of a modified vGet extension and modified firefox cast app.

Credits to original authors and mozilla foundation for their hard work, without which this mod could not be possible

This `master` branch holds a version of the version of the Roku receiver and Chrome extension suitable for development and debugging purposes. Switch to the `PlayOnRoku` branch for a finished version suitable for daily use.

## Installation

#Roku App

To install the Roku app you need to enable development mode on your Roku box (follow online instructions for that). To then sideload the app, first zip the contents of the `RokuCast Receiver` folder (so go into the folder, control-A to select the three items, right click and zip it). Then upload that zip file to the Roku.

To install the Chrome extension, enable development mode on Chrome, click load unpacked extension, and go to the `RokuCast` folder.
---


## Usage

Once the Chrome extension has been installed, you should see the extension appear in the corner.

Before you use the extension, you will have to enter the IP Address for your roku into it.

Inside the extension, click on the settings cog in the lower right hand corner and enter the IP address for your roku in the text box. Your Roku's IP address can be found in the network section of Roku's preferences.

Once installed, navigate to any site containing html5 content [this site](https://people.mozilla.org/~mfinkle/casting/test.html) for example, and click on the cast button in the omnibar. You should see a list of all castable content, and an option to either download or cast it. Click on the cast button, and the video should automatically start playing on your roku.

## Supported Formats / Limitations

Supports mp4 videos (which is the vast majority of html5 content)

Works on nearly all websites utilizing an html5 video player

## Bugs/Todo:

Requires manual entry of roku ip address
