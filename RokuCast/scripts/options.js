// Saves options to chrome.storage
function save_options() {
    var ip_address = document.getElementById('ip_address').value;
    localStorage['ipAddress'] = ip_address;
    var status = document.getElementById('status');
    status.classList.remove('hidden');
    setTimeout(function() {
        status.classList.add('hidden');
    }, 750);
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    document.getElementById('ip_address').value = (localStorage['ipAddress'] == undefined) ? '' : localStorage['ipAddress'];
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
