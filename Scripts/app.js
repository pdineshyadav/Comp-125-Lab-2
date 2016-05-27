
// Immediately Invoked Function Expression
(function(){
    "use strict";

    var elementsOfParagraph = [];
    
    elementsOfParagraph[0] = document.getElementById("firstParagraph");
    elementsOfParagraph[1] = document.getElementById("secondParagraph");
    elementsOfParagraph[2] = document.getElementById("thirdParagraph");
    
    var paragraph = [];
    
    paragraph[0] = "In this paragraph I am going to talk about my Lab 2. We have to do our lab 2 by using Arrays which stores 3 simple paragraphs of text in an array structure. Outputs each of the three paragraphs to three separate pages and Each page will use the same JavaScript file";
    paragraph[1] = "In this paragraph I am going to talk about myself. I am a student of Software Engineering Program at Centennial College.  I like to play sports. My favourite sport is Cricket. I even enjoy running, high jump and shot put. I have received a couple of momentos in the Scarborough Cricket League and few medals in athletics. My favourite colour is Yellow and my favourite food is Biryani. ";
    paragraph[2] = "In this paragraph I am going to talk about my projects. I have done some projects like producing energy from wind, Creating a profile using html and css, and Programming a house budget in C#.";
    
    for (var i = 0; i < elementsOfParagraph.length; i++) 
    {
        if(elementsOfParagraph[i]) 
        {
         elementsOfParagraph[i].textContent = paragraph[i];
        }
    }
    
    
})();