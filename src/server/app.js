//@ts-nocheck
const express = require("express");
const session = require("express-session");
const fs = require("fs").promises;
const path = require("path");

const app = express();

const IMAGE_DIR = path.join(process.cwd(), "private", "images");

// session
app.use(
    session({
        secret: "25324",
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false },
    }),
);

// 정적 파일 제공
app.use(express.static(path.join(__dirname, "../../private")));

// 루트 경로에서 index.html 제공
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../index.html"));
});

module.exports = app;
