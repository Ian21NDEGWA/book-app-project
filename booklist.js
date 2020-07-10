const submitFav = document.querySelector('#submitFav');
const addFav = document.querySelector('#addFav');
const errorOutput = document.querySelector('#output');
const Favourite = document.querySelector('#Favourite');
const filterFav = document.querySelector('#search');
const allFav = document.querySelectorAll('li');

const addFavFunc = (e) function(e: any): void {
    e.preventDefault();
    if(addFav === '' || addFav.value.length <5){
    errorOutput.textContent = 'Please Enter a minimum of 5 characters';
    errorOutput.style.backgroundColor = 'red';
    errorOutput.style.color = 'white';
    errorOutput.style.padding = '2px 3px';
    }else{
        errorOutput.textContent = '';
        errorOutput.style.padding = '0';
        
        let delButton = document.createElement('button');
        delButton.className = 'delete';
        delButton.appendChild(document.createTextNode('x'));
        
        let newFav = document.createElement('li');
        newFav.appendChild(document.createTextNode(addFav.value));
        newFav.appendChild(delButton);
        Favourite.appendChild(newFav);   
    }
};

const delFavFunc = (e) function(e: any): void {
    if(e.target.className === 'delete'){
        if(confirm('Are you sure You want to Delete Favourite?')){
            Favourite.removeChild(e.target.parentElement);
        }
    }
};

const filterFavFunc = (e) function(e: any): void {
    e.preventDefault();
    let searchValue = e.target.value.toLowerCase();
    allFav.forEach(favor function(favor: HTMLLIElement): void {
    let currentfavor = favor.firstChild.textContent.toLowerCase();
    if(currentfavor.indexOf(searchValue) !== -1){
        favor.style.display = "block";
    }else{
        favor.style.display ="none";
    }
});
}

submitFav.addEventListener('click', addFavFunc);
Favourite.addEventListener('click', delFavFunc);







/*const submit = document.querySelector('#submit');
const book = document.querySelector('#book');
const addNew = document.querySelectorAll('li');
const booklist = document.querySelector('#booklist');

let bookFunc = function(e){
    if(addNew = '' || addNew.length < 5){
        break;
    }
    else{
        let newBook = document.createElement('li');
    newBook.appendChild(document.createTextNode(book.value));
    booklist.appendChild(newBook);
    }
};

submit.addEventListener('click', bookFunc);*/
