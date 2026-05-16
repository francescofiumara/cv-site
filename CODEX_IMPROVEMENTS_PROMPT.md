# Prompt per migliorare il sito CV

Sei un senior software engineer e frontend engineer. Migliora questo sito CV personale mantenendo invariato il contenuto informativo: nome, contatti, esperienze, formazione, progetti, skill, link ai PDF e testi professionali devono restare semanticamente gli stessi. Puoi riscrivere microcopy solo se corregge refusi, migliora chiarezza o tono professionale senza cambiare il significato.

## Contesto progetto

- Root progetto: `C:\Users\f.fiumara\Downloads\CV\cv-site`
- Stack frontend: React 19, TypeScript, Vite, Tailwind CSS, Framer Motion, React Router.
- Backend: ASP.NET Core Minimal API in `api/Program.cs`.
- File principali:
  - `src/pages/Home.tsx`
  - `src/pages/Projects.tsx`
  - `src/pages/Experience.tsx`
  - `src/pages/Education.tsx`
  - `src/pages/Cv.tsx`
  - `src/pages/Contact.tsx`
  - `src/components/Navbar.tsx`
  - `src/components/Footer.tsx`
  - `src/components/ProjectCard.tsx`
  - `src/components/SectionHeader.tsx`
  - `src/data/experience.ts`
  - `src/data/projects.ts`
  - `src/data/skills.ts`
  - `src/lib/api.ts`
  - `src/index.css`
  - `tailwind.config.js`
  - `index.html`
  - `api/Program.cs`
  - `api/api.csproj`

## Vincoli non negoziabili

1. Non eliminare contenuti esistenti senza spiegare prima cosa rimuovi e perche.
2. Non cambiare il contenuto sostanziale del CV: esperienze, formazione, contatti, skill e progetti devono rimanere.
3. In C# non usare nullable annotations. Se modifichi il progetto API, imposta `<Nullable>disable</Nullable>` oppure rimuovi l'abilitazione delle nullable annotations dal `.csproj`.
4. Mantieni TypeScript tipizzato e senza `any` non necessario.
5. Non introdurre librerie nuove se non sono realmente necessarie.
6. Il sito deve restare responsive, accessibile e buildabile con `npm run build`.
7. Spiega sempre il perche delle scelte principali.

## Obiettivo

Portare il sito da "CV online gradevole" a "portfolio professionale solido": piu leggibile, piu credibile per recruiter/tech lead, piu veloce da navigare, piu robusto in produzione e piu curato su mobile.

## Migliorie richieste

### 1. Identita visiva e UI

- Rendi la grafica piu professionale e meno "template Vite/Tailwind".
- Riduci l'effetto monocromatico scuro/teal: mantieni una base elegante ma aggiungi contrasto controllato, superfici piu leggibili e una gerarchia visiva piu netta.
- Evita card troppo arrotondate ovunque: usa radius piu sobri, massimo `rounded-2xl` salvo foto/modali.
- Migliora spaziature, allineamenti, gerarchia titoli e densita informativa.
- Aggiungi icone sobrie dove aiutano la scansione: contatti, link esterni, download CV, sezioni principali. Se non vuoi aggiungere dipendenze, usa componenti SVG locali piccoli e accessibili.
- Migliora gli stati hover/focus senza animazioni eccessive.
- Rispetta `prefers-reduced-motion` per Framer Motion e transizioni importanti.

### 2. Home

- Rendi la hero piu chiara sul posizionamento: Francesco Fiumara, Software Developer / Fullstack Developer con focus .NET, React, integrazioni e prodotti industriali/business.
- Mantieni il tono personale, ma valuta di rendere piu professionale la frase tra parentesi davanti allo specchio oppure spostarla in una forma piu discreta.
- Metti in evidenza azioni primarie:
  - vedere progetti/skill;
  - scaricare CV italiano;
  - scaricare CV inglese;
  - contatto.
- Migliora il blocco highlights rendendolo piu utile per chi valuta il profilo: stack, esperienza concreta, approccio alla qualita.
- Assicurati che la foto non sembri un semplice riquadro decorativo: dimensioni stabili, buon crop, `alt` descrittivo.

### 3. Navigazione

- Aggiungi link alla pagina CV nella navbar, oggi raggiungibile solo da route ma non presente nel menu.
- Migliora il menu mobile:
  - chiusura su cambio route gia presente, mantienila;
  - focus visibile;
  - `aria-controls` collegato al pannello;
  - label dinamica "Apri menu" / "Chiudi menu";
  - evitare sovrapposizioni con il contenuto.
- Aggiungi uno stato attivo piu evidente e accessibile.

### 4. Progetti e skill

- Elimina o riduci la duplicazione incoerente tra:
  - `src/data/projects.ts`
  - dati hardcoded in `api/Program.cs`
  - fallback gestito da `src/pages/Projects.tsx`
- Scegli una strategia robusta:
  - opzione consigliata: rendere il frontend autosufficiente con dati statici locali come fonte principale, usando API solo se serve davvero;
  - oppure spostare i dati condivisi in un formato unico e mantenere fallback coerenti.
- I progetti statici attuali sembrano generici rispetto all'esperienza reale; senza inventare contenuti falsi, allineali ai progetti gia presenti nell'API:
  - Peso-prezzatrice next-gen;
  - Soluzioni Dynamics 365;
  - Reporting & dati.
- Migliora le card progetti con struttura piu chiara: contesto, contributo, impatto, stack.
- Se il backend non e necessario per un portfolio statico, valuta di rimuovere la dipendenza runtime del frontend dall'API o di renderla completamente opzionale.

### 5. Esperienza

- Rendi la timeline piu leggibile di una griglia semplice: una timeline verticale o una lista con data/azienda/ruolo ben separati.
- Metti piu in evidenza il ruolo attuale in Bilanciai.
- Mantieni tutte le esperienze, incluso il background bancario e TLC, ma rendi chiaro come contribuiscono al profilo tecnico: processi, relazione cliente, troubleshooting, contesto business.
- Migliora leggibilita degli elenchi puntati e dei tag stack.

### 6. Formazione

- Migliora layout e leggibilita, soprattutto su mobile.
- Mantieni entrambe le voci.
- Evidenzia il valore combinato economia/finanza + informatica senza alterare i titoli.

### 7. Contatti

- Rendi la pagina piu orientata alla conversione:
  - CTA email evidente;
  - LinkedIn e GitHub facilmente cliccabili;
  - eventuale riga sintetica su disponibilita/interesse professionale senza promettere cose non presenti.
- Aggiungi `aria-label` descrittivi ai link esterni.
- Verifica che le email e gli URL rimangano invariati.

### 8. Pagina CV

- L'iframe su `cv.html` va migliorato:
  - aggiungi pulsanti chiari per aprire/scaricare CV italiano e inglese;
  - prevedi fallback accessibile;
  - evita che l'iframe sia troppo basso su desktop o ingestibile su mobile.
- Valuta se mostrare direttamente il PDF in iframe o lasciare HTML, ma mantieni i link esistenti:
  - `/cv.pdf`
  - `/cv_eng.pdf`
  - `/CV_Francesco_Fiumara.pdf`
  - `/CV_Francesco_Fiumara_eng.pdf`

### 9. SEO, metadata e social preview

- Correggi `index.html`:
  - `lang="it"` invece di `en`;
  - favicon non deve essere `/vite.svg`, usa `logo.png` o crea un asset dedicato;
  - title piu efficace, ad esempio `Francesco Fiumara | Software Developer .NET`;
  - meta description;
  - Open Graph base;
  - Twitter card base;
  - theme-color.
- Aggiungi dati strutturati JSON-LD `Person` se appropriato, con nome, jobTitle, url, sameAs LinkedIn/GitHub.
- Verifica che i contenuti siano indicizzabili e che i link ai PDF abbiano nomi chiari.

### 10. Accessibilita

- Controlla contrasto testo/sfondo.
- Aggiungi focus ring coerenti su link e bottoni.
- Usa heading hierarchy corretta: un solo `h1` nella home, `h2/h3` coerenti nelle sezioni.
- Aggiungi `aria-current` tramite `NavLink` se non gia garantito.
- Migliora `alt` immagini: evitare solo "portrait" se serve descrizione piu utile.
- Non usare solo colore per indicare stato attivo.

### 11. Performance e robustezza

- Rimuovi `src/App.css` se non importato oppure puliscilo se residuo di Vite.
- Rimuovi asset inutilizzati come `src/assets/react.svg` e `public/vite.svg` se non servono piu.
- Ottimizza caricamento font:
  - valuta `preconnect` in `index.html`;
  - oppure fallback system font se vuoi ridurre dipendenze esterne.
- Aggiungi dimensioni stabili a immagini e iframe per ridurre layout shift.
- Controlla che `prefetchProjectsData` non renda la UX dipendente da API lente.
- Migliora gestione errori in `src/lib/api.ts` con timeout/AbortController riusabile invece di duplicare logica nella pagina.

### 12. Backend API

- Se il backend rimane:
  - rimuovi emoji nei commenti;
  - disabilita nullable annotations nel `.csproj`;
  - sposta i dati in metodi/helper chiari o in file dedicati se cresce;
  - configura CORS in modo esplicito e documentato;
  - mantieni Swagger solo in Development.
- Se il backend non serve al sito CV statico:
  - non cancellarlo senza avvisare;
  - proponi di tenerlo separato o documentare che il frontend funziona anche senza API.

### 13. Qualita progetto

- Aggiorna `README.md` con:
  - come avviare frontend;
  - come avviare API;
  - variabile `VITE_API_BASE_URL`;
  - build e preview;
  - dove aggiornare contenuti CV.
- Verifica `.env.example`.
- Assicurati che `npm run lint` e `npm run build` passino.
- Non modificare i PDF salvo richiesta esplicita.

## Approccio di implementazione consigliato

1. Fai una prima passata di pulizia: metadata, asset inutilizzati, `App.css`, navbar, README.
2. Centralizza o riallinea i dati progetti/skill per evitare contenuti diversi tra API e fallback.
3. Ridisegna UI condivisa: layout principale, card, tag, bottoni, focus states.
4. Migliora pagina per pagina: Home, Experience, Projects, Education, CV, Contact.
5. Verifica mobile e desktop.
6. Esegui:
   - `npm run lint`
   - `npm run build`
   - se tocchi API: `dotnet build api/api.csproj`

## Output finale richiesto

Alla fine dammi:

- elenco sintetico dei file modificati;
- spiegazione delle scelte principali e del perche;
- eventuali contenuti rimasti invariati per vincolo;
- comandi di verifica eseguiti e risultato;
- eventuali rischi residui o prossimi miglioramenti consigliati.
