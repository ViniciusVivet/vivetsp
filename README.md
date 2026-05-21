# VIVET SP | Arte, Codigo e Corre

Site oficial do **VIVET SP**, rapper da Zona Leste de Sao Paulo, criador de conteudo, estudante de tecnologia, instrutor tecnico e fundador da Orbitamos.

O projeto nasce como um hub pessoal, artistico e profissional. A proposta nao e separar artista de programador. A ideia central e mostrar a identidade completa:

> **VIVET = Arte + Codigo + Corre**

## Sobre o projeto

Este site apresenta o Vivet como artista independente, criador e construtor de solucoes digitais. Ele funciona como:

- pagina oficial do artista;
- portfolio vivo de tecnologia;
- central de links para musica, conteudo e projetos;
- funil comercial para sites e experiencias digitais;
- ponte para a Orbitamos;
- manifesto para jovens da periferia que querem estudar tecnologia sem abandonar a arte.

A narrativa principal e direta: a tecnologia nao matou a arte. Ela fortalece a estrutura para a arte sobreviver, escalar e virar negocio.

## Identidade

O site trabalha uma estetica escura, urbana e tecnologica, misturando referencias de rap/trap brasileiro, quebrada, programacao, cyberpunk, robótica, ensino, empreendedorismo e artista independente.

Frase-guia:

> Rapper da Zona Leste construindo arte, codigo e futuro.

Slogan:

> Arte, Codigo e Corre.

## Principais secoes

- **Hero:** primeira dobra de impacto com manifesto visual e CTAs para musica, tecnologia, orcamento e Orbitamos.
- **Numeros:** metricas editaveis para prova social sem inventar dados.
- **Musica:** destaque para BET777, Sem Simpatia, Casa Bomba, clipes e bastidores.
- **Tech / Projetos:** projetos digitais, estudos, aulas, Supabase, Next.js, Orbitamos e YUME Atelier.
- **Manifesto Quebrada Tech:** secao emocional sobre periferia, arte, estudo, tecnologia e futuro.
- **Servicos:** funil comercial para sites, landing pages, portfolios, paginas de links, vitrines e integracao com WhatsApp.
- **Orbitamos:** ponte para o laboratorio de solucoes digitais do Vivet.
- **Timeline:** jornada em formato de progresso/missao.
- **Links oficiais:** alternativa profissional ao link da bio.
- **/links:** pagina premium para bio do Instagram.

## Stack

- **Next.js** com App Router
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React**
- **ESLint**

## Arquitetura

```txt
src/
  app/
    links/
      page.tsx
    globals.css
    layout.tsx
    page.tsx
  components/
    cta-button.tsx
    footer.tsx
    header.tsx
    hero.tsx
    links-section.tsx
    manifesto-section.tsx
    music-section.tsx
    orbitamos-section.tsx
    project-card.tsx
    section-title.tsx
    services-section.tsx
    stat-card.tsx
    stats-section.tsx
    tech-projects-section.tsx
    timeline-section.tsx
  data/
    profile.ts
```

## Conteudo editavel

Os principais textos, links, metricas, musicas, projetos, servicos e timeline ficam centralizados em:

```txt
src/data/profile.ts
```

Isso permite atualizar numeros e links sem mexer no layout.

## Como rodar localmente

```bash
npm install
npm run dev
```

Depois acesse:

```txt
http://localhost:3000
```

## Validacao

```bash
npm run lint
npm run build
```

## Paginas

- `/` - landing page oficial do Vivet.
- `/links` - pagina de links para bio.

## Orbitamos

A Orbitamos aparece como o laboratorio de solucoes digitais do Vivet: o espaco onde ideias viram sites, sistemas, automacoes e experiencias digitais para artistas, marcas, pequenos negocios e projetos independentes.

Site oficial:

```txt
https://orbitamos.vercel.app/
```

## Objetivo comercial

O site foi pensado para abrir portas em varias frentes:

- fortalecer a presenca artistica;
- vender servicos digitais;
- apresentar autoridade em tecnologia;
- conectar seguidores a musicas e conteudos;
- criar uma ponte profissional com recrutadores, clientes e parceiros;
- posicionar o Vivet como artista, estudante, instrutor e empreendedor em evolucao.
