const button = document.getElementById('changeColor');

button.onclick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.executeScript(
            tabs[0].id,
            {
                code: 'document.body.className = "dark web"',
            }
        );
    });
}