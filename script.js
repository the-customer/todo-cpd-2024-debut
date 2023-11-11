const todos = [
    {description:"Faire mes devoirs", done: true},
    {description:"Aller au sport", done: false},
];

//
const btnAdd = document.getElementById("addNew");
const output = document.querySelector(".output");
const newItem = document.getElementById("addItem");

const title = prompt("Entrer le nom  du todo");

//
function refleshPage(){
    //1.Creer un element html
    const h1 = document.createElement('h1') // => <h1></h1>
    //2.Mettre le contenu de la balise, ses attribut, son style,...
    h1.innerText = title;
    //3. Mettre la balise dans le DOM (ou document)
    output.appendChild(h1)
    // Afficher les todos tableau
    const table = document.createElement('table');
    for (let i = 0; i < todos.length; i++) {
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        td1.innerHTML = "Un texte"
        const td2 = document.createElement('td');
        const span1 = document.createElement("span");
        span1.innerHTML = "Edit"
        const span2 = document.createElement("span")
        span2.innerHTML = 'Delelet';
        //
        // td2.appendChild(span1)
        // td2.appendChild(span2)
        td2.append(span1,span2);
        //
        tr.append(td1,td2);
        //
        table.appendChild(tr);
    }
}

//Attendre que la page se charge avant d'appeler la fonction
// window.onload =  refleshPage;
refleshPage()