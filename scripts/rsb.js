window.onload=function() { 

    let container = getContainer();
    let button = null;
    if(container.children.length > 0) {
        button = createButtonAuthenticated(container);
    }
    else {
        button = createButtonUnauthenticated(container);
    }
    container.append(button);

}

function getContainer() {
    return document.getElementById('change-username-tooltip-id');
}

function createButtonAuthenticated(container) {
    let button_example = container.firstChild;
    let size = getComputedStyle(button_example.firstChild).height;
    let button = button_example.cloneNode(true);
    button.firstChild.href = 'https://www.reddit.com/r/random';
    button.firstChild.removeChild(button.firstChild.firstChild);
    let icon = createIcon(size);
    button.firstChild.style['height'] = size;
    button.firstChild.append(icon);
    return button;
}

function createButtonUnauthenticated(container) {
    let button = container.parentElement.lastChild.firstChild.cloneNode(true);
    let size = getComputedStyle(container.parentElement.lastChild.firstChild).height;
    button.removeAttribute('aria-expanded');
    button.removeAttribute('aria-haspopup');
    button.removeAttribute('id');
    button.removeChild(button.lastChild);
    button.style['width'] = size;
    button.style['height'] = size;
    button.style['display'] = 'flex';
    button.style['justify-content'] = 'center';
    button.firstChild.removeChild(button.firstChild.lastChild);
    button.firstChild.firstChild.removeChild(button.firstChild.firstChild.firstChild);
    button.firstChild.firstChild.append(createIcon(parseInt(size.replace('px', ''))/2 + 'px'));
    let link = document.createElement('a');
    link.href = 'https://www.reddit.com/r/random';
    link.append(button);
    return link;
}

function createIcon(size) {
    let icon = document.createElement("i");
    icon.classList.add('icon');
    icon.classList.add('icon-crosspost');
    icon.style['color'] = '#FF4500';
    icon.style['height'] = size;
    return icon;
}