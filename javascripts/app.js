 /*
  Test code to generate a human player and an orc player
 */
// var Shaman = new Gauntlet.Combatants.Human();
// Shaman.setWeapon(new WarAxe());
// Shaman.generateClass();  // This will be used for "Surprise me" option
// console.log(Shaman.toString());

// THOM- Creating a new player object for Combatants//////////////////
// set race to human by default
var playerOne = new Gauntlet.Combatants.Human();

// add event listner to input field and store the value in the variable playerName

////event handlers for classes///////
$("#name_button" ).click(function() {
playerOne.playerName= $("#player-name").val();
 console.log( playerOne.playerName);
 console.dir(playerOne);
});
console.log( playerOne.playerName);

$("#Warrior").click(function(){
  console.log("you picked the Warrior");
  playerOne.class = new Gauntlet.GuildHall.Warrior();
  console.log(playerOne);
})

$("#Valkyrie").click(function(){
  console.log("you picked the Valkyrie");
  playerOne.class = new Gauntlet.GuildHall.Valkyrie;
  console.log(playerOne);
})

$("#Berserker").click(function(){
  console.log("you picked the Berserker");
  playerOne.class = new Gauntlet.GuildHall.Berserker;
  console.log(playerOne);
})

$("#Monk").click(function(){
  console.log("you picked the Monk");
  playerOne.class = new Gauntlet.GuildHall.Monk;
  console.log(playerOne);
})

$("#Shaman").click(function(){
  console.log("you picked the Shaman");
  playerOne.class = new Gauntlet.GuildHall.Shaman;
  console.log(playerOne);
})

$("#Wizard").click(function(){
  console.log("you picked the Wizard");
  playerOne.class = new Gauntlet.GuildHall.Wizard;
  console.log(playerOne);
})

$("#Conjurer").click(function(){
  console.log("you picked the Conjurer");
  playerOne.class = new Gauntlet.GuildHall.Conjurer;
  console.log(playerOne);
})

$("#Sorcerer").click(function(){
  console.log("you picked the Sorcerer");
  playerOne.class = new Gauntlet.GuildHall.Sorcerer;
  console.log(playerOne);
})

$("#Thief").click(function(){
  console.log("you picked the Thief");
  playerOne.class = new Gauntlet.GuildHall.Thief;
  console.log(playerOne);
})

$("#Ninja").click(function(){
  console.log("you picked the Ninja");
  playerOne.class = new Gauntlet.GuildHall.Ninja;
  console.log(playerOne);
})

$("#Assassin").click(function(){
  console.log("you picked the Assassin");
  playerOne.class = new Gauntlet.GuildHall.Assassin;
  console.log(playerOne);
})

$("#Rogue").click(function(){
  console.log("you picked the Rogue");
  playerOne.class = new Gauntlet.GuildHall.Rogue;
  console.log(playerOne);
})

// console.log("playername", playerName);
// Shaman.setWeapon(new WarAxe());


// Shaman.generateClass();


// console.log(Shaman.toString());
////////////////EVENT LISTENERS FOR WEAPON BUTTONS////////////////////
$("#Dagger").click(function(){
  console.log("you picked the Dagger")
  playerOne.weapon = new Dagger();
  console.log(playerOne);
})

$("#BroadSword").click(function(){
  console.log("you picked the BroadSword")
  playerOne.weapon = new BroadSword();
  console.log(playerOne);
})

$("#WarAxe").click(function(){
  console.log("you picked the WarAxe")
  playerOne.weapon = new WarAxe();
  console.log(playerOne);
})

$("#Javelin").click(function(){
  console.log("you picked the Javelin")
  playerOne.weapon = new Javelin();
  console.log(playerOne);
})

$("#ShortBow").click(function(){
  console.log("you picked the ShortBow")
  playerOne.weapon = new ShortBow();
  console.log(playerOne);
})

$("#Warhammer").click(function(){
  console.log("you picked the Warhammer")
  playerOne.weapon = new Warhammer();
  console.log(playerOne);
})

$("#Glaive").click(function(){
  console.log("you picked the Glaive")
  playerOne.weapon = new Glaive();
  console.log(playerOne);
})

$("#Trident").click(function(){
  console.log("you picked the Trident")
  playerOne.weapon = new Trident();
  console.log(playerOne);
})

$("#Blowgun").click(function(){
  console.log("you picked the Blowgun")
  playerOne.weapon = new Blowgun();
  console.log(playerOne);
})

$("#ThrowingStar").click(function(){
  console.log("you picked the ThrowingStar")
  playerOne.weapon = new ThrowingStar();
  console.log(playerOne);
})

$("#Flail").click(function(){
  console.log("you picked the Flail")
  playerOne.weapon = new Flail();
  console.log(playerOne);
})

$("#Whip").click(function(){
  console.log("you picked the Whip")
  playerOne.weapon = new Whip();
  console.log(playerOne);
})








// RESEARCH THIS SECTION
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


