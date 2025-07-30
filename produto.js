// Arquivo: produto.js (ATUALIZADO COM LÓGICA DE GALERIA)

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');

    const product = products.find(p => p.id === productId);

    const container = document.getElementById('product-detail');

    if (product) {
        // --- PREENCHE INFORMAÇÕES BÁSICAS ---
        document.title = product.name + ' - 上野 UENO';
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-price').textContent = product.price;
        document.getElementById('product-description').textContent = product.description;

        // --- LÓGICA DA GALERIA DE IMAGENS ---
        const mainImage = document.getElementById('main-product-image');
        const thumbnailList = document.getElementById('thumbnail-list');
        
        // Limpa quaisquer thumbnails antigos
        thumbnailList.innerHTML = '';

        // Usa a galeria de imagens se existir, senão, usa a imagem principal
        const images = product.galleryImages && product.galleryImages.length > 0
            ? product.galleryImages
            : [product.imageSrc];

        // Define a imagem principal inicial
        mainImage.src = images[0];

        // Cria e adiciona as miniaturas (thumbnails)
        images.forEach((imgSrc, index) => {
            const thumb = document.createElement('img');
            thumb.src = imgSrc;
            thumb.alt = `${product.name} - imagem ${index + 1}`;
            
            // Adiciona a classe 'active' na primeira miniatura
            if (index === 0) {
                thumb.classList.add('active');
            }

            // Adiciona o evento de clique para trocar a imagem principal
            thumb.addEventListener('click', () => {
                mainImage.src = imgSrc;

                // Atualiza a classe 'active'
                thumbnailList.querySelector('.active')?.classList.remove('active');
                thumb.classList.add('active');
            });

            thumbnailList.appendChild(thumb);
        });
        
        // --- LÓGICA DO SELETOR DE TAMANHO (NOVO) ---
        const sizeBtns = document.querySelectorAll('.size-btn');

        sizeBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // 1. Remove a classe 'active' do botão que está atualmente ativo
                const currentActive = document.querySelector('.size-btn.active');
                if (currentActive) {
                    currentActive.classList.remove('active');
                }

                // 2. Adiciona a classe 'active' apenas no botão que foi clicado
                this.classList.add('active');
            });
        });

    } else {
        container.innerHTML = '<h1>Produto não encontrado</h1><p>O produto que você está procurando não existe. <a href="index.html">Voltar para a página inicial</a>.</p>';
    }
    // --- LÓGICA DO SELETOR DE QUANTIDADE ---
        const minusBtn = document.getElementById('quantity-minus');
        const plusBtn = document.getElementById('quantity-plus');
        const quantityInput = document.getElementById('quantity-input');

        if (minusBtn && plusBtn && quantityInput) {
            plusBtn.addEventListener('click', () => {
                let currentValue = parseInt(quantityInput.value);
                quantityInput.value = currentValue + 1;
            });

            minusBtn.addEventListener('click', () => {
                let currentValue = parseInt(quantityInput.value);
                // Impede que a quantidade seja menor que 1
                if (currentValue > 1) {
                    quantityInput.value = currentValue - 1;
                }
            });

            // Garante que o usuário não digite um valor menor que 1
            quantityInput.addEventListener('change', () => {
                if (parseInt(quantityInput.value) < 1 || !quantityInput.value) {
                    quantityInput.value = 1;
                }
            });
        }
});
