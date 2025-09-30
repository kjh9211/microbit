let temperature = 0;
let min = 50;
let max = 0;
basic.forever(function(){
    temperature = input.temperature();
    if (temperature < min) min = temperature;
    if (temperature > max) max = temperature;
    if (input.buttonIsPressed(Button.A)) basic.showString(min.toString());
    if (input.buttonIsPressed(Button.B)) basic.showString(max.toString());
    if (input.buttonIsPressed(Button.AB)) {
        basic.showString("RESET");
        min = 50
        max = 0
        temperature = 0
        }

});
