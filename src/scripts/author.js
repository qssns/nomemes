document.addEventListener('DOMContentLoaded', function () {
    var actionbtn = document.getElementById('author');

    actionbtn.addEventListener('click', function () {
        chrome.tabs.create({ url: "https://jimijs.pl/" });
    });
});