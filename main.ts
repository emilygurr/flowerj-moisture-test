let moistureReading = 0
let buttontouch = 0
basic.showIcon(IconNames.Heart)
serial.setBaudRate(BaudRate.BaudRate115200)
serial.writeString("ready")
dfplayer.MP3_setSerial(SerialPin.P0, SerialPin.P1)
dfplayer.setVolume(30)
pins.touchSetMode(TouchTarget.P2, TouchTargetMode.Capacitive)
basic.forever(function () {
    buttontouch = pins.digitalReadPin(DigitalPin.P2)
    moistureReading = pins.digitalReadPin(DigitalPin.P6)
    if (buttontouch == 1) {
        serial.writeValue("value", 1)
        basic.pause(500)
        if (moistureReading <= 150) {
            dfplayer.folderPlay(2, 2, dfplayer.yesOrNot.type1)
        }
        if (moistureReading >= 151) {
            dfplayer.folderPlay(1, 1, dfplayer.yesOrNot.type1)
        }
    } else {
        serial.writeString("not")
    }
    basic.pause(100)
})
