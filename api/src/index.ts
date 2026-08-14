import express from "express";
import cors from "cors";
import resourceRouter from './feature/resources/resources.routes'



const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
});

app.use('/api/resources/',resourceRouter)

app.listen(8000, () => {
    console.log("API running on port 8000");
});