const consoleButton = document.getElementById('my-button');

consoleButton.addEventListener('click', function() {
    const h1 = document.getElementsByTagName('h1')[0];
    h1.innerText= 'Moi maailma';
    console.log("Hello world");
})

const addToList = document.getElementById('add-data');

addToList.addEventListener('click', function() {
    let list = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    let textArea = document.getElementById('text1');

    li.textContent = textArea.value;
    list.appendChild(li);
})