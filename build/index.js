"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express') --- commonjs
const express_1 = __importDefault(require("express")); // ESModules
const diaries_1 = __importDefault(require("./routes/diaries"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); // middleware that transforms req.body into JSON
const PORT = 3000;
app.get('/ping', (_req, res) => {
    console.log('Someone pinged here');
    res.send('pong');
});
app.use('/api/diaries', diaries_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
