//@ts-nocheck

function onLoad() {
    createCard(
        2024,
        [
            "South Korea Championship - 3rd Place Inspire Award",
            "South Korea Championship - Finalist Alliance Captain",
            "FTC 2024-2025 INTO THE DEEP Qualification",
        ],
        "/notes/2024.pdf",
        ["/images/awards/2024/design.png", "/images/awards/2024/robot.png"]
    );
}

window.addEventListener("load", () => {
    onLoad();
});

/**
 * @param {number} year
 * @param {string[]} contents
 * @param {string} note
 * @param {string[]} images
 */
function createCard(year, contents, note, images = []) {
    const list = contents.map((c) => `<li><h3>${c}</h3></li>`).join("");

    const imgs = images.map((src) => `<img src="${src}" height="100" alt="award image" />`).join("");

    const shell = document.createElement("div");
    shell.className = "content";

    shell.innerHTML = `
    <details id="award-${year}">
      <summary>
        <h2>${year} ~ ${year + 1}</h2>
        <hr />
      </summary>
      <ul>${list}</ul>
      ${note ? `<a href="${note}" target="_blank">Engineering note</a>` : ""}
      <div class="images">${imgs}</div>
    </details>
  `;

    document.querySelector("#contents")?.append(shell);
}
