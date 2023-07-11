//DOM Variables
const flashcardForm = document.getElementById('flashcardform');
const flashcardError = document.getElementById('error');
const flashcardTitle = document.getElementById('title');
const flashcardDesc = document.getElementById('description');
const flashcardSubmit = document.getElementById('btn-create-card');
const flashcardTitleCard = document.getElementById('title-card');
const flashcardDescCard = document.getElementById('description-card');

let editBool = false;

flashcardTitle.value = '';
flashcardDesc.value = '';

flashcardSubmit.addEventListener('click', (event)=> {
    event.preventDefault();
    editBool = false;
    tempTitle = flashcardTitle.value.trim();
    tempDesc = flashcardDesc.value.trim();
    if (!tempTitle || !tempDesc) {
        flashcardError.classList.remove('hide');
    } else {
        viewList();
        flashcardTitle.value = '';
        flashcardDesc.value = '';
    }
})

function viewList() {
    let boxcard = document.getElementById('box_cards');
    let div = document.createElement('div');
    div.classList.add('box_cards_card');

    // Title And Desc
    div.innerHTML += `<div class="box_cards_card-title" id="title-card">${flashcardTitle.value}</div>
    <div class="box_cards_card-description" id="description-card">${flashcardDesc.value}</div>`;
    
    //Delete
    let deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class','btn-trash');
    deleteBtn.innerHTML = `<img class="box_cards_card-trash" src="./images/icons8-trash.svg" />`;
    deleteBtn.addEventListener('click', () => {
        modifyElement(deleteBtn);
    })
    div.appendChild(deleteBtn);
    boxcard.appendChild(div);
}

//Modify Elements
const modifyElement = (element,edit = false) => {
    let parentDiv = element.parentElement;
    let parentTitle = parentDiv.querySelector('.box_cards_card-title').innerText;
    if (edit) {
        let parentDesc = parentDiv.getElementById('description-card').innerText;
        flashcardTitle.value = parentTitle;
        flashcardDesc.value = parentDesc;
    }
    parentDiv.remove();
}