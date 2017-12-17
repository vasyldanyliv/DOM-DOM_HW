$(function() {
    $(window).on('scroll', function() {
        $('#parallax').css('margin-top', $(window).scrollTop() * - .2);
    });
});
