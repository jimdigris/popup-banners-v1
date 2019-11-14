'use strict';

(function () {
    // подключаем стили
    $(document).ready(function () { $("head").append($("<link rel='stylesheet' type='text/css' href='popup-banner.css' />")); });


    // --- всплывающее окно ---
    const popupBannerWrap = document.querySelector('.popup-banner-wrap');
    const popupBanner = {
        body: popupBannerWrap.querySelector('.popup-banner-body'),
        close: popupBannerWrap.querySelector('.popup-banner-close'),
        content: popupBannerWrap.querySelector('.popup-banner-content')
    };

    // ---

    popupBannerWrap.addEventListener('click', onPopupBannerWrapClick);
    popupBanner.body.addEventListener('click', onPopupBannerBodyClick);
    popupBanner.close.addEventListener('click', onPopupBannerCloseClick);

    // ---

    function onPopupBannerWrapClick() { hidePopupBanner(); }
    function onPopupBannerCloseClick() { hidePopupBanner(); }
    function onPopupBannerBodyClick(evt) { evt.stopPropagation(); }

    // ---

    function showPopupBanner() {
        popupBannerWrap.style.display = 'flex';
        popupBanner.body.style.display = 'flex';
        startAnimation();
    }

    function hidePopupBanner() {
        popupBannerWrap.style.display = 'none';
        clearTimeout(timerPopupBanner);
    }
    // --- --- ---

    // --- баннеры ---
    const banners = {
        element: popupBanner.content.querySelector('img'),
        speedAnimation: 2000,
        activeNumber: 0,
        images: [
            {
                src: 'image/75+вставка-+-краб.jpg',
                alt: 'акция - пескоструйный аппарат 75л + вставка сопло + крабовое соединение',
                link: '/'
            },
            {
                src: 'image/100+вставка-+-краб.jpg',
                alt: 'акция - пескоструйный аппарат 100л + вставка сопло + крабовое соединение',
                link: '/'
            },
            {
                src: 'image/160+вставка-+-краб.jpg',
                alt: 'акция - пескоструйный аппарат 160л + сопло вентури + соплодержатель + крабовое соединение',
                link: '/'
            },
            {
                src: 'image/200+вставка-+-краб.jpg',
                alt: 'акция - пескоструйный аппарат 200л + сопло вентури + соплодержатель + крабовое соединение',
                link: '/'
            },
            {
                src: 'image/250+вставка-+-краб.jpg',
                alt: 'акция - пескоструйный аппарат 250л + сопло вентури + соплодержатель + крабовое соединение',
                link: '/'
            }
        ]
    }

    let timerPopupBanner;

    // ---

    function startAnimation() {
        timerPopupBanner = setInterval(animationBanners, banners.speedAnimation);
    }

    function animationBanners() {

        //banners.element.classList.toggle('animate');

        banners.element.src = banners.images[banners.activeNumber].src;
        banners.element.alt = banners.images[banners.activeNumber].alt;

        banners.activeNumber++;
        if (banners.activeNumber === banners.images.length) {
            banners.activeNumber = 0;
        }
        
        /*
        setTimeout(function () {
            banners.element.classList.toggle('animate');
        }, banners.speedAnimation - 1000);
        */
    }
    // --- --- ---

    // --- coockie ---
    if (get_cookie('popupBanner') != 'yes') {
        document.cookie = "popupBanner=yes; max-age=60";
        setTimeout(showPopupBanner, 2000);
    }
    
    function get_cookie(cookie_name) {
        let results = document.cookie.match('(^|;) ?' + cookie_name + '=([^;]*)(;|$)');

        if (results)
            return (unescape(results[2]));
        else
            return null;
    }
    // --- --- ---
})();

