//Write your Javascript code here
console.log("Shoppinglist")

function BeregnSum(a, b){
return a + b;
}

console.log(BeregnSum(12, 3));

let liste = document.getElementById("list");

function AddElement(textNode, attribute, id){
    let NewElement = document.createElement("li");
    NewElement.setAttribute("id", id);
    NewElement.setAttribute("class", attribute);
    NewTextNode = document.createTextNode(textNode);
    NewElement.appendChild(NewTextNode);

    return NewElement;
}

liste.appendChild(AddElement("banana", "healthy", "4"));
console.log(liste);

function AppendElement(listId, element){
let list = document.getElementById(listId);
list.appendChild(element);
}

AppendElement("listUnhealthy", AddElement("Crack", "unhealthy", "5"));
