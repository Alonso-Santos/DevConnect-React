import { useState } from "react";

export default function App() {
  // Estados reativos
  const [contador, setContador] = useState(0);
  const [novoItem, setNovoItem] = useState("");
  const [lista, setLista] = useState([
    "Configurar ambiente React/Vite",
    "Integrar Tailwind CSS para estilizacao utilitaria",
    "Cadastro de novos cards de desenvolvedores",
    "Filtro e busca em tempo real no DevConnect"
  ]);

  // Função para adicionar item mantendo a imutabilidade
  function adicionarItem(e) {
    e.preventDefault();
    if (!novoItem.trim()) return;
    setLista([...lista, novoItem]); // Operador Spread
    setNovoItem(""); // Limpa o campo do formulário
  }

  return (
    <div className="min-h-screen bg-slate-100 p-8 font-sans text-slate-800">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          <span className="text-xs font-semibold tracking-wider uppercase text-indigo-600">DevConnect</span>
        </div>
        <h1 className="text-2xl font-bold text-indigo-600 mb-2">Painel do Projeto Pessoal</h1>
        <p className="text-slate-600 mb-6">Aplicacao Reativa com React e Tailwind CSS | EFG / UFG</p>

        {/* Bloco de Interatividade: Contador */}
        <div className="bg-indigo-50 p-4 rounded-lg mb-6 flex items-center justify-between">
          <span className="font-semibold text-indigo-900">Curtidas do Projeto: {contador}</span>
          <button 
            onClick={() => setContador(contador + 1)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition duration-200"
          >
            Curtir (+1)
          </button>
        </div>

        {/* Formulário Dinâmico */}
        <form onSubmit={adicionarItem} className="flex gap-2 mb-6">
          <input
            type="text"
            value={novoItem}
            onChange={(e) => setNovoItem(e.target.value)}
            placeholder="Cadastrar nova funcionalidade..."
            className="flex-1 border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button 
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-lg font-medium transition duration-200"
          >
            Adicionar
          </button>
        </form>

        {/* Lista Dinâmica e Reativa */}
        <h2 className="text-lg font-semibold text-slate-700 mb-3">Funcionalidades Mapeadas:</h2>
        <ul className="space-y-2">
          {lista.map((item, index) => (
            <li key={index} className="bg-slate-50 p-3 rounded-lg border border-slate-200 flex justify-between items-center">
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
