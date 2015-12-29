# RokuCast
Cast videos from chrome to roku

Comprised of a modified vGet extension and modified firefox cast app.

Credits to original authors and mozilla foundation for their hard work, without which this mod could not be possible

## Installation

### Roku App

Upload zip file to your roku in development mode

-----

### Chrome Extension

Download "RokuCast-Chrome.zip" from the releases page (https://github.com/pranav-prakash/RokuCast/releases) and unzip it.

Note that deleting the folder will delete the extension, so you might want to move the unzipped folder to a good location beforehand.

Then in Chrome navigate to preferences -> extensions and enable "developer mode" by clicking on the upper-right checkbox.

Then click "Load Unpacked Extension" and browse to the unzipped folder (RokuCast-Chrome).

You should see the extension appear in the corner.

## Usage

Before you use the extension, you will have to enter the IP Address for your roku into it.

Inside the extension, click on the settings cog in the lower right hand corner and enter the IP address for your roku in the text box. Your Roku's IP address can be found in the network section of Roku's preferences.

Once installed, navigate to any site containing html5 content [this site](https://people.mozilla.org/~mfinkle/casting/test.html) for example, and click on the cast button in the omnibar. You should see a list of all castable content, and an option to either download or cast it. Click on the cast button, and the video should automatically start playing on your roku.

## Supported Formats / Limitations

Supports mp4 videos (which is the vast majority of html5 content)

Works on nearly all websites utilizing an html5 video player

## Bugs/Todo:

Requires manual entry of roku ip address
