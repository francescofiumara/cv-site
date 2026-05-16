# CV Site

Sito CV personale di Francesco Fiumara, realizzato con React, TypeScript, Vite, Tailwind CSS e una piccola API .NET 8 opzionale.

## Avvio frontend

```bash
npm install
npm run dev
```

Il frontend parte di default su `http://localhost:5173`.

## Avvio API

```bash
npm run dev:api
```

Endpoint disponibili:

- `GET /api/projects`
- `GET /api/skills`

Il frontend funziona anche se l'API non e raggiungibile: in quel caso usa i dati statici in `src/data/`.

## Avvio completo

```bash
npm run dev:full
```

## Configurazione

La variabile `VITE_API_BASE_URL` indica l'URL della API.

Esempio:

```env
VITE_API_BASE_URL=http://localhost:5051
```

## Build e verifica

```bash
npm run lint
npm run build
npm run preview
```

Se modifichi la API:

```bash
dotnet build api/api.csproj
```

## Dove aggiornare i contenuti

- Esperienze: `src/data/experience.ts`
- Progetti: `src/data/projects.ts`
- Skill: `src/data/skills.ts`
- Contatti: `src/pages/Contact.tsx`
- PDF CV: `public/cv.pdf`, `public/cv_eng.pdf`, `public/CV_Francesco_Fiumara.pdf`, `public/CV_Francesco_Fiumara_eng.pdf`
