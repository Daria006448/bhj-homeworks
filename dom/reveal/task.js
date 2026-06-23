const reveals = document.querySelectorAll('.reveal');

function onScroll() {
    reveals.forEach((element) => {
        const rect = element.getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom > 0) {
            element.classList.add('reveal_active');
        }
    });
}

window.addEventListener('scroll', onScroll);
onScroll();