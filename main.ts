let moistureReading = 0
let buttontouch = 0
basic.showIcon(IconNames.Heart)
serial.setBaudRate(BaudRate.BaudRate115200)
serial.writeString("ready")
dfplayer.MP3_setSerial(SerialPin.P1, SerialPin.P0)
dfplayer.setVolume(18)
pins.touchSetMode(TouchTarget.P2, TouchTargetMode.Capacitive)
basic.forever(function () {
    buttontouch = pins.digitalReadPin(DigitalPin.P2)
    moistureReading = pins.digitalReadPin(DigitalPin.P8)
    if (buttontouch == 1) {
        serial.writeValue("value", 1)
        basic.pause(500)
        if (moistureReading <= 75) {
            dfplayer.MP3_setSerial(SerialPin.P1, SerialPin.P0)
            dfplayer.folderPlay(1, 4, dfplayer.yesOrNot.type1)
            basic.showLeds(`
                . # . # .
                . # . # .
                . . . . .
                # # # # #
                . . . . .
                `)
        }
        if (moistureReading >= 76) {
            dfplayer.MP3_setSerial(SerialPin.P1, SerialPin.P0)
            dfplayer.folderPlay(1, 3, dfplayer.yesOrNot.type1)
            basic.showLeds(`
                . # . # .
                . # . # .
                # . . . #
                # . . . #
                . # # # .
                `)
        }
    } else {
        serial.writeString("not")
    }
    basic.pause(100)
})
