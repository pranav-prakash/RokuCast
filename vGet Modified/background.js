chrome.runtime.onMessage.addListener(function (msg)
{
    if (msg.type == "open")
    {
        openApp(msg);
    }
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab)
{
    chrome.pageAction.show(tabId);
});


function openApp(msg)
{
    if (localStorage["textBox" + 1] != undefined)
    {
        var ip = localStorage["textBox" + 1];

        var url = "http://" + ip + ":8060/launch/dev?version=1" + "&url=" + encodeURIComponent(msg.sentLink) + "&title=" + encodeURIComponent(msg.sentTitle);
        var method = "POST";
        var postData = "";
        var async = true;

        var request = new XMLHttpRequest();

        request.onload = function () {
            sendVideo(msg, ip);
        }
        request.open(method, url, async);
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        request.send(postData);
    }
    else
    {
        alert('Please set your roku ip in options page');
    }

   
}