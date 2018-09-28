var Shoot = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="shoot"></span>');
  this.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    
    var lef = window.dancers[0][0] || left
    var styleSettings = { top: top, left: lef+40 };


    this.$node.css(styleSettings);
    // console.log(this.$node);
  };
  this.setPosition(top, left);
};

Shoot.prototype = Object.create(Dancer.prototype);
Shoot.prototype.constructor = Shoot;
// var oldStep = BlinkyDancer.step;
Shoot.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // oldStep();
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
};
