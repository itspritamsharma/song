var drumCount = document.querySelectorAll("button").length

for (var i = 0; i < drumCount; i++) {


    document.querySelectorAll("button")[i].addEventListener("click", handClick);
    function handClick() {

        var buttonInnerHTML = this.innerHTML;
        
        switch (buttonInnerHTML) {
            case "T":

                var audio1 = new Audio('tom-2.mp3');
                audio1.play();
                break;

            case "a":

                var audio2 = new Audio('kick-bass.mp3');
                audio2.play();
                break;

            case "b":

                var audio3 = new Audio('snare.mp3');
                audio3.play();
                break;

            case "A":
                var audio4 = new Audio('tom-1.mp3');
                audio4.play();
                break;

            case "n":
                var audio5 = new Audio('crash.mp3');
                audio5.play();
                break;

            case "y":

                var audio6 = new Audio('tom-3.mp3');
                audio6.play();
                break;

            case "Box":
                var audio7 = new Audio('tom-4.mp3');
                audio7.play();
                break;


            default: console.log(buttonInnerHTML);

        }

    }
};





