$(document).ready(function() {
    let currentSlide = 1;
    let reloadInterval;

    function activateSlide(currentSlide) {
        $(".slide").removeClass("active");
        $(".slide:nth-child(" + currentSlide + ")").addClass("active");
    }

    $(".dot").click(function() {
        $(".dot").removeClass("active");
        $(this).addClass("active");
        currentSlide = $(this).index() + 1;
        rotateSlides();
    });

    function rotateSlides() {
        $(".slide").each(function(index) {
            activateSlide(currentSlide);
            let rotation = (90 * (index + 5 - currentSlide));
            $(this).css("transform", "rotate(" + rotation + "deg)");
        });
    }

    function reloadSlide() {
        currentSlide++;
        if (currentSlide > 4) {
            currentSlide = 1;
        }
        $(".dot:nth-child(" + currentSlide + ")").trigger("click");
    }

    $(".dot:nth-child(" + currentSlide + ")").trigger("click");
    reloadInterval = setInterval(reloadSlide, 6000);
});