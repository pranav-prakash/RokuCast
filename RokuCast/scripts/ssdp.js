// From https://github.com/jacobEAdamson/ssdp-chrome/blob/dc526a5/ContentScript/ssdp.js
var ssdp = {
  _serverId: "pfdiljjcookjofjbjnbnkgfnfmnoljmk",

  _ExecuteRemoteCommand: function(_request, _params, _callback, _error) {
    chrome.runtime.sendMessage(
      this._serverId,
      { request: _request, params: _params },
      function(response) {
          if (!response) {
            _callback({});
          }
          else if(response.error != null && _error != undefined) {
            _error(response.error);
          }
          else {
            _callback(response.response);
        }
      }
    );
  },

  GetDevices: function(callback, error){
    this._ExecuteRemoteCommand("GetDevices", [], callback, error);
  },

  FilterByType: function(devices, type){
    var returnDevices = {};
    for(var key in devices){
      if(devices[key].st == type){
        returnDevices[key] = devices[key];
      }
    }

    return returnDevices;
  }
}

