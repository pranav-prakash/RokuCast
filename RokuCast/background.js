chrome.runtime.onMessage.addListener(function (msg)
{
    if (msg.type == "open")
    {
        openApp(msg);
    }
});

function openApp(msg)
{
    if (localStorage["ipAddress"] != undefined)
    {
        chrome.tabs.query({active:true,windowType:"normal", currentWindow: true},
        function(tabs)
        {
            var ip = localStorage["ipAddress"];
            var title = tabs[0].title;
            var favIconURL = tabs[0].favIconUrl;
            console.log(tabs);
            console.log(title);
            console.log(favIconURL);

            var isHLS = msg.sentLink.indexOf("m3u8") != -1;
            var isPlexStream = msg.sentLink.indexOf("&mediaIndex=0&partIndex=0&protocol=http") != -1;

            if (isPlexStream)
            {
                msg.sentLink.replace(new RegExp("&mediaIndex=0&partIndex=0&protocol=http", 'g'), "&mediaIndex=0&partIndex=0&protocol=hls");
                isHLS = true
            }

            var url = "http://" + ip + ":8060/input/15985?t=v" + "&u=" + encodeURIComponent(msg.sentLink) + "&videoName=" + encodeURIComponent(title) + "&k=" + encodeURIComponent(favIconURL) + "&videoFormat=" + (isHLS ? "hls" : "mp4");
            var method = "POST";
            var postData = "";
            var async = true;

            var request = new XMLHttpRequest();
            request.open(method, url, async);
            request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            request.send(postData);
        })
    }
    else
    {
        alert('Please set your roku ip in options page');
    }

   
}
