import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-badge">
          <span className="header-badge-dot"></span>
          Escola do Futuro de Goiás
        </div>
        <h1 className="header-title">
          Dev<span>Connect</span>
        </h1>
        <p className="header-desc">
          Plataforma para Desenvolvedores — conectando estudantes da EFG com
          oportunidades no mercado de tecnologia.
        </p>
      </div>
    </header>
  );
}
