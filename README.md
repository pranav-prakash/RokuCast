# RokuCast
Cast videos from chrome to roku

Comprised of a modified vGet extension and modified firefox cast app.

Credits to original authors and mozilla foundation for their hard work, without which this mod could not be possible

## Installation

The `master` branch holds a version of the version of the Roku receiver and Chrome extension suitable for development and debugging purposes. The Roku app (RokuCast-Receiver.zip) should be installed via development mode and the Chrome extension should be installed as an unpacked extension (folder is "RokuCast").

Switch to the `Production` branch for a finished version suitable for daily use.

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
