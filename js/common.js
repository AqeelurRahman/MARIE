if (window.addEventListener) window.addEventListener('load', onCommonLoad, false);
var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination'
    , paginationClickable: true
    , nextButton: '#navigation-right'
    , prevButton: '#navigation-left'
    , spaceBetween: 30
});
var zoomFactor = '100%';
var scrollingDown = false;
var scrollPosPrevious = $(document).scrollTop();
var scrollOffset = $(window).height() * 0.2;
var part1Stroke = $('#part1Stroke');
var part1Fill = $('#part1Fill');
var part2Stroke1 = $('#part2Stroke1');
var part2Stroke2 = $('#part2Stroke2');
var part2Fill1 = $('#part2Fill1');
var part2Fill2 = $('#part2Fill2');
var part2 = $('#part2');
var grey = "#bcbec0";
var yellow = "#fff200";
var white = "#ffffff";
var black = "#000000";
var easeAnimation = 'easeOutQuad';
var iconAnimationInProgress = false;
var time = 0.2;
var A = $('#l5');
var Z = $('#l5-a');
var allowAnimation = false;
//console.log('scrollOffset : ' + scrollOffset);
function setupScrollify() {
    $.scrollify({
        section: "section"
        , sectionName: false
        , interstitialSection: ".skipScrollSnap"
        , easing: "easeOutExpo"
        , scrollSpeed: 200
        , offset: 0
        , scrollbars: true
        , standardScrollElements: ""
        , setHeights: false
        , overflowScroll: true
        , before: function () {}
        , after: function () {}
        , afterResize: function () {}
        , afterRender: function () {}
    });
}

function setupSnapper() {
    var options = {
        $menu: false
        , menuSelector: 'a'
        , panelSelector: '.snapping'
        , namespace: '.panelSnap'
        , onSnapStart: function () {}
        , onSnapFinish: function () {}
        , directionThreshold: $('#navigation').height() / 2
        , slideSpeed: 400
            // , offset: $('#navigation').height()
    };
    $('body').panelSnap(options);
    //$('body').panelSnap();
}

function waypointCheck(name) {
    scrollingDown = scrollPosPrevious - $(document).scrollTop() < 0;
    if (scrollingDown) {
        //  //console.log("common.js")You're scrolling down.");
    }
    else {
        //    //console.log("common.js")You're scrolling up.");
    }
    var scrollPos = $(document).scrollTop();
    scrollPos += scrollingDown ? scrollOffset : scrollOffset;
    var refElement = $(name);
    return (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos);
}

function onScroll(event) {
    if (waypointCheck('#home')) {
        currentWaypoint = '#home';
        updateNavigation();
    }
    if (waypointCheck('#our-affair')) {
        currentWaypoint = '#our-affair';
        updateNavigation();
    }
    if (waypointCheck('#services')) {
        if (currentWaypoint != "#services") {
            currentWaypoint = '#services';
            updateNavigation();
            animateBulbs();
            if (!ServicesAnimationComplete) {
                ServicesAnimationComplete = true;
            }
        }
    }
    if (waypointCheck('#portfolio')) {
        currentWaypoint = '#portfolio';
        turnOffLights();
        updateNavigation();
        allowAnimation = true;
        TweenMax.to($('#TypewriterSVG'), 0.1, {
            opacity: 0
        })
    }
    if (waypointCheck('#our-team')) {
        currentWaypoint = '#our-team';
        updateNavigation();
        animateGenius();
        allowAnimation = true;
        TweenMax.to($('#TypewriterSVG'), 0.1, {
            opacity: 0
        })
    }
    if (waypointCheck('#career-affair')) {
        currentWaypoint = '#career-affair';
        updateNavigation();
    }
    if (waypointCheck('#clients')) {
        currentWaypoint = '#clients';
        updateNavigation();
    }
    if (waypointCheck('#get-in-touch')) {
        currentWaypoint = '#get-in-touch';
        updateNavigation();
        if (!GetInTouchAnimationComplete && allowAnimation) {
            TweenMax.to($('#TypewriterSVG'), 0.4, {
                opacity: 1
            })
            animateTypewriter();
            allowAnimation = false;
            GetInTouchAnimationComplete = true;
        }
    }
}

function onCommonLoad() {
    ////console.log("common.js")common.js")
    $(window).on("scroll", onScroll);
    //setupScrollify();
    // setupSnapper();
//    var home = $('#home')[0];

    $('#l1').show()
    $('#l2').show()
    $('#l3').show()
    $('#l4').show()
    $('#l5').show()
    $('#l6').show()
    $('#l7').show()
    $('#l8').show()
    $('#l1-a').hide()
    $('#l2-a').hide()
    $('#l3-a').hide()
    $('#l4-a').hide()
    $('#l5-a').hide()
    $('#l6-a').hide()
    $('#l7-a').hide()
    $('#l8-a').hide()
    $('#nav-toggle').on('click', function (e) {
        e.stopPropagation(); //stops propagation
        e.preventDefault();
        if (e.type == "touchstart") {
            //console.log("common.js")touch")
        }
        else if (e.type == "click") {
            //console.log("common.js")click")
        }
        this.classList.toggle("active");
        if ((this.classList)[0] == "active") {
            $('.nav-list').fadeIn();
        }
        else {
            $('.nav-list').fadeOut();
        }
    });
    setupWaypoints();
}

function hideNavigation() {
    if ($('#nav-toggle').css('display') != 'none') {
        $('.nav-list').fadeOut();
        $('#nav-toggle').toggleClass("active");
    }
}

function closeNavigation() {
    if ($('#nav-toggle').css('display') != 'none') {
        $('.nav-list').fadeOut();
        $('#nav-toggle').removeClass("active");
    }
}

function setupWaypoints() {
    var rotateTimeline = new TimelineMax();
    $('#link-our-affair').hover(function (event) {
        $("#l1").hide()
        $("#l1-a").show()
    }, function (event) {
        $("#l1-a").hide()
        $("#l1").show()
        updateNavigation();
    })
    $('#link-services').hover(function (event) {
        $("#l2").hide()
        $("#l2-a").show()
    }, function (event) {
        $("#l2-a").hide()
        $("#l2").show()
        updateNavigation();
    })
    $('#link-portfolio').hover(function (event) {
        //        //console.log("common.js")common.js : 90")
        $("#l3").hide()
        $("#l3-a").show()
        rotateTimeline.to("#l3-a", 0.3, {
            rotation: -40
            , transformOrigin: "50% 50%"
            , ease: Linear.easeNone
                // , y: -5
        });
        //console.log("common.js")hi");
    }, function (event) {
        rotateTimeline.to("#l3-a", 0.3, {
            rotation: 0
            , transformOrigin: "50% 50%"
            , ease: Linear.easeNone
                //, y: 0
                
            , onComplete: function () {
                $("#l3-a").hide()
                $("#l3").show()
                updateNavigation();
            }
        });
    })
    $('#link-clients').hover(function (event) {
        $("#l4").hide()
        $("#l4-a").show()
    }, function (event) {
        $("#l4-a").hide()
        $("#l4").show()
        updateNavigation();
    })
    $('#link-our-team').mouseenter(function (event) {
        //console.log("common.js")Entering and currentWaypoint is " + currentWaypoint);
        if (!iconAnimationInProgress && currentWaypoint != '#our-team') {
            var a = new TimelineMax();
            TweenMax.set(part2Stroke2, {
                x: 8
                , opacity: 0
            })
            TweenMax.set(part2Fill2, {
                x: 8
                , opacity: 0
            })
            TweenMax.set(part2Fill1, {
                fill: white
                , x: 2
            })
            TweenMax.set(part2Stroke1, {
                fill: grey
                , x: 2
            })
            A.hide()
            Z.show()
            a.to(part2Fill1, time, {
                fill: yellow
                , x: -2
                , onStart: function () {
                    iconAnimationInProgress = true
                }
            }, "0")
            a.to(part2Stroke1, time, {
                fill: black
                , x: -2
            }, "0")
            a.to(part2Fill2, time, {
                opacity: 1
                , x: 0
            }, time)
            a.to(part2Stroke2, time, {
                opacity: 1
                , x: 0
                , onComplete: function () {
                    iconAnimationInProgress = false
                }
            }, time)
        }
        if (currentWaypoint == '#our-team') {
            A.hide();
            Z.show();
            TweenMax.set(part2Stroke2, {
                x: 0
                , opacity: 1
            })
            TweenMax.set(part2Fill2, {
                x: 0
                , opacity: 1
            })
            TweenMax.set(part2Fill1, {
                fill: yellow
                , x: 0
            })
            TweenMax.set(part2Stroke1, {
                fill: black
                , x: 0
            })
        }
    })
    $('#link-our-team').mouseleave(function () {
        //console.log("common.js")Leaving and currentWaypoint is " + currentWaypoint);
        if (!iconAnimationInProgress && currentWaypoint != '#our-team') {
            var b = new TimelineMax();
            b.to(part2Fill2, time, {
                opacity: 0
                , x: 8
                , onStart: function () {
                    iconAnimationInProgress = true
                }
            }, "0")
            b.to(part2Stroke2, time, {
                opacity: 0
                , x: 8
            }, "0")
            b.to(part2Fill1, time, {
                fill: white
                , x: 8
            }, time)
            b.to(part2Stroke1, time, {
                fill: grey
                , x: 8
                , onComplete: function () {
                    iconAnimationInProgress = false
                    Z.hide()
                    A.show()
                }
            }, time)
        }
        if (currentWaypoint == '#our-team') {
            A.hide();
            Z.show();
        }
    })
    $('#link-career-affair').hover(function (event) {
        $("#l6").hide()
        $("#l6-a").show()
    }, function (event) {
        $("#l6-a").hide()
        $("#l6").show()
        updateNavigation();
    })
    $('#link-blog').hover(function (event) {
        $("#l7").hide()
        $("#l7-a").show()
    }, function (event) {
        $("#l7-a").hide()
        $("#l7").show()
        updateNavigation();
    })
    $('#link-get-in-touch').hover(function (event) {
        $("#l8").hide()
        $("#l8-a").show()
    }, function (event) {
        $("#l8-a").hide()
        $("#l8").show()
        updateNavigation();
    })
    $('#link-home').bind('click', function (event) {
        hideNavigation();
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $('#home')[0].offsetTop
        }, 800, easeAnimation, function () {
            currentWaypoint = "#home"
            updateNavigation();
        });
        event.preventDefault();
    });
    $('#link-our-affair').bind('click', function (event) {
        hideNavigation();
        var $anchor = $(this);
        //console.log("common.js")our-affair:", zoomFactor)
        $('html, body').stop().animate({
            scrollTop: $('#our-affair')[0].offsetTop
        }, 800, easeAnimation, function () {
            currentWaypoint = "#our-affair"
            updateNavigation();
        });
        event.preventDefault();
    });
    $('#link-services').bind('click', function (event) {
        hideNavigation();
        var $anchor = $(this);
        //setTimeout(animateBulbs, 400)
        $('html, body').stop().animate({
            scrollTop: $('#services')[0].offsetTop
        }, 800, easeAnimation, function () {
            currentWaypoint = "#services"
            updateNavigation();
            animateBulbs();
        });
        event.preventDefault();
    });
    $('#link-portfolio').bind('click', function (event) {
        hideNavigation();
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $('#portfolio')[0].offsetTop
        }, 800, easeAnimation, function () {
            currentWaypoint = "#portfolio"
            updateNavigation();
        });
        event.preventDefault();
    });
    $('#link-clients').bind('click', function (event) {
        hideNavigation();
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $('#clients')[0].offsetTop
        }, 800, easeAnimation, function () {
            currentWaypoint = "#clients"
            updateNavigation();
        });
        event.preventDefault();
    });
    $('#link-our-team').bind('click', function (event) {
        hideNavigation();
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $('#our-team')[0].offsetTop
        }, 800, easeAnimation, function () {
            currentWaypoint = "#our-team"
            updateNavigation();
        });
        event.preventDefault();
    });
    $('#link-career-affair').bind('click', function (event) {
        hideNavigation();
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $('#career-affair')[0].offsetTop
        }, 800, easeAnimation, function () {
            currentWaypoint = "#career-affair"
            updateNavigation();
        });
        event.preventDefault();
    });
    $('#link-blog').bind('click', function (event) {
        hideNavigation();
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $('#blog')[0].offsetTop
        }, 800, easeAnimation, function () {
            currentWaypoint = "#blog"
            updateNavigation();
        });
        event.preventDefault();
    });
    $('#link-get-in-touch').bind('click', function (event) {
        hideNavigation();
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $('#get-in-touch')[0].offsetTop
        }, 800, easeAnimation, function () {
            currentWaypoint = "#get-in-touch"
            updateNavigation();
        });
        event.preventDefault();
    });
    /********************************** MOBILE ********************************/
    $('#link-our-affair-m').bind('click', function (event) {
        hideNavigation();
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $('#our-affair')[0].offsetTop
        }, 800, easeAnimation, function () {
            currentWaypoint = "#our-affair"
            updateNavigation();
        });
        event.preventDefault();
    });
    $('#link-services-m').bind('click', function (event) {
        hideNavigation();
        var $anchor = $(this);
        setTimeout(animateBulbs, 400)
        $('html, body').stop().animate({
            scrollTop: $('#services')[0].offsetTop
        }, 800, easeAnimation, function () {
            currentWaypoint = "#services"
            updateNavigation();
        });
        event.preventDefault();
    });
    $('#link-portfolio-m').bind('click', function (event) {
        hideNavigation();
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $('#portfolio')[0].offsetTop
        }, 800, easeAnimation, function () {
            currentWaypoint = "#portfolio"
            updateNavigation();
        });
        event.preventDefault();
    });
    $('#link-clients-m').bind('click', function (event) {
        hideNavigation();
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $('#clients')[0].offsetTop
        }, 800, easeAnimation, function () {
            currentWaypoint = "#clients"
            updateNavigation();
        });
        event.preventDefault();
    });
    $('#link-our-team-m').bind('click', function (event) {
        hideNavigation();
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $('#our-team')[0].offsetTop
        }, 800, easeAnimation, function () {
            currentWaypoint = "#our-team"
            updateNavigation();
        });
        event.preventDefault();
    });
    $('#link-career-affair-m').bind('click', function (event) {
        hideNavigation();
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $('#career-affair')[0].offsetTop
        }, 800, easeAnimation, function () {
            currentWaypoint = "#career-affair"
            updateNavigation();
        });
        event.preventDefault();
    });
    $('#link-blog-m').bind('click', function (event) {
        hideNavigation();
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $('#blog')[0].offsetTop
        }, 800, easeAnimation, function () {
            currentWaypoint = "#blog"
            updateNavigation();
        });
        event.preventDefault();
    });
    $('#link-get-in-touch-m').bind('click', function (event) {
        hideNavigation();
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $('#get-in-touch')[0].offsetTop
        }, 800, easeAnimation, function () {
            currentWaypoint = "#get-in-touch"
            updateNavigation();
        });
        event.preventDefault();
    });
    /**************************************************************************/
    $('#link-applyNow').bind('click', function (event) {
        var $anchor = $(this);
        var scrollOffset = $('#career-affair')[0].offsetTop + $('#linksBar').outerHeight()
        $('html, body').stop().animate({
            scrollTop: scrollOffset
        }, 300, easeAnimation);
        //showAffairForm();
        showTalentForm();
        event.preventDefault();
    });
    $('#link-applyNow-m').bind('click', function (event) {
        var $anchor = $(this);
        var scrollOffset = $('#career-affair')[0].offsetTop + $('#linksBar').outerHeight()
        $('html, body').stop().animate({
            scrollTop: scrollOffset
        }, 300, easeAnimation);
        //showAffairForm();
        showTalentForm();
        event.preventDefault();
    });
}

function updateNavigation() {
    closeNavigation();
    $('#l1').show()
    $('#l2').show()
    $('#l3').show()
    $('#l4').show()
    $('#l5').show()
    $('#l6').show()
    $('#l7').show()
    $('#l8').show()
    $('#l1-a').hide()
    $('#l2-a').hide()
    $('#l3-a').hide()
    $('#l4-a').hide()
    $('#l5-a').hide()
    $('#l6-a').hide()
    $('#l7-a').hide()
    $('#l8-a').hide()
    if (currentWaypoint == '#our-affair') {
        $('#l1-a').show()
        $('#l1').hide()
        hideAllExcept(10)
    }
    else if (currentWaypoint == '#services') {
        $('#l2-a').show()
        $('#l2').hide()
    }
    else if (currentWaypoint == '#portfolio') {
        $('#l3-a').show()
        $('#l3').hide()
        hideAllExcept(10)
    }
    else if (currentWaypoint == '#clients') {
        $('#l4-a').show()
        $('#l4').hide()
    }
    else if (currentWaypoint == '#our-team') {
        $('#l5-a').show()
        $('#l5').hide()
        TweenMax.set(part2Stroke2, {
            x: 0
            , opacity: 1
        })
        TweenMax.set(part2Fill2, {
            x: 0
            , opacity: 1
        })
        TweenMax.set(part2Fill1, {
            fill: yellow
            , x: 0
        })
        TweenMax.set(part2Stroke1, {
            fill: black
            , x: 0
        })
        $('#link-our-affair span').css('color', 'black')
    }
    else if (currentWaypoint == '#career-affair') {
        $('#l6-a').show()
        $('#l6').hide()
    }
    else if (currentWaypoint == '#blog') {
        $('#l7-a').show()
        $('#l7').hide()
    }
    else if (currentWaypoint == '#get-in-touch') {
        $('#l8-a').show()
        $('#l8').hide()
    }
    if (currentWaypoint == '#our-team') {}
    else {}
    setIconTextActive();
}

function setIconTextActive() {
    var gray = '#bcbec0';
    $('.nav-item a span').each(function () {
        $(this).css('color', gray)
    });
    var target = currentWaypoint;
    var linkTarget = target.replace('#', '#link-')
    linkTarget += " span";
    $(linkTarget).css('color', 'black')
}