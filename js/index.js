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

function AddClassAttribute(element, attribute){
element.setAttribute("class", attribute);
}

AppendElement("list", AddElement("Strawberries", "unhealthy", "6"));
const strawberries = document.getElementById("6");
console.log(strawberries);
AddClassAttribute(strawberries, "healthy");

function DeleteElement(elementId){
const element = document.getElementById(elementId);
element.remove();
}

DeleteElement("6");

function ChangeText(elementId, text){
document.getElementById(elementId).textContent = text;
}

ChangeText("2", "Water");

function CountLiElementsInList(listId){
const element = document.getElementById(listId)
const nodes = element.getElementsByTagName("li")
return nodes.length;
}

CountLiElementsInList("list");
console.log(CountLiElementsInList("list"));

function MoveByClassAttribute(listId, classAttribute, newListId){
 let list = document.getElementById(listId);
 let newList = document.getElementById(newListId);

 for (let index = 0; index < list.children.length; index++) {
    const element = list.children[index];
    
    if (element.getAttribute("class") == classAttribute) {
        newList.appendChild(element);
    }
 }
}

MoveByClassAttribute("list", "unhealthy", "listUnhealthy");

function Add(){
let a = document.createTextNode(document.getElementById("add").value);
let element = document.createElement("li");
element.setAttribute("class", "healthy");
element.appendChild(a);
liste.appendChild(element);
}

document.getElementById("addbutton").addEventListener("click", Add);