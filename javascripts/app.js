/*
  Test code to generate a human player and an orc player
 */
var warrior = new Gauntlet.Combatants.Human();
warrior.setWeapon(new WarAxe());
warrior.generateClass();  // This will be used for "Surprise me" option
// console.log(warrior.toString());

// THOM- Creating a new player object for Combatants
// set race to human by default
var playerOne = new Gauntlet.Combatants.Human();

// add event listner to input field and store the value in the variable playerName
$("#name_button" ).click(function() {
playerOne.playerName= $("#player-name").val();
 console.log( playerOne.playerName);
 console.dir(playerOne);
});
console.log( playerOne.playerName);




// console.log("playername", playerName);
// warrior.setWeapon(new WarAxe());


// warrior.generateClass();


// console.log(warrior.toString());




var orc = new Gauntlet.Combatants.Orc();
orc.generateClass();
orc.setWeapon(new BroadSword());
// console.log(orc.toString());

/*
  Test code to generate a spell & BroadSword weapon damage
 */
var spell = new Gauntlet.SpellBook.Sphere();
// console.log("spell: ", spell.toString());

var broadSword1 = new BroadSword();
console.log(broadSword1.toString());

var dagger1 = new Dagger();
console.log(dagger1.toString());


$(document).ready(function() {
  // console.log("document ready!")
  /*
    Show the initial view that accepts player name
   */
  $("#player-setup").show();

  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;

    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--battleground":
        moveAlong = ($("#player-name").val() !== "");
      }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }
  });

  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });
/*new code: when attack button is pressed event listener*/
  $(".attack__button").click(function(e) {
    console.log("you pressed the attack button");
    var spell = new Gauntlet.SpellBook.Sphere();
    console.log("spell: ", spell.toString());
    $("#inputDamageStats").text(spell.toString());
  });
});

