# Site da AAAPA

Site institucional da Associação Atlética Acadêmica de Produção Audiovisual da UNIVALI.

## Tecnologias

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

## Executar localmente

Instale o Node.js 20.9 ou superior e execute:

```bash
npm install
npm run dev
```

Depois, acesse `http://localhost:3000`.

## Publicar no GitHub

Crie um repositório vazio no GitHub e, dentro da pasta do projeto, execute:

```bash
git init
git add .
git commit -m "Site inicial da AAAPA"
git branch -M main
git remote add origin URL_DO_REPOSITORIO
git push -u origin main
```

Substitua `URL_DO_REPOSITORIO` pela URL fornecida pelo GitHub.

## Publicar na Vercel

1. Entre na Vercel e selecione **Add New > Project**.
2. Importe o repositório criado no GitHub.
3. Confirme que o framework detectado é **Next.js**.
4. Não é necessário configurar variáveis de ambiente.
5. Selecione **Deploy**.

## Substituir as imagens provisórias

Os blocos identificados como **Imagem** são marcadores visuais. Para usar fotografias reais, adicione os arquivos em `public/` e substitua os respectivos blocos `image-placeholder` em `app/page.tsx` e `app/[slug]/page.tsx` por imagens do Next.js ou pela tag `img`.
