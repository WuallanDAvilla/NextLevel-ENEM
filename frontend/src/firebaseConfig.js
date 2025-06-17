// ARQUIVO: frontend/src/firebaseConfig.js (JÁ ESTÁ PERFEITO! ✅)

import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  browserLocalPersistence,
  setPersistence
} from "firebase/auth";

// Configuração do Firebase usando variáveis de ambiente
// Agora ele vai encontrar as variáveis corretas no seu arquivo .env!
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY, // Busca por VITE_API_KEY
  authDomain: import.meta.env.VITE_AUTH_DOMAIN, // Busca por VITE_AUTH_DOMAIN
  projectId: import.meta.env.VITE_PROJECT_ID, // ...e assim por diante!
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa autenticação e provider do Google
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Configura a persistência local
setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error("Erro ao configurar a persistência do Firebase:", error);
});

export { app, auth, googleProvider };