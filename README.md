# RokuCast
Cast videos from chrome to roku

Comprised of a modified vGet extension and modified firefox cast app.

Credits to original authors and mozilla foundation for their hard work, without which this mod could not be possible

## Installation

### Roku App

Install the app as a private channel with code `CL9D5D`

-----

### Chrome Extension

Download the .crx extension file and drag/drop it to the extension page (chrome://extensions).
You should see the extension appear in the corner.

If this doesn't work (perhaps in the future Chrome disables non app-store extensions?) then you can install it as an unpacked extension. In Chrome navigate to preferences -> extensions and enable "developer mode" by clicking on the upper-right checkbox.

Then click "Load Unpacked Extension" and browse to the folder called `RokuCast`.


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
