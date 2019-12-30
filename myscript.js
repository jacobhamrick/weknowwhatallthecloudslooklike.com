function toggleSwitch() {
  $(".about-window").toggleClass("display-switch");
}

$("#close-me").click(function(){
  toggleSwitch()
});

$("#info-button").click(function(){
  toggleSwitch()
});
