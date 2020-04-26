// function showPage(topage, frompage) {
//     var pageWidth = frompage.width();
//     topage.css("left", pageWidth);
//     topage.addClass("active-page");
//     topage.add(frompage).animate({
//         "left": "-=" + pageWidth + "px"
//     }, 300).promise().done(function() {
//         frompage.removeClass('active-page');
//     });
// }
// var thumbnails = $("#thubmnails"),
//     thumbnails2 = $("#thumbnails2");
// $("a").click(function(e) {
//     e.preventDefault();
//     var frompage = $(this).parent(),
//         topage = frompage.siblings();
//     showPage(topage,frompage);
// });

// slide menu
function initDrag() {
    var total = ($("#workPages > div").size() - 1);
    var start, stop;
    //
    $("#workPages > div").each(function(i) {
        if (i != "0") {
            $(this).css('left', $("#workPages").width() + "px");
        }
        $("#slide_" + i + "").on("hover", function(event) {
            previous = "slide_" + (i - 1) + "";
            current = $(this).attr("id");
            next = "slide_" + (i + 1) + "";
            if (current == "slide_0") {
                previous = "slide_" + total + "";
            }
            if (current == "slide_" + total + "") {
                next = "slide_0";
            }
            $(this).draggable({
                axis: "x",
                cursor: "move",
                start: function(event, ui) {
                    event.stopPropagation();
                    start = ui.position.left;
                },
                stop: function(event, ui) {
                    event.stopPropagation();
                    stop = ui.position.left;
                    if (start > stop) {
                        $("#" + next + "").animate({
                            left: "-=" + $('#workPages').width() + "px"
                        }, {
                            duration: 'slow',
                            easing: 'easeOutBack'
                        });
                        $("#" + current + "").css('left', $('#workPages').width() + "px");
                    } else {
                        $("#" + previous + "").css('left', "-" + ($('#workPages').width() + "px"));
                        $("#" + previous + "").animate({
                            left: "0"
                        }, {});
                        $("#" + current + "").css('left', $('#workPages').width() + "px");
                    }
                }
            });
        });
    });
    timer = true;
}
//
$('.menu > li').find('a').on('click', function(event) {
    event.preventDefault();
    $("#workPages > div").each(function(i) {
        if ($(this).css('left') == "0px") {
            on_screen = $(this).attr('id');
        }
    });
    scroll_element = $(this).attr('href');
    $(scroll_element).animate({
        left: "-=" + $('#workPages').width() + "px"
    }, {
        duration: 'slow',
        easing: 'easeOutBack'
    });
    $("#" + on_screen + "").css('left', $('#workPages').width() + "px");
});
//
$(document).ready(function() {
    initDrag();
});