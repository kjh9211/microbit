let compass = 0
basic.forever(function () {
    compass = input.compassHeading()
    if (compass < 45 || compass >= 315) {
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
    } else if (compass < 135 && compass >= 45) {
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # #
            # . . . .
            # # # # #
            `)
    } else if (compass < 315 && compass >= 225) {
        basic.showLeds(`
            # . # . #
            # . # . #
            # . # . #
            # . # . #
            . # . # .
            `)
    } else if (compass < 225 && compass >= 135) {
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # #
            . . . . #
            # # # # #
            `)
    }
})
