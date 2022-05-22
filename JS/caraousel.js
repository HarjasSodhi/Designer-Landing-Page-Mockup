// for handling the caraousel button hover animations
(function handleArrowKeys() {
    let leftBtn = document.querySelector('.caraousel .left')
    let rightBtn = document.querySelector('.caraousel .right')

    function handleLeftHover(e) {
        e.target.children[0].src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGBSURBVHgB7dqPTcJAFAbwV+MA4AR1A9mADXQDogMonUBdwD8LGOMEuohOIDgBZQKe36VXMcAlLaH0eP1+yUuT0jT50uZd3wURIiIiIiLaRiItU1V36KFG/tRHkiQ/YhUCn6KmujRBpWIVwmW67hPVkwYcSZwGqAexCE+yv/JKlxaoW7HGNS3UAJUHQo/EGh/6Ujeboc7EGh/6LhDaZudGqAT1GgjdWOdujX/Krol9BUK/iDU+9OrHyP8mxs5tgrJzr2HnruK4zsW4+RCHoezfPHC+/Oa+kl1z3VHj5JrYuGqOyhsAuGkuxaAeoxybBidVLox1PGxMncD3Eq/nqhfW2tPCa32BQxvrXx91HfjtCa9zJlZosSy9BxrWt1oaKHzYbnx4+LDjQNiZtbDl8BBad2/ECu3SeKjLDYBQ2EexRNmR/7AjHyztUkd2tIMbdlkgbCMdOYbxUDecm0rc09n2tFh3J/6pLvzyk0pDYvnLQ4o6l+Jpv2HcmwsREREREUXlF7pr9rkPPlBLAAAAAElFTkSuQmCC'
        e.currentTarget.style.transform = 'rotate(180deg)'
    }
    
    function handleRightHover(e) {
        e.target.children[0].src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGBSURBVHgB7dqPTcJAFAbwV+MA4AR1A9mADXQDogMonUBdwD8LGOMEuohOIDgBZQKe36VXMcAlLaH0eP1+yUuT0jT50uZd3wURIiIiIiLaRiItU1V36KFG/tRHkiQ/YhUCn6KmujRBpWIVwmW67hPVkwYcSZwGqAexCE+yv/JKlxaoW7HGNS3UAJUHQo/EGh/6Ujeboc7EGh/6LhDaZudGqAT1GgjdWOdujX/Krol9BUK/iDU+9OrHyP8mxs5tgrJzr2HnruK4zsW4+RCHoezfPHC+/Oa+kl1z3VHj5JrYuGqOyhsAuGkuxaAeoxybBidVLox1PGxMncD3Eq/nqhfW2tPCa32BQxvrXx91HfjtCa9zJlZosSy9BxrWt1oaKHzYbnx4+LDjQNiZtbDl8BBad2/ECu3SeKjLDYBQ2EexRNmR/7AjHyztUkd2tIMbdlkgbCMdOYbxUDecm0rc09n2tFh3J/6pLvzyk0pDYvnLQ4o6l+Jpv2HcmwsREREREUXlF7pr9rkPPlBLAAAAAElFTkSuQmCC'
        e.currentTarget.style.transform = 'rotate(0deg)'
    }
    
    function handleLeftExit(e) {
        e.target.children[0].src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKaSURBVHgB7ZlNctpAEIV7IAYUkQRuQE4Qs3Ah74gvkJ8qr8MNjH2AGC6QOCfAuUDsnMDKClFewA2sG8DCRJO4zKTHxSZCYAlJVkP1V0UxpZaAx/S86ZkBYBiGYRiGYRhmHQSkyLjZrBQ975Nu/xHiZ9VxXMiY1ASPLatWALjCZm1+yf1bKtWrtj2BDMlBCuie9YnV1HY8rwUZk4rgguf14H+xZHgGCTO1rFN8ex8QcvNCXELGJDqGfzcaR0qIM/91pdQExdYNAqaVWEqP9/Z2g8TO6VIQq0kkpeeOfLEk3C0PBmdAhNgp/eDIUg4hwKSwx7+V+/02ECJ2Sq9wZNcsFjtAjFgpvcqR8Z98KzIuMoJYO6WXObJG3d/Xy9fXIyDIWim9ypFxCjqmKlYTOaU3yZGDiJTSqxwZu/bSHAw+AHEiCZ42GhcgRJBJPUxBuqKCJwa/d/Sy3w9dsoYWfLu/3xZKfQV6KPxdJ89DDqXQpoUfegQ0EQrgc9ibw7u0UhXYAkILVrlcF6iC/hH6VojArWX18IFWUCwr00KuXjjOr7A3R5qH76Q8LhjGG0zvuj+GY/yVWSq1sZwEykSqtKqj0SSn1Eds3gSEW1LKjmo2gTKRS0u9kMdaWYse+2MzgFMU3VKHh0CVtRcPOJ5b+HBvIYDjWM1mB6ZpDimm99rr4bLjnGOPLjq3EBWRz/+YSPladTpAjdg7HkudG0u+u2LxoGLbYyBE7B0P7dwobrgQUGp3R8ov1EwstuBNc+5Etmk3ybkT25fWuxxYxJ8ExWa4ypq6bp2CiSV6tvSoc9t25guQxA/TsK7tYE+fB4S29/RwqXMTIBXBPudW89fN1p0e+vFwhxOXjO902zCM7xQ35hmGYRiGYRiGCcc/VQsZ1lNZuI0AAAAASUVORK5CYII='
        e.currentTarget.style.transform = 'rotate(0deg)'
    }
    
    function handleRightExit(e) {
        e.target.children[0].src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKaSURBVHgB7ZlNctpAEIV7IAYUkQRuQE4Qs3Ah74gvkJ8qr8MNjH2AGC6QOCfAuUDsnMDKClFewA2sG8DCRJO4zKTHxSZCYAlJVkP1V0UxpZaAx/S86ZkBYBiGYRiGYRhmHQSkyLjZrBQ975Nu/xHiZ9VxXMiY1ASPLatWALjCZm1+yf1bKtWrtj2BDMlBCuie9YnV1HY8rwUZk4rgguf14H+xZHgGCTO1rFN8ex8QcvNCXELGJDqGfzcaR0qIM/91pdQExdYNAqaVWEqP9/Z2g8TO6VIQq0kkpeeOfLEk3C0PBmdAhNgp/eDIUg4hwKSwx7+V+/02ECJ2Sq9wZNcsFjtAjFgpvcqR8Z98KzIuMoJYO6WXObJG3d/Xy9fXIyDIWim9ypFxCjqmKlYTOaU3yZGDiJTSqxwZu/bSHAw+AHEiCZ42GhcgRJBJPUxBuqKCJwa/d/Sy3w9dsoYWfLu/3xZKfQV6KPxdJ89DDqXQpoUfegQ0EQrgc9ibw7u0UhXYAkILVrlcF6iC/hH6VojArWX18IFWUCwr00KuXjjOr7A3R5qH76Q8LhjGG0zvuj+GY/yVWSq1sZwEykSqtKqj0SSn1Eds3gSEW1LKjmo2gTKRS0u9kMdaWYse+2MzgFMU3VKHh0CVtRcPOJ5b+HBvIYDjWM1mB6ZpDimm99rr4bLjnGOPLjq3EBWRz/+YSPladTpAjdg7HkudG0u+u2LxoGLbYyBE7B0P7dwobrgQUGp3R8ov1EwstuBNc+5Etmk3ybkT25fWuxxYxJ8ExWa4ypq6bp2CiSV6tvSoc9t25guQxA/TsK7tYE+fB4S29/RwqXMTIBXBPudW89fN1p0e+vFwhxOXjO902zCM7xQ35hmGYRiGYRiGCcc/VQsZ1lNZuI0AAAAASUVORK5CYII='
        e.currentTarget.style.transform = 'rotate(180deg)'
    }

    leftBtn.addEventListener('mouseenter', handleLeftHover)
    rightBtn.addEventListener('mouseenter', handleRightHover)
    leftBtn.addEventListener('mouseleave', handleLeftExit)
    rightBtn.addEventListener('mouseleave', handleRightExit)
})();


// for configuring the caraousel
(function handleCaraousel() {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 3,
        spaceBetween: 20,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            425: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 20
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
})();