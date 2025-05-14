input.onButtonPressed(Button.A, function () {
    gedrückt = 1
    while (gedrückt == 1) {
        radio.sendNumber(1)
    }
})
input.onButtonPressed(Button.B, function () {
    gedrückt = 0
    while (gedrückt == 0) {
        radio.sendNumber(0)
    }
})
let gedrückt = 0
radio.setGroup(6)
