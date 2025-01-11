document.querySelectorAll('.carousel').forEach((carousel, index) => {
    let currentIndex = 0;
    const items = carousel.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    const carouselImages = carousel.querySelector('.carousel-images');

    // Função para atualizar o carrossel
    function updateCarousel() {
        const offset = -100 * currentIndex;
        carouselImages.style.transform = `translateX(${offset}%)`;
    }

    // Navegar para a próxima imagem
    carousel.querySelector('.carousel-next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalItems;  // Avança para o próximo
        updateCarousel();
    });

    // Navegar para a imagem anterior
    carousel.querySelector('.carousel-prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;  // Volta para a imagem anterior
        updateCarousel();
    });
});
