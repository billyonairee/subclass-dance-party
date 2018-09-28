// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  // var dancer = {};
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    console.log(33,window.dancers[0])
    var styleSettings = { top: top, left: left };
    this.$node.css(styleSettings);
    // console.log(this.$node);
  };
  this.setPosition(top, left);

};
// use jQuery to create an HTML <span> tag

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random default point within the body

// return dancer;
