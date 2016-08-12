/*
  TODO: Modularize this code with IIFE or Browserify
 */
var Gauntlet = Gauntlet || {};
Gauntlet.SpellBook = {};


/*
  Base spell function that defines name, damage, damage type
 */
Gauntlet.SpellBook.Spell = function() {
  this.name = "";
  this.damage = 0;

  this.damageTypes = ["lightning", "fire", "water", "earth", "mysticism"];
  this.type = "";

  this.toString = function() {
    return this.name + " of " + this.type + " for " + this.damage + " damage!";
  }
};

/*
  An elemental sphere that can be cast by a magical class
 */
Gauntlet.SpellBook.Sphere = function() {
  this.name = "Sphere";
  this.damage = Math.floor(Math.random() * 10 + 10);

  var random = Math.round(Math.random() * (this.damageTypes.length - 1));
  this.type = this.damageTypes[random];
};
Gauntlet.SpellBook.Sphere.prototype = new Gauntlet.SpellBook.Spell();


////////////////////////////////////////////////////////////////////////////
// Gauntlet.SpellBook.Fireball = function() {
//   this.name = "Fireball";
//   this.damage = Math.floor(Math.random() * 20 + 10);

//   var random = Math.round(Math.random() * (this.damageTypes.length - 1));
//   this.type = this.damageTypes[random];
// };
// Gauntlet.SpellBook.Fireball.prototype = new Gauntlet.SpellBook.Spell();
////////////////////////////////////////////////////////////////////////////
// Gauntlet.SpellBook.Shatter = function() {
//   this.name = "Shatter";
//   this.damage = Math.floor(Math.random() * 10 + 10);

//   var random = Math.round(Math.random() * (this.damageTypes.length - 1));
//   this.type = this.damageTypes[random];
// };
// Gauntlet.SpellBook.Shatter.prototype = new Gauntlet.SpellBook.Spell();
///////////////////////////////////////////////////////////////////////////
// Gauntlet.SpellBook.StickingCloud = function() {
//   this.name = "Sticking Cloud";
//   this.damage = Math.floor(Math.random() * 15 + 5);

//   var random = Math.round(Math.random() * (this.damageTypes.length - 1));
//   this.type = this.damageTypes[random];
// };
// Gauntlet.SpellBook.StickingCloud.prototype = new Gauntlet.SpellBook.Spell();
////////////////////////////////////////////////////////////////////////////
// Gauntlet.SpellBook.CrownOfMadness = function() {
//   this.name = "Crown Of Madness";
//   this.damage = Math.floor(Math.random() * 25 + 5);

//   var random = Math.round(Math.random() * (this.damageTypes.length - 1));
//   this.type = this.damageTypes[random];
// };
// Gauntlet.SpellBook.CrownOfMadness.prototype = new Gauntlet.SpellBook.Spell();
//////////////////////////////////////////////////////////////////////////////
// Gauntlet.SpellBook.LightningBolt = function() {
//   this.name = "Lightning Bolt";
//   this.damage = Math.floor(Math.random() * 25 + 5);

//   var random = Math.round(Math.random() * (this.damageTypes.length - 1));
//   this.type = this.damageTypes[random];
// };
// Gauntlet.SpellBook.LightningBolt.prototype = new Gauntlet.SpellBook.Spell();
/////////////////////////////////////////////////////////////////////////////////
// Gauntlet.SpellBook.AcidSplash = function() {
//   this.name = "Acid Splash";
//   this.damage = Math.floor(Math.random() * 20 + 5);

//   var random = Math.round(Math.random() * (this.damageTypes.length - 1));
//   this.type = this.damageTypes[random];
// };
// Gauntlet.SpellBook.AcidSplash.prototype = new Gauntlet.SpellBook.Spell();
////////////////////////////////////////////////////////////////////////////////
// Gauntlet.SpellBook.PoisonSpray = function() {
//   this.name = "Poison Spray";
//   this.damage = Math.floor(Math.random() * 15 + 10);

//   var random = Math.round(Math.random() * (this.damageTypes.length - 1));
//   this.type = this.damageTypes[random];
// };
// Gauntlet.SpellBook.PoisonSpray.prototype = new Gauntlet.SpellBook.Spell();
////////////////////////////////////////////////////////////////////////////////
// Gauntlet.SpellBook.PrismaticSpray = function() {
//   this.name = "Prismatic Spray";
//   this.damage = Math.floor(Math.random() * 30 + 10);

//   var random = Math.round(Math.random() * (this.damageTypes.length - 1));
//   this.type = this.damageTypes[random];
// };
// Gauntlet.SpellBook.PrismaticSpray.prototype = new Gauntlet.SpellBook.Spell();
