/*
#testimonial
    #testimonial-thumb
    #testimonial-name
    #testimonial-company
    #testimonial-text

*/
var testimonialTargetDiv = $('#testimonial');
var testimonialTargetName = $('#testimonial-name');
var testimonialTargetCompany = $('#testimonial-company');
var testimonialTargetText = $('#testimonial-text');
var testimonialTargetImage = $('#testimonial-image');
var testimonialNextButton = $('#testimonial-right-arrow')
var testimonialPrevButton = $('#testimonial-left-arrow')
var currentTestimonial = 0;
var tss = []
var testimonialTemplate = function () {
    return {
        "name": "N/A"
        , "company": "N/A"
        , "text": "N/A"
        , "image": "N/A"
    }
}

function retrieveTestimonials() {
    var ajaxUrl = (wordpressLink + "?getPostsByCategory=testimonials").replaceAll('/', '\/');
    $.ajax({
        url: ajaxUrl
        , context: this
        , success: function (html) {
            data = $(html)[0]
            data = $('ul', data)[0]
            data = $('ul', data)
            $.each(data, function () {
                var li = $('li', this);
                var t = new testimonialTemplate();
                t.name = li[0].innerText;
                t.company = li[1].innerText;
                t.text = li[2].innerText;
                if (li.length == 4) {
                  //  console.log("image : ", $('img', li[3])[0].src);
                    t.image = $('img', li[3])[0].src;
                }
                tss.push(t);
            })
            onPageReady();
        }
    })
}

function viewTestimonial(no) {
    if (no < tss.length) {
        var selectedTestimonial = tss[no];
        testimonialTargetName.html(selectedTestimonial.name);
        testimonialTargetCompany.html(selectedTestimonial.company);
        testimonialTargetText.html(selectedTestimonial.text);
        testimonialTargetImage.css("background-image", 'url("' + '../img/person.png' + '")');
        if (selectedTestimonial.image) {
            if (selectedTestimonial.image != "N/A") {
                testimonialTargetImage.css("background-image", 'url( "' + selectedTestimonial.image + '")');
            }
        }
    }
    else {
        console.log("Cannot access testimonial no. " + no + " out of total " + tss.length + " testimonials");
    }
}

function onPageReady() {
    testimonialNextButton.on('click', nextTestimonial);
    testimonialPrevButton.on('click', prevTestimonial);
    startChanger(6000);
}

function startChanger(timeOut) {
    viewTestimonial(0);
    setInterval(nextTestimonial, timeOut);
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % tss.length;
    viewTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1) % tss.length;
    if (currentTestimonial == -1) {
        currentTestimonial = tss.length - 1;
    }
    viewTestimonial(currentTestimonial);
}
$(document).ready(function () {
    retrieveTestimonials();
})