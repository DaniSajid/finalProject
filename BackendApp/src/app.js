import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json({limit:"160kb"}));
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}));
app.use(express.urlencoded({extended:true,
    limit:"160kb"
}));
app.use(express.static("public"));

export {app};