// !function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,o){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=o(1),u={passive:!0,capture:!1},i=["scroll","wheel","touchstart","touchmove","touchenter","touchend","touchleave","mouseout","mouseleave","mouseup","mousedown","mousemove","mouseenter","mousewheel","mouseover"],s=function(e,t){return void 0!==e?e:-1!==i.indexOf(t)&&u.passive},c=function(e){var t=Object.getOwnPropertyDescriptor(e,"passive");return t&&!0!==t.writable&&void 0===t.set?Object.assign({},e):e};if((0,r.eventListenerOptionsSupported)()){var p=EventTarget.prototype.addEventListener;!function(e){EventTarget.prototype.addEventListener=function(t,o,r){var i="object"===(void 0===r?"undefined":n(r))&&null!==r,p=i?r.capture:r;r=i?c(r):{},r.passive=s(r.passive,t),r.capture=void 0===p?u.capture:p,e.call(this,t,o,r)},EventTarget.prototype.addEventListener._original=e}(p)}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.eventListenerOptionsSupported=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(e){}return e}}]);

(function($){

	jQuery( document ).ready(function($) {

        initMenu();
        // initHeaderBanner();
        initHeader();
        // parseFormHiddenProps();
		initUTMLinks();
        // initSignUpForm();
        // initPopup();
        // initForm();
        // initCountryCheck();
    
    })

    // Init user country checker
    // function initCountryCheck() {
    //     console.log('init');
    //     if (jQuery('.case-name-from').length) {
    //         let country = jQuery('.case-name-from').attr('data-country');
    //         console.log(country);
    //         const countriesWithCheckbox = [
    //             "AT",
    //             "BE",
    //             "BG",
    //             "HR",
    //             "CY",
    //             "CZ",
    //             "DK",
    //             "EE",
    //             "FI",
    //             "FR",
    //             "DE",
    //             "GR",
    //             "HU",
    //             "IE",
    //             "IT",
    //             "LV",
    //             "LT",
    //             "LU",
    //             "MT",
    //             "NL",
    //             "PL",
    //             "PT",
    //             "RO",
    //             "SK",
    //             "SI",
    //             "ES",
    //             "SE",
    //             "GB"
    //         ];
    
    //         if (country) {
    //             jQuery('.hs-form-booleancheckbox input').prop('checked', true);
    //             for (let i=0; i < countriesWithCheckbox.length; i++) {
    //                 if (countriesWithCheckbox[i] == country) {
    //                     jQuery('.hs-form-booleancheckbox input').attr('required', 'required');
    //                     jQuery('.hs-form-booleancheckbox input').prop('checked', false);
    //                 }
    //             }
    //         }
    //     }
        
    // }

    // Init header
    function initHeader() {
        if($('.header').length) {
            var lastScrollTop = 0;
            $(window).scroll(function(event){
                var st = $(this).scrollTop();
                $('.header').addClass('header-active');
                // if (st > lastScrollTop) {
                //     $('.header').removeClass('header-active');
                // } else {
                //     $('.header').addClass('header-active');
                // }
                lastScrollTop = st;
                if (lastScrollTop == 0) {
                    $('.header').removeClass('header-active');
                }
            });
        }
    }

    // Init mobile menu
    function initMenu() {
        $('.burger').on('click', function(e) {
            e.preventDefault();
            $('#menu-second-nav .mega-menu').hide();
            $('body').toggleClass('mobile-menu-open');
        });

        $(".main-menu").hover(
            function () {
                $('.header-v4').addClass('header-hover');
            },
            function () {
                $('.header-v4').removeClass('header-hover');
            }
        );
    
        $(document).on('click', function(e) {
            if($(e.target).closest('.header').length) return;
            if($('body').hasClass('mobile-menu-open')){
                e.preventDefault();
                $('body').removeClass('mobile-menu-open');
            }
        });
    
        
    
        // $('.main-menu .menu-item-has-children > a').prepend('<div class="menu-toggle-drop"></div>');
    
        $('#menu-second-nav > .menu-item-has-children .menu-item__title').on('click', function(e) {
            if($(window).innerWidth() <= 991){
                e.preventDefault();
                // $('#menu-second-nav > .menu-item-has-children').removeClass('menu-item--open');
                $(this).closest('li').toggleClass('menu-item--open');
                
                if($(this).closest('li').hasClass('menu-item--open')){
                    $(this).closest('li').find('.mega-menu').stop().slideDown(350);
                } else {
                    $(this).closest('li').find('.mega-menu').stop().slideUp(350);
                }
            }
        });
    
        $('.main-menu .no-link > a').on('click', function(e) {
            e.preventDefault();
        });
    
        $('.nav .menu-item__badge').each(function() {
            $(this).closest('.menu-item').addClass('menu-item--has-badge');
        });

        // 
        jQuery('#menu-second-nav >li.menu-item-has-children').on('mouseover', function() {
            let blockHeight = jQuery(this).find('.mega-menu').attr('data-height') + 'px';
            jQuery('.header-menu-wrap').css('height', blockHeight);
            jQuery('.header-menu-wrap').addClass('active');

        }).mouseout(function() {
            jQuery('.header-menu-wrap').css('height', 0);
            jQuery('.header-menu-wrap').removeClass('active');
        });
    }

    // Init Header Banner
    function initHeaderBanner() {
        if($('.header-banner:visible').length){
            $('.nav').css('marginTop', $('.header-banner').innerHeight());
            $('#wrapper').css('paddingTop', $('.header').hasClass('header-v4') ? $('.header-banner').innerHeight() : $('.header').innerHeight());
            $(window).on('resize', function() {
                if($('.header-banner:visible').length){
                    $('.nav').css('marginTop', $('.header-banner').is(':visible') ? $('.header-banner').innerHeight() : 0);
                    $('#wrapper').css('paddingTop', $('.header').hasClass('header-v4') ? $('.header-banner').innerHeight() : $('.header').innerHeight());
                }
            });
    
            $('.header-banner__close').on('click', function() {
                $(this).closest('.header-banner').hide();
                $('.nav').css('marginTop', 0);
                $('#wrapper').css('paddingTop', $('.header').hasClass('header-v4') ? 0 : $('.header').innerHeight());
            });
        }
    }

    function parseFormHiddenProps() {
        window.location.search?.split('?')[1]?.split('&').map(prop => {
            const property = prop.split('='),
                        $input = $('input[name="' + property[0] + '"]');
            if ($input.length) {
                $input.val(property[1]);
            }
        });
    }

    function initUTMLinks() {
        const queryString = window.location.search;
        if(queryString){
            $(document).ready(function() {
                $('.js-utm-btn, .js-utm-btn a').on('click', function() {
                    const currentHref = $(this).attr('href').split('?')[0];
                    window.location.href = currentHref + queryString;
                    return false;
                });
            })
        }
    }

    function initSignUpForm() {
        if(localStorage.getItem('signUpValue') !== null){
            var value = localStorage.getItem('signUpValue').split(', ');
            localStorage.removeItem('signUpValue');
            $('.sign-up-section__form').find('[data-sign-up-value="' + value[0] + '"]').find('input[value="' + value[1] + '"]').prop('checked', 'checked');
        }
    
    
        $('[data-sign-up-value]').on('click', function(e) {
            localStorage.setItem('signUpValue', $(this).data('signUpValue'));
        });
    
        if(window.location.search){
            const activeCheck = window.location.search.split('?product=')[1];
    
            $('.sign-up-section__form .wpcf7-form-control-wrap.checkbox input[type="checkbox"]').each(function() {
                var value = $(this).val().replace(/\s+/g, '_').replace(/&+/g, 'and').toLowerCase();
                if(value === activeCheck){
                    $(this).prop('checked', 'checked').change();
                }
            });
        }
    }

    function initPopup() {
        $('.blog-page--article .socials a').click(function(){
            myPopup(this.href, 'shareWindow', 600, 600);
            return false;
        });
        function myPopup(myURL, title, myWidth, myHeight) {
            var left = (screen.width - myWidth) / 2;
            var top = (screen.height - myHeight) / 2;
            var myWindow = window.open(myURL, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + myWidth + ', height=' + myHeight + ', top=' + top + ', left=' + left);
        }
    }

    function initForm() {
        if($('#lead-tier').length && window.location.href.split('?plan=').length){
            $('#lead-tier').val(window.location.href.split('?plan=')[1]);
        }
    
        $('.custom-form .wpcf7-select').on('change', function() {
            if($(this).val() && $(this).val().length){
                $(this).addClass('selected');
            } else {
                $(this).removeClass('selected');
            }
        });
    
        if($('#url-email').length && window.location.search.split('?email=').length){
            $('#url-email').val(window.location.search.split('?email=')[1]);
            $('#url-email').closest('form').find('.form-row input').eq(0).focus();
        }
    }

}(jQuery));