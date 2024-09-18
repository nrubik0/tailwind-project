const burgerMenuButton = document.getElementById('burger-menu');
        const mobileMenu = document.getElementById('mobile-menu');

        burgerMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });