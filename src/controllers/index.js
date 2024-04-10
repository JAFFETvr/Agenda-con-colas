import { Gestion } from "../models/Gestion.js";

let gestion = new Gestion();

let addContactBtn = document.getElementById("addContactBtn");
let getContactBtn = document.getElementById("getContactBtn");
let contactNameInput = document.getElementById("contactName");
let phoneNumberInput = document.getElementById("phoneNumber");
let contactoObtenidoDiv = document.getElementById("contactoObtenido");
let agendaDiv = document.getElementById("agenda");

addContactBtn.addEventListener("click", () => {
    gestion.AddContact(contactNameInput, phoneNumberInput, agendaDiv);
});

getContactBtn.addEventListener("click", () => {
    gestion.GetContact(contactoObtenidoDiv, agendaDiv);
});
gestion.displayAgenda(agendaDiv);
