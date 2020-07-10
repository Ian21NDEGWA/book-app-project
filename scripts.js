/*
const submit = document.querySelector('#addItem');
const book = document.querySelector('#title');
const bookList = document.querySelector('#bookList');
const favList = document.querySelectorAll('li');



const newBookFunction = function (e){
e.preventDefault();
if(book === '' || book.value.length < 5){
  continue;    
}else{
    

    
let newBook = document.createElement('li');
newBook.appendChild(document.createTextNode(book.value));
bookList.appendChild(newBook);
};

submit.addEventListener('click', newBookFunction);

*/


//read more link.

let para = document.getElementById("info").innerHTML =  "Books are a treasure to beckon,<br />kindly add your favourite book title as a recommendation for review.";

    
let newLink = document.createElement("a");
let allParagraphs = document.getElementsByTagName("p");
let firstParagraph = allParagraphs[0];

function toggleCopy( e ){
    let allParagraphs = document.getElementsByTagName("p");
    for(let i = 0; i< allParagraphs.length; i++){
    if(i === 0){
        continue;
    }
    if(allParagraphs[i].style.display === "none"){
      allParagraphs[i].style.display = "block";   
    }
    else{
        allParagraphs[i].style.display = "none";
    }
}
    if( this === newLink){
    this.remove();
    }
    if( e !== undefined && e.preventDefault !== undefined){
    e.preventDefault();
    }
};

newLink.setAttribute("href", "#");
newLink.setAttribute( "class", "more-link");
newLink.innerHTML = "Read more.";
newLink.style.display = "inline-block";
newLink.style.marginLeft = "10px";
newLink.style.color = "yellow";

newLink.addEventListener( "click", toggleCopy);

toggleCopy();

firstParagraph.appendChild( newLink );

