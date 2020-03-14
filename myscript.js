
$(document).ready(function(){


  const image = $(".image-wrapper");
  const main = $(".main");
  var mainHeight = main.height();
  var mainWidth = main.width();
  var imgLeft = 0;
  var imgRight = 0;

  // fade-in images when page ready
  $(image).css("opacity", "1");


  function getMainDimensions() {
    mainHeight = main.height();
    mainWidth = main.width();
    console.log("mainH" + mainHeight + "," + "mainW" + mainWidth);
  };

  getMainDimensions();


  window.addEventListener('resize', function(event) {
    if(this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function() {
        $(this).trigger('resizeEnd');
    }, 300);
  });



  function pileImages() {

    getMainDimensions();

    image.each( (index,img)=> {

      var randX = Math.floor( (Math.random() * mainWidth) );
      var randY = Math.floor( (Math.random() * mainHeight) );

      $(img).css("transition", "all 1.0s")
      $(img).css("left", randX);
      $(img).css("top", randY);
    });
  }

  // pile on start up
  pileImages();

  $(window).bind('resizeEnd', function() {
    pileImages();
  });


  function toggleGrid() {
    $(".image-row").toggleClass("active");
    if ($(".image-row").hasClass("active")) {
      image.each( (index,img)=> {
        $(image).css("transition", "all 1.0s")
        $(image).css("top", "50%");
        $(image).css("left", "0");
    });
    } else {
      pileImages();
    }
  };

  function toggleSwitch() {
    $(".about-window").toggleClass("display-switch");
  }

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
        //"fullScreen",
        //"download",
        //"thumbs",
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
