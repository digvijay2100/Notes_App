const addButton = document.querySelector('#add')


const updateLSData = ()=>{
    const textAreaData = document.querySelectorAll('textarea');
    const note = [];
    textAreaData.forEach((note1)=>{
        return note.push(note1.value)
    })

    localStorage.setItem('note',JSON.stringify(note));
}



const addNewNote = (text = '') => {

    const notes = document.createElement('div');
    notes.classList.add('notes');
    const htmlData = `
<div class="operation">
    <button class="edit" ><i class="fas fa-edit"></i>  </button>
    <button class="delete" ><i class="fas fa-trash-alt"></i> </button>

</div>
<div class="main ${text ? "": "hidden" }"></div>
<textarea class="${text ? "hidden": "" }" ></textarea>

`
    notes.insertAdjacentHTML('afterbegin', htmlData)

    // GETTING THE REFERENCES
    const editButton = notes.querySelector('.edit');
    const delButton = notes.querySelector('.delete');
    const mainDiv = notes.querySelector('.main');
    const textArea = notes.querySelector('textarea');

    //deleting the node
    delButton.addEventListener('click',()=>{
        notes.remove();
    })
    // toggle using edit icon
    editButton.addEventListener('click',()=>{
        mainDiv.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    })

    textArea.addEventListener('change',(event)=>{
        const value = event.target.value;
        mainDiv.innerHTML= value;
        updateLSData();

    })


    
    document.body.appendChild(notes);
}
//getting data back from localStorage
const note =JSON.parse(localStorage.getItem('note'));

if(note){
    note.forEach((note1)=>addNewNote(note1))
};

addButton.addEventListener('click', () => addNewNote());
