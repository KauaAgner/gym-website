document.addEventListener("DOMContentLoaded", function () {
  new Glider(document.querySelector('.glider'), {
    draggable: true,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });
});
