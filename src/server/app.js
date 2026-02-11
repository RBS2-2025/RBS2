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

module.exports = app;
