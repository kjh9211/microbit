let steps = 0;
input.onGesture(Gesture.Shake,function(){
    steps++;
});
if (input.buttonIsPressed(Button.A)) {
    steps = 0;
    basic.showString("RESET");
}
if (input.buttonIsPressed(Button.B)) {
    basic.showString(steps.toString());
}
