// /**/const world = 'world';

export function hello(world: string = 'world'): string {
    console.log("hello world");
    return `Hello ${world}! `;
}

hello("yes");
hello("yes");