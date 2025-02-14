"use strict"

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const overlay = document.getElementById("overlay");

    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);
        let formData = new FormData(form);

        if (error === 0) {
            overlay.style.display = 'block';
            try {
                let response = await fetch(form.action, {
                    method: "POST",
                    body: formData
                });

                if (response.ok) {
                    alert("Заявка успешно отправлена!");
                    form.reset();
                } else {
                    alert("Ошибка при отправке. Попробуйте ещё раз.");
                }
            } catch (err) {
                alert("Ошибка соединения. Проверьте интернет-соединение.");
                console.error("Ошибка:", err);
            }
            overlay.style.display = 'none';
        } else {
            alert('Заполните обязательные поля');
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = form.querySelectorAll('._req');

        formReq.forEach(input => {
            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else if (input.classList.contains('_phone')) {
                if (!phoneTest(input.value)) {
                    formAddError(input);
                    error++;
                }

            } else if (input.value.trim() === '') {
                formAddError(input);
                error++;
            }
        });

        return error;
    }

    function formAddError(input) {
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.classList.remove('_error');
    }

    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

    function phoneTest(value) {
        let phonePattern = /^\+380\d{9}$/;
        return phonePattern.test(value.trim());
    }


    const phoneInput = document.querySelector('input[name="number"]');
    phoneInput.addEventListener('input', function(e) {
        this.value = this.value.replace(/[^\d+]/g, '');

        if (!this.value.startsWith('+380')) {
            this.value = '+380' + this.value.replace(/[^\d]/g, '');
        }

        if (this.value.length > 13) {
            this.value = this.value.slice(0, 13);
        }
    });
    phoneInput.value = '+380';
});


const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const body = document.body;

btn.addEventListener('click', () => {
    nav.classList.toggle('menu-open');
    body.classList.toggle('menu-open');
});


const links = document.querySelectorAll('.nav a');
links.forEach(link => {
    link.addEventListener('click', () => {
        body.classList.remove('menu-open');
        nav.classList.remove('menu-open');
    });
});