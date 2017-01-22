# RokuCast
Cast videos from Chrome to Roku

Comprised of a modified vGet extension
Credits to original authors and mozilla foundation for their hard work, without which this mod could not be possible

This branch holds the experimental version which makes use of Roku's native remote video player (the same one invoked when you play videos through the official roku mobile app) to avoid having to install a separate companion channel on the Roku.

Even though it is experimental, it has been tested by several people and should work fine. This branch is the one most people should use.

In some very specific cases, you may need to use the version with the companion channel that can be found in the production branch. For instance, if you need to spoof user-agent of the Roku or want to access play history, the companion channel lets you do that.

The master branch holds a version similar to the production branch except it may be more bleeding-edge and uses a sideloaded version of the companion channel instead of having the companion installed as a private channel. Useful if you use a sky now tv or similar box that only allows sideloaded custom channels.

## Installation

Chrome Extension:

First download the [zip file](https://github.com/pranav-prakash/RokuCast/archive/playOnRoku.zip) of the repo and unzip it on to the desktop:

In Chrome navigate to preferences -> extensions and enable "developer mode" by clicking on the upper-right checkbox.

Then click "Load Unpacked Extension" and browse to the folder called RokuCast in the unzipped archive.

---


## Usage

Once the Chrome extension has been installed, you should see the extension appear in the corner.

Before you use the extension, you will have to enter the IP Address for your roku into it.

Inside the extension, click on the settings cog in the lower right hand corner and enter the IP address for your roku in the text box. Your Roku's IP address can be found in the network section of Roku's preferences.

Once installed, navigate to any site containing html5 content [this site](http://camendesign.com/code/video_for_everybody/test.html) for example, and click on the cast button in the omnibar. You should see a list of all castable content (choose the .mp4 — see next section), and an option to either download or cast it. Click on the cast button, and the video should automatically start playing on your roku.

Thanks to ph0rn there's also a context menu item so you can right click on video links and cast from there too.

## Supported Formats / Limitations

The extension supports the subset of formats the roku can play (mp4 mainly). 

It will work on the majority of sites using an html5 video player (and in a few specific cases also works on flash sites.. worth trying out). Note that some websites will only offer the content in an html5 format to mobile devices, so you could try spoofing user-agent (install a chrome extension to do so).

If you get a couldn't cast message, things worth trying out:

* Spoof user agent to mobile (see previous paragraph). Some websites have switched to blob method of playback which doesn't embed the video URL directly in the DOM, instead having it point to a localstorage object. Switching to mobile seems to alleviate this.
* Note that YouTube (and maybe vimeo/dailymotion) is one of the sites that does that, so if you want to cast YouTube videos using this, spoof your user-agent. Of course YouTube has its own app for Roku with cast support, so you could just use that.

## Todo:

* Automatic roku IP discovery using SSDP
* Closed caption casting  
* Consider using chrome's dev tool resource/network introspection to identify URLs in flash players

## Enabling chrome developer mode gives me that popup every time on startup.. how can I remove it?

Unfortunately dev mode is now required in chrome to sideload 3rd party extensions. However, I believe if after sideloading you then package the extension on your computer (thus signing it locally), Chrome will accept it.

Folks on OSX don't have to worry as much since Chrome is kept active even if no window is open.

Related: https://github.com/pranav-prakash/RokuCast/issues/10

## For firefox?

Firefox has its [own casting](http://starkravingfinkle.org/blog/2014/06/firefox-for-android-casting-videos-and-roku-support-ready-to-test-in-nightly/) thing that this was modelled off of. I don't know how well it works or whether it can extract videos embedded in stuff like jwplayer.


