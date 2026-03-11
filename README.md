# Pertussatti - Propriedade Rural

Site institucional para apresentação e venda da propriedade rural em Coronel Martins, Santa Catarina.

## Tecnologias

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Deploy na Vercel

O projeto está pronto para deploy. Conecte o repositório à Vercel e faça o deploy.

## Configuração

1. **WhatsApp e contato**: Edite `src/app/lib/constants.ts` com telefone, email e WhatsApp reais.
2. **Imagem do Hero**: Adicione `hero-aerea.jpg` em `public/images/` para a foto aérea da propriedade.
3. **Galeria**: Adicione fotos em `public/images/gallery/` com nomes: `vista-aerea.jpg`, `aviarios.jpg`, `acudes.jpg`, etc.

## Estrutura de pastas

- `src/app/components/` – Componentes reutilizáveis (Navbar)
- `src/app/sections/` – Seções da página
- `src/app/lib/` – Constantes e utilitários
- `public/images/` – Imagens
- `public/videos/` – Vídeos (tour virtual, etc.)

## Extras planejados

- Inserção de vídeo da propriedade
- Tour virtual
- Download de PDF com detalhes técnicos
