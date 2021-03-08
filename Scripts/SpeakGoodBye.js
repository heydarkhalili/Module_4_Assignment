(function (window) {
    var goodBye = ["Yaakov", "John", "Jen",
    "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

          var greeting = "goodbye";
          goodBye.saygoodBye = function () {
              for (var i = 0; i<goodBye.length; i++) {
                  if (goodBye [i].charAt(0).toLowerCase() != "j" ) {
                      console.log (greeting + " " + goodBye[i]);
                  }
              }
          }
      
        window.goodBye = goodBye;    

}) (window);



