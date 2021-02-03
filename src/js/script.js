import '../css/style.css';

function  pageLoaded() {
    const menuBtn = document.querySelector(".menu__button");
    const closeMenuButton = document.querySelector(".menu__mobile-close");
    const menuMobile = document.querySelector(".menu__mobile");

    menuBtn.addEventListener("click", menuOpen);

    closeMenuButton.addEventListener("click", menuClose);

    function menuOpen() {
        menuMobile.classList.add("is-active");

    }

    function menuClose() {
        menuMobile.classList.remove("is-active");

    }


    const enterBtn = document.querySelector(".login-link");
    const mobBtn = document.querySelector(".enter__autorize ");
    const formClose = document.querySelector(".modal__form-close");
    const form = document.querySelector(".modal__form");

    enterBtn.addEventListener("click", openForm);
    mobBtn.addEventListener("click",openForm );
    formClose.addEventListener("click", closeForm);

    function openForm() {
        form.classList.add("is-active");
        form.classList.remove("is-closed");
    }

    function closeForm() {
        form.classList.remove("is-active");
        form.classList.add("is-closed");
    }



    const coll = document.getElementsByClassName("collapse");
    let i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            let content = this.nextElementSibling;

            if (content.style.maxHeight){
                content.style.maxHeight = null;
                content.classList.remove("style-active");

            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                content.classList.add ("style-active");

            }

                 });
    }



}





document.addEventListener("DOMContentLoaded", pageLoaded);

