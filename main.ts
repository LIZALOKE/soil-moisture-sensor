let moisture = 0
basic.forever(function () {
    moisture = pins.analogReadPin(AnalogPin.P1)
    if (moisture > 1010) {
        basic.showIcon(IconNames.Surprised)
    } else if (moisture > 900) {
        basic.showIcon(IconNames.Happy)
    } else if (false) {
        basic.showIcon(IconNames.Sad)
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
    }
})
