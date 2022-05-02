document.addEventListener('DOMContentLoaded', function () {
    var actionbtn = document.getElementById('qyes');

    actionbtn.addEventListener('click', function () {
        chrome.tabs.create({ url: "https://redirecting.jimek.repl.co/r" });
        //ikr, so unique
    });
});