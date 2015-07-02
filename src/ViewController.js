App.ViewController = (function() {
    var that = {},
    logic = null,
    view = null,

   
    init = function() {
        logic = App.Logic.init();
        view = App.View.init();
        $(logic).on("displayNumber", onDisplayNumber);
        $(view).on("getRandomNumber", onGetRandomNumber);
        return that; 
    },

    onDisplayNumber = function(event, nextNum){
        view.showNewNumber(nextNum);
    },

    onGetRandomNumber = function(){
        logic.showNextNumber();
    };

    that.init = init;

	return that;
})();