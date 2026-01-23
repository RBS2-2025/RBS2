//@ts-nocheck
//imports
const http = require("http");
const express = require("express"); //express
const expressSession = require("express-session");
const app = express();
const port = process.env.PORT || 3000;
const fs = require("fs").promises; // file
const path = require("path");
const server = http.createServer(app);
const IMAGE_DIR = path.join(__dirname, "private", "images");

//setting
app.use(express.static("public"));

//Session
app.use(
    expressSession({
        secret: "25324",
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false },
    }),
);

//louting
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/pages/main.html");
});
app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/pages/about.html");
});
app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/pages/contact.html");
});
app.get("/awards", (req, res) => {
    res.sendFile(__dirname + "/pages/awards.html");
});

app.get("/api/profile-image/:imageName", async (req, res) => {
    try {
        // 인증 확인
        if (!req.sessionID) {
            return res.status(401).json({ error: "Unauthorized" });
        }

        const imageName = req.params.imageName;

        // 파일명 검증 (경로 traversal 공격 방지)
        if (imageName.includes("..") || imageName.includes("/") || imageName.includes("\\")) {
            return res.status(400).json({ error: "Invalid image name" });
        }

        // .png 확장자 추가
        const fileName = `${imageName}.png`;
        const imagePath = path.join(IMAGE_DIR, fileName);

        // 파일 존재 확인
        await fs.access(imagePath);

        const imageBuffer = await fs.readFile(imagePath);
        const base64Image = imageBuffer.toString("base64");
        const mimeType = "image/png";

        res.json({
            image: `data:${mimeType};base64,${base64Image}`,
        });
    } catch (error) {
        console.error(error);
        if (error.code === "ENOENT") {
            return res.status(404).json({ error: "Image not found" });
        }
        res.status(500).json({ error: "Server error" });
    }
});

//listen
// app.listen(port, () => {
//     console.log(`listening on port ${port}`);
// });
module.exports = { app };
