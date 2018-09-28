var MakeUnit = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="unit"><img src="airplane.png" width=100px></span>');
  this.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = { top: top + 650, left: Math.floor(left / 100) * 100 };
    this.$node.css(styleSettings);
    // console.log(this.$node);
  };
  $("#dancer-2").css({"pointer-events": 'none'});
  this.setPosition(top, left);
};



MakeUnit.prototype = Object.create(Dancer.prototype);
MakeUnit.prototype.constructor = MakeUnit;
// var oldStep = BlinkyDancer.step;
MakeUnit.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // oldStep();
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
};
