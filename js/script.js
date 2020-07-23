"use strict"

$(window).on('beforeunload', function () {
    $(window).scrollTop(0);
});

let h1Span = document.getElementById("title").innerHTML.replace(/(.)/g, "<span>$1</span>");
document.getElementById("title").innerHTML = h1Span;

$('#click-foto').click(function () {
    let tl_img = new TimelineMax();
    let tl_h1 = new TimelineMax();

    tl_img.to("html,body", 0, {
            overflow: "auto"
        }, 2)
        .to("figure img", 0, {
            scale: 1,
            cursor: "inherit",
            ease: Power4.easeIn
        }, 0)
        .to("#header", 1, {
            top: 0,
            ease: Power1.easeIn
        }, 0)
        .to(".column-3", 1, {
            height: "75%",
            ease: Power4.easeIn
        }, 0)
        .to("#div-click", 1, {
            top: "62.6%",
            ease: Power4.easeIn
        }, 0)
        .to(".container-full", 0, {
            zIndex: "-1",
            ease: Power4.easeIn
        }, 1)
        .to("#info-foto", 1, {
            width: "100vw",
            ease: Power4.easeIn
        }, 0)
        .to("#info-foto", 0.5, {
            opacity: 0,
            display: "none",
            ease: Power4.easeIn
        }, 0.5)

    tl_h1.add(TweenMax.staggerTo("h1 span", 0.5, {
            top: "0"
        }, 0.03), 1.3)
        .to(".h1Small", 0.5, {
            opacity: 1
        })
});


$('#menu_cerrar').click(function () {
    TweenMax.to('#burger-wrapper-cerrar, .img-menu-1, .img-menu-2, .img-menu-3', .5, {
        y: "50px",
        opacity: 0
    });
    TweenMax.to('.menu', 0.75, {
        height: "0",
        delay: 0.25,
        ease: Power2.easeIn
    });
    TweenMax.to('.menu', 0, {
        display: "none",
        delay: 1.5
    });
    TweenMax.to('html,body', 0, {
        overflow: "auto"
    });
});

$('#burger-wrapper').click(function () {
    TweenMax.to('.menu', 0, {
        display: "block"
    });
    TweenMax.to('.menu', 1, {
        height: "100vh",
        ease: Power2.easeIn
    });
    TweenMax.to('#burger-wrapper-cerrar, .img-menu-1, .img-menu-2, .img-menu-3', .5, {
        y: 0,
        opacity: 1,
        delay: 1
    });
    TweenMax.to('html,body', 0, {
        overflow: "hidden"
    });
});

$("#h3_1").mouseover(function () {
        TweenMax.to('.img-menu-1 .container-img + div', .5, {
            height: "0",
            top: "0",
            bottom: "inherit",
            ease: Power1.easeIn
        });
    })
    .mouseout(function () {
        TweenMax.to('.img-menu-1 .container-img + div', .5, {
            height: "100%",
            bottom: "0",
            top: "inherit",
            ease: Power1.easeIn
        });
    });

$("#h3_2").mouseover(function () {
        TweenMax.to('.img-menu-2 .container-img + div', .5, {
            height: "0",
            top: "0",
            bottom: "inherit",
            ease: Power1.easeIn
        });
    })
    .mouseout(function () {
        TweenMax.to('.img-menu-2 .container-img + div', .5, {
            height: "100%",
            bottom: "0",
            top: "inherit",
            ease: Power1.easeIn
        });
    });

$("#h3_3").mouseover(function () {
        TweenMax.to('.img-menu-3 .container-img + div', .5, {
            height: "0",
            top: "0",
            bottom: "inherit",
            ease: Power1.easeIn
        });
    })
    .mouseout(function () {
        TweenMax.to('.img-menu-3 .container-img + div', .5, {
            height: "100%",
            bottom: "0",
            top: "inherit",
            ease: Power1.easeIn
        });
    });



$('#burger-wrapper').mouseleave(function (e) {
    TweenMax.to(this, 0.3, {
        scale: 1
    });
    TweenMax.to('#burger-circle, #menu-burger', 0.3, {
        scale: 1,
        x: 0,
        y: 0,
        backgroundColor: "transparent"
    });
    TweenMax.to('#menu-burger p', 0.3, {
        color: "#EBDDCB"
    });
    TweenMax.to('.circle, .circle-follow', .5, {
        opacity: 1
    });
    cursor.removeClass("active");
    follower.removeClass("active");
});

$('#burger-wrapper').mouseenter(function (e) {
    TweenMax.to(this, 0.3, {
        transformOrigin: '0 0'
    });
    TweenMax.to('#menu-burger p', 0.3, {
        color: "#000"
    });
    TweenMax.to('#burger-circle', 0.3, {
        scale: 1.2,
        backgroundColor: "#EBDDCB"
    });
    TweenMax.to('.circle, .circle-follow', 0, {
        opacity: 0
    });
    cursor.addClass("active");
    follower.addClass("active");
});

$('#burger-wrapper').mousemove(function (e) {
    callParallax(e);
    TweenMax.to('.circle, .circle-follow', 0, {
        opacity: 0
    });
});

function callParallax(e) {
    parallaxIt(e, '#burger-circle', 60);
    parallaxIt(e, '#menu-burger', 40);
}

function parallaxIt(e, target, movement) {
    var $this = $('#burger-wrapper');
    var boundingRect = $this[0].getBoundingClientRect();
    var relX = e.pageX - boundingRect.left;
    var relY = e.pageY - boundingRect.top;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    TweenMax.to(target, 0.3, {
        x: (relX - boundingRect.width / 2) / boundingRect.width * movement,
        y: (relY - boundingRect.height / 2 - scrollTop) / boundingRect.width * movement,
        ease: Power2.easeOut
    });
}

$('#burger-wrapper-cerrar').mouseleave(function (e) {
    TweenMax.to(this, 0.3, {
        scale: 1
    });
    TweenMax.to('#burger-circle-cerrar, #menu-burger-cerrar', 0.3, {
        scale: 1,
        x: 0,
        y: 0,
        backgroundColor: "transparent"
    });
    TweenMax.to('#menu-burger-cerrar p', 0.3, {
        color: "#EBDDCB"
    });
    TweenMax.to('.circle, .circle-follow', .5, {
        opacity: 1
    });
    cursor.removeClass("active");
    follower.removeClass("active");
});

$('#burger-wrapper-cerrar').mouseenter(function (e) {
    TweenMax.to(this, 0.3, {
        transformOrigin: '0 0'
    });
    TweenMax.to('#menu-burger-cerrar p', 0.3, {
        color: "#000"
    });
    TweenMax.to('#burger-circle-cerrar', 0.3, {
        scale: 1.2,
        backgroundColor: "#EBDDCB"
    });
    TweenMax.to('.circle, .circle-follow', 0, {
        opacity: 0
    });
    cursor.addClass("active");
    follower.addClass("active");
});

$('#burger-wrapper-cerrar').mousemove(function (e) {
    callParallax_cerrar(e);
    TweenMax.to('.circle, .circle-follow', 0, {
        opacity: 0
    });
});

function callParallax_cerrar(e) {
    parallaxIt_cerrar(e, '#burger-circle-cerrar', 60);
    parallaxIt_cerrar(e, '#menu-burger-cerrar', 40);
}

function parallaxIt_cerrar(e, target, movement) {
    var $this = $('#burger-wrapper-cerrar');
    var boundingRect = $this[0].getBoundingClientRect();
    var relX = e.pageX - boundingRect.left;
    var relY = e.pageY - boundingRect.top;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    TweenMax.to(target, 0.3, {
        x: (relX - boundingRect.width / 2) / boundingRect.width * movement,
        y: (relY - boundingRect.height / 2 - scrollTop) / boundingRect.width * movement,
        ease: Power2.easeOut
    });
}




var cursor = $(".cursor"),
    follower = $(".cursor-follower"),
    active = $(".active");

var posX = 0,
    posY = 0;

var mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
        posX += (mouseX - posX) / 6;
        posY += (mouseY - posY) / 6;

        TweenMax.set(follower, {
            css: {
                left: posX - 12,
                top: posY - 12
            }
        });

        TweenMax.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        });

        TweenMax.set(active, {
            css: {
                left: mouseX,
                top: mouseY
            }
        });
    }
});

$(document).on("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

$("#burger-wrapper, #burger-wrapper-cerrar").on("mouseenter", function () {
    cursor.addClass("active-menu");
    follower.addClass("active-menu");
});
$("#click-foto, h3").on("mouseenter", function () {
    cursor.addClass("active");
    follower.addClass("active");
});
$("#burger-wrapper, #burger-wrapper-cerrar").on("mouseleave", function () {
    cursor.removeClass("active-menu");
    follower.removeClass("active-menu");
});
$("#click-foto, h3").on("mouseleave", function () {
    cursor.removeClass("active");
    follower.removeClass("active");
});


let tl_francia = new TimelineMax();

tl_francia.add(TweenMax.staggerTo("#francia span", 0.5, {
    opacity: "1"
}, 0.03));

let tl_rompo = new TimelineMax();

tl_rompo.to("#rompo_1", 1, {
        y: "-10vh"
    }, 0)
    .to("#rompo_2", 1.5, {
        y: "-20vh"
    }, 0)
    .to("#rompo_3", 1.25, {
        y: "-15vh"
    }, 0)

document.addEventListener("DOMContentLoaded", function (event) {

    let controller = new ScrollMagic.Controller();
    let escena1 = new ScrollMagic.Scene({
            triggerElement: "#intro_text",
            duration: "100%",
            triggerHook: 1
        })
        .setTween("#intro_text", 1, {
            marginTop: "-10vh"
        })
        .addTo(controller);
    let escena2 = new ScrollMagic.Scene({
            triggerElement: "#intro_text",
            duration: "100%",
            triggerHook: 1
        })
        .setTween("#estacion", 0.5, {
            marginTop: "-15vh"
        })
        .addTo(controller);
    let escena3 = new ScrollMagic.Scene({
            triggerElement: "#estacion",
            triggerHook: 0
        })
        .setTween(tl_francia)
        .addTo(controller);
    let escena4 = new ScrollMagic.Scene({
            triggerElement: "#rompo",
            duration: "100%",
            triggerHook: 0.8
        })
        .setTween(tl_rompo)
        .addTo(controller);
    let escena5 = new ScrollMagic.Scene({
            triggerElement: "#tren",
            duration: "150%",
            triggerHook: 0.5
        })
        .setTween("#tren_1", 1, {
            y: "-20vh"
        })
        .addTo(controller);
});
