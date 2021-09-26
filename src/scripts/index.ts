
class GridWorld {

    nRows: number;
    nCols: number;

    constructor(nRows: number, nCols: number) {
        this.nRows = nRows;
        this.nCols = nCols;
    }

}

class GridWorldCell {
    public row: number;
    public col: number;

    public constructor(row: number, col: number) {
        this.row = row;
        this.col = col;
    }

    public render(): HTMLElement {
        let el: HTMLDivElement = document.createElement("div");
        el.className = "gw-cell"
        el.innerHTML = "x";
        return el;
    }
}

class GridWorldView {

    public gw: GridWorld;
    public el: HTMLElement;
    private grid: GridWorldCell[][]

    constructor(gw: GridWorld, el: HTMLElement) {
        this.gw = gw;
        this.el = el;
        this.grid = []
        for (let row = 0; row < gw.nRows; row++) {
            let hey = []
            for (let col = 0; col < gw.nCols; col++) {
                hey.push(new GridWorldCell(row, col));
            }
            this.grid.push(hey)
        }
    }

    public render(): HTMLElement {
        let el2 = document.createElement("div")
        for (let row = 0; row < gw.nRows; row++) {
            let rowEl = document.createElement("div")
            for (let col = 0; col < gw.nCols; col++) {
                rowEl.appendChild(this.grid[row][col].render());
            }
            el2.appendChild(rowEl);
        }
        this.el.appendChild(el2)
        return this.el;
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