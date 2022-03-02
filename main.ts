let moistureReading = 0
let buttontouch = 0
basic.showIcon(IconNames.Heart)
serial.setBaudRate(BaudRate.BaudRate115200)
serial.writeString("ready")
basic.forever(function () {
    buttontouch = pins.digitalReadPin(DigitalPin.P0)
    moistureReading = pins.digitalReadPin(DigitalPin.P0)
    if (buttontouch == 1) {
        serial.writeValue("value", 1)
        basic.pause(500)
        if (moistureReading <= 150) {
            music.playTone(262, music.beat(BeatFraction.Double))
        }
        if (moistureReading >= 151) {
            music.playMelody("G A E G G - - - ", 120)
        }
    } else {
        serial.writeString("not")
    }
    basic.pause(100)
})
