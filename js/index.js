$(document).ready(function () {
  // Получаем высоту первой секции
  var firstSectionHeight = $(".full-page").outerHeight();

  // 20% от высоты первой секции
  var triggerPoint = firstSectionHeight * 0.2;

  // При прокрутке проверяем, достигли ли мы 20% от высоты первой секции
  $(window).scroll(function () {
    if ($(window).scrollTop() > triggerPoint) {
      $("header").addClass("fixed");
    } else {
      $("header").removeClass("fixed");
    }
  });
});

$(".up-btn").on("click", function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    "slow"
  );
});

$("#show-menu").on("click", function () {
  $("#hidden-menu").animate(
    {
      right: 0,
    },
    500
  );
});

$("#hidden-menu .close").on("click", function () {
  $("#hidden-menu").animate(
    {
      right: "-300px",
    },
    500
  );
});

$(document).ready(function () {
  $("#slider").slick({
    dots: false, // Отключаем точки
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:
      '<div class="arrow-prev"><i class="fa-solid fa-arrow-left"></i></div>',
    nextArrow:
      '<div class="arrow-next"><i class="fa-solid fa-arrow-right"></i></div>',
  });
});
