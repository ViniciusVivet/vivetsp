# VIVET SP — Arte, código & vida real

Página pessoal de Douglas Vinicius (Vivet), rapper, criador e desenvolvedor da Zona Leste de São Paulo.

## Experiência

- **Início:** uma abertura fotográfica e quatro cards inteiramente clicáveis para vídeos, BET777, GitHub e o catálogo no Spotify. O destino aparece no próprio card.
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

| Arquivo             | Uso         | Como substituir                                                       |
| ------------------- | ----------- | --------------------------------------------------------------------- |
| hero-sao-paulo.webp | Abertura    | Foto horizontal, com assunto à direita e espaço à esquerda para texto |
| vivet-portrait.jpg  | Sobre e bio | Retrato vertical; atualizar o texto alternativo se a foto mudar       |
| card-vlog.webp      | Vídeos      | Foto vertical, câmera ou bastidores                                   |
| card-music.webp     | Música      | Foto vertical, estúdio ou performance                                 |
| card-code.webp      | Código      | Foto vertical, projetos ou processo                                   |
| card-spotify.webp   | Spotify     | Foto vertical, universo musical                                       |

O hero é uma imagem ilustrativa gerada por IA, com uma pessoa anônima; não é um retrato do artista. Os quatro cards usam fotografias ilustrativas provisórias. O Sobre e a bio usam o retrato público de Vivet. Substituir os arquivos pelos mesmos nomes mantém o layout; prefira WebP comprimido e confira o enquadramento em desktop e celular.

Fontes e proveniência: `docs/content-sources.md`, `docs/asset-provenance.md` e `docs/card-image-sources.md`.

## Publicação

O projeto mantém a estrutura padrão do Next.js e pode seguir o deploy já conectado ao repositório. Nenhum serviço de hospedagem novo é necessário. O commit no GitHub e o deploy do provedor são etapas distintas.
