window.addEventListener('resize', heroInit)

document.addEventListener("DOMContentLoaded", (event) => {
    heroInit();
    gsapInit(gsap);
    docInit();
});

function formatNumber(num) {
    return num.toLocaleString();
}

function heroInit() {
    const heroDiv = document.querySelector('.hero-div');
    const posterDiv = document.querySelector('.poster');

    if (heroDiv && posterDiv) {
        const heroDivHeight = heroDiv.offsetHeight + parseInt(window.getComputedStyle(heroDiv).marginTop) + parseInt(window.getComputedStyle(heroDiv).marginBottom);
        posterDiv.style.height = `${heroDivHeight}px`;
    }
}

function gsapInit(gsap) {

    gsap.registerPlugin(Flip, ScrollTrigger, TextPlugin, RoughEase, ExpoScaleEase, SlowMo, CustomEase);

    gsap.to("#gsap-hero-p", {
        opacity: 1,
        duration: 4,
        ease: "power2.out",
    });

    gsap.utils.toArray("#gsap-stats p[id^='stat']").forEach((el) => {
        const targetValue = parseInt(el.innerText.replace('+', '').replace(',', ''));
        gsap.fromTo(el,
            {
                innerText: 0,
            },
            {
                innerText: targetValue + '+',
                duration: 1,
                ease: "power2.out",
                snap: { innerText: 1 },
                onUpdate: function () {
                    el.innerText = formatNumber(Math.floor(el.innerText)) + '+';
                }
            });
    });

    gsap.to("#sparkle-1", {
        rotation: 360 * 1,
        duration: 3,
        ease: "power2.out",
        repeat: 0,
        transformOrigin: "center center",
    });

    gsap.to("#sparkle-2", {
        rotation: 360 * 2,
        duration: 3,
        ease: "power2.out",
        repeat: 0,
        transformOrigin: "center center",
    });

    gsap.utils.toArray(".gsap-ex-slideup-view").forEach((el) => {
        ScrollTrigger.create({
            trigger: el,
            start: "top 100%",
            once: true,
            onEnter: () => {
                gsap.fromTo(el,
                    {
                        y: '50vh',
                        opacity: 0,
                    },
                    {
                        duration: 2,
                        ease: "power2.out",
                        y: 0,
                        opacity: 1,
                    }
                );
            }
        });
    });

    gsap.utils.toArray(".gsap-ex-slideup-view-half").forEach((el) => {
        gsap.set(el, { opacity: 0 });
        ScrollTrigger.create({
            trigger: el,
            start: "top 80%",
            once: true,
            onEnter: () => {
                gsap.fromTo(el,
                    {
                        y: '50vh',
                        opacity: 0,
                    },
                    {
                        duration: 2,
                        ease: "power2.out",
                        y: 0,
                        opacity: 1,
                    }
                );
            }
        });
    });
}

function docInit(doc) {
    const testimonialSlider = document.getElementById('testimonial-slider');
    const testimonialItems = document.querySelectorAll('.testimonial');
    const leftArrow = document.getElementById('testimonial-slide-left');
    const rightArrow = document.getElementById('testimonial-slide-right');

    const paddingX = parseInt(window.getComputedStyle(testimonialSlider).paddingLeft, 10);
    let currentIndex = 0;

    leftArrow.addEventListener('click', () => {
        if (currentIndex === 0) return;
        
        currentIndex--;
        const targetOffset = testimonialItems[currentIndex].offsetLeft - paddingX;

        testimonialSlider.scrollTo({
            left: targetOffset,
            behavior: 'smooth'
        });
    });

    rightArrow.addEventListener('click', () => {
        if (currentIndex === testimonialItems.length - 3) return;

        currentIndex++;
        const targetOffset = testimonialItems[currentIndex].offsetLeft - paddingX;

        testimonialSlider.scrollTo({
            left: targetOffset,
            behavior: 'smooth'
        });
    });
}
