let menu = document.getElementsByClassName('menu');
let main = document.getElementsByTagName('main');
let footer = document.getElementsByTagName('footer');

function darkmode(){
    document.querySelector('body').classList.add('dark');
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#121212');
    menu.classList.add('dark');
    main.classList.add('dark');
    footer.classList.add('dark');
    footer.style.color = 'white';
}

function lightmode(){
    menu.style.backgroundColor = '#fff';
    main.style.backgroundColor = '#fff';
    footer.style.backgroundColor = '#fff';
    footer.style.color = '#0000';
}

