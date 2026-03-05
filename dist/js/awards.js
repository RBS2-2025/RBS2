//@ts-nocheck

function onLoad() {
    createCard(
        2023,
        [
            "South Korea Championship - 3rd Place Control Award",
            "South Korea Championship - Finalist Alliance - Captain",
        ],
        [
            
        ],
        [], 
        "CENTERSTAGE"
    );
    createCard(
        2024,
        [
            "South Korea Championship - 3rd Place Inspire Award",
            "South Korea Championship - Finalist Alliance - Captain",
            "FTC 2024-2025 INTO THE DEEP Qualification",
        ],
        [
            "/notes/2024.pdf"
        ],
        ["/images/awards/2024/design.png", "/images/awards/2024/robot.png"], 
        "INTO THE DEEP"
    );
    createCard(
        2025,
        [
            "South Korea Championship - Finalist Alliance - Captain",
        ],
        [
            
        ],
        [], 
        "DECODE"
    );
}

window.addEventListener("load", () => {
    onLoad();
});

/**
 * @param {number} year
 * @param {string[]} contents
 * @param {string[]} note
 * @param {string[]} images
 * @param {string} seasons
 */
function createCard(year, contents, note=[], images = [], seasons) {
    const list = contents.map((c) => `<li><h3>${c}</h3></li>`).join("");

    const imgs = images.map((src) => `<img src="${src}" height="100" alt="award image" class="cursor-pointer" onclick="openImageModal('${src}')" />`).join("");

    const shell = document.createElement("div");

    shell.className = "content";

    shell.innerHTML = `
    <details id="award-${year}">
      <summary>
        <h2>${year} ~ ${year + 1} | ${seasons}</h2>
        <hr />
      </summary>
      <ul>${list}</ul>
      ${note.length ? note.map((n, i) => `<a href="${n}" target="_blank">Engineering note</a>`).join("") : ""}
      <div class="images">${imgs}</div>
    </details>
  `;

    document.querySelector("#contents")?.append(shell);
}

function openImageModal(src) {
    const modal = document.getElementById("ImageModal");
    const modalImage = document.getElementById("ModalImage");
    if (modal && modalImage) {
        modalImage.src = src;
        modal.style.display = "flex";
    }
}

function closeImageModal() {
    const modal = document.getElementById("ImageModal");
    if (modal) {
        modal.style.display = "none";
    }
}


