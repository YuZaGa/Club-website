$("document").ready(function ($) {

    // scrool - to top btn
    $(window).on("scroll", function () {
        // scroll to top btn
        if (window.pageYOffset >= 1000) {
            $("#scrollUp").fadeIn(500);
        } else {
            $("#scrollUp").fadeOut(500);
        }
        fixedMenu();
    });

    /* --------------------------------------------------------------------------- */

    // fixed menu .navbar
    fixedMenu();
    function fixedMenu() {
        if ($(window).innerWidth() >= 1200) {
            if (window.pageYOffset >= 80) {
                $(".header-middle").css({
                    "position": "fixed",
                    "top": "0",
                    "left": "0",
                    "background-color": "rgba(255, 255, 255, .9)",
                    "box-shadow": "0 0 20px rgba(0,0,0, .3)",
                });

                $(".header-middle_transparent").css({
                    "background-color": "rgba(255, 255, 255, .9)",
                });

                $(".header-middle_transparent .navbar__menu-link").css(
                    "color",
                    "#333333"
                );

                $(".header-middle_transparent .navbar__bag-price").css(
                    "color",
                    "#333333"
                );

                $(
                    ".header-middle_transparent .navbar__bag > svg > path, .header-middle_transparent  .navbar__search > svg > path"
                )
                    .removeClass("cls-2")
                    .addClass("cls-3");
            } else {
                $(".header-middle").css({
                    "position": "relative",
                    "top": "initial",
                    "left": "initial",
                });

                $(".header-middle_white-transparent").css({
                    "background-color": "rgba(255, 255, 255, .6)",
                });

                $(".header-middle_transparent").css({
                    "background-color": "transparent",
                    "box-shadow": "none",
                });

                $(".header-middle_transparent .navbar__menu-link").css(
                    "color",
                    "#ffffff"
                );

                $(".header-middle_transparent .navbar__bag-price").css(
                    "color",
                    "#ffffff"
                );

                $(
                    ".header-middle_transparent .navbar__bag > svg > path, .header-middle_transparent  .navbar__search > svg > path"
                )
                    .removeClass("cls-3")
                    .addClass("cls-2");
            }
        } else {
            // if window < 1200

            $(
                ".header-middle_transparent .navbar__menu-link, .header-middle_transparent .navbar__bag-price"
            ).css({
                "color": "#333333",
            });

            $(
                ".header-middle_transparent .navbar__bag > svg > path, .header-middle_transparent  .navbar__search > svg > path"
            ).css({
                "fill": "#333333",
            });

            if (window.pageYOffset >= 0) {
                $(".header-middle").css({
                    "position": "fixed",
                    "top": "0",
                    "left": "0",
                    "background-color": "rgba(255, 255, 255, .9)",
                });
            } else {
                $(".header-middle").css({
                    "position": "relative",
                    "top": "initial",
                    "left": "initial",
                    "background-color": "rgba(255, 255, 255, .6)",
                });
            }
        }
    }

    /* --------------------------------------------------------------------------- */

    // scroll - to top btn
    $("#scrollUp").on("click", function () {
        $("html").animate({ scrollTop: 0 }, 500);
    });

    /* --------------------------------------------------------------------------- */

    // navbar - navbar for mobile

    // let isClickced = true;

    if ($(window).innerWidth() < 1200) {
        $(".navbar").removeClass("show");
        $(".navbar").addClass("hide");
    }

    $(".navbar__menu-item").find(".navbar__submenu").slideUp();

    $(".navbar-icon").on("click", function () {
        $(".navbar").toggleClass("show").toggleClass("hide");
    });

    /* --------------------------------------------------------------------------- */

    if ($(".navbar__menu-link").length) {
        mobileAccardionMenu();
    }
    // accardion - navbar submenu for mobile 
    function mobileAccardionMenu() {
        if ($(window).innerWidth() < 1200) {
            $(".navbar__menu-link").on("click", function (event) {
                if ($(this).siblings(".navbar__submenu").length) {
                    $(this).siblings(".navbar__submenu").slideToggle();
                    $(this).parent(".navbar__menu-item").siblings(".navbar__menu-item").find(".navbar__submenu").slideUp();
                }
                return false;
            });
        }
        else {
            fixedMenu();
            $(".navbar__menu-link").click(function () {
                $(this).siblings(".navbar__submenu").slideToggle();
                $(this).parent(".navbar__menu-item").siblings(".navbar__menu-item").find(".navbar__submenu").slideUp();
                return true;
            });
        }
    }

    /* --------------------------------------------------------------------------- */

    // chek out block of novbar
    if ($(".navbar__bag").length) {
        $(".navbar__bag").find("svg").on("click", function () {
            $(".navbar__bag").find(".checkBox").slideToggle();
        })
    }

    /* --------------------------------------------------------------------------- */

    // accardion - faq section
    if ($(".accardion__item").length) {
        $(".accardion__item").on("click", function () {
            // accardion - icon
            $(".accardion__item")
                .find(".fa")
                .removeClass("fa-angle-up")
                .addClass("fa-angle-down");
            $(this).find(".fa").removeClass("fa-angle-down").addClass("fa-angle-up");

            // accardion - item
            $(".accardion__item").css("border-color", "#f0f0f0");
            $(this)
                .siblings(".accardion__item")
                .find(".accardion__item-text")
                .slideUp();
            $(this)
                .css("border-color", "#f22283")
                .find(".accardion__item-text")
                .slideDown();
        });
    }

    /* --------------------------------------------------------------------------- */

    // menu scroll - footer
    if ($(".footer .menu a").length) {
        $(".footer .menu a").on("click", function (event) {
            event.preventDefault();
            let aHref = $(this).attr("href");
            let resualt = $(aHref).offset().top;
            scrollNavBar(resualt);
        });
    }

    function scrollNavBar(topValue) {
        $("html, body").animate({ scrollTop: topValue }, 1000);
    }

    /* --------------------------------------------------------------------------- */

    // counter up
    if ($(".counter").length) {
        $(".counter").countUp({
            delay: 30,
            time: 1500,
        });
    }

    /* --------------------------------------------------------------------------- */

    // home page 3 => .medical-center__form > .input-box > input
    if ($(".medical-center__form > .input-box > input").length) {
        let medicalCenterFormInput = $(
            ".medical-center__form > .input-box > input"
        );
        $(medicalCenterFormInput).on("keyup", function () {
            if (this.value === "" || this.value === undefined) {
                $(this).siblings("label").css({
                    top: "50%",
                    "font-size": "18px",
                });
            } else {
                $(this).siblings("label").css({
                    top: "-10px",
                    "font-size": "14px",
                });
            }
        });
    }

    /* --------------------------------------------------------------------------- */

    // .department-accardion
    if ($(".department-accardion").length) {
        $(".department-accardion")
            .find(".item")
            .on("click",function () {
                // accardion - icon
                $(".department-accardion")
                    .find(".item")
                    .find(".fa")
                    .removeClass("fa-angle-up")
                    .addClass("fa-angle-down");
                $(this)
                    .find(".fa")
                    .removeClass("fa-angle-down")
                    .addClass("fa-angle-up");

                // accardion - item
                $(".department-accardion").find(".item").css("border-color", "#f0f0f0");
                $(this).siblings(".item").find(".item-text").slideUp();
                $(this).css("border-color", "#f22283").find(".item-text").slideDown();
            });
    }

    /* --------------------------------------------------------------------------- */

    // searchBox
    if ($(".searchBox-open").length) {
        $(".searchBox-open").on("click", function () {
            $(".searchBox").css({
                opacity: "1",
                top: "0",
            });
        });
    }

    if ($(".searchBox-close").length) {
        $(".searchBox-close").on("click", function () {
            $(".searchBox").css({
                opacity: "0",
                top: "-120%",
            });
        });
    }

    /* --------------------------------------------------------------------------- */

    // if ($(".wow").length) {
    //     wow = new WOW({
    //         boxClass: "wow", // default
    //         animateClass: "animated", // default
    //         offset: 100, // no-default
    //         mobile: true, // default
    //         live: true, // default
    //     });
    //     wow.init();
    // }

    /* --------------------------------------------------------------------------- */

    // .popup-form
    if ($("#popup-form-open").length) {
        $("#popup-form-open").on("click", function (event) {
            event.preventDefault();
            $(".popup-form").css({
                opacity: "1",
                top: "0",
            });
        });
    }

    if ($("#popup-form-close").length) {
        $("#popup-form-close").on("click", function () {
            $(".popup-form").css({
                opacity: "0",
                top: "-120%",
            });
        });
    }

    // .popup-form > .inner-block > form > .input-box > input
    if ($(".popup-form > .inner-block > form > .input-box > input").length) {
        let popupFormInput = $(
            ".popup-form > .inner-block > form > .input-box > input"
        );
        $(popupFormInput).on("keyup", function () {
            if (this.value === "" || this.value === undefined) {
                $(this).siblings("label").css({
                    top: "50%",
                    "font-size": "18px",
                });
            } else {
                $(this).siblings("label").css({
                    top: "-10px",
                    "font-size": "14px",
                });
            }
        });
    }

    /* --------------------------------------------------------------------------- */

    // isotope plugin => filter cards for cases file
    if ($(".filterContainer").length) {
        $(".filterContainer").isotope({
            itemSelector: ".case__cards-item",
        });
    }

    if ($(".case__controls-item").length) {
        $(".case__controls-item").on("click", function () {
            $(".case__controls-item").removeClass("active");
            $(this).addClass("active");

            var filterSelector = $(this).attr("data-filter");
            $(".filterContainer").isotope({
                filter: filterSelector,
            });
            return false;
        });
    }

    /* --------------------------------------------------------------------------- */

    // img Comparisons for cases page
    if ($(".img-comp-container").length) {
        initComparisons();
    }

    function initComparisons() {
        var x, i;
        x = document.getElementsByClassName("img-comp-overlay");
        for (i = 0; i < x.length; i++) {
            compareImages(x[i]);
        }
        function compareImages(img) {
            var slider,
                img,
                clicked = 0,
                w,
                h;
            w = img.offsetWidth;
            h = img.offsetHeight;
            img.style.width = w / 2 + "px";
            slider = document.createElement("DIV");
            slider.setAttribute("class", "img-comp-slider");
            img.parentElement.insertBefore(slider, img);
            slider.style.top = h / 2 - slider.offsetHeight / 2 + "px";
            slider.style.left = w / 2 - slider.offsetWidth / 2 + "px";
            slider.addEventListener("mousedown", slideReady);
            window.addEventListener("mouseup", slideFinish);
            slider.addEventListener("touchstart", slideReady);
            window.addEventListener("touchend", slideFinish);
            slider.addEventListener("onClick", slideReady);
            window.addEventListener("onClick", slideFinesh);
            function slideReady(e) {
                e.preventDefault();
                clicked = 1;
                window.addEventListener("mousemove", slideMove);
                window.addEventListener("touchmove", slideMove);
                window.addEventListener("onClick", slideMove);
            }
            function slideFinish() {
                clicked = 0;
            }
            function slideMove(e) {
                var pos;
                if (clicked == 0) return false;
                pos = getCursorPos(e);
                if (pos < 0) pos = 0;
                if (pos > w) pos = w;
                slide(pos);
            }
            function getCursorPos(e) {
                var a,
                    x = 0;
                e = e || window.event;
                a = img.getBoundingClientRect();
                x = e.pageX - a.left;
                x = x - window.pageXOffset;
                return x;
            }
            function slide(x) {
                img.style.width = x + "px";
                slider.style.left = img.offsetWidth - slider.offsetWidth / 2 + "px";
            }
        }
    }

    /* --------------------------------------------------------------------------- */

    // isotope plugin => filter cards for doctors file
    if ($(".doctorsFilterContainer").length) {
        $(".doctorsFilterContainer").isotope({
            itemSelector: ".doctors__cards-item",
        });
    }
    if ($(".doctors__controls-item").length) {
        $(".doctors__controls-item").on("click", function () {
            $(".doctors__controls-item").removeClass("active");
            $(this).addClass("active");

            var filterSelector = $(this).attr("data-filter");
            $(".doctorsFilterContainer").isotope({
                filter: filterSelector,
            });
            return false;
        });
    }

    /* --------------------------------------------------------------------------- */

    // shop.html input range
    if ($(".filter-price").length) {
        let inputLeft = document.querySelector("#input-range-left");
        let inputRight = document.querySelector("#input-range-right");
        let thumbLeft = document.querySelector(
            ".filter-price .show-range .thumb.left"
        );
        let thumbRight = document.querySelector(
            ".filter-price .show-range .thumb.right"
        );
        let range = document.querySelector(".filter-price .show-range .range");
        let rangeValeuLeft = document.querySelector(
            ".filter-price .show-range .thumb .range-value.left > span"
        );
        let rangeValeuRight = document.querySelector(
            ".filter-price .show-range .thumb .range-value.right > span"
        );
        function setLeftValue() {
            let _this = inputLeft,
                min = parseInt(_this.min),
                max = parseInt(_this.max);

            _this.value = Math.min(
                parseInt(_this.value),
                parseInt(inputRight.value) - 1
            );

            let percent = ((_this.value - min) / (max - min)) * 100;

            rangeValeuLeft.innerText = Math.round(percent);

            thumbLeft.style.left = percent + "%";
            range.style.left = percent + "%";
        }

        setLeftValue();

        function setRightValue() {
            let _this = inputRight,
                min = parseInt(_this.min),
                max = parseInt(_this.max);

            _this.value = Math.max(
                parseInt(_this.value),
                parseInt(inputLeft.value) + 1
            );

            let percent = ((_this.value - min) / (max - min)) * 100;

            rangeValeuRight.innerText = Math.round(percent);

            thumbRight.style.right = 100 - percent + "%";
            range.style.right = 100 - percent + "%";
        }

        setRightValue();

        inputLeft.addEventListener("input", setLeftValue);
        inputRight.addEventListener("input", setRightValue);

        inputLeft.addEventListener("mouseover", function () {
            thumbLeft.classList.add("hover");
        });

        inputLeft.addEventListener("mouseout", function () {
            thumbLeft.classList.remove("hover");
        });

        inputRight.addEventListener("mouseover", function () {
            thumbRight.classList.add("hover");
        });

        inputRight.addEventListener("mouseout", function () {
            thumbRight.classList.remove("hover");
        });

        inputLeft.addEventListener("mousedown", function () {
            thumbLeft.classList.add("active");
        });

        inputLeft.addEventListener("mouseup", function () {
            thumbLeft.classList.remove("active");
        });

        inputRight.addEventListener("mousedown", function () {
            thumbRight.classList.add("active");
        });

        inputRight.addEventListener("mouseup", function () {
            thumbRight.classList.remove("active");
        });
    }

    /* --------------------------------------------------------------------------- */

    // shop detail page count product
    if ($(".single-product").length) {
        if ($(".count-product").length) {
            let countProductValue = $(".count-product .value");
            let countProductInc = $(".count-product .plus");
            let countProductDec = $(".count-product .minus");
            $(countProductInc).on("click", function () {
                countProductValue.text((countProductValue.text() * 1) + 1);
            });
            $(countProductDec).on("click", function () {
                if ((countProductValue.text() * 1) > 0) {
                    countProductValue.text((countProductValue.text() * 1) - 1);
                }
                else {
                    countProductValue.text("0");
                }
            })
        }
    }

    if ($(".shop-cart").length) {
        let Inc = $(".shop-cart .count-product .plus");
        let Dec = $(".shop-cart .count-product .minus");
        $(Inc).on("click", function () {
            $(this).siblings(".value").text(($(this).siblings(".value").text() * 1) + 1);
        });
        $(Dec).on("click", function () {
            if (($(this).siblings(".value").text() * 1) > 0) {
                $(this).siblings(".value").text(($(this).siblings(".value").text() * 1) - 1);
            }
            else {
                $(this).siblings(".value").text("0");
            }
        })
    }

    /* --------------------------------------------------------------------------- */

    // filter cards for faqs file
    if ($(".faqs__controls-lists").length) {
        $(".faqs__controls-item").on("click", function () {

            $(".faqs__controls-item").removeClass("active");
            $(this).addClass("active");

            let dataValue = $(this).attr("data-filter");

            if (dataValue === "*") {
                $(".faqs__cards-item").addClass("show");
            }
            else {
                $(".faqs__cards-item").removeClass("show");

                let faqsCardsItems = document.querySelectorAll(".faqs__cards-item");
                for (let i = 0; i < faqsCardsItems.length; i++) {
                    if (faqsCardsItems[i].getAttribute("data-filter2") === dataValue) {
                        faqsCardsItems[i].classList.add("show");
                    }
                }
            }
        })
    }

    /* --------------------------------------------------------------------------- */

    // .faqs__cards
    if ($(".faqs__cards").length) {
        $(".faqs__cards")
            .find(".faqs__cards-item")
            .on("click", function () {
                // accardion - icon
                $(".faqs__cards")
                    .find(".faqs__cards-item")
                    .find(".fa")
                    .removeClass("fa-angle-up")
                    .addClass("fa-angle-down");
                $(this)
                    .find(".fa")
                    .removeClass("fa-angle-down")
                    .addClass("fa-angle-up");

                // accardion - item
                $(".faqs__cards").find(".faqs__cards-item").css("border-color", "#f0f0f0");
                $(this).siblings(".faqs__cards-item").find(".faqs__cards-item-text").slideUp();
                $(this).css("border-color", "#f22283").find(".faqs__cards-item-text").slideDown();
            });
    }

    /* --------------------------------------------------------------------------- */

    // window resize update functions of jquery
    $( window ).resize(function() {
        fixedMenu();

        if ($(".img-comp-container").length) {
            initComparisons();
        }

        $(".navbar__menu-item").find(".navbar__submenu").slideUp();

        if ($(window).innerWidth() >= 1200) {
            $(".navbar").removeClass("show hide");
        } else {
            $(".navbar").removeClass("show").addClass("hide");
        }

    });

});
