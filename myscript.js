
$(document).ready(function() {

  const introImages = $(".introimg");
  const introDiv = $(".introdiv");
  const titleDiv = $(".titlediv");
  const mainDiv = $(".main");

	// INIT SCROLL MAGIC CONTROLLER FOR SCENES
	let controller = new ScrollMagic.Controller();

	// ---------------------- INTRO SCENE ----------------------

  const sceneDuration = 9000;
  const offset = 9000;

	const introscene1 = new ScrollMagic.Scene({
    triggerElement: "#introtrigger1",
    offset:  700,
    triggerHook: 0.8,
    duration: sceneDuration,
  })
  .setClassToggle("#introimg1", "visible")
	// .addIndicators()
	.addTo(controller);

  const introscene2 = new ScrollMagic.Scene({
    triggerElement: "#introtrigger2",
    offset: offset * 2,
    triggerHook: 0.5,
    duration: sceneDuration,
  })
  .setClassToggle("#introimg2", "visible")
	// .addIndicators()
	.addTo(controller);

  const introscene3 = new ScrollMagic.Scene({
    triggerElement: "#introtrigger3",
    offset: offset * 3,
    triggerHook: 0.5,
    duration: sceneDuration,
  })
  .setClassToggle("#introimg3", "visible")
	// .addIndicators()
	.addTo(controller);

  const introscene4 = new ScrollMagic.Scene({
    triggerElement: "#introtrigger4",
    offset: offset * 4,
    triggerHook: 0.5,
    duration: sceneDuration,
  })
  .setClassToggle("#introimg4", "visible")
	// .addIndicators()
	.addTo(controller);

  const introscene5 = new ScrollMagic.Scene({
    triggerElement: "#introtrigger5",
    offset: offset * 5,
    triggerHook: 0.5,
    duration: sceneDuration,
  })
  .setClassToggle("#introimg5", "visible")
	// .addIndicators()
	.addTo(controller);

  const introscene6 = new ScrollMagic.Scene({
    triggerElement: "#introtrigger6",
    offset: offset * 6,
    triggerHook: 0.5,
    duration: sceneDuration,
  })
  .setClassToggle("#introimg6", "visible")
	// .addIndicators()
	.addTo(controller);

  const introscene7 = new ScrollMagic.Scene({
    triggerElement: "#introtrigger7",
    offset: offset * 7,
    triggerHook: 0.5,
    duration: sceneDuration,
  })
  .setClassToggle("#introimg7", "visible")
	// .addIndicators()
	.addTo(controller);

  const introscene8 = new ScrollMagic.Scene({
    triggerElement: "#introtrigger8",
    offset: offset * 8,
    triggerHook: 0.5,
    duration: sceneDuration,
  })
  .setClassToggle("#introimg8", "visible")
	// .addIndicators()
	.addTo(controller);

  const introscene9 = new ScrollMagic.Scene({
    triggerElement: "#introtrigger9",
    offset: offset * 9,
    triggerHook: 0.5,
    duration: sceneDuration,
  })
  .setClassToggle("#introimg9", "visible")
	// .addIndicators()
	.addTo(controller);

  const introscene10 = new ScrollMagic.Scene({
    triggerElement: "#introtrigger10",
    offset: offset * 10,
    triggerHook: 0.5,
    duration: sceneDuration,
  })
  .setClassToggle("#introimg10", "visible")
	// .addIndicators()
	.addTo(controller);

  const introscene11 = new ScrollMagic.Scene({
    triggerElement: "#introtrigger11",
    offset: offset * 11,
    triggerHook: 0.5,
    duration: sceneDuration,
  })
  .setClassToggle("#introimg11", "visible")
	// .addIndicators()
	.addTo(controller);

  const introscene12 = new ScrollMagic.Scene({
    triggerElement: "#introtrigger12",
    offset: offset * 12,
    triggerHook: 0.5,
    duration: sceneDuration,
  })
  .setClassToggle("#introimg12", "visible")
	// .addIndicators()
	.addTo(controller);


// ---------------------- TITLE SCENE ----------------------

  const titlescene = new ScrollMagic.Scene({
    triggerElement: "#titletrigger",
    offset: (offset + (sceneDuration * 12)),
    triggerHook: 0.4,
    duration: sceneDuration
  })
  // .addIndicators()
  .addTo(controller);

  const titlekill = new ScrollMagic.Scene({
   triggerElement: "#titlekill",
   offset: (offset + (sceneDuration * 13.66)),
   triggerHook: 0.1,
   duration: "100%",
  })
  // .addIndicators()
  .addTo(controller);

  // no display to allow dragging in main scene
  titlekill.on("enter", function (event) {
     $(titleDiv).addClass("inactive");
  });


  // TEXT ANIMATION
  const textWrapper = document.querySelector('#cloudtext');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  titlescene.on("enter", function (event) {
    $(introDiv).addClass("inactive");

    setTimeout(function() {
      $(titleDiv).removeClass("inactive");
      anime.timeline({loop: false})
      .add({
        targets: '#cloudtext .letter',
        translateY: [-120, 300],
        easing: "easeOutExpo",
        duration: 1400,
        delay: (el, i) => 100 * i
      }).add({
        targets: '#cloudtext',
        opacity: 0,
        duration: 2000,
        easing: "easeOutExpo"
        // delay: 1000
      });
    }, 1000);

  });


//  ---------------------- MAIN SCENE ----------------------

  const mainscene = new ScrollMagic.Scene({
   triggerElement: "#maintrigger",
   offset: ((100) + (sceneDuration * 13)),
   triggerHook: 0.4,
   duration: sceneDuration,
 })
 // .addIndicators()
 .addTo(controller);

 setTimeout(function() {
     mainscene.on("enter", function (event) {
     $(mainDiv).removeClass("inactive");
     $(mainDiv).addClass("visible");

     if ($(mainDiv).hasClass("visible")) {
       setTimeout(function() {
        $(image).css("opacity", "1");
         centerPile();
         pileImages();
         console.log("made it");
       }, 6000);
     }

   });
 }, 5000);

 // set up image variables
  const image = $(".image-wrapper");
  const main = $(mainDiv);
  let mainHeight = main.height();
  let mainWidth = main.width();
  let imgLeft = 0;
  let imgRight = 0;

  // pile images in center
  function centerPile() {
    $(image).each( (index,img)=> {
      $(img).css("position", "relative");
      $(img).css("transition", "all 1.0s");
      $(img).css("top", "50%");
      $(img).css("left", "50%");
    });
  }

  // get dimensions of main scene
  function getMainDimensions() {
    mainHeight = $(main).height();
    mainWidth = $(main).width();
  };

  // randomize image coordinates
  function pileImages() {

    if ($(main).hasClass("active")) {
      $(main).removeClass("active");
    }

    getMainDimensions();

    const mainPadding = 60;
    $(image).each( (index,img)=> {
      $(image).css("transition", "all 3.0s")
      $(image).css("position", "absolute");

      let randX = Math.floor( (Math.random() * mainWidth / 1.1) );
      let randY = Math.floor( (Math.random() * mainHeight / 1.1) );

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

  // orgainzes images into grid
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

  // fancybox init
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

  // stops fancybox from opening after image is dragged
  function cancelFancybox() {
    $.fancybox.cancel;
    $.fancybox.close;
    $.fancybox.destroy();
  }

  document.addEventListener("mouseup", function(event) {
    cancelFancybox();
    console.log("mouseup fired")
  });
  document.addEventListener("dragend", function(event) {
    cancelFancybox();
    console.log("dragend fired")
  });

  // draggable init
  $(image).draggable(
    {
      delay: 1,
      containment: "main",
      distance: 0,
      cursor: '/eye.ico'
    }
  );


  $(function() {
     $(image).draggable({
         start: function(event, ui) { $(this).css("height",10); },
         stop: function(event, ui) { $(this).css("height",150); }
     });
 });


 // check window for resize
  window.addEventListener('resize', function(event) {
    if(this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function() {
        $(this).trigger('resizeEnd');
    }, 300);
  });

  // reorganize after window resize
  $(window).bind('resizeEnd', function() {
    centerPile();
    pileImages();
  });



// ---------------------- NAVBAR ----------------------

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


});//end document.ready
