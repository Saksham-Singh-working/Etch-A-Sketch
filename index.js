let container = document.querySelector("#container")
for(let i = 0;i < 16;i++){
    for(let j = 0;j < 16;j++){
        let box = document.createElement("div");
        box.style.cssText = `border: 0.2px solid black;width:calc(100%/16);height:calc(100%/16);box-sizing:border-box;`;
        box.classList.add("boxes");
        container.appendChild(box);
    }
}
let boxList = document.querySelectorAll(".boxes");
boxList = Array.from(boxList);
boxList.forEach(element => {
    element.addEventListener("mouseenter", () => {
        let bg_color = getComputedStyle(element).backgroundColor;
        let [_, r, g, b] = bg_color.match(/\d+/g).map(Number);
        r = Math.min(r + 16, 255);
        g = Math.min(g + 16, 255);
        b = Math.min(b + 16, 255);
        element.style.backgroundColor = `rgb(${r},${g},${b})`;
    });
});