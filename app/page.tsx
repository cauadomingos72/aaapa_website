import Link from "next/link";
import Image from "next/image";

const timeline = [
  { year: "MAR 2025", title: "Início da nossa história" },
  { year: "JUN 2025", title: "Primeiro grande evento" },
  { year: "NOV 2025", title: "Ações e novas parcerias" },
  { year: "ABR 2026", title: "Um novo capítulo" },
];

const sections = [
  { href: "/eventos", number: "01", title: "Eventos", text: "Próximos encontros, festas e produções da AAAPA." },
  { href: "/produtos", number: "02", title: "Produtos", text: "Conheça os produtos que carregam a identidade da nossa atlética." },
  { href: "/quem-somos", number: "03", title: "Quem somos", text: "Conheça a diretoria e as pessoas por trás de cada projeto." },
  { href: "/parceiros", number: "04", title: "Parceiros", text: "Marcas e coletivos que fazem parte da nossa trajetória." },
  { href: "/associe-se", number: "05", title: "Seja associado", text: "Entre para a comunidade e participe mais de perto." },
  { href: "/contato", number: "06", title: "Fale conosco", text: "Ideias, parcerias ou dúvidas? Vamos conversar." },
];

function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="AAAPA - Página inicial">
        <Image src="/logo-aaapa.png" alt="Logo da AAAPA" width={200} height={126} />
        <span>AAAPA</span>
      </Link>
      <nav aria-label="Navegação principal">
        <Link href="/quem-somos">Quem somos</Link>
        <Link href="/eventos">Eventos</Link>
        <Link href="/produtos">Produtos</Link>
        <Link href="/parceiros">Parceiros</Link>
      </nav>
      <Link className="header-cta" href="/associe-se">Seja associado <span>↗</span></Link>
    </header>
  );
}

export default function Home() {
  return (
    <main>
      <Header />

      <section className="timeline-section" aria-labelledby="timeline-title">
        <div className="section-kicker">
          <span>Arquivo AAAPA</span>
          <h2 id="timeline-title">Melhores momentos</h2>
        </div>
        <div className="timeline">
          {timeline.map((item) => (
            <article className="moment" key={item.year}>
              <div className="image-placeholder timeline-image"><span>Imagem</span></div>
              <div className="moment-copy">
                <strong>{item.year}</strong>
                <p>{item.title}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-identity">
          <Image src="/logo-aaapa.png" alt="Morcego, mascote da AAAPA" width={200} height={126} priority />
          <div className="hero-name">
            <h1>AAAPA</h1>
            <p>Associação Atlética Acadêmica de Produção Audiovisual</p>
          </div>
        </div>
      </section>

      <section className="explore" aria-labelledby="explore-title">
        <div className="explore-heading">
          <span>Explore</span>
          <h2 id="explore-title">Entre em cena</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cada área abre uma nova parte da nossa história.</p>
        </div>
        <div className="section-grid">
          {sections.map((section) => (
            <Link href={section.href} className="section-card" key={section.href}>
              <div className="image-placeholder card-image"><span>Imagem</span></div>
              <div className="card-body">
                <span className="card-number">{section.number}</span>
                <h3>{section.title}</h3>
                <p>{section.text}</p>
                <span className="card-arrow">↗</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer>
        <div className="footer-brand"><Image src="/logo-aaapa.png" alt="" width={200} height={126} /><strong>AAAPA</strong></div>
        <p>Associação Atlética Acadêmica de Produção Audiovisual</p>
        <a href="https://www.instagram.com/aaapa.univali/" target="_blank" rel="noreferrer">Instagram ↗</a>
      </footer>
    </main>
  );
}
