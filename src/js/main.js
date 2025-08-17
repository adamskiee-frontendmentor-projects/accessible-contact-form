class ContactForm {
    constructor() {
        this.elements = {
            contactForm: document.getElementById("form"),
            radios: document.querySelectorAll(".input-radio"),
            inputs: document.querySelectorAll(".input"),
            consentCheckbox: document.getElementById("consent"),
            firstName: document.getElementById("first-name")
        }
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        this.elements.contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
        });
        this.elements.inputs.forEach(input => {
            input.addEventListener("invalid", (e) => {
                let inputValue = e.target;
                if(inputValue.validity.valueMissing) {
                    console.log(input, "error");
                    inputValue.setCustomValidity(" ");
                    input.setAttribute("aria-invalid", "true");
                    this.setInputErrorActive(input);
                }
            });
            input.addEventListener("change", () => {
                if(input.getAttribute("aria-invalid") == "true") {
                    this.setInputErrorInactive(input);
                }
            });
        });
    }

    setInputErrorActive(input) {
        const parent = input.closest('.form-control');
        input.classList.add("input-error");
        parent.querySelector(".error-msg").classList.remove("hidden");
    }

    setInputErrorInactive(input) {
        const parent = input.closest('.form-control');
        input.classList.remove("input-error")
        parent.querySelector(".error-msg").classList.add("hidden");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new ContactForm();
})