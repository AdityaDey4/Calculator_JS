let buttons = document.querySelectorAll(".button");
let input = document.querySelector(".input");
input.value = "0";

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e)=> {
        
        let string = input.value;

        if(button.innerHTML == '=') {
            try {
                string = eval(string);
            }catch(e) {
                alert("Write valid equation.");
                string = "0";
            }
        }
        else if(button.innerHTML == 'AC') {
            string = "0";
        }
        else if(button.innerHTML == 'C') {
            string = string.substring(0, string.length-1);
            if(string.length == 0) string = "0";
        }
        else {
            if(string.length == 1 && string.charAt(0) == '0') {
                string = button.innerHTML;
            }else {
                string = string+button.innerHTML;
            }
        }

        input.value = string;
    });
});