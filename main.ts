input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    isLive = false
    basic.showLeds(`
        # . . . #
        . # # # .
        . . # . .
        . . # . .
        # . . . #
        `)
    pins.servoWritePin(AnalogPin.P0, 0)
    basic.pause(delayTime)
    pins.servoWritePin(AnalogPin.P0, 180)
    basic.pause(delayTime)
    pins.servoWritePin(AnalogPin.P0, 0)
    basic.pause(delayTime)
    pins.servoWritePin(AnalogPin.P1, 0)
    basic.pause(delayTime)
    pins.servoWritePin(AnalogPin.P1, 180)
    basic.pause(delayTime)
    pins.servoWritePin(AnalogPin.P1, 0)
    basic.pause(delayTime)
    pins.servoWritePin(AnalogPin.P2, 0)
    basic.pause(delayTime)
    pins.servoWritePin(AnalogPin.P2, 180)
    basic.pause(delayTime)
    pins.servoWritePin(AnalogPin.P2, 0)
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
let delayTime = 0
delayTime = 500
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
        if (input.buttonIsPressed(Button.A)) {
            pins.servoWritePin(AnalogPin.P0, Math.map(input.rotation(Rotation.Pitch), -90, 90, 0, 180))
            pins.servoWritePin(AnalogPin.P1, Math.map(input.rotation(Rotation.Roll), -90, 90, 0, 180))
        } else if (input.buttonIsPressed(Button.B)) {
            pins.servoWritePin(AnalogPin.P0, 90)
            pins.servoWritePin(AnalogPin.P1, 90)
            pins.servoWritePin(AnalogPin.P2, 90)
        }
    }
    basic.pause(100)
})
