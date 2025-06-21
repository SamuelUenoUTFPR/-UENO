document.addEventListener("DOMContentLoaded", function() {
    // Controle de Modais
    const modals = {
        sustainability: {
            open: document.getElementById("openSustainabilityModal"),
            modal: document.getElementById("sustainabilityModal"),
            close: document.querySelector("#sustainabilityModal .close-modal")
        }
    };

    // Abrir Modal de Sustentabilidade
    modals.sustainability.open.addEventListener("click", () => {
        modals.sustainability.modal.style.display = "flex";
        document.querySelector(".tab-content.active").classList.remove("active");
        document.getElementById("sustainability-info").classList.add("active");
    });

    // Controle de Abas
    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelector(".tab-btn.active").classList.remove("active");
            btn.classList.add("active");

            const tabId = btn.dataset.tab;
            document.querySelector(".tab-content.active").classList.remove("active");
            document.getElementById(tabId).classList.add("active");
        });
    });

    // Fechar Modais
    Object.values(modals).forEach(m => {
        if (m.close) {
            m.close.addEventListener("click", () => {
                m.modal.style.display = "none";
            });
        }
        window.addEventListener("click", (event) => {
            if (event.target == m.modal) {
                m.modal.style.display = "none";
            }
        });
    });

    // Carrossel
    const carouselInner = document.querySelector(".carousel-inner");
    const carouselItems = document.querySelectorAll(".carousel-item");
    const prevBtn = document.querySelector(".carousel-control.prev");
    const nextBtn = document.querySelector(".carousel-control.next");
    let currentIndex = 0;

    function updateCarousel() {
        const itemWidth = carouselItems[0].clientWidth;
        carouselInner.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
    }

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex === 0) ? carouselItems.length - 1 : currentIndex - 1;
        updateCarousel();
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex === carouselItems.length - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    });

    window.addEventListener("resize", updateCarousel);
    updateCarousel(); // Initial load

    // Login/Registro
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const showRegisterLink = document.getElementById("showRegister");
    const showLoginLink = document.getElementById("showLogin");
    const loginTitle = document.querySelector(".login-main h2:nth-of-type(1)");
    const registerTitle = document.querySelector(".login-main h2:nth-of-type(2)");
    const loginParagraph = document.querySelector(".login-main p:nth-of-type(1)");
    const registerParagraph = document.querySelector(".login-main p:nth-of-type(2)");

    if (showRegisterLink) {
        showRegisterLink.addEventListener("click", (e) => {
            e.preventDefault();
            loginForm.style.display = "none";
            loginTitle.style.display = "none";
            loginParagraph.style.display = "none";
            registerForm.style.display = "block";
            registerTitle.style.display = "block";
            registerParagraph.style.display = "block";
        });
    }

    if (showLoginLink) {
        showLoginLink.addEventListener("click", (e) => {
            e.preventDefault();
            registerForm.style.display = "none";
            registerTitle.style.display = "none";
            registerParagraph.style.display = "none";
            loginForm.style.display = "block";
            loginTitle.style.display = "block";
            loginParagraph.style.display = "block";
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Login em desenvolvimento!");
            // Lógica de login aqui
        });
    }

    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Registro em desenvolvimento!");
            // Lógica de registro aqui
        });
    }
});


