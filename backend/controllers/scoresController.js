const admin = require("firebase-admin");
const db = admin.firestore();

exports.create = async (req, res) => {
    try {
        const { user, pontos } = req.body;
        await db.collection("scores").add({ ... user, pontos, timestamp: Date.now() });
        res.status(201).json({ message: "Pontuação criada com sucesso" });
    } catch (error) {
        console.error("Erro ao criar pontuação:", error);
        res.status(500).json({ error: "Erro ao criar pontuação" });
    }
};

exports.listTop = async (req, res) => {
    try {
        const snapshot = await db.collection("scores").orderBy("pontos", "desc").limit(10).get();
        const scores = snapshot.docs.map((doc) => doc.data());
        res.json(scores);
    } catch (error) {
        console.error("Erro ao buscar pontuação:", error);
        res.status(500).json({ error: "Erro ao buscar pontuação" });
    }
};