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

  var image = $(".image-wrapper");
  image.fancybox();
  image.draggable(
          {
            delay: 0,
            containment: "main",
            distance: 0
          }
        );

  var containerWidth = $(".image-container").height();
  var containerHeight = $(".image-container").width();

    image.each( (index,img)=> {
      var randX = Math.floor((Math.random() * containerWidth / 1.5));
      var randY = Math.floor((Math.random() * containerHeight / 3));
      console.log(randY);
      console.log(randX);
      $(img).css("left", randX);
      $(img).css("top", randY);

    });

});//end document.ready
