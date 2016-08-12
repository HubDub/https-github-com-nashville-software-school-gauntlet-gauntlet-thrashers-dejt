var Weapon = function() {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;

  this.attackDamage = function() {
    return Math.floor(Math.random() * 10 + this.damage);
  }
  this.toString = function(player1Damage) {
    return this.name + " hits for " + this.attackDamage() + " damage!";
  }
};

var Dagger = function() {
  this.name = "dagger";
  this.damage = 4;
  this.hands = 1;
};
Dagger.prototype = new Weapon();

var BroadSword = function() {
  this.name = "Broad sword";
  this.damage = 14;
  this.hands = 2;
};
BroadSword.prototype = new Weapon();

var WarAxe = function() {
  this.name = "War axe";
  this.damage = 18;
  this.hands = 2;
};
WarAxe.prototype = new Weapon();

var Javelin = function() {
  this.name = "Javelin";
  this.damage = 10;
  this.hands = 1;
};
Javelin.prototype = new Weapon();

var ShortBow = function() {
  this.name = "ShortBow";
  this.damage = 8;
  this.hands = 2;
};
ShortBow.prototype = new Weapon();

var Glaive = function() {
  this.name = "Glaive";
  this.damage = 15;
  this.hands = 2;
};
Glaive.prototype = new Weapon();

var Warhammer = function() {
  this.name = "Warhammer";
  this.damage = 22;
  this.hands = 2;
};
Warhammer.prototype = new Weapon();

var Trident = function() {
  this.name = "Trident";
  this.damage = 20;
  this.hands = 2;
};
Trident.prototype = new Weapon();

var Blowgun = function() {
  this.name = "Blowgun";
  this.damage = 5;
  this.hands = 2;
};
Blowgun.prototype = new Weapon();

var ThrowingStar = function() {
  this.name = "ThrowingStar";
  this.damage = 18;
  this.hands = 2;
};
ThrowingStar.prototype = new Weapon();

var Flail = function() {
  this.name = "Flail";
  this.damage = 18;
  this.hands = 2;
};
Flail.prototype = new Weapon();

var Whip = function() {
  this.name = "Whip";
  this.damage = 18;
  this.hands = 2;
};
Whip.prototype = new Weapon();














