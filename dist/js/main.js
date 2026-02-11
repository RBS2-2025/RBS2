function showAlert(message) {
    const alertEl = document.getElementById("Alert");
    const messageEl = document.getElementById("AlertMessage");
    const closeEl = document.getElementById("AlertClose");

    messageEl.textContent = message;
    alertEl.classList.remove("hidden");
    alertEl.classList.add("flex");

    const closeHandler = () => {
        alertEl.classList.add("hidden");
        alertEl.classList.remove("flex");
        closeEl.removeEventListener("click", closeHandler);
    };

    closeEl.addEventListener("click", closeHandler);
}

function copyEmail() {
    const email = "rbs2kla2025@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        showAlert("이메일이 복사되었습니다.");
    }).catch(err => {
        showAlert("Failed to copy email address: " + err);
    });
}

function toggleMenu() {
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");
    
    if (hamburger && mobileMenu) {
        hamburger.classList.toggle("active");
        mobileMenu.classList.toggle("active");
    }
}