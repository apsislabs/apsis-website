export function cl(...classes) {
    return classes.filter(x => x).join(" ");
}