$(document).ready(function () {

  // PreLoader
  setTimeout(function () {
    $(".loader_bg").fadeToggle();
  }, 2500);

  // Navbar background-color
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
      $("#nav").css("background", "#fff");
      $(".navbar .navbar-brand").css("color", "#0076ff");
      $("button span i").css("color", "#0076ff");
      $(".navbar-nav li a").css("color", "#000");
    } else {
      $("#nav").css("background", "transparent");
      $(".navbar .navbar-brand").css("color", "#fff");
      $("button span i").css("color", "#fff");
      $(".navbar-nav li a").css("color", "#fff");
    }

    // Js navbar-collapse trigger
    $(".js-scroll-trigger").click(function () {
      $(".navbar-collapse").collapse("hide");
    });
  });

  // Navigation speed
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  //*********** Animated headline js
  $('.animate-scale').animatedHeadline({
    animationType: 'clip'
  });

  // animated Progress bar
  $(".html").rProgressbar({
    percentage: 93,
    fillBackgroundColor: "#0076ff",
    borderRadius: "0px",
    height: "6px",
    width: "100%",
    duration: 5000,
    ShowProgressCount: true
  });

  $(".ux").rProgressbar({
    percentage: 80,
    fillBackgroundColor: "#0076ff",
    borderRadius: "0px",
    height: "6px",
    width: "100%",
    duration: 5000,
    ShowProgressCount: true
  });

  $(".game").rProgressbar({
    percentage: 65,
    fillBackgroundColor: "#0076ff",
    borderRadius: "0px",
    height: "6px",
    width: "100%",
    duration: 5000,
    ShowProgressCount: true
  });

  $(".graphic").rProgressbar({
    percentage: 55,
    fillBackgroundColor: "#0076ff",
    borderRadius: "0px",
    height: "6px",
    width: "100%",
    duration: 3000,
    ShowProgressCount: true
  });

  // Owl Carousel Slide
  $(".owl-carousel").owlCarousel({
    items: 4,
    margin: 10,
    nav: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 1,
        nav: false
      },
      800: {
        items: 2,
        nav: false
      },
      1200: {
        items: 3,
        nav: false
      }
    }
  });

  // Counter
  $(".counter").jQuerySimpleCounter({
    // start number
    start: 0,

    // end number
    end: 400,

    // easing effect
    easing: "swing",

    // duration time in ms
    duration: 10000
  });
  $(".counter1").jQuerySimpleCounter({
    // start number
    start: 0,

    // end number
    end: 3500,

    // easing effect
    easing: "swing",

    // duration time in ms
    duration: 10000
  });
});
$(document).ready(function () {
  $(".counter2").jQuerySimpleCounter({
    // start number
    start: 0,

    // end number
    end: 4000,

    // easing effect
    easing: "swing",

    // duration time in ms
    duration: 10000
  });
});
$(document).ready(function () {
  $(".counter3").jQuerySimpleCounter({
    // start number
    start: 0,

    // end number
    end: 4500,

    // easing effect
    easing: "swing",

    // duration time in ms
    duration: 10000
  });

  /* popup*/
  $('#inline-popups,#inline-popups-2,#inline-popups-3,#inline-popups-4,#inline-popups-5,#inline-popups-6').magnificPopup({
    delegate: 'a',
    removalDelay: 400, //delay removal by X to allow out-animation
    callbacks: {
      beforeOpen: function () {
        this.st.mainClass = this.st.el.attr('data-effect');
      }
    },
    midClick: true
  });

  // Wow.js installation
  var wow = new WOW({
    boxClass: "wow", // animated element css class (default is wow)
    animateClass: "animated", // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: false, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function (box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true // reset animation on end (default is true)
  });
  wow.init();


  /*====Form validatuon=====*/
  // Disable form submissions if there are invalid fields
  (function () {
    "use strict";
    window.addEventListener(
      "load",
      function () {
        // Get the forms we want to add validation styles to
        var forms = document.getElementsByClassName("needs-validation");
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
          form.addEventListener(
            "submit",
            function (event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add("was-validated");
            },
            false
          );
        });
      },
      false
    );
  })();
});