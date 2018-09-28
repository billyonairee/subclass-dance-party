var MakeEnermy = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="enermy"><img src="airplane2.png" width=100px></span>');
  this.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = { top: 150, left: Math.floor(left/100)*100 };
    this.$node.css(styleSettings);
    console.log(this.$node);
  };
   this.setPosition(top, left);

};


MakeEnermy.prototype = Object.create(Dancer.prototype);
MakeEnermy.prototype.constructor = MakeEnermy;
// var oldStep = BlinkyDancer.step;
MakeEnermy.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // oldStep();
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
};
