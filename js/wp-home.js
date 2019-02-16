String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};
//
if (window.addEventListener) window.addEventListener('load', start, false);
var posts = [];
var categories = ["branding", "designing", "social-media", "communication", "websites", "seo", "presentations", "photoshoot"];
//var wordpressLink = "http://127.0.0.1/wordpress-4.5.3/wordpress/";
wordpressLink = "http://brandaffair.in/blog/";

function start() {
    for (var i = 0; i < categories.length; i++) {
        var temp = new PostPreview(categories[i]);
    }
    loadClients();
}

function loadClients() {
    var ajaxUrl = (wordpressLink + "?getClients=1").replaceAll('/', '\/');
    $.ajax({
        url: ajaxUrl
        , context: this
        , success: function (html) {
            clientData = $(html)
            clientData = $('img', clientData)
            var id = 0;
            $.each(clientData, function () {
                id += 1
                var str = '<div class="clientThumbnail"> <img id="client' + id + '" src="' + this.src + '"> </div>'
                $('#logo-container').append(str);
            })
            id = 0;
            $.each(clientData, function () {
                id += 1
                if (this.alt.indexOf('http://') != -1) {
                    var link = this.alt;
                    $('#client' + id).css('cursor','pointer');
                    $('#client' + id).on('click', function () {
                        window.open(link)
                    })
                }
            })
        }
    })
}

function applyPreview(postPreviews) {
    for (var i = 0; i < postPreviews.previews.length; i++) {
        jQuery('<div/>', {
            class: 'portfolio-item'
            , id: 'pi-' + postPreviews.category + i
        }).appendTo('#page-' + postPreviews.category + ' .portfolio-table');
        jQuery('<a/>', {
            id: 'a-pi-' + postPreviews.category + i
            , href: "product.html#" + postPreviews.previews[i].id
            , style: 'background-image:url("' + postPreviews.previews[i].thumbnail.src + '");'
        }).appendTo('#pi-' + postPreviews.category + i);
        jQuery('<div/>', {
            class: 'overlay'
        }).appendTo('#a-pi-' + postPreviews.category + i);
    }
    categoryUpdated();
}
var PostPreview = function (categoryName) {
    var obj = {
        "category": categoryName
        , "previews": []
        , retrieveThumbnailsByCategory: function () {
            var ajaxUrl = (wordpressLink + "?getPostsByCategory=" + this.category).replaceAll('/', '\/');
            var previews;
            $.ajax({
                url: ajaxUrl
                , context: this
                , success: function (html) {
                    this.previews = (parsePostPreviews($(html)));
                    applyPreview(this);
                }
            })
        }
    }
    obj.retrieveThumbnailsByCategory();
    return obj;
}
var postConstructor = function () {
    return {
        "id": "N/A"
        , "thumbnail": "N/A"
        , "cover": "N/A"
        , "texts": []
        , "images": []
        , "title": "N/A"
    }
}
var postPreviewConstructor = function () {
    return {
        "id": "N/A"
        , "thumbnail": "N/A"
        , "title": "N/A"
    }
}
var TextSectionConstructor = function () {
    return {
        "title": "N/A"
        , "description": "N/A"
    }
}

function parsePostPreviews(n) {
    if (n.hasOwnProperty('length')) {
        var posts = [];
        for (var i = 0; i < n.length; i++) {
            posts.push(parsePostPreview($($(n[i])[0])));
        }
        return posts;
    }
    else {
        //console.log("parsePosts : This html doesn't have length <post>.");
        return -1;
    }
}

function parsePostPreview(html) {
    html = $(html)[0];
    var post = new postPreviewConstructor();
    post.id = $(html)[0].getAttribute('link');
    post.title = $(html)[0].getAttribute('title');
    post.thumbnail = $(html)[0].firstChild.firstChild;
    return post;
}

function parseTextSection(li) {
    var Text1 = $(li)[0].innerHTML;
    var textSection = new TextSectionConstructor();
    textSection.title = Text1.slice(0, Text1.indexOf('<'));
    textSection.description = $(li)[0].children[0].children[0].innerHTML;
    return textSection;
}