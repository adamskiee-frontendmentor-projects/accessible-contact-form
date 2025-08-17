class ContactForm {
    constructor() {
        this.elements = {
            contactForm: document.getElementById("form"),
            radios: document.querySelectorAll(".input-radio"),
            consentCheckbox: document.getElementById("consent")
        }
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        this.elements.contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const formData = new FormData(this.elements.contactForm);
            console.log(formData.get("first-name"));
        })
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new ContactForm();
})