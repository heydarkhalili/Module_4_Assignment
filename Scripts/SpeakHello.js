(function (window) {

var helloSpeaker = ["Yaakov", "John", "Jen",
    "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    var greeting = "Hello ";
    helloSpeaker.sayHello = function () {
        for (var i = 0; i <helloSpeaker.length; i++) {
            if (helloSpeaker[i].charAt(0).toLowerCase() == "j" ) {
                console.log(greeting + " " + helloSpeaker[i]);
            }
        }
    }

    window.helloSpeaker = helloSpeaker;
}) (window);


