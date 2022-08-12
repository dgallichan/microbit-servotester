input.onButtonPressed(Button.A, function () {
    isLive = false
    basic.showLeds(`
        # . . . #
        . # # # .
        . . # . .
        . . # . .
        # . . . #
        `)
    pins.servoWritePin(AnalogPin.P0, 0)
    basic.pause(2000)
    pins.servoWritePin(AnalogPin.P0, 180)
    basic.pause(2000)
    pins.servoWritePin(AnalogPin.P1, 0)
    basic.pause(2000)
    pins.servoWritePin(AnalogPin.P1, 180)
    basic.pause(2000)
    pins.servoWritePin(AnalogPin.P2, 0)
    basic.pause(2000)
    pins.servoWritePin(AnalogPin.P2, 180)
    basic.showLeds(`
        . # # # #
        . # . . .
        . # # # .
        . . . # .
        # # # # .
        `)
    isLive = true
})
let isLive = false
basic.showLeds(`
    . # # # #
    . # . . .
    . # # # .
    . . . # .
    # # # # .
    `)
isLive = true
basic.forever(function () {
    if (isLive) {
        pins.servoWritePin(AnalogPin.P0, Math.map(input.rotation(Rotation.Pitch), 0, 90, 0, 180))
        pins.servoWritePin(AnalogPin.P1, Math.map(input.rotation(Rotation.Roll), 0, 90, 0, 180))
    }
    basic.pause(100)
})
