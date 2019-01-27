$(function() {

	// Custom JS
    $(".our-members__list").slick({
          slidesToShow: 3,
        responsive: [
            {
              breakpoint: 1366,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1
              }
            }
          ]
        });
});
