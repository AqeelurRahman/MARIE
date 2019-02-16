if (window.addEventListener) window.addEventListener('load', onLoad, false);
var list = ["branding", "designing", "social-media", "communication", "websites", "seo", "presentations", "photoshoot"];
var listItemName = ["Branding", "Designing", "Social Media", "Communication", "Websites", "SEO", "Presentations", "Photoshoot & Videos"];
var portfolioCollapsed = false;
currentCategoryNo = 0;
totalCategories = list.length;
var portfolioIntialHeight, p_viewportHeight;
var mobileDevice;

function onLoad() {
    var table = $('#page-' + list[currentCategoryNo] + ' .portfolio-table')[0];
    mobileDevice = isMobile();
    for (var i = 6; i < table.childNodes.length && !mobileDevice; i++) {
        $(table.children[i]).hide();
    }
    portfolioCollapsed = true;
    portfolioIntialHeight = $('#portfolio .content .middle').height();
    console.log('portfolioIntialHeight :',portfolioIntialHeight);
    p_viewportHeight = ($(window).height() * 0.80) + "px";
    navigationUpArrow = $("#navigation-up img");
    $("#navigation-up").click('click', function (e) {
        table = $('#page-' + list[currentCategoryNo] + ' .portfolio-table')[0];
        var vh = ($(window).height() * 0.80) / 100;
        if (portfolioCollapsed) {
            TweenMax.to(navigationUpArrow, 0.3, {
                rotation: 180
                , transformOrigin: "50% 50%"
            })
            for (var i = 6; i < table.childNodes.length; i++) {
                // $(table.children[i]).show();
            }
            portfolioCollapsed = false;
            TweenMax.to($('#portfolio .content .middle'), 0.5, {
                height: $('#page-' + list[currentCategoryNo] + ' .portfolio-table').height() * 1.1
            })
        }
        else {
            table = $('#page-' + list[currentCategoryNo] + ' .portfolio-table')[0];
            TweenMax.to(navigationUpArrow, 0.3, {
                rotation: 0
                , transformOrigin: "50% 50%"
            })
            for (var i = 6; i < table.childNodes.length && !mobileDevice; i++) {
                //  $(table.children[i]).hide();
            }
            portfolioCollapsed = true;
            if(!mobileDevice){
	            TweenMax.to($('#portfolio .content .middle'), 0.5, {
	                height: portfolioIntialHeight
	            })
            }
        }
    })
    $("#navigation-right").click('click', function (e) {
        currentCategoryNo += 1
        currentCategoryNo %= totalCategories;
        scrollIndicator(list[currentCategoryNo]);
    })
    $("#navigation-left").click('click', function (e) {
        if (currentCategoryNo - 1 < 0) {}
        else {
            currentCategoryNo -= 1
            currentCategoryNo %= totalCategories;
        }
        scrollIndicator(list[currentCategoryNo]);
    })
    $("#position-indicator").css({
        position: 'absolute'
        , margin: 0
    });
    scrollToCategory(list[currentCategoryNo]);
    var left = $($("#branding")[0].parentNode).context.offsetLeft - $("#portfolio-menu-list")[0].offsetLeft - $("#position-indicator").width() / 2 + $($("#branding")[0].parentNode).width() / 2;
    $("#position-indicator").animate({
        left: (left > 0 ? left : 0) + 'px'
    }, 500, function () {});
    $(".portfolio-category").click('click', function (e) {
        e.preventDefault();
        var category = (($(e.currentTarget)[0]).getElementsByTagName('a')[0]).id;
        //console.log('clicked : ' + category);
        if (category.slice(-2) == '-m') {
            category = category.substr(0, category.length - 2);
        }
        //category = category.replace('-m', '');
        scrollIndicator(category);
        currentCategoryNo = list.indexOf(category);
        categoryUpdated();
        swiper.slideTo(currentCategoryNo);
        $('#portfolio-category-title')[0].innerHTML = listItemName[currentCategoryNo];
    });
    $('#portfolio-menu-list').on('click', 'li', function () {
        $('#portfolio-menu-list li a.active').removeClass('active');
        $($(this)[0].children[0]).addClass('active')
    });
    $('#portfolio-menu-list-m').on('click', 'li', function () {
        $('#portfolio-menu-list-m li a.active').removeClass('active');
        $($(this)[0].children[0]).addClass('active')
    });

    function scrollToCategory(c) {
        var clickTargetPage = $("#page-" + c);
        $("#portfolio-content").animate({
            scrollLeft: clickTargetPage[0].offsetLeft - clickTargetPage[0].scrollWidth / 2 //+ 'px'
        }, 500, function () {
            categoryUpdated();
        });
    }
    var mxwidth = $('#portfolio-sub-list').width();
    $('#portfolio-para-container').css({
        maxWidth: mxwidth
    });
    if (mobileDevice) {
     //   TweenMax.to($('#portfolio .content .middle'), 0.5, {
        //    height: $('#page-' + list[currentCategoryNo] + ' .portfolio-table').height()
     //   })
    }
}

function scrollIndicator(c) {
    if (!mobileDevice) {
        var left = $($("#" + c)[0].parentNode).context.offsetLeft - $("#portfolio-menu-list")[0].offsetLeft - $("#position-indicator").width() / 2 + $($("#" + c)[0].parentNode).width() / 2;
        $("#position-indicator").animate({
            left: (left > 0 ? left : 0) + 'px'
        }, 500, function () {
            categoryUpdated();
        });
    }
}

function scrollIndicatorByIndex(n) {
    currentCategoryNo = n;
    categoryUpdated();
    $('#portfolio-menu-list li a.active').removeClass('active');
    $("#" + list[currentCategoryNo]).addClass('active');
    $('#portfolio-menu-list-m li a.active').removeClass('active');
    $("#" + list[currentCategoryNo] + "-m").addClass('active');
    scrollIndicator(list[currentCategoryNo]);
}

function nextPage() {
    currentCategoryNo += 1
    currentCategoryNo %= totalCategories;
    scrollIndicator(list[currentCategoryNo]);
}

function prevPage() {
    if (currentCategoryNo - 1 < 0) {}
    else {
        currentCategoryNo -= 1
        currentCategoryNo %= totalCategories;
    }
    scrollIndicator(list[currentCategoryNo]);
}

function categoryUpdated() {
    var table = $('#page-' + list[currentCategoryNo] + ' .portfolio-table');
    if(table[0].children.length < 1)
    {
        table.addClass('portfolio-table-empty');
    }
    else{
        table.removeClass('portfolio-table-empty');
    }
    if (!mobileDevice) {
        var t = $('#page-' + list[currentCategoryNo] + ' .portfolio-table')[0];
        if (t != undefined) {
            if ($(t).height() > $(t).parent().height()) {
                $('#navigation-up').show();
            }
            else {
                $('#navigation-up').hide();
            }
        }
    }
}