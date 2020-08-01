window.onload=function() { 

    let bar = document.getElementById('change-username-tooltip-id');

    if(bar.children.length > 0) {
        authenticated(bar);
    }
    else {
        bar = document.getElementsByClassName('header-user-dropdown')[0];
        notAuthenticated(bar);
    }
    

}

function authenticated(bar) {

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

function notAuthenticated(bar) {

    const button_example = bar.children[0];
    const image_size = button_example.children[0].children[0].children[0].clientHeight;
    const margin = window.getComputedStyle(button_example).getPropertyValue("margin-left");

    let img = document.createElement('img');
    img.src = chrome.runtime.getURL("images/icon.png");
    img.style.height = image_size + 'px';
    img.style.width = image_size + 'px';

    let container = document.createElement('div');
    container.style.marginLeft = margin;
    let link = document.createElement('a');
    link.setAttribute('href', "https://reddit.com/r/random");
    link.appendChild(img);
    container.appendChild(link);

    document.getElementById('email-verification-tooltip-id').prepend(container);
    
}