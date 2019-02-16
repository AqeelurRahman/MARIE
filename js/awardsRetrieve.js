if (window.addEventListener) window.addEventListener('load', start, false);
wordpressLink = "http://brandaffair.in/blog/";
var globalHTML;
String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

function start() {
    retrieveAwards();
}

function retrieveAwards() {
    var AwardsHtml;
    var index = 0;
    var ajaxUrl = (wordpressLink + "?getPostsByCategory=Awards").replaceAll('/', '\/');
    $.ajax({
        url: ajaxUrl
        , context: this
        , success: function (html) {
            AwardsHtml = html;
            globalHTML = html;
            parseAwardsInto(0, '#awards1')
        }
    })
    var newEntry = function () {
        return {
            "text1": "N/A"
            , "text2": "N/A"
            , "image": "N/A"
        }
    }
    var awardElement = function (text1, text2, image) {
        index += 1;
        return '<div class="award-split-h"><div id="al'+index+'" class="award-logo"></div><div class="award-split-v"><div class="award-text1">' + text1 + '</div><div class="award-text2">' + text2 + '</div></div><div class="border"></div></div>'
    }

    function parseAwardsInto(no, targetElementName) {
        var targetElement = $(targetElementName)
        var len = $(AwardsHtml).length
        var all = []
        console.log('len : ', len)
        var uls = $('> ul > li', $(AwardsHtml)[len - 1 - no])
        $.each(uls, function () {
            var cur = $('ul', this)[0]
            var elem = newEntry();
            elem.text1 = $('li', cur)[1].innerHTML
            elem.text2 = $('li', cur)[2].innerHTML
            elem.image = $('img', $('li', cur)[0])[0].src.replaceAll('/', '\/')
            all.push(elem)
        })
        $.each(all,function(){
            targetElement.append(awardElement(this.text1,this.text2,this.image))
            $('#al'+index).css('background-image','url('+this.image+')')
        })
        console.log(all)
    }
}