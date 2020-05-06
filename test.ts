game.onPaint(function () {
    for(let i = 0; i < 16; ++i) {
        screen.fillRect(14 + (i % 4) * 20, 14 + Math.floor(i / 4) * 20, 20, 20, 1);
        screen.fillRect(16 + (i % 4) * 20, 16 + Math.floor(i / 4) * 20, 16, 16, i);
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    palette.setMonochrome()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    palette.reset()
})