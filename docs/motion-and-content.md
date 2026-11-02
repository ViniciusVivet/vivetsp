# Atualização de apresentação — 02/11/2026

- Nome público: Vinícius / Vivet, conforme orientação explícita do proprietário. O endereço de contato existente foi preservado.
- Bio: rap, bastidores no Vivet TV, desenvolvimento e experiência com ensino. Nenhum detalhe privado das conversas consultadas foi incorporado.
- Orbitamos: domínio público atual https://www.orbitamosbr.com/; oferta confirmada na própria página: sites, sistemas e automações.
- Cards: flutuação de 5px em ciclos de 7s, defasada; hover e foco interrompem. Faixa fina com ciclo contínuo de 36s, sem controles de pausa conforme pedido. Suspensão em aba oculta e preferência de movimento reduzido respeitada.
- Galeria: três fotos já fornecidas, 5s por imagem visível; progresso preservado durante hover, toque segurado e foco de teclado. Sem botão de pausa. Toque curto amplia; toque segurado não abre a foto ao soltar. Visualização ampliada com setas, gesto lateral, Escape e clique fora para fechar. Novas fotos podem ser adicionadas em `src/components/portrait-gallery.tsx`.
- Vídeo: thumbnail local, iframe carregado apenas após clique. Diálogo nativo com Escape, fechamento, retorno de foco e alternativa externa. Spotify continua como destino externo.
- Referência técnica: https://developers.google.com/youtube/player_parameters — player mínimo 200 × 200, reprodução após escolha do visitante.

## Arte do GitHub

Arquivo final: `public/images/dev-mascot.webp`. Gerado com a ferramenta integrada Imagegen; ilustração decorativa inspirada no Octocat para um link ao perfil, sem alegação de parceria. Texto do banner é HTML, separado da arte. Fonte sobre uso: https://docs.github.com/en/site-policy/other-site-policies/github-logo-policy

Prompt final:

> Use case: stylized-concept. Create a polished 3D editorial illustration for a personal developer portfolio GitHub link banner: a friendly black Octocat-style cat/octopus mascot wearing simple dark sunglasses and over-ear headphones, relaxed and focused, with a small open laptop. Sophisticated playful aesthetic, not aggressive, no street stereotypes, no jewelry, no weapons. Matte charcoal material, cream face details, subtle sage-green rim light and warm muted gold highlights matching a dark personal artist/developer website. Wide landscape composition, mascot and laptop on the right half, left half clean dark charcoal negative space for accessible HTML text that will be added separately. Background solid near-black #111716 with soft studio shadow; image blends seamlessly into a dark UI. No text, no letters, no badges, no watermark. High quality crisp character silhouette, restrained lighting.
