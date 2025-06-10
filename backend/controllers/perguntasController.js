const admin = require("firebase-admin");
const db = admin.firestore();

exports.getAll = async (req, res) => {
  try {
    const categoria = req.query.categoria; // Pega o parâmetro 'categoria' da URL
    let query = db.collection("perguntas");

    if (categoria) {
      // Se o parâmetro 'categoria' foi fornecido, adiciona o filtro
      query = query.where("categoria", "==", categoria);
    }

    const snapshot = await query.get();
    const perguntas = snapshot.docs.map((doc) => {
      // Opcional: retornar o ID do documento, pode ser útil
      return { id: doc.id, ...doc.data() };
    });

    if (perguntas.length === 0 && categoria) {
      return res.status(404).json({
        message: `Nenhuma pergunta encontrada para a matéria: ${categoria}`,
      });
    }

    res.json(perguntas);
  } catch (error) {
    console.error("Erro ao buscar perguntas:", error);
    res.status(500).json({ error: "Erro ao buscar perguntas" });
  }
};
