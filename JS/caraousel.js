(function handleArrowKeys() {
    let leftBtn = document.querySelector('.caraousel .left')
    let rightBtn = document.querySelector('.caraousel .right')

    function handleLeftHover(e) {
        e.target.children[0].src = 'https://uc3704c9e17edf42e297f5f5bc43.previews.dropboxusercontent.com/p/thumb/ABgNADA2pH7kB4FnYWMdHf_sUpXzK3DTFgyWf13ux80vOmZ7gBK4SrsRE7DLXQe-RWR2LhWAq2itbcprwtRMzDx6-m3VzpSaysCphBC91q4nT3w9ySntlzseyZMIrZLAgYcGJIt7-gjQtKxHXW6mPEsACcaAH9ZyqLQpKca2IF36xolZ2hgZf1E4ZFCJzg3VM43ZCEvqFMhp1xQ-9iEbuXynBKjiWddf0FLRvuYsbsc-u4nZcHGFBqgK9k3-4uOtCBgJkzSEwkHK9Nj_knmimWrlrRmmG3wOdtVWgjHPJahOCSMpbgL_TzGN4dqtuVUpAMXg1jxzC1FzmRt--FU98-Sy1Dz222m3KXRmZqIMugQZfn0ty0zb5n3VHZDZQ6TO9CU/p.png'
        e.currentTarget.style.transform = 'rotate(180deg)'
    }

    function handleRightHover(e) {
        e.target.children[0].src = 'https://uc3704c9e17edf42e297f5f5bc43.previews.dropboxusercontent.com/p/thumb/ABgNADA2pH7kB4FnYWMdHf_sUpXzK3DTFgyWf13ux80vOmZ7gBK4SrsRE7DLXQe-RWR2LhWAq2itbcprwtRMzDx6-m3VzpSaysCphBC91q4nT3w9ySntlzseyZMIrZLAgYcGJIt7-gjQtKxHXW6mPEsACcaAH9ZyqLQpKca2IF36xolZ2hgZf1E4ZFCJzg3VM43ZCEvqFMhp1xQ-9iEbuXynBKjiWddf0FLRvuYsbsc-u4nZcHGFBqgK9k3-4uOtCBgJkzSEwkHK9Nj_knmimWrlrRmmG3wOdtVWgjHPJahOCSMpbgL_TzGN4dqtuVUpAMXg1jxzC1FzmRt--FU98-Sy1Dz222m3KXRmZqIMugQZfn0ty0zb5n3VHZDZQ6TO9CU/p.png'
        e.currentTarget.style.transform = 'rotate(0deg)'
    }

    function handleLeftExit(e) {
        e.target.children[0].src = 'https://uca06d847c275dc56c3033848db0.previews.dropboxusercontent.com/p/thumb/ABgLiWfrE6oqr7Lwt0-R1KxxjH1BZe1Ax_VgMu55UZQor6xviXCJf-TvJWi_b-EZDA1Grzjbi4iz_8nMv2CKbc46GlfvuI1AZ3JO4OqgpgId6XAA5pnyhOK7xf6UtrE15lqYC13IOI9K2qj49lIDC7fa08EzduND7k6LiGJJc7-Jw25jUJ3KQISO2-dE5ScxKuqT-RCC_6EF1w35uYMXNo_Nv-WlvxgrAbR7DxEoHc0EiATKpMuFBPg2cM4o_OdKEYsQqOQncUAH6SmI5tKNesbPmMbYi-1qGgvjD3Cx5s4if6BzkhB7NdeNl8DEVLm3qfg3RP5TlR9sqKghFHjUPXFAksKUoBIYv_hl7sEq9ScjaVNY8Hvzr6_OiOhRuVvizeI/p.png'
        e.currentTarget.style.transform = 'rotate(0deg)'
    }

    function handleRightExit(e) {
        e.target.children[0].src = 'https://uca06d847c275dc56c3033848db0.previews.dropboxusercontent.com/p/thumb/ABgLiWfrE6oqr7Lwt0-R1KxxjH1BZe1Ax_VgMu55UZQor6xviXCJf-TvJWi_b-EZDA1Grzjbi4iz_8nMv2CKbc46GlfvuI1AZ3JO4OqgpgId6XAA5pnyhOK7xf6UtrE15lqYC13IOI9K2qj49lIDC7fa08EzduND7k6LiGJJc7-Jw25jUJ3KQISO2-dE5ScxKuqT-RCC_6EF1w35uYMXNo_Nv-WlvxgrAbR7DxEoHc0EiATKpMuFBPg2cM4o_OdKEYsQqOQncUAH6SmI5tKNesbPmMbYi-1qGgvjD3Cx5s4if6BzkhB7NdeNl8DEVLm3qfg3RP5TlR9sqKghFHjUPXFAksKUoBIYv_hl7sEq9ScjaVNY8Hvzr6_OiOhRuVvizeI/p.png'
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