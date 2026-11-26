const pillars = [
  {
    title: "Créer",
    text: "Partir d'une idée, constituer une équipe, trouver les premiers clients et bâtir une entreprise durable. Plusieurs sociétés du groupe sont nées de cette manière.",
  },
  {
    title: "Reprendre",
    text: "Reprendre à la barre du tribunal des entreprises en difficulté, préserver les savoir-faire et les emplois, puis remettre l'activité sur une trajectoire saine.",
  },
  {
    title: "Développer",
    text: "Accompagner chaque société dans la durée : organisation, outils, stratégie commerciale et recrutement, avec un actionnaire impliqué au quotidien.",
  },
];

const values = [
  {
    title: "Esprit entrepreneur",
    text: "Prendre des décisions, assumer les risques et avancer vite.",
  },
  {
    title: "Engagement long terme",
    text: "Construire des entreprises pour les faire grandir, pas pour les revendre.",
  },
  {
    title: "Pragmatisme",
    text: "Des actions concrètes, mesurables, adaptées à chaque situation.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="flex min-h-[70vh] flex-col items-center justify-center bg-[var(--color-light-gray)] px-6 py-24 text-center">
        <p className="text-sm font-semibold tracking-widest text-[var(--color-primary)] uppercase">
          Holding entrepreneuriale
        </p>
        <h1 className="mt-4 text-4xl font-bold sm:text-6xl">Groupe Catoire</h1>
        <p className="mt-6 max-w-2xl text-lg text-[var(--color-gray)] sm:text-xl">
          Créer des entreprises, reprendre celles qui traversent une période
          difficile et les faire grandir.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold">Notre démarche</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-xl border border-gray-200 p-8"
            >
              <h3 className="text-xl font-semibold text-[var(--color-primary)]">
                {pillar.title}
              </h3>
              <p className="mt-4 text-[var(--color-gray)]">{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-light-gray)] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold">
            Reprise à la barre
          </h2>
          <p className="mt-6 text-center text-lg text-[var(--color-gray)]">
            Une entreprise en redressement judiciaire n&apos;est pas une
            entreprise condamnée. Derrière chaque procédure, il y a des clients,
            des équipes et un savoir-faire. Nous étudions les dossiers de
            reprise avec attention et nous nous engageons sur un plan concret
            de relance.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold">Nos valeurs</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="text-center">
              <h3 className="text-lg font-semibold">{value.title}</h3>
              <p className="mt-2 text-[var(--color-gray)]">{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-gray-200 px-6 py-8 text-center text-sm text-[var(--color-gray)]">
        © {new Date().getFullYear()} Groupe Catoire
      </footer>
    </main>
  );
}
