//DOM Variables

const flashcardError = document.getElementById('error');
const flashcardTitle = document.getElementById('title');
const flashcardDesc = document.getElementById('description');
const flashcardSubmit = document.getElementById('btn-create-card');

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
    <div class="box_cards_card-description hide" id="description-card">${flashcardDesc.value}</div>`;

    // More
    let moreBtn = document.createElement('button');
    moreBtn.setAttribute('id','more');
    moreBtn.innerHTML = `<img class="more" src="./images/icons8-more-100.png" />`;
    moreBtn.addEventListener('click', () => {
        document.getElementById('description-card').classList.toggle('hide');
    })

    //Delete
    let deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class','btn-trash');
    deleteBtn.innerHTML = `<img class="box_cards_card-trash" src="./images/icons8-trash.svg" />`;
    deleteBtn.addEventListener('click', () => {
        modifyElement(deleteBtn);
    })
    div.appendChild(moreBtn);
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