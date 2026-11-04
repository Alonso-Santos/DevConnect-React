import Header from "./components/Header";
import CardFeature from "./components/CardFeature";
import Footer from "./components/Footer";

export default function App() {
  const recursos = [
    {
      id: 1,
      icone: "🧩",
      titulo: "Componentização",
      descricao: "Código modular dividindo a interface em pequenos blocos fáceis de manter.",
      tag: "React"
    },
    {
      id: 2,
      icone: "🎨",
      titulo: "Tailwind CSS",
      descricao: "Estilização utilitária e responsiva aplicada diretamente nos componentes.",
      tag: "CSS"
    },
    {
      id: 3,
      icone: "⚡",
      titulo: "Vite + React",
      descricao: "Servidor local ultrarrápido e estrutura SPA moderna.",
      tag: "Build"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-8">
      {/* 1. Header com props */}
      <Header
        titulo="Meu Projeto Front-end"
        subtitulo="Componentização Reutilizável e Props na Prática"
      />
      
      <main className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl font-bold text-slate-700 mb-4">Recursos do Sistema:</h2>
        
        {/* 2. Lista dinâmica utilizando map e props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recursos.map((item) => (
            <CardFeature
              key={item.id}
              icone={item.icone}
              titulo={item.titulo}
              descricao={item.descricao}
              tag={item.tag}
            />
          ))}
        </div>
      </main>

      {/* 3. Footer com autor via props */}
      <Footer autor="Alonso Santos" />
    </div>
  );
}
