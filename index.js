let addToDoButton = document.getElementById('AddToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.onclick = function(){
    // alert('Vous avez cliquez sur +')
    // verifier si l'input n'est pas vide
    if(inputField.value != ""){
        // si l'input n'est pas vide, creer un paragraphe
        var paragraph = document.createElement('p')
    }
    // valoriser ce paragraphe avec le contenu de l'input
    paragraph.innerText = inputField.value ;

    // styliser le paragraphe
    paragraph.classList.add('paragraphe_style');

    // inserer le paragraphe dans l'element toDoContainer
    toDoContainer.appendChild(paragraph);

    // vider l'imput quand le paragraphe est ajoutE
    inputField.value = "";

    // barrer le paragraphe quand on clique dessus
    paragraph.addEventListener('click',function(){
        // alert('Vous avez cliquE sur le paragraphe')
        paragraph.classList.add('paragraph_click');
    })
    paragraph.addEventListener('dblclick',function(){
        toDoContainer.removeChild(paragraph);
    })
}

