//1
let introPara = document.querySelector('intro');
introPara.style.backgroundColor = '#f2c556'

//2
document.querySelector('em').style.backgroundColor = 'acbfcc';

//3
document.querySelector('em').textContent = 'USS Voyager Starship';

//4
let image = document.createElement('img')
image.setAttribute('src', 'https//bit.ly/3RfG4sY');
image.setAttribute('alt', 'starship Voyager'); 
let container = document.querySelector('#starship');
container.appendChild(image);

//5
image.id = "ship";

//6
let img1 = document.querySelector('#ship');
img1.classList.add('rounded');
