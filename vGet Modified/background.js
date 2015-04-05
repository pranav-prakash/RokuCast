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
    var ip = getIP();
    if (ip == null){
        return;
    }

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


function getIP()
{
    return prompt("Please enter roku IP", "");
}