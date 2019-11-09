export function accum(s: string): string {
    return s
        .split('')
        .map((letter, idx) => letter.toUpperCase() + letter.toLocaleLowerCase().repeat(idx))
        .join('-');
}
