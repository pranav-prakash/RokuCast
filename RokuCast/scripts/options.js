// Saves options to chrome.storage
function save_options() {
    var ip_address = document.getElementById('ip_address').value;
    localStorage['ipAddress'] = ip_address;

    if (document.getElementById('devices').selectedOptions[0]) {
        var device_id = document.getElementById('devices').selectedOptions[0].id;
        localStorage['deviceID'] = device_id;
    }

    var status = document.getElementById('status');
    status.classList.remove('hidden');
    setTimeout(function() {
        status.classList.add('hidden');
    }, 750);
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function setup() {
    ssdp.GetDevices(function(devices) {
        var rokuDevices = ssdp.FilterByType(devices, 'roku:ecp');

        for(key in rokuDevices) {
            var id = key.replace(/^uuid:roku:ecp:/,'');
            var ip = rokuDevices[key].location.match(/[0-9]{1,3}(\.[0-9]{1,3}){3}/)[0];

            $('#devices').append('<option value="'+ip+'" id="'+id+'">'+id+' ('+ip+')</option>');
        }

        use_ip_address(localStorage['ipAddress']);
        use_device_id(localStorage['deviceID']);

        $('#devices').on('change', function(e) {
            use_device_id(e.target.selectedOptions[0].id);
        });
        $('#ip_address').on('input', function(e) {
            use_ip_address(e.target.value);
        });
    });
}

// Searches the #devices selector and returns the first match as an HTML DOM Option object
// The argument is a function which takes as an argument an HTML DOM Option object
// and returns a boolean that is true for a match and false for a non-match.
// Defaults to the first option if no matches found.
function find_device(query) {
    var known_devices = document.querySelector('#devices').options;
    var match_index = [...known_devices].findIndex(query);

    if (match_index === -1) {
        return null;
    }

    return known_devices[match_index];
}

// Given a device ID, assigns values to the #ip_address and #device input fields
function use_device_id(id) {
    var known_device = find_device(function(device) { return device.id === id; });
    if (known_device) {
        known_device.selected = true;
        document.getElementById('ip_address').value = known_device.value;
    }
}

// Given an ip address, assigns values to the #ip_address and #device input fields
function use_ip_address(ip) {
    var device = find_device(function(device) { return device.value === ip; });
    if (device) {
        device.selected = true;
    }
    document.getElementById('ip_address').value = ip;
}

document.addEventListener('DOMContentLoaded', setup);
document.getElementById('save').addEventListener('click', save_options);
