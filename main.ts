namespace palette {
    export function monochrome() {
        const p = palette.getCurrentColors();
        for(let i = 0; i < p.length; ++i) {
            const c = p.color(i);
            const R = (c >> 16) & 0xff;
            const G = (c >> 8) & 0xff;
            const B = (c) & 0xff;
            const l = (R+R+R+B+G+G+G+G)>>3;
            const m = ((l << 16) | (l << 8) | l);
            p.setColor(i, m)
        }
        palette.setColors(p);
    }
}
palette.monochrome();
game.onPaint(function () {
    for(let i = 0; i < 16; ++i) {
        screen.fillRect((i % 4) * 20, Math.floor(i / 4) * 20, 16, 16, i);
    }
})
