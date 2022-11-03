// ===============nev color change=================
const nav = document.querySelector(".nav");
        window.addEventListener("scroll", fixNav);

        function fixNav() {
            if (window.scrollY > nav.offsetHeight + 794.2) {
                nav.classList.add("active");
            } else {
                nav.classList.remove("active")
            }
        }

        // ========================= blog togel============
        var settingmenu = document.querySelector(".setting-menu");

        var settingmenu = document.querySelector(".setting-menu");
  
        function settingmenutoggle() {
          settingmenu.classList.toggle("setting-menu-height");
        }