$(document).ready(function () {
  $(document).scrollTop(0);

  const introDiv = $(".introdiv");
  const titleDiv = $(".titlediv");
  const mainDiv = $(".main");
  let controller = new ScrollMagic.Controller();

  function handle(delta) {
    var time = 1000;
    var distance = 300;

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(window).scrollTop() - distance * delta,
        },
        time
      );
  }

  let introImgArray = [
    { imgUrl: "img/001_weknow-min.jpg" },
    { imgUrl: "img/002_weknow-min.jpg" },
    { imgUrl: "img/003_weknow-min.jpg" },
    { imgUrl: "img/004_weknow-min.jpg" },
    { imgUrl: "img/005_weknow-min.jpg" },
    { imgUrl: "img/006_weknow-min.jpg" },
    { imgUrl: "img/007_weknow-min.jpg" },
    { imgUrl: "img/008_weknow-min.jpg" },
    { imgUrl: "img/009_weknow-min.jpg" },
    { imgUrl: "img/010_weknow-min.jpg" },
    { imgUrl: "img/011_weknow-min.jpg" },
    { imgUrl: "img/012_weknow-min.jpg" },
    { imgUrl: "img/013_weknow-min.jpg" },
    { imgUrl: "img/014_weknow-min.jpg" },
    { imgUrl: "img/015_weknow-min.jpg" },
    { imgUrl: "img/016_weknow-min.jpg" },
    { imgUrl: "img/017_weknow-min.jpg" },
    { imgUrl: "img/018_weknow-min.jpg" },
    { imgUrl: "img/019_weknow-min.jpg" },
    { imgUrl: "img/020_weknow-min.jpg" },
    { imgUrl: "img/021_weknow-min.jpg" },
    { imgUrl: "img/022_weknow-min.jpg" },
    { imgUrl: "img/023_weknow-min.jpg" },
    { imgUrl: "img/024_weknow-min.jpg" },
    { imgUrl: "img/025_weknow-min.jpg" },
    { imgUrl: "img/026_weknow-min.jpg" },
    { imgUrl: "img/027_weknow-min.jpg" },
    { imgUrl: "img/028_weknow-min.jpg" },
    { imgUrl: "img/029_weknow-min.jpg" },
    { imgUrl: "img/030_weknow-min.jpg" },
    { imgUrl: "img/031_weknow-min.jpg" },
    { imgUrl: "img/032_weknow-min.jpg" },
    { imgUrl: "img/033_weknow-min.jpg" },
    { imgUrl: "img/034_weknow-min.jpg" },
    { imgUrl: "img/035_weknow-min.jpg" },
    { imgUrl: "img/036_weknow-min.jpg" },
    { imgUrl: "img/037_weknow-min.jpg" },
    { imgUrl: "img/038_weknow-min.jpg" },
    { imgUrl: "img/039_weknow-min.jpg" },
    { imgUrl: "img/040_weknow-min.jpg" },
    { imgUrl: "img/041_weknow-min.jpg" },
    { imgUrl: "img/042_weknow-min.jpg" },
    { imgUrl: "img/043_weknow-min.jpg" },
    { imgUrl: "img/044_weknow-min.jpg" },
    { imgUrl: "img/045_weknow-min.jpg" },
    { imgUrl: "img/046_weknow-min.jpg" },
    { imgUrl: "img/047_weknow-min.jpg" },
    { imgUrl: "img/048_weknow-min.jpg" },
    { imgUrl: "img/049_weknow-min.jpg" },
    { imgUrl: "img/050_weknow-min.jpg" },
    { imgUrl: "img/051_weknow-min.jpg" },
    { imgUrl: "img/052_weknow-min.jpg" },
    { imgUrl: "img/053_weknow-min.jpg" },
    { imgUrl: "img/054_weknow-min.jpg" },
    { imgUrl: "img/055_weknow-min.jpg" },
    { imgUrl: "img/056_weknow-min.jpg" },
    { imgUrl: "img/057_weknow-min.jpg" },
    { imgUrl: "img/058_weknow-min.jpg" },
    { imgUrl: "img/059_weknow-min.jpg" },
    { imgUrl: "img/060_weknow-min.jpg" },
    { imgUrl: "img/061_weknow-min.jpg" },
    { imgUrl: "img/062_weknow-min.jpg" },
    { imgUrl: "img/063_weknow-min.jpg" },
    { imgUrl: "img/064_weknow-min.jpg" },
    { imgUrl: "img/065_weknow-min.jpg" },
    { imgUrl: "img/066_weknow-min.jpg" },
    { imgUrl: "img/067_weknow-min.jpg" },
    { imgUrl: "img/068_weknow-min.jpg" },
    { imgUrl: "img/069_weknow-min.jpg" },
    { imgUrl: "img/070_weknow-min.jpg" },
    { imgUrl: "img/071_weknow-min.jpg" },
    { imgUrl: "img/072_weknow-min.jpg" },
    { imgUrl: "img/073_weknow-min.jpg" },
    { imgUrl: "img/074_weknow-min.jpg" },
    { imgUrl: "img/075_weknow-min.jpg" },
    { imgUrl: "img/076_weknow-min.jpg" },
    { imgUrl: "img/077_weknow-min.jpg" },
    { imgUrl: "img/078_weknow-min.jpg" },
    { imgUrl: "img/079_weknow-min.jpg" },
    { imgUrl: "img/080_weknow-min.jpg" },
    { imgUrl: "img/081_weknow-min.jpg" },
    { imgUrl: "img/082_weknow-min.jpg" },
    { imgUrl: "img/083_weknow-min.jpg" },
    { imgUrl: "img/084_weknow.png" },
    { imgUrl: "img/085_weknow-min.jpg" },
    { imgUrl: "img/086_weknow-min.jpg" },
    { imgUrl: "img/087_weknow-min.jpg" },
    { imgUrl: "img/088_weknow-min.jpg" },
    { imgUrl: "img/089_weknow-min.jpg" },
    { imgUrl: "img/090_weknow-min.jpg" },
    { imgUrl: "img/091_weknow-min.jpg" },
  ];

  let mainIcons = [
    {
      thumb: "/img/thumbs/001_lil_weknow.png",
      standard: "/img/001_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/002_lil_weknow.png",
      standard: "/img/002_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/003_lil_weknow.png",
      standard: "/img/003_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/004_lil_weknow.png",
      standard: "/img/004_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/005_lil_weknow.png",
      standard: "/img/005_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/006_lil_weknow.png",
      standard: "/img/006_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/007_lil_weknow.png",
      standard: "/img/007_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/008_lil_weknow.png",
      standard: "/img/008_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/009_lil_weknow.png",
      standard: "/img/009_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/010_lil_weknow.png",
      standard: "/img/010_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/011_lil_weknow.png",
      standard: "/img/011_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/012_lil_weknow.png",
      standard: "/img/012_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/013_lil_weknow.png",
      standard: "/img/013_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/014_lil_weknow.png",
      standard: "/img/014_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/015_lil_weknow.png",
      standard: "/img/015_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/016_lil_weknow.png",
      standard: "/img/016_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/017_lil_weknow.png",
      standard: "/img/017_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/018_lil_weknow.png",
      standard: "/img/018_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/018_lil_weknow.png",
      standard: "/img/018_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/019_lil_weknow.png",
      standard: "/img/019_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/020_lil_weknow.png",
      standard: "/img/020_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/021_lil_weknow.png",
      standard: "/img/021_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/022_lil_weknow.png",
      standard: "/img/022_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/023_lil_weknow.png",
      standard: "/img/023_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/024_lil_weknow.png",
      standard: "/img/024_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/025_lil_weknow.png",
      standard: "/img/025_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/026_lil_weknow.png",
      standard: "/img/026_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/027_lil_weknow.png",
      standard: "/img/027_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/028_lil_weknow.png",
      standard: "/img/028_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/029_lil_weknow.png",
      standard: "/img/029_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/030_lil_weknow.png",
      standard: "/img/030_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/031_lil_weknow.png",
      standard: "/img/031_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/032_lil_weknow.png",
      standard: "/img/032_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/033_lil_weknow.png",
      standard: "/img/033_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/034_lil_weknow.png",
      standard: "/img/034_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/035_lil_weknow.png",
      standard: "/img/035_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/036_lil_weknow.png",
      standard: "/img/036_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/037_lil_weknow.png",
      standard: "/img/037_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/038_lil_weknow.png",
      standard: "/img/038_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/039_lil_weknow.png",
      standard: "/img/039_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/040_lil_weknow.png",
      standard: "/img/040_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/041_lil_weknow.png",
      standard: "/img/041_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/042_lil_weknow.png",
      standard: "/img/042_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/043_lil_weknow.png",
      standard: "/img/043_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/044_lil_weknow.png",
      standard: "/img/044_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/045_lil_weknow.png",
      standard: "/img/045_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/046_lil_weknow.png",
      standard: "/img/046_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/047_lil_weknow.png",
      standard: "/img/047_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/048_lil_weknow.png",
      standard: "/img/048_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/049_lil_weknow.png",
      standard: "/img/049_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/050_lil_weknow.png",
      standard: "/img/050_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/051_lil_weknow.png",
      standard: "/img/051_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/052_lil_weknow.png",
      standard: "/img/052_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/053_lil_weknow.png",
      standard: "/img/053_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/054_lil_weknow.png",
      standard: "/img/054_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/055_lil_weknow.png",
      standard: "/img/055_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/056_lil_weknow.png",
      standard: "/img/056_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/057_lil_weknow.png",
      standard: "/img/057_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/058_lil_weknow.png",
      standard: "/img/058_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/059_lil_weknow.png",
      standard: "/img/059_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/060_lil_weknow.png",
      standard: "/img/060_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/061_lil_weknow.png",
      standard: "/img/061_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/062_lil_weknow.png",
      standard: "/img/062_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/063_lil_weknow.png",
      standard: "/img/063_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/064_lil_weknow.png",
      standard: "/img/064_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/065_lil_weknow.png",
      standard: "/img/065_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/066_lil_weknow.png",
      standard: "/img/066_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/067_lil_weknow.png",
      standard: "/img/067_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/068_lil_weknow.png",
      standard: "/img/068_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/069_lil_weknow.png",
      standard: "/img/069_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/070_lil_weknow.png",
      standard: "/img/070_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/071_lil_weknow.png",
      standard: "/img/071_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/072_lil_weknow.png",
      standard: "/img/072_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/073_lil_weknow.png",
      standard: "/img/073_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/074_lil_weknow.png",
      standard: "/img/074_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/075_lil_weknow.png",
      standard: "/img/075_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/076_lil_weknow.png",
      standard: "/img/076_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/077_lil_weknow.png",
      standard: "/img/077_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/078_lil_weknow.png",
      standard: "/img/078_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/079_lil_weknow.png",
      standard: "/img/079_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/080_lil_weknow.png",
      standard: "/img/080_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/081_lil_weknow.png",
      standard: "/img/081_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/082_lil_weknow.png",
      standard: "/img/082_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/083_lil_weknow.png",
      standard: "/img/083_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/084_lil_weknow.png",
      standard: "/img/084_weknow.png",
    },
    {
      thumb: "/img/thumbs/085_lil_weknow.png",
      standard: "/img/085_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/086_lil_weknow.png",
      standard: "/img/086_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/087_lil_weknow.png",
      standard: "/img/087_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/088_lil_weknow.png",
      standard: "/img/088_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/089_lil_weknow.png",
      standard: "/img/089_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/090_lil_weknow.png",
      standard: "/img/090_weknow-min.jpg",
    },
    {
      thumb: "/img/thumbs/091_lil_weknow.png",
      standard: "/img/091_weknow-min.jpg",
    },
  ];

  // The Fisher-Yates shuffle
  function shuffle(array) {
    var m = array.length,
      t,
      i;
    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }

  // -----------------------------------------------------------------------------
  // ----------------------------- USER GUIDANCE ---------------------------------
  // -----------------------------------------------------------------------------

  // SCROLL HINTER
  // Give User Hint to Scroll

  // display scroll hint if user doesn't scroll
  if (window.scrollY == 0) {
    setTimeout(() => {
      $("#scrollhintdiv").removeClass("inactive");
    }, 5000);
  }

  // makes scroll hint inactive if user scrolls
  $(window).scroll(() => {
    let windowScroll = $(window).scrollTop();

    if (windowScroll >= 100) {
      $("#scrollhintdiv").addClass("inactive");
      setTimeout(() => {
        $("#scrollhintdiv").css("display", "none");
      }, 3000);
    }
  });

  // MOBILE HINTER
  $("#mobilehintdiv").click(() => {
    $("#mobilehintdiv").css("display", "none");
  });

  // -----------------------------------------------------------------------------
  // ------------------------------ INTRO SCENE ----------------------------------
  // -----------------------------------------------------------------------------

  const numberOfScenes = 12;

  // Set Height of Intro Div
  // * 10 slows opacity shift during scroll, + 1 accomodates for blankImg
  let introDivHeight = $(".introdiv").height() * (numberOfScenes + 1) * 10;
  $(".introdiv").css("height", introDivHeight);

  // Randomize intro image sequence
  introImgArray = shuffle(introImgArray);

  // Print Intro Scenes to Intro Div
  function printIntroImgs() {
    for (let i = 0; i < numberOfScenes; i++) {
      let currentScene = $(introImgArray)[i];
      $(introDiv).append(
        "<div class='introimg' id='introimg-" + (i + 1) + "'></div>"
      );
    }
  }

  printIntroImgs();

  // create array from printed images
  let introImgs = [];
  introImgs = $(".introimg");

  // match scenes with background-image urls
  function matchSceneWithUrl() {
    for (let i = 0; i < introImgs.length; i++) {
      let currentImg = $(introImgs)[i];
      let currentScene = $(introImgArray)[i];
      currentImg.style.backgroundImage =
        "url('" + $(currentScene).prop("imgUrl") + "')";
    }
  }
  matchSceneWithUrl();

  // Fade images in and out by attaching opacity to scroll but only when intro active
  if (!$(".introdiv").hasClass("inactive")) {
    $(introDiv).append("<div class='introimg' id='blank'></div>");
    $(window).scroll(() => {
      introImgs = $(".introimg");
      let scrollTop = $(this).scrollTop();
      let introSceneHeight = $(".introdiv").height() / (numberOfScenes + 1); // + 1 for blankImg
      let scrollcalc = (introSceneHeight - scrollTop) / introSceneHeight;
      let opacityTotal = 0;

      // add blank image for end scene fade effect to black

      for (let i = 0; i < numberOfScenes + 1; i++) {
        let img = introImgs[i];

        // console.log(scrollcalc);
        $(img).css({
          opacity: 0,
        });
        opacityTotal = 1 - scrollcalc - i;
        $(img).css({
          opacity: opacityTotal,
        });
      }
    });
  }

  if ($(".introimg").css("opacity") > 0) {
    $(".introimg").addClass("current");
  }
  if ($(".introimg").css("opacity") > 1) {
    $(".introimg").removeClass("current");
  }

  // -----------------------------------------------------------------------------
  // ------------------------------ TITLE SCENE ----------------------------------
  // -----------------------------------------------------------------------------

  const sceneDuration = introDivHeight / (introImgArray.length + 1);
  const introOffset = 400;

  // TITLE SCENE INIT VIA SCROLL MAGIC TRIGGER
  const titlescene = new ScrollMagic.Scene({
    triggerElement: "#leTrigger",
    offset: introDivHeight - introOffset,
    triggerHook: 0.5,
    duration: 1,
  })
    // .addIndicators()
    .addTo(controller);

  titlescene.on("enter", (event) => {
    setTimeout(() => {
      $(titleDiv).removeClass("inactive");
      $(introDiv).addClass("inactive");
      anime
        .timeline({ loop: false })
        .add({
          targets: ".cloudtext",
          translateY: [-800, -40],
          easing: "easeOutExpo",
          duration: 11000,
          delay: (el, i) => 75 * i,
        })
        .add({
          targets: ".cloudtext",
          opacity: 1,
          duration: 3000,
          easing: "easeOutExpo",
          delay: 2000,
        });
    }, 3000);

    setTimeout(() => {
      $(titleDiv).addClass("inactive");
    }, 20000);
  });

  // -----------------------------------------------------------------------------
  // ----------------------------- MAIN SCENE ------------------------------------
  // -----------------------------------------------------------------------------

  // MAIN SCENE INIT VIA SCROLL MAGIC TRIGGER
  const mainscene = new ScrollMagic.Scene({
    triggerElement: "#leTrigger",
    offset: introDivHeight - introOffset,
    triggerHook: 0.5,
    duration: sceneDuration,
  })
    // .addIndicators()
    .addTo(controller);

  // get dimensions of main scene
  function getMainDimensions() {
    mainHeight = $(mainDiv).height();
    mainWidth = $(mainDiv).width();
  }

  // print icons to mainDiv
  function printIcons() {
    mainIcons = shuffle(mainIcons);
    for (let i = 0; i < mainIcons.length; i++) {
      let currentIcon = $(mainIcons)[i];
      $(mainDiv).append(
        "<a class='image-wrapper draggable' data-fancybox='gallery' data-selectable='false' " +
          "href='" +
          $(currentIcon).prop("standard") +
          "' id='img-" +
          i +
          "'><img class='image-thumb' src='" +
          $(currentIcon).prop("thumb") +
          "' /></a>"
      );
    }
  }

  // CENTER IMAGES ------------------------------------------------------------
  // pile images in center
  function centerPile() {
    let img = $(".image-wrapper");
    $(img).css("transition", "all 3.0s");

    // center images
    $(".image-wrapper").each((index, img) => {
      $(img).css("top", "calc(40%)");
      $(img).css("left", "calc(50% - 20px)"); // 20px = main padding
    });
  }

  // PILE IMAGES WITH RANDOM COORDINATES FUNCTION -----------------------------
  // pile images with random coordinates
  function pileImages() {
    $(mainDiv).addClass("pile-view");
    getMainDimensions();

    let mainPadding = 0;

    // change padding depending on scene width
    if (mainWidth <= 829) {
      mainPadding = 20;
    } else {
      mainPadding = 70;
    }

    centerPile();

    $(".image-wrapper").each((index, img) => {
      $(img).css("transition", "all 3.0s");
      $(img).css("position", "absolute");

      let randX = Math.floor((Math.random() * mainWidth) / 1.1);
      let randY = Math.floor((Math.random() * mainHeight) / 1.1);

      if (randX < mainPadding) {
        randX = randX + mainPadding;
      }

      if (randX > mainWidth - mainPadding) {
        randX = randX - mainPadding;
      }

      if (randY < mainPadding) {
        randY = randY + mainPadding;
      }

      if (randY > mainHeight - mainPadding) {
        randY = randY - mainPadding;
      }

      // fixes lag when dragging thumbs
      setTimeout(() => {
        $(img).css("transition", "position 0s");
      }, 4000);

      $(img).css("left", randX);
      $(img).css("top", randY);
    });
  }

  // mainDiv event timeline  ------------------------------------------
  mainscene.on("enter", (event) => {
    // stops title scene from displaying after it's been viewed
    $("#leTrigger").css("display", "none");

    setTimeout(() => {
      $(titleDiv).css("opacity", "0");
      printIcons();
    }, 10000);

    setTimeout(() => {
      $(mainDiv).removeClass("inactive");
      $(mainDiv).addClass("visible");
      setTimeout(() => {
        $(".image-wrapper").css("opacity", "1");
        centerPile();
        pileImages();
        // draggable init ------------------------------------------------------
      }, 1000);
    }, 11000);

    setTimeout(() => {
      $(titleDiv).css("display", "none");
      $(".navbar-div").addClass("visible");
      $(".introdiv").css("height", "0");
      $(".introdiv").css("display", "none");
      $(".draggable").draggable();
    }, 13000);
  });

  // GRID FUNCTION
  // arranges images into grid
  function toggleGrid() {
    mainIcons = shuffle(mainIcons);
    let img = $(".image-wrapper");
    $(mainDiv).addClass("grid-view");
    $(img).css("opacity", "0");
    img = shuffle(img);

    setTimeout(() => {
      $(img).css("position", "relative");
    }, 5000);

    setTimeout(() => {
      $(img).css("top", "0");
      $(img).css("left", "0");
      $(img).css("transition", "position 0s");
    }, 5500);

    setTimeout(() => {
      $(img).css("transition", "opacity ease 3s");
      $(img).css("opacity", "1");
    }, 5500);
  }

  // FANCY BOX -----------------------------------------------------------------
  // fancybox init

  $().fancybox({
    selector: ".image-wrapper",
    protect: true,
    animationEffect: "fade",
    transitionIn: "fade",
    transitionOut: "fade",
    loop: true,
    changeFade: "slow",
    speedIn: 3000,
    speedOut: 3000,
    keyboard: false,
    touch: false,
    wheel: false,
    buttons: ["close"],
  });

  // stops fancybox from opening after image is dragged
  function cancelFancybox() {
    $.fancybox.cancel;
    $.fancybox.close;
    $.fancybox.destroy();
  }

  // WINDOW SIZING EVENT CONTROL - what to do when browser changes size
  // check window for resize ---------------------------------------------------
  window.addEventListener("resize", (event) => {
    if (this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function () {
      $(this).trigger("resizeEnd");
    }, 300);
  });

  // reorganize images after window resize ------------------------------------
  $(window).bind("resizeEnd", () => {
    if ($(mainDiv).hasClass("grid-view") || $(mainDiv).hasClass("loading")) {
      return false;
    } else {
      pileImages();
    }
  });

  // ---------------------------------------------------------------------------
  //          ---------------------- NAVBAR ----------------------
  // ---------------------------------------------------------------------------

  //  BUG KILLER FOR MULTI CLICK ACTION - use "loading" class to make nav buttons temporarily inactive
  function checkIsLoading(animationDuration) {
    if ($(".nav-link").hasClass("loading")) {
      setTimeout(() => {
        $(".nav-link").removeClass("loading");
      }, animationDuration);
      return false;
    }
  }

  // Infobox Close Button
  $("#closebutton").click(() => {
    if ($("#infobox").hasClass("inactive")) {
      return true;
      // in case of multiclick during animation
    }
    $("#infobox").addClass("inactive");
  });

  $("#info-button").click(() => {
    $("#infobox").toggleClass("inactive");
  });

  // Grid Button
  $(".gridImages").click(() => {
    // prevents images from jumping position
    if (
      $(".gridImages").hasClass("loading") ||
      $(".pileImages").hasClass("loading")
    ) {
      return false;
    }
    // no else statement keeps grid view from refiring
    if ($(mainDiv).hasClass("pile-view")) {
      $(mainDiv).removeClass("pile-view");
      $(mainDiv).addClass("grid-view");
      centerPile();
    }
    $(".gridImages").addClass("loading");

    toggleGrid();
    checkIsLoading(6500);
  });

  // Pile Button
  $(".pileImages").click(() => {
    // prevents images from jumping position
    centerPile();
    pileImages();
    if (
      $(".pileImages").hasClass("loading") ||
      $(".gridIamges").hasClass(".loading")
    ) {
      return false;
    }
    if ($(mainDiv).hasClass("grid-view")) {
      $(mainDiv).removeClass("grid-view");
    }
    $(".pileImages").addClass("loading");
    checkIsLoading(4500);
  });
}); //end document.ready

$(window).on("load", function () {
  // start at 0 every page load
  $(this).scrollTop(0);
  document.cookie = "cookie2=value2; SameSite=None; Secure";
});
