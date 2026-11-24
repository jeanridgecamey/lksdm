# Journal des versions

## 1.0.0 — 2026-11-19
- Structure d'hébergement : `.env.example`, guide `docs/HEBERGEMENT.md`, contrôle `GET /api/public/v1/health`.
- Cloisonnement renforcé : export complet par établissement (imagerie, exonérations, modifications d'encaissement, vaccinations, laboratoire externe).
- Fonctions internes fermées aux visiteurs non connectés.
