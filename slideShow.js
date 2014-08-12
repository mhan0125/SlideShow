$(function () {
    setInterval(function () {
        slideSwitch(), previewSwitch();
    }, 4000);

    $('#preview img').click(function () {
        var $dataAttr = $(this).data().num.toString();
        $('#preview img').removeClass('active');
        $('#slideshow img').removeClass('active');
        $(this).addClass('active');
        var $slideImage = $('#slideshow').find('*[data-num=' + $dataAttr + ']');
        $slideImage.addClass('active');
    });

    function slideSwitch() {
        var $active = $('#slideshow IMG.active');
        if ($active.length === 0) $active = $('#slideshow IMG:last');

        var $next = $active.next().length ? $active.next() : $('#slideshow IMG:first');

        $active.addClass('last-active');

        $next.css({
            opacity: 0.0
        })
            .addClass('active')
            .animate({
            opacity: 1.0
        }, 1000, function () {
            $active.removeClass('active last-active');
        });
    }

    function previewSwitch() {
        var $active = $('#preview IMG.active');
        if ($active.length === 0) $active = $('#preview IMG:last');
        var $next = $active.parent().next().find('img').length ? $active.parent().next().find('img') : $('#preview IMG:first');

        $active.addClass('last-active').removeClass('active');

        $next.addClass('active');
    }
});