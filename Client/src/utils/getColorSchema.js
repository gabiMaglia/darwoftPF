export const getColorScheme = () => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        return "light";
    } else {
        return null;
    }
}