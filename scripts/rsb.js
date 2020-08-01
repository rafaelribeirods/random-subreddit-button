window.onload=function() { 

    const bar = document.getElementById('change-username-tooltip-id');
    const button_example = bar.children[0];
    const image_size = button_example.children[0].children[0].clientHeight;
    
    let button = button_example.cloneNode(true);
    button.children[0].setAttribute('href', "https://reddit.com/r/random");
    button.children[0].innerHTML = '';

    let img = document.createElement('img');
    img.src = chrome.runtime.getURL("images/icon.png");
    img.style.height = image_size + 'px';
    img.style.width = image_size + 'px';

    button.children[0].appendChild(img);
    bar.appendChild(button);

}