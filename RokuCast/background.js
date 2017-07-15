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
            
            var xhr = new XMLHttpRequest();
            xhr.open('HEAD', msg.sentLink, true);
            xhr.onload = function () {
                var url = "http://" + ip + ":8060/launch/dev?version=1" + "&url=" + encodeURIComponent(xhr.responseURL) + "&title=" + encodeURIComponent(title) + "&image=" + encodeURIComponent(favIconURL);
                var method = "POST";
                var postData = "";
                var async = true;

                var request = new XMLHttpRequest();
                request.open(method, url, async);
                request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                request.send(postData);
            };
            xhr.send(null);
        })
    }
    else
    {
        alert('Please set your roku ip in options page');
    }

   
}
