const navSlide = () => {
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav-list-links');
    const navLinks = document.querySelectorAll('.nav-list-links li');


    burger-menu.addEventListener('click',() => {
            //Toggle Nav
        nav.classList.toggle('nav-active');

            // Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = 'navLinkFade 0.5s ease forwards  ${index / 7 + 1.5}s';
            }
        });

        //Burger animation
        burger.classList.toggle('toggle');
    });
}

navSlide();