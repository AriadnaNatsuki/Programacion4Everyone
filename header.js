fetch("header.html")
    .then(response => response.text())
    .then(data => {

        document.getElementById("header").innerHTML = data;

        const menuToggle = document.getElementById("menuToggle");
        const mainNav = document.getElementById("mainNav");

        menuToggle.addEventListener("click", () => {
            mainNav.classList.toggle("menu-open");
        });

    });