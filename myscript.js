$(document).ready(function(){

  function toggleSwitch() {
    $(".about-window").toggleClass("display-switch");
  }

  $("#close-me").click(function(){
    toggleSwitch()
  });

  $("#info-button").click(function(){
    toggleSwitch()
  });



  const image = $(".image-wrapper");



  image.fancybox(
    {
      animationEffect: "fade",
    }
  );



  image.draggable(
    {
      delay: 0,
      containment: "main",
      distance: 0
    }
  );





  var containerWidth = $("main").height();
  var containerHeight = $("main").width();

  function pileImages() {
    image.each( (index,img)=> {
      var randX = Math.floor((Math.random() * containerWidth / 1.1));
      var randY = Math.floor((Math.random() * containerHeight / 3));
      console.log(randY);
      console.log(randX);
      $(img).css("left", randX);
      $(img).css("top", randY);
    });
  }

  pileImages();

  $(".pileImages").click(function() {
    pileImages();
  });


});//end document.ready
