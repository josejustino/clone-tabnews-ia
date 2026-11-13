import ConfettiLoader from "./confetti-loader";

export const revalidate = 60;

export default async function Home() {
  const response = await fetch(
    "https://www.tabnews.com.br/api/v1/contents?strategy=old&per_page=1",
    {
      next: { revalidate: 60 },
    },
  );

  if (!response.ok) {
    throw new Error("Não foi possível consultar os conteúdos do TabNews.");
  }

  const rawCount = response.headers.get("x-pagination-total-rows");
  const contentCount = Number(rawCount ?? "0");

  if (!Number.isFinite(contentCount) || contentCount <= 0) {
    throw new Error("A API do TabNews não retornou o total de conteúdos.");
  }

  return (
    <main className="construction-page">
      <ConfettiLoader />
      <section className="construction-card">
        <p className="eyebrow">TabNews · curso.dev</p>
        <h1>Em construção</h1>
        <p className="message">
          Estamos neste exato momento reconstruindo o TabNews, um lugar na
          internet para quem trabalha com tecnologia e precisa consumir
          conteúdos com valor concreto
        </p>
        <p className="content-count">
          <strong>{contentCount.toLocaleString("pt-BR")}</strong> conteúdos
          publicados no TabNews
        </p>
        <a
          className="official-link"
          href="https://www.tabnews.com.br"
          target="_blank"
          rel="noreferrer"
        >
          Visite o site oficial <span aria-hidden="true">↗</span>
        </a>
      </section>
    </main>
  );
}
