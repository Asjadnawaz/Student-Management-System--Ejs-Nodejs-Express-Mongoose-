import { ConnectDB } from "./config/DB.js";
import express from 'express';
import dotenv from 'dotenv';
import path from "path";
import { router } from "./routes/studentRoutes.js";
dotenv.config();

const app = express();
const PORT = 2000;

app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));
app.use(express.urlencoded({extended: true}));
app.use('/', router);

ConnectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is Running on http://localhost:${PORT}`);
    })
})

