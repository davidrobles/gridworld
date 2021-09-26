
class GridWorld {

    nRows: number;
    nCols: number;

    constructor(nRows: number, nCols: number) {
        this.nRows = nRows;
        this.nCols = nCols;
    }

}

class GridWorldView {

    gw: GridWorld;
    el: HTMLElement;

    constructor(gw: GridWorld, el: HTMLElement) {
        this.gw = gw;
        this.el = el;
    }

    render() {
        this.el.innerHTML = "<p>yeah</p>"
    }

}

export function hello(world: string = 'world'): string {
    console.log("hello world");
    return `Hello ${world}! `;
}

const gw = new GridWorld(20, 20)
const el = document.getElementById("gw")
if (el) {
    const gwView = new GridWorldView(gw, el);
    gwView.render()
}