(function handleArrowKeys() {
    let leftBtn = document.querySelector('.caraousel .left')
    let rightBtn = document.querySelector('.caraousel .right')

    function handleLeftHover(e) {
        e.target.children[0].src = '../assets/eva_arrow-back-fill-white.png'
        e.currentTarget.style.transform = 'rotate(180deg)'
    }

    function handleRightHover(e) {
        e.target.children[0].src = '../assets/eva_arrow-back-fill-white.png'
        e.currentTarget.style.transform = 'rotate(0deg)'
    }

    function handleLeftExit(e) {
        e.target.children[0].src = '../assets/eva_arrow-back-fill.png'
        e.currentTarget.style.transform = 'rotate(0deg)'
    }

    function handleRightExit(e) {
        e.target.children[0].src = '../assets/eva_arrow-back-fill.png'
        e.currentTarget.style.transform = 'rotate(180deg)'
    }

    leftBtn.addEventListener('mouseenter', handleLeftHover)
    rightBtn.addEventListener('mouseenter', handleRightHover)
    leftBtn.addEventListener('mouseleave', handleLeftExit)
    rightBtn.addEventListener('mouseleave', handleRightExit)
})();


(function handleCaraousel() {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    })
})();