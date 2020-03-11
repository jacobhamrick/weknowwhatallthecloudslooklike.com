$(document).ready(function(){


  const image = $(".image-wrapper");

  function pileImages() {
    var containerWidth = $("main").height();
    var containerHeight = $("main").width();
    image.each( (index,img)=> {
      var randX = Math.floor((Math.random() * containerWidth / 1));
      var randY = Math.floor((Math.random() * containerHeight / 3));
      console.log(randY);
      console.log(randX);
      $(img).css("transition", "all 1.0s")
      $(img).css("left", randX);
      $(img).css("top", randY);
    });
  }

  // pile on start up
  pileImages();


  function toggleGrid() {
    $(".image-row").toggleClass("active");
    if ($(".image-row").hasClass("active")) {
      $(image).css("transition", "all 1.0s")
      $(image).css("top", "0");
      $(image).css("left", "0");
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
        "thumbs",
        "close"
      ],
      animationEffect: "fade",
      loop: true,
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
    document.addEventListener("dragend", function(event) {
      $.fancybox.close();
      console.log("drag end fired")
    });


});//end document.ready
