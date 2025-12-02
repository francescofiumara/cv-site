# CV Site (.NET 8 API + React/Vite/Tailwind)

Portfolio multipagina con API minimal .NET 8 per progetti/skill e frontend React + Tailwind.

## Prerequisiti
- Node 18+
- .NET 8 SDK

## Setup rapido
```bash
npm install
```

### Variabili ambiente
- Copia `.env.example` in `.env` e regola l’endpoint API se diverso da default:
  - `VITE_API_BASE_URL=http://localhost:5051`

## Comandi
- `npm run dev:full` – avvia frontend (5173) + API (5051) in parallelo.
- `npm run dev:client` – solo frontend.
- `npm run dev:api` – solo API (urls fissati a http://localhost:5051).
- `npm run build` – type-check + build produzione.
- `npm run preview` – anteprima build.
- `npm run lint` – linting.

## API
Progetto backend: `api/` (minimal API .NET 8).
- `GET /api/projects`
- `GET /api/skills`
- CORS: consente `http://localhost:5173` (config in `api/appsettings.json`).

## Note contenuti
- Immagine hero: `public/headshot.jpg` (sostituire con il proprio file).
- Contatti/CTA: aggiornare mailto, GitHub/LinkedIn e `public/cv.pdf` se disponibile. 
