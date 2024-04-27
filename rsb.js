window.onload=function() { 
    var body = document.getElementsByTagName('body')[0];

	var bubbler_wrapper = document.createElement('div');
	bubbler_wrapper.className = 'bubbler-wrapper';

	var menu_button = document.createElement('div');
	menu_button.className = 'bubbler-menu-loader';
	menu_button.innerHTML = '&#10536;';
    menu_button.onclick = function() {
        window.location.href = 'https://reddit.com/r/random'
    }

	bubbler_wrapper.appendChild(menu_button);
	body.appendChild(bubbler_wrapper);
}