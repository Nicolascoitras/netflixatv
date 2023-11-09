import React from 'react';
import './App.css';
import check from '../assets/check.png';

function PlanCard({ nome, resolucao, usuarios, valor }) {
  return (
    <div className="card">
      <h2>Plano {nome}</h2>
      <div id="vantagens">
        <h2>Preço: {valor} / mês</h2>
        <p>
          <img src={check} alt="" /> Assistir em até {resolucao}
        </p>
        <p>
          <img src={check} alt="" /> Até {usuarios} usuários
        </p>
      </div>
    </div>
  );
}

function App() {
  const planos = [
    { nome: 'Básico', resolucao: '1080p', usuarios: '2', valor: 'R$ 20.99' },
    { nome: 'Intermediário', resolucao: '1440p', usuarios: '4', valor: 'R$ 30.99' },
    { nome: 'VIP', resolucao: '4K', usuarios: '5', valor: 'R$ 45.99' },
  ];

  return (
    <>
      <h1>Conheça nossos planos</h1>
      <div className="divmain">
        {planos.map((plano, index) => (
          <PlanCard key={index} {...plano} />
        ))}
      </div>
    </>
  );
}

export default App;
