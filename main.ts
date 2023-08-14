let x = 0
input.onButtonPressed(Button.A, function () {
    左に進む()
})
function 右に進む () {
    led.unplot(x, 2)
    x += 1
}
input.onButtonPressed(Button.B, function () {
    led.unplot(x, 2)
    x += 1
})
function 左に進む () {
    led.unplot(x, 2)
    x += 0 - 1
}
basic.forever(function () {
    led.plot(x, 2)
})
