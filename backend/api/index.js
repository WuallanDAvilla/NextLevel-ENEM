const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

// Verifique se o app já foi inicializado para evitar erros durante o hot-reload
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const app = express();
app.use(cors({ origin: FRONTEND_URL_DEPLOYED || "*" }));
app.use(express.json());

// Importando as rotas
const scoresRouter = require("./routes/scores");
const perguntasRouter = require("./routes/perguntas");

// Registrando as rotas
app.use("/scores", scoresRouter);
app.use("/perguntas", perguntasRouter);

module.exports = app;
