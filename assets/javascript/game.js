
  var counter;
  var targetNumber;
  var wins = 1;
  var losses = 1;

  function targetScore() {
    targetNumber = (Math.floor(Math.random()*101 + 19));
    $("#numberToGuess").text(targetNumber);
    counter = 0;
    return counter;
    return targetNumber;
  }
  targetScore();
  
  
  function crystals() {
  var numberOptions = [Math.ceil(Math.random()*12), Math.ceil(Math.random()*12), Math.ceil(Math.random()*12), Math.ceil(Math.random()*12)];
  

  
  for (var i = 0; i < numberOptions.length; i++) {

    var imageCrystal = $("<img>");

    imageCrystal.addClass("crystalImage");

    imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    $("#crystals").append(imageCrystal);
  }
}
  crystals();

  $(".crystalImage").on("click", function() {

    var crystalValue = ($(this).data("crystalvalue"));

    counter += crystalValue;

  

    $("#score").html(counter);
    if (counter === targetNumber) {
      $("#wins").html(wins++);
      $("#result").html("You Won!");
      targetScore();
      $("#crystals").html(crystals());      
    }
    else if (counter >= targetNumber) {
      $("#losses").html(losses++);
      $("#result").html("You Lost!");
      targetScore();
      $("#crystals").html(crystals());
    }
  });
