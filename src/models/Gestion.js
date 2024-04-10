import { Queue } from "./Queue.js";

export class Gestion {
    constructor() {
        this.agenda = new Queue();
    }addContact(contact) {
        this.agenda.enqueue(contact);
    }getContact() {
        return this.agenda.dequeue();
    }isAgendaEmpty() {
        return this.agenda.isEmpty();
    }
    displayAgenda(agendaDiv) {
        agendaDiv.innerHTML = "<h2>Agenda</h2>";
        if (!this.isAgendaEmpty()) {
            let ul = document.createElement("ul");
            let current = this.agenda.front;
            while (current) {
                let li = document.createElement("li");
                li.textContent = `Nombre: ${current.data.name}, Teléfono: ${current.data.phone}`;
                ul.appendChild(li);
                current = current.next;
            }
            agendaDiv.appendChild(ul);
        } else {
            let emptyDiv = document.createElement("div");
            emptyDiv.textContent = "La agenda está vacía."; 
            agendaDiv.appendChild(emptyDiv);
        }
    }
    AddContact(contactNameInput, phoneNumberInput, agendaDiv) {
        let contact = {
            name: contactNameInput.value,
            phone: phoneNumberInput.value
        };
        this.addContact(contact);
        this.displayAgenda(agendaDiv);
    }
    GetContact(contactoObtenidoDiv, agendaDiv) {
        if (!this.isAgendaEmpty()) {
            let contact = this.getContact();
            contactoObtenidoDiv.textContent = `Contacto obtenido: Nombre: ${contact.name}, Teléfono: ${contact.phone}`;
            this.displayAgenda(agendaDiv);
        } else {
            contactoObtenidoDiv.textContent = "La agenda está vacía.";
        }
    }
    searchContactByNameAndDisplay(name, foundContactDiv) {
        let current = this.agenda.front;
        while (current) {
            if (current.data.name === name) {
                this.displayFoundContact(current.data, foundContactDiv);
                return; }
            current = current.next;
        }
    
        this.displayFoundContact(null, foundContactDiv);
    }

    displayFoundContact(contact, foundContactDiv) {
        if (contact) {
            foundContactDiv.innerHTML = `Contacto encontrado: Nombre: ${contact.name}, Teléfono: ${contact.phone}`;
        } else {
            foundContactDiv.innerHTML = "Contacto no encontrado.";
        }
    }
    
}
