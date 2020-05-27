const button = document.getElementById('changeColor');

button.onclick = () => {
    console.log('Hello');
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {
                code: 'document.body.className = "dark web"',
            }
        );
    });
}