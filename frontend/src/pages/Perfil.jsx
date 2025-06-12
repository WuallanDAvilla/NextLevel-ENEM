// src/pages/Perfil.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import { auth } from '../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { updateProfile as firebaseUpdateProfile } from 'firebase/auth';
import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Bar, Cell } from 'recharts';
import { IoHomeOutline } from "react-icons/io5";
import { TbTemplate } from "react-icons/tb";
import '../styles/Perfil.css'; // Importando o CSS

// Dados do gráfico (mantidos como exemplo estático)
const data = [
  { name: 'Port', valor: 2, fill: '#7DF9FF' },
  { name: 'Mat', valor: 3, fill: '#6EC6FF' },
  { name: 'Bio', valor: 4, fill: '#4682B4' },
  { name: 'Quim', valor: 5.5, fill: '#9370DB' },
  { name: 'Geo', valor: 4, fill: '#BA55D3' },
  { name: 'Fis', valor: 3, fill: '#DB7093' },
  { name: 'Hist', valor: 2, fill: '#FF6F61' },
  { name: 'Socio', valor: 1, fill: '#FFB6C1' },
  { name: 'Filo', valor: 3, fill: '#FFA500' },
  { name: 'Ed.F', valor: 1, fill: '#FFFF00' },
  { name: 'Arte', valor: 2, fill: '#FFD700' },
  { name: 'Ing', valor: 1, fill: '#90EE90' },
  { name: 'Esp', valor: 1.5, fill: '#00FA9A' },
];

export default function Perfil() {
  const [user, loadingAuth, errorAuth] = useAuthState(auth);
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [editingNome, setEditingNome] = useState('');
  const [email, setEmail] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const fileInputRef = useRef(null);
  const [isEditingName, setIsEditingName] = useState(false);

  useEffect(() => {
    if (loadingAuth) return; 
    if (errorAuth) {
      console.error("Erro de autenticação:", errorAuth);
      return;
    }

    if (user) {
      const displayName = user.displayName || user.email?.split('@')[0] || 'Usuário';
      setNome(displayName);
      setEditingNome(displayName);
      setEmail(user.email || 'Email não disponível');

      const savedImage = localStorage.getItem(`user_image_${user.uid}`);
      if (savedImage) {
        setProfileImage(savedImage);
      } else {
        setProfileImage(null);
      }
    } else {
      // O PrivateRoute já deve ter redirecionado
      console.log("Nenhum usuário logado, redirecionando...");
      navigate("/");
    }
  }, [user, loadingAuth, errorAuth, navigate]);

  const handleSaveName = async () => {
    if (!user) {
      setIsEditingName(false);
      return;
    }
    if (editingNome.trim() && editingNome.trim() !== nome) {
      try {
        await firebaseUpdateProfile(user, { displayName: editingNome.trim() });
        setNome(editingNome.trim());
      } catch (error) {
        console.error("Erro ao atualizar nome no Firebase:", error);
        setEditingNome(nome);
      }
    }
    setIsEditingName(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && user) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;
        setProfileImage(base64Image);
        localStorage.setItem(`user_image_${user.uid}`, base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  const iconStyle = (iconName) => ({
    color: hoveredIcon === iconName ? '#a0d2ff' : 'white',
    fontSize: 30,
    cursor: 'pointer',
    transition: 'color 0.3s ease',
  });

  if (loadingAuth) {
    return <div className="perfil-loading-feedback">Carregando dados do perfil...</div>;
  }
  
  if (!user) {
    // Este return é um fallback, o PrivateRoute deve agir primeiro.
    return (
      <div className="perfil-login-prompt">
        <p>Você precisa estar logado para ver esta página.</p>
        <button onClick={() => navigate('/')}>Ir para Login</button>
      </div>
    );
  }

  return (
    <div className="perfil-page-container">
      <header className="perfil-header">
        <div className="perfil-logo-section">
          <img src={Logo} alt="logo NextLevelENEM" className="perfil-logo-img" />
          <h2 className="perfil-title-header">Next Level <strong className="perfil-title-strong">ENEM</strong></h2>
        </div>
        <div className="perfil-nav-icons">
          <Link
            to="/home"
            onMouseEnter={() => setHoveredIcon('home')}
            onMouseLeave={() => setHoveredIcon(null)}
            title="Página Inicial"
          >
            <IoHomeOutline style={iconStyle('home')} />
          </Link>
          <Link
            to="/ranking"
            onMouseEnter={() => setHoveredIcon('template')}
            onMouseLeave={() => setHoveredIcon(null)}
            title="Ranking"
          >
            <TbTemplate style={iconStyle('template')} />
          </Link>
        </div>
      </header>

      <main className="perfil-main-content">
        <div className="perfil-info-column">
          <div className="perfil-image-container" onClick={() => fileInputRef.current?.click()} title="Clique para alterar a foto de perfil">
            {profileImage ? (
              <img src={profileImage} alt="Perfil" className="perfil-image" />
            ) : (
              <div className="perfil-image-placeholder">{nome.charAt(0).toUpperCase()}</div>
            )}
            <div className="perfil-image-edit-icon">+</div>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
          </div>
          <div className="perfil-user-details">
            {isEditingName ? (
              <div className="perfil-edit-name-container">
                <input
                  type="text"
                  value={editingNome}
                  onChange={(e) => setEditingNome(e.target.value)}
                  className="perfil-input-name-edit"
                  placeholder="Seu nome"
                  autoFocus
                  onBlur={handleSaveName}
                  onKeyDown={(e) => { if (e.key === 'Enter') handleSaveName(); if (e.key === 'Escape') setIsEditingName(false); }}
                />
              </div>
            ) : (
              <div className="perfil-display-name-container" onClick={() => setIsEditingName(true)} title="Clique para editar o nome">
                <h3 className="perfil-user-name">{nome || "Carregando..."}</h3>
                <span className="perfil-edit-pencil">✏️</span>
              </div>
            )}
            <p className="perfil-user-email">{email || "Carregando..."}</p>
          </div>
        </div>

        <div className="perfil-chart-column">
          <h3 className="perfil-chart-title">Seu Desempenho (Exemplo)</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
              <XAxis dataKey="name" stroke="#ffffff" tick={{ fontSize: 12 }} />
              <YAxis stroke="#ffffff" tick={{ fontSize: 12 }} />
              <Tooltip
                contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: 'none', borderRadius: '5px' }}
                labelStyle={{ color: '#a0d2ff', fontWeight: 'bold' }}
                itemStyle={{ color: '#ffffff' }}
              />
              <Bar dataKey="valor" radius={[5, 5, 0, 0]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </main>

      <footer className="perfil-footer">
        <p>© {new Date().getFullYear()} NextLevelENEM. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}