const form = document.querySelector('#meme-img');
const inputLink = document.querySelector('input[name="memelink"]');
const imgs = document.querySelector('#imgs');
const inputTop = document.querySelector('input[name="memetop"]');
const inputBottom = document.querySelector('input[name="memebottom"]');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const newDiv = document.createElement('div')
    const newImg = document.createElement('img');
    const topDiv = document.createElement('div');
    const bottomDiv = document.createElement('div');
    const topText = document.createTextNode(inputTop.value);
    const bottomText = document.createTextNode(inputBottom.value);
    const dlt = document.createElement('button');
    newDiv.className = "div";
    dlt.className = "button";
    dlt.setAttribute("a.href", "#");
    dlt.innerText = "X";
    imgs.appendChild(dlt);
    newImg.src = inputLink.value;
    newImg.className = "img"
    topText.className = "memetext";
    bottomText.className = "memetext";
    topDiv.appendChild(topText);
    bottomDiv.appendChild(bottomText);
    topDiv.className = "textboxtop";
    bottomDiv.className = "textboxbottom";
    imgs.appendChild(newDiv);
    newDiv.appendChild(newImg);
    newDiv.appendChild(topDiv);
    newDiv.appendChild(bottomDiv);
    newDiv.appendChild(dlt);
    inputLink.value = '';
    inputTop.value = '';
    inputBottom.value = '';
});
imgs.addEventListener('click', function(e){
    e.target.parentElement.remove();
});