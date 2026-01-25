//@ts-nocheck
async function loadProfileImage(imageName) {
    try {
        const response = await fetch(`/api/profile-image/${imageName}`, {
            credentials: "include",
        });

        if (!response.ok) {
            throw new Error("Failed to load image");
        }

        const data = await response.json();
        return data.image;
    } catch (error) {
        console.error("Image load error:", error);
    }
}
const members = [
    { name: "황선욱", role: "코치", eng: "S.W Hwang" },
    { name: "유준선", role: "멘토", eng: "J.S Yu" },
    { name: "최성원", role: "멘토", eng: "S.W Choi" },
    { name: "성우현", role: "소프트웨어", eng: "W.H Sung" },
    { name: "서민규", role: "하드웨어", eng: "M.G Seo" },
    { name: "이다훈", role: "소프트웨어", eng: "D.H Lee" },
    { name: "이명재", role: "하드웨어", eng: "M.J Lee" },
    { name: "이상훈", role: "하드웨어", eng: "S.H Lee" },
    { name: "박서우", role: "소프트웨어", eng: "S.W Park" },
    { name: "송하은", role: "하드웨어", eng: "H.E Song" },
    { name: "신소민", role: "매니저", eng: "S.M Shin" },
    { name: "이태율", role: "소프트웨어", eng: "T.Y Lee" },
    { name: "한은율", role: "하드웨어", eng: "E.Y Han" },
];

const engRoles = {
    "소프트웨어": "software",
    "하드웨어": "hardware",
    "매니저": "manager",
    "멘토": "mentor",
    "코치": "coach",
};

async function createCard(member) {
    const card = document.createElement("div");
    const src = `/images/face/${member.eng}.png`;
    card.classList.add("card");
    card.dataset.korName = member.name;
    card.dataset.korRole = member.role;
    card.dataset.engName = member.eng;
    const template = `
            <img src="${src}" alt="${member.name}-profile" class="profile" />
            <div class="halo"></div>
            <span class="name">${member.name}</span>
            <span class="role">${member.role}</span>
        `;
    card.innerHTML = template;
    card.addEventListener("mouseenter", (e) => {
        cardToEng(card);
    });
    card.addEventListener("mouseleave", (e) => {
        cardToKor(card);
    });
    console.log(card);
    return card;
}
function cardToEng(card) {
    const name = card.querySelector(".name").innerText;
    card.querySelector(".name").innerText = card.dataset.engName;
    card.querySelector(".role").innerText = engRoles[card.dataset.korRole];
}
function cardToKor(card) {
    card.querySelector(".name").innerText = card.dataset.korName;
    card.querySelector(".role").innerText = card.dataset.korRole;
}
window.addEventListener("load", async () => {
    for (const [index, member] of members.entries()) {
        const card = await createCard(member);
        if (index < 3) {
            document.getElementById("seniors").appendChild(card);
        } else if (index < 8) {
            document.getElementById("25324").appendChild(card);
        } else {
            document.getElementById("25323").appendChild(card);
        }
    }
});
