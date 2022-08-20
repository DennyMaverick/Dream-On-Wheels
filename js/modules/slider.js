import $ from "jquery"

$(function () {
  $('[data-slider="slick"]').slick({
    arrows: false,
    adaptiveHeight: true,
    fade: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          autoplay: true,
          autoplaySpeed: 10000,
          // adaptiveHeight: false,
        },
      },
    ],
  })

  $(".slickPrev").on("click", function (event) {
    event.preventDefault()
    $('[data-slider="slick"]').slick("slickPrev")
  })

  $(".slickNext").on("click", function (event) {
    event.preventDefault()
    $('[data-slider="slick"]').slick("slickNext")
  })
})
