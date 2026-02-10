const THEME = {
    BRIGHT: "bright",
    DARK: "dark",
};
let current_theme = THEME.BRIGHT;
function toggle_theme() {
    document.querySelector("body")?.classList.remove(current_theme);

    if (current_theme == THEME.BRIGHT) current_theme = THEME.DARK;
    else if (current_theme == THEME.DARK) current_theme = THEME.BRIGHT;
    else current_theme = THEME.BRIGHT;
    document.querySelector("body")?.classList.add(current_theme);
    console.log("theme :" + current_theme);
}

function copyEmail() {
    const email = "rbs2kla2025@gmail.com";
    window.navigator.clipboard.writeText(email);
    const box = document.createElement("div");
    box.style =
        "color: var(--white); font-size: 2em; background-color:#000000aa; padding: 2px 15px; position:sticky; bottom: calc(100vh - 140px); border-radius: 4px; transition: all 1s ease;opacity:1;";
    box.innerText = "✓ 이메일이 복사되었습니다.";
    document.body.appendChild(box);
    setInterval(() => {
        box.style.opacity = "0";
    }, 500);
    setInterval(() => {
        box.remove();
    }, 1500);
}
