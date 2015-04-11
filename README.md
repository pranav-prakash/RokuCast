# RokuCast
Cast videos from chrome to roku

Comprised of a modified vGet extension and modified firefox cast app.

Credits to original authors and mozilla foundation for their hard work, without which this mod could not be possible

## Installation

### Dev mode installation (Simple)

Create a zip file from the contents of the "Firefox Receiver Mod" folder.

You should not be zipping the folder "Firefox Receiver Mod" itself. Instead, navigate inside that folder and create a zip file containing "images, json, source, manifest".

Upload that zip file through roku dev mode.

### Private Channel installation (Slightly more complex)

To do this method you need experience in packaging and uploading apps to the roku store.

First follow the steps for dev mode installation to upload the zip to your device. Then go to the packager link in the dev page (requires that you have keyed your roku with a generated private key - look into genkey to find more info) and package your application. Once done, create a roku dev account and upload your generated package as a private channel. Then go to ROKUIP:8060/query/apps in your browser and note down the app id for RokuCast. Finally, modify the line in `RokuCast/RokuCast/background.js`

`var url = "http://" + ip + ":8060/launch/dev?version=1" + "&url=" + encodeURIComponent(msg.sentLink) + "&title=" + encodeURIComponent(title) + "&image=" + encodeURIComponent(favIconURL);` by replacing `dev` with the noted down app id. Add the unpacked extension to chrome (subsequently generate a crx if your want) and enjoy.

-----

Install the vGet extension in google chrome by going to chrome -> preferences -> extensions and dragging/dropping the .crx file into that window. 

## Usage

Once installed, navigate to any site containing html5 content [this site](https://people.mozilla.org/~mfinkle/casting/test.html) for example, and you will see a brown download icon appear in the URL bar. Click on that, select the video to cast, and enter the IP address for your roku.

## Supported Formats / Limitations

Supports mp4 videos (which is the vast majority of html5 content)

Works on nearly all websites utilizing an html5 video player

## Bugs/Todo:

Requires manual entry of roku ip address
