const mainElement = document.querySelector('#main');
mainElement.remove();


let newHeader = document.createElement('h1');


newHeader.id = 'victory';


newHeader.textContent = 'YOUR-NAME is the champion'; // Replace 'YOUR-NAME'


document.body.appendChild(newHeader);