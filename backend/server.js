const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
require("dotenv").config();

// Inicializando o Firebase Admin SDK
const serviceAccount = require("./firebase-key.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app = express();
app.use(cors({ origin: "*", }));
app.use(express.json());


// Importanto as rotas
const scoresRouter = require("./routes/scores");
const perguntasRouter = require("./routes/perguntas");

// Registrando as rotas
app.use("/api/scores", scoresRouter);
app.use("/api/perguntas", perguntasRouter);

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';
app.listen(PORT, HOST, () => console.log(`Servidor rodando na porta ${PORT}`));
