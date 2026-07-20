import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

const pages = {
  "quem-somos": { title: "Quem somos", intro: "Conheça a diretoria e as pessoas que transformam ideias em projetos, eventos e experiências.", items: ["Presidência", "Comunicação", "Eventos"] },
  eventos: { title: "Eventos", intro: "Acompanhe os próximos encontros e relembre as produções que marcaram nossa trajetória.", items: ["Próximo evento", "Produções anteriores", "Galeria"] },
  produtos: { title: "Produtos", intro: "Produtos criados para levar a identidade da AAAPA para dentro e fora da universidade.", items: ["Coleção atual", "Vestuário", "Acessórios"] },
  parceiros: { title: "Parceiros", intro: "Projetos fortes são construídos em conjunto. Conheça quem caminha ao nosso lado.", items: ["Parceiro em destaque", "Apoiadores", "Seja parceiro"] },
  "associe-se": { title: "Seja associado", intro: "Faça parte da AAAPA e viva mais de perto as experiências da nossa comunidade.", items: ["Benefícios", "Como participar", "Inscrição"] },
  contato: { title: "Fale conosco", intro: "Quer propor uma parceria, tirar uma dúvida ou compartilhar uma ideia? Entre em contato.", items: ["Instagram", "E-mail", "Mensagem"] },
} as const;

type PageSlug = keyof typeof pages;

export default async function SectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!(slug in pages)) notFound();
  const page = pages[slug as PageSlug];

  return (
    <main className="inner-page">
      <header className="site-header">
        <Link href="/" className="brand"><Image src="/logo-aaapa.png" alt="Logo da AAAPA" width={200} height={126} /><span>AAAPA</span></Link>
        <nav aria-label="Navegação principal"><Link href="/quem-somos">Quem somos</Link><Link href="/eventos">Eventos</Link><Link href="/produtos">Produtos</Link><Link href="/parceiros">Parceiros</Link></nav>
        <Link className="header-cta" href="/associe-se">Seja associado <span>↗</span></Link>
      </header>
      <section className="inner-hero">
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
      </section>
      <section className="inner-content">
        {page.items.map((item) => (
          <article className="content-block" key={item}>
            <div className="image-placeholder"><span>Imagem</span></div>
            <div className="content-copy"><h2>{item}</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
          </article>
        ))}
      </section>
      <Link href="/" className="back-link">← Voltar para a página inicial</Link>
    </main>
  );
}
