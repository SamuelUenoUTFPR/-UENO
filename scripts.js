
document.addEventListener("DOMContentLoaded", function() {
    
    // --- LÓGICA GERAL DE MODAIS ---
    
    // Abrir modal de cadastro
    const signupModal = document.getElementById("signupModal");
    const openSignupModal = document.getElementById("openSignupModal");
    if (signupModal && openSignupModal) {
        openSignupModal.addEventListener("click", () => {
            signupModal.style.display = "flex";
        });
    }

    // Lógica genérica para FECHAR qualquer modal
    document.querySelectorAll(".close-modal").forEach(btn => {
        btn.addEventListener("click", () => {
            // Encontra o 'pai' modal mais próximo e o esconde
            btn.closest(".modal-overlay").style.display = "none";
        });
    });

    // Fecha o modal se o usuário clicar no fundo escuro (overlay)
    window.addEventListener("click", (e) => {
        if (e.target.classList.contains("modal-overlay")) {
            e.target.style.display = "none";
        }
    });


    // --- LÓGICA DOS CARROSSÉIS DE PRODUTOS (COM AUTO-PLAY) ---
    
    const productCarousels = document.querySelectorAll('.product-carousel');
    
    // Linha de debug: Verifique o console do navegador (F12) para ver esta mensagem
    console.log(`UENO DEBUG: Encontrados ${productCarousels.length} carrosséis de produtos.`);

    productCarousels.forEach((carousel, index) => {
        const container = carousel.querySelector('.carousel-container');
        if (!container) return;

        // Criar os botões de controle
        const prevButton = document.createElement('button');
        prevButton.className = 'carousel-btn prev';
        prevButton.innerHTML = '&#10094;';

        const nextButton = document.createElement('button');
        nextButton.className = 'carousel-btn next';
        nextButton.innerHTML = '&#10095;';

        carousel.appendChild(prevButton);
        carousel.appendChild(nextButton);
        
        let autoScrollInterval;

        const scrollNext = () => {
            const scrollEnd = Math.abs(container.scrollWidth - container.clientWidth - container.scrollLeft) < 1;
            if (scrollEnd) {
                container.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                container.scrollBy({ left: container.clientWidth, behavior: 'smooth' });
            }
        };

        const startAutoScroll = () => {
            clearInterval(autoScrollInterval); 
            autoScrollInterval = setInterval(scrollNext, 5000); // 5 segundos
        };

        const stopAutoScroll = () => {
            clearInterval(autoScrollInterval);
        };
        
        startAutoScroll();

        carousel.addEventListener('mouseenter', stopAutoScroll);
        carousel.addEventListener('mouseleave', startAutoScroll);

        nextButton.addEventListener('click', () => {
            scrollNext();
            startAutoScroll(); 
        });

        prevButton.addEventListener('click', () => {
            container.scrollBy({ left: -container.clientWidth, behavior: 'smooth' });
            startAutoScroll();
        });
    });
});


// --- LÓGICA DOS FORMULÁRIOS (JÁ CORRIGIDA) ---

// Formulário de CADASTRO
document.getElementById("signupForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const senhaInput = this.querySelector("input[placeholder='Senha (mín. 8 caracteres)']");
    const confirmarSenhaInput = this.querySelector("input[placeholder='Confirmar Senha']");
    
    if (senhaInput.value !== confirmarSenhaInput.value) {
        alert("As senhas não coincidem!");
        confirmarSenhaInput.focus();
        return;
    }
    if (senhaInput.value.length < 8) {
        alert("A senha deve ter no mínimo 8 caracteres.");
        senhaInput.focus();
        return;
    }
    alert("Cadastro realizado com sucesso! Faça login para continuar.");
    document.getElementById("signupModal").style.display = "none";
    this.reset();
});

// Formulário de LOGIN
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const emailInput = this.querySelector("input[type='email']");
    const passwordInput = this.querySelector("input[type='password']");

    if (emailInput.value === '' || passwordInput.value === '') {
        alert("Por favor, preencha e-mail e senha.");
        return;
    }
    const submitButton = this.querySelector("button[type='submit']");
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Entrando...';

    setTimeout(() => {
        window.location.href = "index.html";
    }, 1500);
});
