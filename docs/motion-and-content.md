# Atualização de apresentação — 02/11/2026

- Nome público: Vinicius / Vivet, conforme orientação explícita do proprietário. O endereço de contato existente foi preservado.
- Bio: rap, bastidores no Vivet TV, desenvolvimento e experiência com ensino. Nenhum detalhe privado das conversas consultadas foi incorporado.
- Orbitamos: domínio público atual https://www.orbitamosbr.com/; oferta confirmada na própria página: sites, sistemas e automações.
- Cards: flutuação de 5px em ciclos de 7s, defasada; hover e foco interrompem. Faixa fina com ciclo contínuo de 36s, sem controles de pausa conforme pedido. Suspensão em aba oculta e preferência de movimento reduzido respeitada.
- Galeria: três fotos já fornecidas, 5s por imagem visível; progresso preservado durante hover, toque segurado e foco de teclado. Sem botão de pausa. Toque curto amplia; toque segurado não abre a foto ao soltar. Visualização ampliada com setas, gesto lateral, Escape e clique fora para fechar. Novas fotos podem ser adicionadas em `src/components/portrait-gallery.tsx`.
- Vídeo: thumbnail local, iframe carregado apenas após clique. Diálogo nativo com Escape, fechamento, retorno de foco e alternativa externa. Spotify continua como destino externo.
- Referência técnica: https://developers.google.com/youtube/player_parameters — player mínimo 200 × 200, reprodução após escolha do visitante.

## Acesso aos cards — 09/11/2026

A abertura acompanha a altura da tela com limites de tamanho, preservando a foto e a assinatura. No celular, a marca se sobrepõe ao degradê inferior da imagem e os espaços entre textos são menores. A faixa vem após os destinos e o botão inicial explicita música, vídeos e projetos.

Conferência visual em 390 × 844, 320 × 568, 768 × 1024 e 1366 × 768: sem rolagem horizontal; conteúdo cresce naturalmente no celular menor. Em 390 × 844, os cards começam aproximadamente em 729 px; no notebook, em 642 px (antes, 861 px). O link para `#universos` mantém o título abaixo do cabeçalho fixo.

## Arte do GitHub

Arquivo final: `public/images/dev-mascot.webp`. Gerado com a ferramenta integrada Imagegen; ilustração decorativa inspirada no Octocat para um link ao perfil, sem alegação de parceria. Texto do banner é HTML, separado da arte. Fonte sobre uso: https://docs.github.com/en/site-policy/other-site-policies/github-logo-policy

Prompt final:

> Use case: stylized-concept. Create a polished 3D editorial illustration for a personal developer portfolio GitHub link banner: a friendly black Octocat-style cat/octopus mascot wearing simple dark sunglasses and over-ear headphones, relaxed and focused, with a small open laptop. Sophisticated playful aesthetic, not aggressive, no street stereotypes, no jewelry, no weapons. Matte charcoal material, cream face details, subtle sage-green rim light and warm muted gold highlights matching a dark personal artist/developer website. Wide landscape composition, mascot and laptop on the right half, left half clean dark charcoal negative space for accessible HTML text that will be added separately. Background solid near-black #111716 with soft studio shadow; image blends seamlessly into a dark UI. No text, no letters, no badges, no watermark. High quality crisp character silhouette, restrained lighting.
