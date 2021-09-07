"use strict";

document.querySelector(".generate").addEventListener("click", generate);

function generate() {
    let input = document.querySelector("#input").value;
    const choices = document.querySelector("#dropDownList").value;

    if (choices == "one") {
        let answer = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
        console.log(answer);
        document.querySelector(".result").innerHTML = answer;
    }
    else if (choices == "two") {
        let word = input.split(" ");
        if (word.length >- 4) {
            console.log(word.length);
            document.querySelector(".result").innerHTML = word.slice(0, 2).join(" ");
        }
    else {
        let word = input.split(" ");
        let answer = word[0];
        console.log(answer);
        document.querySelector(".result").innerHTML = answer;
    }
    } else if (choices == "three") {
        let word = input.split (" ");
        let answer = word[0];
        if (word.length >-4) {
            let wordJoin = word.slice(0,2).join(" ");
            console.log(answer.length);
            document.querySelector(".result").innerHTML = answer.length;
        }
    else {
        
        document.querySelector(".result").innerHTML = answer.length;
    }
    } else if (choices == "four") {
        let word = input.split(" ");
        if (word.length >=4) {
            console.log(word[2]);
            document.querySelector(".result").innerHTML = word[2];
        }
        
    else {
        console.log(word[1]);
        document.querySelector(".result").innerHTML = word[1];
    }
     
} else if (choices == "five") {
    if (input.endsWith(".png") == true) { 
        console.log("File name is PNG");
        document.querySelector(".result").innerHTML = "File name is PNG";
    }
    if (input.endsWith(".jpg") == true) {
        console.log("File name is JPG");
        document.querySelector(".result").innerHTML = "File name is JPG";
    }
    else {
        document.querySelector(".result").innerHTML = "File name is not PNG";
        console.log("File name is PNG");
        document.querySelector(".result").innerHTML = "File name is not JPG";
        console.log("File name is JPG");
    }

} else if 
    (choices == "six") {
        let word = input.slice(input.length);
        console.log(input.padStart(input.length, "*"));
        document.querySelector(".result").innerHTML = word.padStart(
            input.length,
            "*"
        );
    }

        
else if (choices == "seven") {
            let word =
            input.substring(0, 2) + input[2].toUpperCase() + input.substring(3);
            document.querySelector(".result").innerHTML = word;
            console.log(word);
            
        }
        else if (choices == "eight") {
            document.querySelector(".result").innerHTML = "";
        
            let counter = -1;
        
            init();
        
            function init() {
              loop();
            }
        
            function loop() {
              counter++;
        
              if (counter < input.length) {
                if (input.charAt(counter) === " " || input.charAt(counter) === "-") {
                  document.querySelector(".result").innerHTML += input.charAt(counter);
                  // console.log(input.charAt(counter));
                  counter++;
                  document.querySelector(".result").innerHTML += input
                    .charAt(counter)
                    .toUpperCase();
                  // console.log(input.charAt(counter).toUpperCase());
        
                  loop();
                } else {
                  document.querySelector(".result").innerHTML += input.charAt(counter);
                  // console.log(input.charAt(counter));
                  loop();
                }
              }
            }
          }
    }


    