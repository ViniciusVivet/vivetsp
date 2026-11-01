# VIVET SP — Arte, código & vida real

Página pessoal de Douglas Vinicius (Vivet), rapper, criador e desenvolvedor da Zona Leste de São Paulo.

## Experiência

- **Início:** abertura fotográfica e quatro cards clicáveis para Casa Bomba, Vivet TV, Orbitamos e o catálogo no Spotify. Uma chamada abaixo dos cards destaca os projetos no GitHub.
- **Sobre:** biografia curta, retrato real do artista e conexão com a Orbitamos.
- **Contato:** e-mail, botão para copiar o endereço, Instagram e Orbitamos.
- **/links:** página compacta para a bio, com os mesmos destinos verificados e sem duplicações.

A navegação permanece visível no celular. O site oferece foco de teclado, link para pular ao conteúdo, estados de navegação e suporte a movimento reduzido. Não há formulário sem integração ou número fictício de WhatsApp.

## Desenvolvimento

Node.js 20 ou superior.

```bash
npm ci
npm run dev
```

Abra http://localhost:3000. Para validar a produção:

```bash
npm run build
npm start
```

Stack: Next.js App Router, React, TypeScript, Tailwind e Lucide. A tipografia é servida localmente pelo next/font após o build.

O lockfile inclui as correções compatíveis do Next.js 15. O override de PostCSS 8.5.23 mantém a dependência interna do Next na versão corrigida sem exigir uma migração de major; revisar esse override ao atualizar o framework.

## Editar conteúdo e fotos

Links, nomes e textos dos cards estão em `src/data/profile.ts`. A página principal está em `src/app/page.tsx`; a página de bio, em `src/app/links/page.tsx`. A direção visual e os breakpoints ficam em `src/app/globals.css`.

As imagens estão em `public/images/` e são servidas localmente:

| Arquivo            | Uso         | Como substituir                                                            |
| ------------------ | ----------- | -------------------------------------------------------------------------- |
| vivet-home.webp    | Abertura    | Foto vertical; composição à direita no desktop e acima do texto no celular |
| vivet-sobre.webp   | Sobre e bio | Retrato vertical; atualizar o texto alternativo se a foto mudar            |
| vivet-tv.webp      | Vivet TV    | Miniatura real do canal, exibida inteira                                   |
| casa-bomba.webp    | Lançamento  | Capa oficial quadrada, exibida inteira                                     |
| vivet-codigo.webp  | Orbitamos   | Foto vertical, projetos ou processo                                        |
| vivet-spotify.webp | Spotify     | Retrato oficial do artista                                                 |

A abertura, o Sobre, a bio e a Orbitamos usam fotos enviadas pelo Vivet. Lançamento e Spotify usam imagens oficiais obtidas pelo oEmbed do Spotify. O card Vivet TV aponta para o canal de vlogs, separado do canal musical nas redes. Prefira WebP comprimido e confira os enquadramentos em desktop e celular.

Fontes e proveniência: `docs/content-sources.md`, `docs/asset-provenance.md` e `docs/card-image-sources.md`.

## Publicação

O projeto mantém a estrutura padrão do Next.js e pode seguir o deploy já conectado ao repositório. Nenhum serviço de hospedagem novo é necessário. O commit no GitHub e o deploy do provedor são etapas distintas.
