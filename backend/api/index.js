const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");

// É uma boa prática adicionar um try-catch aqui para depurar problemas com a variável de ambiente
try {
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

  // Verifique se o app já foi inicializado para evitar erros
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }
} catch (error) {
  // Isso vai te dar um log muito mais claro na Vercel se o problema for a chave do Firebase
  console.error("Firebase Admin Initialization Error", error.stack);
}


const app = express();

// CORREÇÃO: Ler a variável de ambiente corretamente
app.use(cors({ origin: process.env.FRONTEND_URL_DEPLOYED || "*" }));
app.use(express.json());

// Importando as rotas
const scoresRouter = require("./routes/scores");
const perguntasRouter = require("./routes/perguntas");

// Registrando as rotas (sem o /api na frente, como você definiu)
app.use("/scores", scoresRouter);
app.use("/perguntas", perguntasRouter);

// Rota de teste para verificar se o servidor está no ar
app.get("/", (req, res) => {
  res.status(200).send("Servidor backend está funcionando!");
});


module.exports = app;