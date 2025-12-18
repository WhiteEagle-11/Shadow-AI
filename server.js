import express from "express";

const app = express();
app.use(express.json());



app.post("/chat", async (req, res) => {
    try {
        const userText = req.body.message;

        const result = await chat.sendMessage({
            message: userText
        });

        res.json({ reply: result.text });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(3000, () => {
    console.log("🔥 Shadow backend running on http://localhost:3000");
});
