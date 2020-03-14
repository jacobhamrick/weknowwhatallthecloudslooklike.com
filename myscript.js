
$(document).ready(function(){


  var image = $(".image-wrapper");
  const main = $(".main");
  var mainHeight = main.height();
  var mainWidth = main.width();
  var imgLeft = 0;
  var imgRight = 0;

  // fade-in images when page ready
  $(image).css("opacity", "1");

  function toggleSwitch() {
    $(".about-window").toggleClass("display-switch");
  }

  function centerPile() {
    $(image).each( (index,img)=> {
      $(img).css("position", "relative");
      $(img).css("transition", "all 1.0s");
      $(img).css("top", "50%");
      $(img).css("left", "50%");
    });
  }

  function getMainDimensions() {
    mainHeight = $(main).height();
    mainWidth = $(main).width();
    console.log("mainH: " + mainHeight + ", " + "mainW: " + mainWidth);
  };

  function pileImages() {

    if ($(main).hasClass("active")) {
      $(main).removeClass("active");
    }

    getMainDimensions();

    const mainPadding = 60;

    $(image).each( (index,img)=> {
      $(image).css("transition", "all 1.0s")
      $(image).css("position", "fixed");

      var randX = Math.floor( (Math.random() * mainWidth) );
      var randY = Math.floor( (Math.random() * mainHeight) );

      if ( randX < mainPadding ) {
        randX = randX + mainPadding;
      };

      if ( randX > (mainWidth - mainPadding) ) {
        randX = randX - mainPadding;
      }

      if ( randY < mainPadding ) {
        randY = randY + mainPadding;
      };

      if ( randY > (mainHeight - mainPadding) ) {
        randY = randY - mainPadding;
      }

      $(img).css("left", randX);
      $(img).css("top", randY);
    });
  }


  function toggleGrid() {
    main.addClass("active");
    $(image).css("position", "relative");

    if ($(main).hasClass("active")) {

      $(image).each( (index,img)=> {
        $(img).css("top", "0");
        $(img).css("left", "0");
      });

    }
  };



  window.addEventListener('resize', function(event) {
    if(this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function() {
        $(this).trigger('resizeEnd');
    }, 300);
  });

  $(window).bind('resizeEnd', function() {
    centerPile();
    pileImages();
  });

  // pile on start up
  centerPile();
  pileImages();






  $("#close-me").click(function(){
    toggleSwitch()
  });

  $("#info-button").click(function() {
    toggleSwitch()
  });

  $(".gridImages").click(function() {
    toggleGrid();
  });

  $(".pileImages").click(function() {
    pileImages();
  });

  image.fancybox(
    {
      buttons: [
        "close"
      ],
      animationEffect: "fade",
      transitionIn: "fade",
      transitionOut: "fade",
      loop: true,
      changeFade: "fast",
      speedIn: 100,
      speedOut: 100,
      touch: false

    }
  );

  image.draggable(
    {
      delay: 0,
      containment: "main",
      distance: 0
    }
  );


    // stops fancybox from opening after image is dragged
    document.addEventListener("mouseup", function(event) {
      $.fancybox.cancel;
      $.fancybox.close;
      console.log("mouseup fired")
    });

    document.addEventListener("dragend", function(event) {
      $.fancybox.cancel;
      $.fancybox.close;
      console.log("dragend fired")
    });


});//end document.ready
