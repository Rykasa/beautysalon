const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for(const element of toggle){
    element.addEventListener('click', element =>{
        //verifica se show é uma classe do elemento nav declarado acima
        //toggle faz uma troca, se tiver show ele tira, se não tiver show ele coloca
        //Esta função não tem nada haver com o elemento declarado acima
        nav.classList.toggle('show');
    });
}

const links = document.querySelectorAll('nav ul li a');

for(const link of links){
    link.addEventListener('click', link =>{
        nav.classList.remove('show');
    });
}


/* Sombra no header */
function changeHeaderWhenScroll(){
    const header = document.querySelector('#header');
    //offsetHeight = deslocamento da altura
    const navHeight = header.offsetHeight;

    if(window.scrollY >= navHeight){
        header.classList.add('scroll');
    }else{
        header.classList.remove('scroll');
    }
}

/* Testimonials carousel/slide/swiper */
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
});

/* ScrollReveal: mostrar elementos quando der scroll */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
});

scrollReveal.reveal(
`#home .image, #home .text,
 #about .image, #about .text,
 #services header, #services .card,
 #testimonials header, #testimonials .testimonials,
 #contact .text, #contact .links,
 footer .brand, footer .social
`, { interval: 100 });


/* Botão voltar para o topo */
function backToTop(){
    const backToTopButton = document.querySelector('.back-to-top');
    
    if(window.scrollY >= 560){
        backToTopButton.classList.add('show');
    }else{
        backToTopButton.classList.remove('show');
    }
}

/* Menu ativo conforme a seção */
const sections = document.querySelectorAll('main section[id]');
function activateMenu(){
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

    for(const section of sections){
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        const checkpointStart = checkpoint >= sectionTop;
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

        if(checkpointStart && checkpointEnd){
            document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.add('active');
        }else{
            document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.remove('active');
        }
    }
}


/* When scroll */
window.addEventListener('scroll', function(){
    changeHeaderWhenScroll();
    backToTop();
    activateMenu();
});