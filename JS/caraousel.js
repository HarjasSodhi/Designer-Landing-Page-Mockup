(function handleArrowKeys() {
    let leftBtn = document.querySelector('.caraousel .left')
    let rightBtn = document.querySelector('.caraousel .right')

    function handleLeftHover(e) {
        e.target.children[0].src = '../Assets/eva_arrow-back-fill-white.png'
        e.currentTarget.style.transform = 'rotate(180deg)'
    }

    function handleRightHover(e) {
        e.target.children[0].src = '../Assets/eva_arrow-back-fill-white.png'
        e.currentTarget.style.transform = 'rotate(0deg)'
    }

    function handleLeftExit(e) {
        e.target.children[0].src = '../Assets/eva_arrow-back-fill.png'
        e.currentTarget.style.transform = 'rotate(0deg)'
    }

    function handleRightExit(e) {
        e.target.children[0].src = '../Assets/eva_arrow-back-fill.png'
        e.currentTarget.style.transform = 'rotate(180deg)'
    }

    leftBtn.addEventListener('mouseenter', handleLeftHover)
    rightBtn.addEventListener('mouseenter', handleRightHover)
    leftBtn.addEventListener('mouseleave', handleLeftExit)
    rightBtn.addEventListener('mouseleave', handleRightExit)
})();


const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// (function handleShifts() {
//     let leftBtn = document.querySelector('.caraousel .left')
//     let rightBtn = document.querySelector('.caraousel .right')
//     let boxes = document.querySelectorAll('.tray .content')
//     let leftIdx = 0;
//     let rightIdx = 2;
//     function handleLeftClick(e) {
//     boxes.forEach(el => {
//         let rect=el.getBoundingClientRect()
//         let num=rect.left-(rect.right-rect.left)
//         el.style.transform = `translateX(${num}px)`
//     })
//     return;
//     console.log(boxes)
//         console.log(leftIdx, rightIdx)
//         if (leftIdx == 0) return;
//         leftIdx--;
//         rightIdx--;
//         boxes[leftIdx].scrollIntoView({
//             behavior: "smooth",
//             inline: "nearest",
//             block: "end"
//         })
//     }

//     function handleRightClick(e) {
//         boxes.forEach(el => {
//             let rect=el.getBoundingClientRect()
//             let num=rect.left+(rect.right-rect.left)
//             el.style.transform = `translateX(${num}px)`
//         })    
//         return ;
//         console.log(leftIdx, rightIdx)
//         if (rightIdx == boxes.length - 1) return;
//         rightIdx++;
//         leftIdx++;
//         boxes[rightIdx].scrollIntoView({
//             behavior: "smooth",
//             inline: "nearest",
//             block: "end"
//         })
//     }

//     leftBtn.addEventListener('click', handleLeftClick)
//     rightBtn.addEventListener('click', handleRightClick)
// })();