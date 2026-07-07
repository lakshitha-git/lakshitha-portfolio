const navLinks=document.querySelectorAll('header nav a');
const logoLink=document.querySelector('.logo');
const sections=document.querySelectorAll('section');
const menuIcon=document.querySelector('#menu-icon');
const navbar=document.querySelector('header nav');

menuIcon.addEventListener('click',()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
})

const activePage=()=>{

    const header=document.querySelector('header');
    const barsBox=document.querySelector('.bars-box');

    navLinks.forEach(link=>{
        link.classList.remove('active');
    });

    barsBox.classList.remove('active');
    setTimeout(()=>{
        barsBox.classList.add('active');
    },1100);

    header.classList.remove('active');
    setTimeout(()=>{
        header.classList.add('active');
    },1100);

    sections.forEach(section=>{
        section.classList.remove('active');
    });

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}

navLinks.forEach((link,idx)=>{
    link.addEventListener('click',()=>{
        if(!link.classList.contains('active')){
            activePage();

            link.classList.add('active');

            setTimeout(()=>{
                sections[idx].classList.add('active');
            },1100);
        }
    });
});

logoLink.addEventListener('click',()=>{
    if(!navLinks[0].classList.contains('active')){
        activePage();

        navLinks[0].classList.add('active');

        setTimeout(()=>{
            sections[0].classList.add('active');
        },1100);
    }
});

const resumeBtns=document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn,idx)=>{
    btn.addEventListener('click',()=>{

        const resumeDetails=document.querySelectorAll('.resume-detail');

        resumeBtns.forEach(btn=>{
            btn.classList.remove('active');
        });
        btn.classList.add('active');

         resumeDetails.forEach(detail=>{
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});

const arrowRight=document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft=document.querySelector('.portfolio-box .navigation .arrow-left');

let index=0;

const activePortfolio=()=>{
    const imgSlide=document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails=document.querySelectorAll('.portfolio-detail');

    imgSlide.style.transform=`translateX(calc(${index*-100}% - ${index * 2}rem))`;

    portfolioDetails.forEach(detail=>{
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active');
}

arrowRight.addEventListener('click',()=>{
    if(index<4){
        index++;
        arrowLeft.classList.remove('disabled');
    }else{
        index=5;
        arrowRight.classList.add('disabled');
    }

    activePortfolio();
});

arrowLeft.addEventListener('click',()=>{
    if(index>1){
        index--;
        arrowRight.classList.remove('disabled');
    }else{
        index=0;
        arrowLeft.classList.add('disabled');
    }

    activePortfolio();
});

function downloadCV(){
    alert("This feature is not currently working. Coming soon..!");
}

// Typed.js Initialization
const typed = new Typed('.typing-text', {
    strings: ['UI/UX Designer', 'Frontend Developer', 'Backend Developer', 'Fullstack Developer'],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

// Particles.js Initialization
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": ["#00e5ff", "#b026ff"]
        },
        "shape": {
            "type": "circle"
        },
        "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 2,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#00e5ff",
            "opacity": 0.2,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1.5,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 0.5
                }
            },
            "push": {
                "particles_nb": 4
            }
        }
    },
    "retina_detect": true
});

// Custom Cursor Logic
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

const clickables = document.querySelectorAll('a, button, input, textarea, .resume-item, .services-box, .portfolio-box');

clickables.forEach(clickable => {
    clickable.addEventListener('mouseenter', () => {
        cursor.classList.add('expand');
    });
    clickable.addEventListener('mouseleave', () => {
        cursor.classList.remove('expand');
    });
});

// Lightbox Logic
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.getElementById('close-lightbox');
const portfolioImages = document.querySelectorAll('.portfolio-carousel .img-item img');

portfolioImages.forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
    });
});

closeLightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.classList.remove('active');
    }
});

const newClickables = document.querySelectorAll('#close-lightbox, .portfolio-carousel .img-item img');
newClickables.forEach(clickable => {
    clickable.addEventListener('mouseenter', () => {
        cursor.classList.add('expand');
    });
    clickable.addEventListener('mouseleave', () => {
        cursor.classList.remove('expand');
    });
});
