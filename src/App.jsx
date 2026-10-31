import { useState } from "react";

export default function App() {
  // Estados reativos (useState)
  const [contador, setContador] = useState(0);
  const [novoItem, setNovoItem] = useState("");
  const [funcionalidades, setFuncionalidades] = useState([
    { icon: "📝", texto: "Cadastro de novos itens" },
    { icon: "🔍", texto: "Filtro e busca em tempo real" },
    { icon: "📋", texto: "Listagem dinâmica de dados" },
    { icon: "📱", texto: "Interface responsiva e reativa" },
  ]);

  // Função para adicionar novo item mantendo a imutabilidade
  function adicionarItem(e) {
    e.preventDefault();
    if (!novoItem.trim()) return;

    // Operador Spread para adicionar preservando os itens anteriores
    setFuncionalidades([
      ...funcionalidades,
      { icon: "🚀", texto: novoItem.trim() }
    ]);
    setNovoItem(""); // Limpa o campo do formulário
  }

  return (
    <div className="min-h-screen bg-[#111318] text-[#e2e4ea] flex flex-col font-sans">
      {/* Header do DevConnect */}
      <header className="border-b border-[#1e2028] px-6 py-12 md:px-10">
        <div className="max-w-[780px] mx-auto">
          {/* Badge Escola do Futuro */}
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/25 text-[#a5b4fc] text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#818cf8]"></span>
            Escola do Futuro de Goiás
          </div>

          {/* Título Principal */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#f1f2f6] tracking-tight mb-2.5">
            Dev<span className="text-[#818cf8]">Connect</span>
          </h1>

          {/* Descrição */}
          <p className="text-sm md:text-base text-gray-400 max-w-lg mb-6 leading-relaxed">
            Plataforma para Desenvolvedores — conectando estudantes da EFG com
            oportunidades no mercado de tecnologia.
          </p>

          {/* Bloco de Interatividade: Contador Reativo */}
          <div className="bg-[#16181f] border border-[#1e2028] p-4 rounded-xl flex items-center justify-between">
            <span className="text-sm font-semibold text-gray-200">
              Curtidas do Projeto:{" "}
              <span className="text-[#818cf8] font-bold text-base ml-1">
                {contador}
              </span>
            </span>
            <button
              onClick={() => setContador(contador + 1)}
              className="bg-[#6366f1] hover:bg-[#4f46e5] text-white text-sm px-4 py-2 rounded-lg font-medium transition duration-200 cursor-pointer shadow-sm hover:shadow"
            >
              Curtir (+1)
            </button>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="flex-1 max-w-[780px] w-full mx-auto px-6 py-10 md:px-10">
        {/* Formulário Dinâmico */}
        <form onSubmit={adicionarItem} className="flex gap-2 mb-8">
          <input
            type="text"
            value={novoItem}
            onChange={(e) => setNovoItem(e.target.value)}
            placeholder="Cadastrar nova funcionalidade no DevConnect..."
            className="flex-1 bg-[#16181f] border border-[#1e2028] text-sm text-gray-200 placeholder-gray-500 rounded-lg px-4 py-2.5 focus:outline-none focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1] transition duration-150"
          />
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm px-5 py-2.5 rounded-lg font-medium transition duration-200 cursor-pointer shadow-sm"
          >
            Adicionar
          </button>
        </form>

        {/* Cabeçalho da Lista */}
        <h2 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-5">
          Funcionalidades do Projeto
        </h2>

        {/* Lista Dinâmica de Cards */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none p-0 m-0">
          {funcionalidades.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3.5 p-4 bg-[#16181f] border border-[#1e2028] rounded-xl hover:border-indigo-900/60 hover:bg-[#1a1c26] transition duration-200"
            >
              <span className="text-xl shrink-0 leading-none mt-0.5">
                {item.icon}
              </span>
              <span className="text-sm font-medium text-[#c9ccd6] leading-snug">
                {item.texto}
              </span>
            </li>
          ))}
        </ul>
      </main>

      {/* Rodapé */}
      <footer className="border-t border-[#1e2028] py-6 px-6 text-center text-xs text-gray-500 tracking-wide mt-auto">
        <p>Projeto em Desenvolvimento &nbsp;·&nbsp; EFG / UFG — 2026</p>
      </footer>
    </div>
  );
}
