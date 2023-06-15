function scale() {
    const clientWidth = document.documentElement.clientWidth
    if (clientWidth < 500) {
        const string = `
        html{
          font-size:${clientWidth / 390}px
        }
    `
        const style = document.createElement('style')
        style.innerHTML = `${string}`;
        document.getElementsByTagName('head').item(0).appendChild(style);
    } else {
        window.pageWidth = clientWidth / 1920;
        const string = `
        html{
          font-size:${clientWidth / 1920}px
        }
    `
        const style = document.createElement('style')
        style.innerHTML = `${string}`;
        document.getElementsByTagName('head').item(0).appendChild(style);
    }
}
scale()
const debounce = (fn, delay) => {
    let timer;
    return function () {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn();
        }, delay);
    }
};
const cancelDebounce = debounce(scale, 500);
window.addEventListener('resize', cancelDebounce);
