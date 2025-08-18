class ContactForm {
    constructor() {
        this.elements = {
            contactForm: document.getElementById("form"),
            inputs: document.querySelectorAll(".input"),
            successModal: document.getElementById("success-modal")
        }
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        this.elements.contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            console.log("submit");
            this.elements.successModal.classList.remove("hidden");
            this.elements.contactForm.reset();
        });

        this.elements.inputs.forEach(input => {
            input.addEventListener("invalid", (e) => {
                let inputValue = e.target;
                if(inputValue.validity.valueMissing || inputValue.validity.typeMismatch) {
                    inputValue.setCustomValidity(" ");
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
        input.setAttribute("aria-invalid", "true");
        parent.querySelector(".error-msg").classList.remove("hidden");
    }

    setInputErrorInactive(input) {
        const parent = input.closest('.form-control');
        input.classList.remove("input-error")
        input.setAttribute("aria-invalid", "false");
        parent.querySelector(".error-msg").classList.add("hidden");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new ContactForm();
})