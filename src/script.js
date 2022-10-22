/* const handleClick = () => {

    const body = document.querySelector("body");
    body.innerHTML = `
        <h1>HELLO JAVASCRIPT!</h1>
        <h2>And Hello World!</h2>
    `;
    
    body.style.backgroundColor = "#000";
    body.style.color = "#fff"
}

const el = document.getElementById("btn-start");
el.addEventListener('click', () => handleClick()) */

const handleClick = () => {
    const body = $("body");
    body.html = ( `
        <h1>HELLO JAVASCRIPT!</h1>
        <h2>And Hello World!</h2>
    `);
    body.css("background-Color" , "#000");
    body.css("color" , "#FFF");
};

$(document).ready(() => {
    const el = $("#btn-start");
    el.on("mouseover", () => {
        el.css("position","absolute");
        el.css("top", `${math.floor(Math.random() * (window.innerHeight - 18))}px`);
        el.css("left", `${math.floor(Math.random() * (window.innerWidth - 36))}px`);
    });
    el.on("click", () => handleClick());
});
