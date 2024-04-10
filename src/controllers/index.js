import { Gestion } from "../models/Gestion.js";

let gestion = new Gestion();

let addContactBtn = document.getElementById("addContactBtn");
let getContactBtn = document.getElementById("getContactBtn");
let contactNameInput = document.getElementById("contactName");
let phoneNumberInput = document.getElementById("phoneNumber");
let contactoObtenidoDiv = document.getElementById("contactoObtenido");
let agendaDiv = document.getElementById("agenda");
let searchBtn = document.getElementById("searchBtn"); 

searchBtn.addEventListener("click", () => {
    let nameToSearch = document.getElementById("searchInput").value;
    gestion.searchContactByNameAndDisplay(nameToSearch, contactoObtenidoDiv);
});

addContactBtn.addEventListener("click", () => {
    gestion.AddContact(contactNameInput, phoneNumberInput, agendaDiv);
});

getContactBtn.addEventListener("click", () => {
    gestion.GetContact(contactoObtenidoDiv, agendaDiv);
});

gestion.displayAgenda(agendaDiv);
