window.addEventListener("load", function () {

    const popup = document.getElementById("popupPrueba");
    const cerrar = document.getElementById("cerrarPopup");
    const contacto = document.getElementById("popupContacto");

    setTimeout(function () {
        popup.classList.add("active");
    }, 2000);

    cerrar.addEventListener("click", function () {
        popup.classList.remove("active");
    });

    popup.addEventListener("click", function (e) {
        if (e.target === popup) {
            popup.classList.remove("active");
        }
    });

    contacto.addEventListener("click", function () {
        popup.classList.remove("active");
    });

});