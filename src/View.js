App.View = (function() {
    var that = {},
    $button = null,
    timeToWait = 1000,
    timeToWaitForNextNum = 10000,
    newNum = null,
    counter = 0;

    init = function() {
        $button = $("#button");
        addClassFromNumber();
        $button.on("click", calcNextNumber);
    	return that;
    },

    showNewNumber = function(nextNum){
        removeClassFromNumber();
        for(var i = 0; i <6; i++){
            newNum = Number(nextNum[i]);
            $("#number" + i).text(newNum);
        }
        counter++;
        addClassFromNumberAfterTimeout();
        startOver();       
    },

    startOver = function(){
        setTimeout(function(){
            if(counter < 16){
                calcNextNumber();
            }
        }, timeToWaitForNextNum);
    }

    removeClassFromNumber = function(){
        for(var i = 0; i <6; i++){
            $("#number" + i).removeClass("invisible");
        }
    },

    addClassFromNumberAfterTimeout = function(){
           setTimeout(function(){
            addClassFromNumber();
            }, timeToWait);
    },

    addClassFromNumber = function(){
        for(var i = 0; i <6; i++){
            $("#number" + i).addClass("invisible");
        }
    },

    calcNextNumber = function(){
        $(that).trigger("getRandomNumber");
    };

    that.init = init;
    that.showNewNumber = showNewNumber;

	return that;
})();