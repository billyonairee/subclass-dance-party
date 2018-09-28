$(document).ready(function() {
  window.dancers = [];
  window.distance = [];

  $("#lineup").on("click", function(event) {
    // console.log("lineup", $(".dancer"), $(".dancer")[0]);
    var styleSettings = { left: 15 };
    $(".unit").css(styleSettings);
    $(".enermy").css(styleSettings);
    $(".shoot").css(styleSettings);
  });
  $(".addDancerButton").on("click", function(event) {
    // console.log('1',window.dancers)
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    
    var dancer = new dancerMakerFunction(
      $("body").height() * (Math.random()/4),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $("body").append(dancer.$node);
    
    if ($(".unit").length !== 0 ) ;
    console.log($("body").height());
    window.dancers.push([
      Number(dancer.$node[0].style.left.slice(0, -2)),
      Number(dancer.$node[0].style.top.slice(0, -2))
    ]);
    for (var i = 1; i < window.dancers.length; i++) {
      var dist = window.dancers[i][0] - window.dancers[0][0];
        // Math.pow(window.dancers[i][0] - window.dancers[0][0], 2) +
        // Math.pow(window.dancers[i][1] - window.dancers[0][1], 2);
      if (!window.distance.includes(Math.floor(Math.sqrt(dist)))) {
        window.distance.push(Math.floor(Math.sqrt(dist)));

        if(dist === 0 ) {
          alert('alert')
        }
      }
    }
    console.log(55, window.distance);
  });
  
  

});
