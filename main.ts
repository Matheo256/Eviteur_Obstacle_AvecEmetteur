input.onButtonPressed(Button.A, function () {
    radio.sendString("Tourner à gauche")
})
function Tourner_à_gauche () {
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 80)
    basic.pause(1000)
    maqueen.motorStop(maqueen.Motors.All)
}
input.onButtonPressed(Button.AB, function () {
    radio.sendString("Avancer")
})
function Tourner_à_droite () {
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 80)
    basic.pause(1000)
    maqueen.motorStop(maqueen.Motors.All)
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Avancer") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    }
    if (receivedString == "Tourner à droite") {
        Tourner_à_droite()
    }
    if (receivedString == "Tourner à gauche") {
        Tourner_à_gauche()
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Tourner à droite")
})
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) > 10) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    } else {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
        basic.pause(1000)
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        basic.pause(200)
        maqueen.motorStop(maqueen.Motors.All)
    }
})
basic.forever(function () {
    radio.setGroup(250)
})
