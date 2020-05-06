game.onPaint(function () {
    for(let i = 0; i < 16; ++i) {
        screen.fillRect((i % 4) * 20, Math.floor(i / 4) * 20, 16, 16, i);
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    palette.setMonochrome()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    palette.reset()
})