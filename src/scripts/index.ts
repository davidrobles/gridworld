
class GridWorldEnvInfoView {
    private gridWorldEnv: GridWorldEnv;
    private el: HTMLElement;

    constructor(gridWorldEnv: GridWorldEnv, el: HTMLElement) {
        this.gridWorldEnv = gridWorldEnv;
        this.el = el;
    }

    render(): HTMLElement {
        const row = this.gridWorldEnv.curPos[0];
        const col = this.gridWorldEnv.curPos[1];
        this.el.innerHTML = `
            <p>Row: ${row}</p>
            <p>Col: ${col}</p>
        `;
        return this.el;
    }
}

class GridWorldEnv {

    public nRows: number;
    public nCols: number;
    public curPos: [number, number] = [0, 0];

    constructor(nRows: number, nCols: number) {
        this.nRows = nRows;
        this.nCols = nCols;
    }

    public getActions(): string[] {
        return ["UP", "DOWN"];
    }

}

class GridWorldCell {
    public row: number;
    public col: number;
    public current: boolean;
    public el: HTMLDivElement;

    public constructor(row: number, col: number, current: boolean) {
        this.row = row;
        this.col = col;
        this.current = current;
        this.el = document.createElement("div");
        this.el.className = "gw-cell";
    }

    public render(): HTMLElement {
        this.el.innerHTML = this.current ? "X": "";
        return this.el;
    }

    public setCurrent(status: boolean) {
        this.current = status;
        this.render();
    }
}

class GridWorldEnvView {

    public gw: GridWorldEnv;
    public el: HTMLElement;
    private grid: GridWorldCell[][]

    constructor(gw: GridWorldEnv, el: HTMLElement) {
        this.gw = gw;
        this.el = el;
        this.grid = []
        for (let row = 0; row < gw.nRows; row++) {
            let hey = []
            for (let col = 0; col < gw.nCols; col++) {
                const current = row == 10 && col == 0;
                hey.push(new GridWorldCell(row, col, current));
            }
            this.grid.push(hey)
        }
        this.initGrid()
    }

    private initGrid() {
        for (let row = 0; row < gw.nRows; row++) {
            let rowEl = document.createElement("div")
            for (let col = 0; col < gw.nCols; col++) {
                rowEl.appendChild(this.grid[row][col].render());
            }
            this.el.appendChild(rowEl);
        }
    }

    public render(): HTMLElement {
        return this.el;
    }

}

export function hello(world: string = 'world'): string {
    console.log("hello world");
    return `Hello ${world}! `;
}

const gw = new GridWorldEnv(14, 14)
const el = document.getElementById("gw")
if (el) {
    const gwView = new GridWorldEnvView(gw, el);
    gwView.render()
}
const gwInfoEl = document.getElementById("gw-info")
if (gwInfoEl) {
    let gridWorldEnvInfoView = new GridWorldEnvInfoView(gw, gwInfoEl);
    gridWorldEnvInfoView.render();
}