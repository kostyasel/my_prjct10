$(document).ready(() => {
    $('#slick').slick({
        infinite: true,
        slidesToShow: 3,
    });
    $( "#tabs" ).tabs();

    $( "#accordion" ).accordion({
        collapsible: true,
        active: false,
    });
});