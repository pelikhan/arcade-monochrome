namespace palette {
    /**
     * Gets a monochrome palette from the current palette
     */
    export function monochromeFromCurrent() {
        const p = palette.getCurrentColors();
        for(let i = 0; i < p.length; ++i) {
            const c = p.color(i);
            const R = (c >> 16) & 0xff;
            const G = (c >> 8) & 0xff;
            const B = (c) & 0xff;
            const l = (R+R+R+B+G+G+G+G)>>3;
            let m = ((l << 16) | (l << 8) | l);
            p.setColor(i, m)
        }
        return p;
    }

    /**
     * Sets a monochrome palette.
     */
    //% blockId=palettesetmonochrome block="set monochrome palette"
    export function setMonochrome() {
        palette.setColors(monochromeFromCurrent());
    }
}
