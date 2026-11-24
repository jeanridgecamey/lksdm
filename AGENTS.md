<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## DME rules
- Clinical invariants (signed notes immutable, amendments via `amend_note`, audit via triggers, duplicate detection via `find_possible_duplicates`) live in the database, not the UI — the server must enforce permissions.
- Audit events never copy clinical content; only ids, status and changed field names.
- Only fictitious patient data; this is a prototype, not clinical software.

## Architecture
- Establishment registry is preparatory only: protected memberships and platform roles grant no clinical access; keep establishments inactive until tenant policies, privileged functions and offline caches are isolated and tested.
- Patient summaries group RLS-scoped records after access logging for clinicians/admin; never infer findings or merge delivery with administration.
- Previous/Next use TanStack history, storing no patient data.
- Laboratory entry assistance uses browser-safe pure helpers; collection timestamps are explicitly confirmed, persisted result data survives status changes, and clinical measurements are never fabricated.
- Active workspace is remembered per user in session storage, validated against permitted zones; never grants permissions.
- Patient codes are stamped by a BEFORE INSERT trigger as given+family initials plus a global 4+ digit sequence (never client-chosen, unchanged by name corrections); previous codes are kept in legacy_medical_record_number for search.
- Cash bills and append-only receipts are managed by authorized database functions; an encounter trigger consumes one paid bill per consultation or creates a motivated urgent bill to regularize, preventing browser bypasses and duplicate receipts.
- Staff permissions use protected staff_access rows; admin remains in user_roles, and zone_access plus can_work enforce all clinical actions in database policies; admins read profiles/staff_access/user_roles only for staff of their current establishment (platform managers see all) so staff directories never cross tenants.
- Patient detail fetches clinical records only for clinicians/admin; demographic correction is author-scoped except for admin, enforced both in UI and database policies. Specialty nursing/lab/pharmacy queues remain separate from the clinical dossier.
- Existing account changes use an atomic service-only database function after caller authorization; suspension gates has_role and password_ready so existing sessions cannot retain clinical access.
- Versioned templates preserve encounter permissions and printed bodies; rehabilitation uses local diagnoses and assessed scores only.
- account_security blocks clinical access until a server-verified password change; users cannot update their own security state.
- Account creation uses a service-only, expiring provisioning nonce checked by the signup trigger so public signup cannot bypass administrator approval.
- Username login resolves identities exclusively on the server, preserves email recovery, and never exposes an email lookup endpoint.
- Versioned pediatric form fields are persisted with clinical notes; signed forms inherit database immutability and corrections use amend_note.
- Clinical orders are separate immutable prescriptions with laboratory/pharmacy processing queues; no automatic diagnosis or drug dosing.
- Patient detail and print reads await successful access logging (prints via log_patient_print); audit triggers link clinical changes to patient IDs without clinical content.
- Public entry/login pages forward recovery URL parameters to the public reset page before protected navigation, and the reset page also verifies a pasted recovery link, because SSR and the preview gate lose recovery fragments.

- Extended registration uses a shared demographics form and summary backed by the patient JSON object so creation, correction, detail and printing stay consistent under existing patient policies.
- All services reuse patient-level vital signs; indices are previewed by shared pure functions and recomputed by a database trigger before insert to prevent client-provided derived values.
- Work-zone icons/labels share one browser-safe mapping.
- Specialty forms share versioned note storage and pure form rules; draft autosave uses the author’s existing update policy, and the database enforces the 24-hour lock with linked amendments.
- Inpatient protocols link orders by protocol_id; append-only bedside administrations verify route, delivery, patient, time and zone, independently of pharmacy dispensing.
- Nursing uses accessible protocols and separate server-attributed medication acts; evolution answers and timestamps preserve structured drafts.
- The patient AI assistant reads the record through the caller's RLS-scoped client in a server function and calls the AI Gateway server-side, so it can never reveal records the professional may not open.
- Nursing notes use clinical_notes ('note-infirmier', 'evolution-infirmier'); nurses access their own notes in active authorized encounters through nursing_encounter_ok/start_nursing_note/nursing_notes, never direct encounter queries. Amendments remain clinical-only.
- Drug stock flows supplier → Dépôt pharmacie (supply_receipts.remaining) → services via append-only stock_transfers (lot_stock + ward_stock, trigger-only writes); pharmacy dispensing decrements the pharmacy's lot_stock, so no browser can create or skip stock.

- Urgences is a shortcut to the emergency queue, never a permission source.
- Print branding uses shared PrintHeader; branding never assigns tenant membership.
- Platform manager switches tenant via audited switch_my_establishment; print headers use the current establishment name/logo.
- Agenda and appointment management reuse one appointment dialog so creation keeps the same validation and tenant-scoped server actions.
- Appointment dates use a shared calendar with past days disabled; connectivity uses server reachability, not navigator.onLine.
- Tenant separation stays in one shared database: every tenant table has a restrictive current_establishment() policy, every warehouse view is security_invoker, and any future storage bucket must prefix object paths with establishment_id and check it in storage.objects policies — so one tenant's data, files and exports can never reach another.
- External integrations live under versioned /api/public/v<n>/ routes (breaking changes add a new version) and must authenticate the caller, stay tenant-scoped and audit without clinical content; hosting and update procedure is documented in docs/HEBERGEMENT.md so the app can run on any compatible host.
- PACS/imaging devices integrate only through per-establishment hashed keys resolved by service-only functions (pacs_*) and image links live in imaging_study_images, because signed imaging_studies rows are immutable.
- Business logic and its UI live in src/domains/<domain>/ (helpers at the root, UI in components/, namespaced barrel in index.ts without *.functions/*.server); src/lib keeps cross-cutting and server code and src/components keeps shared UI, so each domain can evolve or be extracted alone. See docs/ARCHITECTURE.md.
- Tenant isolation is re-checked with docs/isolation-checks.sql after each migration; anon has no table privileges, and server functions surface only P0001 messages via server-errors to avoid leaking SQL details.
- Prescribers see pharmacy stock only as a tenant-scoped aggregate of non-expired lots via prescription_stock (clinicians/admin); the notice is informational, never blocks a prescription and never infers dosing.
- The platform-only Settings page reads establishments, responsibles and the service-only separation_report() through a platform-manager-verified server function; separation-rules evaluates it purely so isolation drift is visible without exposing patient data.
