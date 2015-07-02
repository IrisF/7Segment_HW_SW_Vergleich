App.View = (function() {
    var that = {},
    $button = null,
    $number = null,
    timeToWait = 1000,
    clicked = 0,
    startDate = 0,
    endDate = 0,
    newNum = null,

    init = function() {
        $button = $("#button");
    	$number = $("#number");
        $number.addClass("invisible");
        $button.on("click", calcNextNumber);
    	return that;
    },

    showNewNumber = function(nextNum){
        $number.removeClass("invisible");
        newNum = Number(nextNum);
        $number.text(newNum);
        setTimeout(function(){
            $number.addClass("invisible");
        }, timeToWait);
    },

    calcNextNumber = function(){
        console.log("Button clicked");
        if(clicked %2 == 0){
            $(that).trigger("getRandomNumber");
            startDate = new Date().getTime();
            $button.text("Stop");
            clicked++;
        }else{
            endDate = new Date().getTime();
            var seconds = (endDate - startDate)/1000;
            console.log("Zahl: " + newNum + " Zeit: " + seconds);
            $button.text("Naechste Zahl");
            clicked++;
        }
    };

    that.init = init;
    that.showNewNumber = showNewNumber;

	return that;
})();