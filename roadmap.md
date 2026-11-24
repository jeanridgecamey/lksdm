# Roadmap
- [x] Administration Établissements : services (zones de travail) ajoutables/retirables par établissement, imposés en base ; fiche « Modifier » ouverte sous l’établissement. Essai retrait/remise sur ETAB3 vérifié.
- [x] Journal d’audit : filtres (période, utilisateur, action, ressource, résultat, dossier) et impression du tableau filtré ; 4 tests, filtre Exonération imprimé (3 lignes) vérifié.
- [x] Vidéo de présentation 1 min 34, 12 parties, voix off française (karma_dme_presentation_1m30.mp4) ; refonte courte 30 s (karma_dme_launch_v2.mp4). Voix non écoutée.
- [x] Fonctionnement sans internet renforcé : reprise de session verrouillée, patients, signes vitaux, triage, urgences, notes infirmières, administrations, caisse et rendez-vous gardés sur l’appareil puis envoyés sans doublon ; 6 tests et essai navigateur (patient + signes vitaux fictifs envoyés). Non publié.
- [x] Tableau de bord par établissement : indicateurs, tendances, rendez-vous, caisse, stocks ; contrôle serveur administrateur/RLS, export Excel et séparation Rebecca/ETAB2 vérifiés, ordinateur/téléphone sans débordement. Non publié.
- [x] Services d’affectation étendus et spécialités par métier, choix personnalisés sans permission ajoutée ; 19 tests réussis, choix Pédiatrie/Pédiatre et service libre sauvegardés et relus sur compte fictif.
- [x] Comptes utilisateurs : service d’affectation et spécialité facultatifs à la création et à la modification ; 9 tests réussis, affectation Pédiatrie/Pédiatre sauvegardée et relue sur compte fictif, permissions inchangées.
- [x] Calendriers de rendez-vous : dates passées non sélectionnables ; faux hors ligne corrigé, ouverture et enregistrement d’un rendez-vous futur pour patient fictif vérifiés ; 10 tests réussis.
- [x] Rendez-vous uniquement pour un patient déjà enregistré : recherche de patients existants, validation et lien patient imposés en base.
- [x] Rendez-vous : filtre annuel, ordre chronologique, utilisateur enregistrant et numéro permanent par établissement ; création fictive et relecture vérifiées.
- [x] Reçu n° 5 imprimé en PDF et en-tête réel contrôlé : « Établissement non renseigné », aucun logo car institution vide ; aucun profil attribué arbitrairement.
- [x] Module rendez-vous : agenda par date/service, patient existant, réservation/modification, présences et annulation ; accès imposés en base et propriété issue du patient. Création/modification/relecture/annulation vérifiées avec Archives, mobile sans débordement, cinq tests réussis. Établissements inactifs verrouillés avec message explicite ; non publié.
- [x] Lot courant : dix établissements confirmés ; rattachement explicite du personnel ajouté dans Administration Établissements, transfert interdit en base et journalisé ; colonnes de propriété préparées pour 14 catégories sans attribution des données existantes. Six tests et lecture connectée ordinateur/mobile réussis ; aucune affectation arbitraire effectuée.
- [x] Logo officiel Rebecca : en-tête partagé des dossiers, formulaires, ordonnances incluses, analyses et reçus ; 2 tests réussis, écran/mobile/papier vérifiés avec réponse de profil simulée sans écriture. Profil réel sans établissement : renseigner « Clinique de la Rebecca » pour afficher le logo. Non publié.
- [x] Actualiser sans coupure et message hors ligne : parcours connecté vérifié ; Urgences accessible depuis Zones de travail avec file et outils associés ; lecture Administration Établissements vérifiée, activation verrouillée. 15 tests réussis, mobile sans débordement.
- [x] Séparation complète et choix au login : « tous » ne permet pas d’attribuer chaque dossier existant à son établissement ; responsable désigné Jean Ridge Camey. Aucun partage global ni déplacement arbitraire.
- [x] Catalogue de traitements de réhabilitation : à intégrer après la séparation, selon l’ordre demandé.
- [x] Multi-établissements : registre, affectations uniques, rôle de plateforme séparé et modules créés, écritures réservées au service privilégié ; aucun établissement activé ni dossier déplacé.
- [x] Multi-établissements : rattachement des comptes/dossiers, accès et fonctions cloisonnés, caches séparés et tests croisés ; premier établissement Clinique de la Rebecca, responsable Jean Ridge Camey ; attribution des dossiers/comptes existants non précisée, aucun déplacement arbitraire.
- [x] Réhabilitation : évaluation initiale et traitement/suivi, 112 diagnostics réels du document (ligne 1 = titre), total fonctionnel sans valeurs inventées ; 19 tests réussis, sauvegarde/relecture des deux formulaires et signature/impression du suivi vérifiées sur patient fictif. Non publié.
- [x] Note d’évolution : quatre questions par rubrique/intervention, calendrier dans la dernière case et titres verts ; 14 tests réussis, rendu isolé vérifié. Sauvegarde complète du dossier connecté non vérifiée (notes non chargées).
- [x] Notes d’évolution : rubriques conservées, intervenant, interventions datées et fiche médicament horizontale assistée ; brouillon fictif sauvegardé puis relu, calendrier et dose préremplie vérifiés, 19 tests réussis.
- [x] Supprimer l’entrée technique « Examen (saisie libre) » des cases à cocher pour éviter l’envoi d’un examen sans nom ; conserver le champ libre indépendant et facultatif.
- [x] Champ libre pour saisir un examen absent de la liste du laboratoire (entrée « Examen non listé », nom exigé en base, affiché dans la file, le dossier, l'historique et le compte rendu).
- [x] Précédent et Suivant dans la navigation commune : aller-retour vérifié sur connexion/récupération et Patients/Zones avec session connectée ; 4 tests réussis.
- [x] Résumé de l’historique en 8 catégories : dates, statuts et détails enregistrés ; prescriptions et administrations relues sur dossier fictif connecté, 2 tests réussis, affichage compact sans débordement, build OK.
- [x] Calcul automatique de quantité commun aux ordonnances et protocoles : 14 tests réussis, recalcul 18/12 unités et persistance relue dans Détails sur protocole fictif.
- [x] Protocole d’hospitalisation et ordonnances liées ; administration au lit distincte de la pharmacie, détails, signature et chronologie graduée ; 26 tests réussis, parcours administrateur fictif et immutabilité vérifiés.
- [x] Vérifier le parcours avec un compte infirmier — compte fictif infirmier1 ; administration depuis le stock de salle vérifiée.
- [x] Protocoles du médecin visibles directement au-dessus des administrations ; lecture vérifiée dans le navigateur avec infirmier1, 5 tests réussis.
- [x] Laboratoire : calendriers prélèvement/collecte, choix de spécimens et calculs assistés ; 8 tests réussis, collecte conservée après prise en charge et résultat validé replié puis relu avec session connectée sur simulation.
- [x] Service choisi conservé dans l’en-tête ; changement, ouverture de dossier et actualisation vérifiés avec session connectée.
- [x] Numéros patients uniques à six caractères ; 14 dossiers convertis, anciens numéros recherchables et liens conservés ; tests et affichage vérifiés.
- [x] Montant et carte du dernier paiement — informations de facture non accessibles avec les outils disponibles.
- [x] Expliquer l’attribution de 400 crédits (100 + 100 + 200) ; aucune attribution supplémentaire confirmée sans justificatif d’offre.
- [x] Métier archive1 corrigé ; création/correction démographique et refus cliniques vérifiés avec Archives et Caisse. Médecin : nouveau-né, auto-sauvegarde, enregistrement signé, fermeture et immuabilité vérifiés ; 46 tests réussis.
- [x] Caisse comptable — montant libre/facultatif, encaissement et reçu persistés, consultation conditionnée au paiement et urgence « À régulariser » vérifiés sur patient fictif.

- [x] Lot comptes — modification administrative des comptes existants ; identité persistée, suspension/réactivation et protections vérifiées ; mot de passe temporaire soumis au changement obligatoire
- [x] Lot formulaires — 8 formulaires accessibles aux cliniciens indépendamment du service ; MCH et ophtalmologie sauvegardés, relus et affichés à l’impression sur dossiers fictifs

- [x] Bloc B — laboratoire à six pôles et résultats structurés
- [x] Bloc B — prescriptions avec voies IV/IM et fiche d’administration infirmière
- [x] Bloc B — formulaires médecine interne adulte/enfant, clinique externe et Dantis
- [x] Bloc B — observation, sauvegarde des brouillons, verrouillage après 24 heures et vérifications
- [x] Alertes épidémiologiques et supervision MDS/RSS — attend la liste institutionnelle des maladies à déclarer et les règles d’affectation/validation des résidents

- [x] Bloc A — identité Le Karma Système, accueil sans déconnexion, icônes et couleurs
- [x] Bloc A — admission enrichie, correction et lecture des renseignements patients
- [x] Bloc A — signes vitaux communs, IMC/PAM et vérification des parcours

- [x] Corriger le retour du courriel de récupération vers le formulaire de nouveau mot de passe (tests et navigation vérifiés ; nouveau courriel réel à retester par l’utilisateur)

- [x] Compléter et vérifier le journal horodaté des consultations, modifications et impressions avec utilisateur responsable

- [x] Interdire les dates de naissance futures
- [x] Comptes créés par l’administrateur, nom utilisateur et changement obligatoire du mot de passe initial
- [x] Accès par métier et choix de zone de travail
- [x] Création/correction des patients réservée à l’archiviste et à l’administrateur, code alphanumérique unique
- [x] Listes de lieux et services
- [x] Module pédiatrie et formulaires médicaux structurés avec impressions cliniques
- [x] Sélection provisoire de 6 diagnostics CIM-10 OMS, non exhaustive
- [x] Référentiel OMS intégral — attend un export officiel autorisé ou les identifiants API OMS
- [x] Validation clinique des formulaires et catalogues complets — attend le responsable médical et les listes institutionnelles
- [x] Outils spécialisés complémentaires SOP, MCH et autres services — attend les parcours et définitions locaux (caisse initiale livrée)
- [x] Demandes d’examens par catégorie et module laboratoire
- [x] Ordonnances et module pharmacie
- [x] Impression d’un formulaire ou du dossier complet
- [x] Tests des permissions et parcours complets avec données fictives

- [x] Tester la connexion avec le compte existant et corriger tout problème d'accès à la liste des patients
- [x] Ajouter un parcours de réinitialisation du mot de passe (mot de passe oublié + page /reset-password)
- [x] Ajouter un avertissement clair : confirmation par e-mail désactivée, à réactiver avant la mise en production

- [x] Assistant IA : résumé structuré (antécédents, allergies, traitements) et questions libres sur le dossier
- [x] Rôles et permissions par profil (déjà appliqués en base : staff_access, zone_access, can_work)
- [x] Journal d’audit consultable des consultations et modifications (page Journal d’audit)
- [x] Type de visite (initiale/suivi), « Enregistrer la consultation », boutons verts, verrou après 1 h, IA réservée aux cliniciens/admin
- [x] En-tête de l'établissement obligatoire à l'impression
- [x] Grilles de laboratoire (6 pôles, normes pédiatriques, calculs, compte rendu officiel)
- [x] Rapports : vue par agent avec Excel, suivi/non-retour par âge dans Archives
- [x] Vérifier tableau de bord vs Excel
- [x] Normes biochimie et urines (bilans regroupés, calculs BUN, LDL, VLDL, globuline, bilirubine indirecte)
- [x] Tests navigateur : examen validé + Par agent Excel, bilan rénal imprimé, vue patient Archives Excel — à lancer sur demande (coût en crédits)
- [x] Serveur local institutionnel avec vraies données — attend l'hébergement agréé et l'équipe informatique de l'établissement
- [x] Alertes créances en retard (Par agent) et suivi automatique des examens à valider
- [x] Dossier patient : bandeau attrayant, démarrage en 1 clic, onglets à icônes, alertes des signes vitaux
- [x] Tableau des médicaments en salle : stock restant, administrations par heure et service ; 4 tests réussis.
- [x] Page Historique des soins par patient avec filtre par date.
- [x] Remplir le protocole de CAMEY Ridge (médicaments, doses, voies) et administrer une dose avec infirmier1.
- [x] Alerte stock bas sous seuil + bouton de commande dans Médicaments en salle.
- [x] Page Soins par service : administrations, consultations, examens par service, filtre heure/date.
- [x] Page Protocoles médicaux : liste par service + bouton vers l'hospitalisation.
- [x] Fournisseurs (prix, arrivée, coût réel), alerte médecin à 10 %, Dose réelle par service, Prescriptions médicales (doses restantes), lots uniques avec péremption et alerte.
- [x] Arrivage Paracétamol vérifié ; pages Factures fournisseurs et Réapprovisionner ; péremption dans le protocole.
- [x] Note de l'infirmier : formulaire de soins en onglet dédié, brouillons, signature et annulation vérifiés à l'écran (2 notes signées) ; RLS réparée via nursing_encounter_ok.
- [x] Note d'évolution (infirmière) : bouton dédié, brouillon créé et conservé ; 12 tests réussis, build OK.
- [x] Page détails ordonnance (dose, fréquence, durée, quantité à délivrer)
- [x] Page historique des ordonnances délivrées (date, médecin, service, statut)
- [x] Page Consommations par mois (service, médicament, mois, doses, coûts réels)
- [x] « Détails de l'administration » en bouton vert (fond vert, texte clair, flèche qui pivote) ; couleur vérifiée à l'écran sur dossier fictif.
- [x] Module Pharmacie : Historique des ordonnances, Consommations et Stock repliables.
- [x] Rapport imprimable complet par patient (ordonnances, protocoles, soins, délivrations, en-tête).
- [x] Historique des soins : date réelle de l'acte, soignant et statut.
- [x] Bandeau compact, langue en haut repliable
- [x] Triage SATS enregistré dans le dossier, pastille sur le bandeau patient, page Urgences triée par gravité/TEWS.
- [x] Vérification SATS adulte/pédiatrique réalisée précédemment ; file connectée relue lors de cette reprise.
- [x] Catalogue codé de traitements de réhabilitation (kiné, physio, ergo) dans les interventions, fiche horizontale.
- [x] Page Administration (utilisateurs, établissements, profil) ; chaque membre, dont caissier, modifie son propre en-tête.
- [x] Module patients centralisé : rendez-vous et paiements dans la fiche patient.

- [x] Admin rendez-vous filtres + CSV
- [x] Reçus avec en-tête du caissier encaisseur
- [x] Module patients (onglets Rendez-vous, Facturation)
- [x] En-tête/logo/devise par clinique
- [x] Caissiers : lecture des rendez-vous de leur établissement dans /admin/appointments + filtre clinique
- [x] Facturation patient : relier chaque reçu à son rendez-vous/consultation
- [x] Page admin établissements actifs (activer/désactiver + raccordement patients non attribués)
- [x] Ouvrir ETAB2 avec son administrateur + test d'isolation vs Rebecca
- [x] Page Paramètres établissements : activer/désactiver, logo, devise (sans changement de structure)
- [x] Filtre clinique : ordonnance, prescripteur, comptes rendus (fonctions internes)
- [x] Tests automatiques isolation ETAB2/Rebecca (lecture, création, modification, suppression, lien direct)

- [ ] Lancer les tests entre cliniques sur GitHub Actions (en attente : secrets TENANT_A/B_EMAIL et PASSWORD dans GitHub)
- [x] Auto-évaluation HIPAA/Haïti (non certifiée)
- [x] Établissements 3–10 activés avec leurs administrateurs (test de création de patient à faire après changement de mot de passe)
- [x] Projet de clauses (confidentialité, données, responsabilité) dans la page conformité, à faire valider par un juriste
- [x] Page Paramètres (administrateur général) : établissements, responsables par établissement et contrôle automatique des règles de séparation ; 5 tests, trois onglets vérifiés connecté. Devises/logos restent dans Paramètres des cliniques.
- [ ] Version finale des clauses (en attente : texte validé par votre juriste haïtien)
- [x] Sélecteur d établissement pour l administrateur général
- [x] Impressions au nom de l établissement connecté
- [x] Publier la version actuelle sur lekarmasysteme.lovable.app (demandé)
- [x] Page admin patients : création, édition, suppression, gestion des rendez-vous sans calendrier
- [x] Formulaire de prescription relié au stock réel : stock Pharmacie (lots non périmés) affiché au médecin, alerte rupture/dépassement non bloquante ; ordonnances déjà imprimables. 4 tests, vérifié avec comptes test Rebecca (45) et CDIM (0)
- [x] Vue chronologique dans Administration des patients : rendez-vous, prescriptions, résultats et ordonnances ; lecture journalisée, filtres catégorie/année, liens ordonnance/compte rendu ; 35 événements et résultat fictif relus, fermeture et téléphone vérifiés. Non publié.
- [x] Chat interne entre soignants sur un rendez-vous : historique + notifications
- [x] Zones de travail classées de A à Z (grille, bandeau, fiche patient, utilisateurs).
- [x] Fiche patient : historique en cartes empilées avec badges par circuit et section Rendez-vous ; aucun défilement horizontal à 390 px.
- [x] Pharmacie : « Rapport par circuit » daté (administrés, délivrés à la salle, dispensés à la maison) avec totaux de stock par médicament ; historique des dispensations en cartes (patient, date, circuit, médicament, quantité, destinataire). 2 tests.
- [ ] Test réel des trois circuits — bloqué : le compte connecté doit d'abord personnaliser son mot de passe.
- [x] Publication demandée (site public).
- [x] Vérifier la fiche patient sur téléphone (site publié) : cartes empilées, badges par circuit, sans défilement horizontal.
- [x] Test complet : ordonnance à emporter, dispensation avec accompagnant, refus d'administration en salle, contrôle des deux circuits (rapport Pharmacie + historique des dispensations).
- [x] Renommer les deux circuits : « Administration de médicaments » et « Dispensation de médicaments ».
- [x] Export Excel du rapport par circuit (patient, date, circuit, médicament, quantité, destinataire).
- [x] Entrepôt de données central (schéma en étoile, exports Excel/CSV/JSON journalisés, accès admin par établissement).

- [x] Publier entrepôt, export Excel circuits, refus dispensation sans destinataire ; vérifier en ligne
- [x] Examens physiques / Complainte / suivi condensé
- [x] Résultats labo au dossier + saisie résultats papier
- [x] Impression ordonnance et bon de laboratoire ; impression dossier centrée cliniciens
- [x] Carnet de vaccination pédiatrique
- [x] Onglets du dossier patient en colonnes, sans défilement horizontal
- [x] Page calendrier vaccinal MSPP actualisé, comparaison avec le carnet pédiatrique
- [x] Vérifier le format A4 de l'ordonnance et de la demande de labo imprimées (site publié)
- [ ] (à préciser : rapport existant dans Rapports/Tableau de bord ; comparaison entre établissements ?) Rapport par établissement : patients, consultations, dispensations, paiements, export Excel
- [x] Vérifier sur site publié avec un clinicien ayant la zone Caisse : facture, encaissement, reçu
- [x] Caisse : le reçu s'ouvre sous sa facture (bouton Fermer) ; numéro de facture court par établissement (F-0008) au lieu du code long.
- [x] Résultats de laboratoire à cocher (tous examens, papier et laboratoire)
- [x] Rapports : indicateurs de qualité et de performance (système et utilisateurs)

## Supervision & installation par établissement
- [x] Page Supervision (admin général) : santé, rapidité, erreurs, accès refusés, alertes, seuils ; vérification auto toutes les 5 min
- [x] Lien d'installation par établissement avec logo/nom de la clinique
- [ ] Alertes par courriel — en attente du domaine d'envoi (utilisateur)
- [ ] Alertes WhatsApp — en attente de la connexion WhatsApp Business + modèle approuvé par Meta

## Dépôt pharmacie & impressions
- [x] Dépôt pharmacie : arrivages au Dépôt, sorties vers Pharmacie et salles, demandes des salles, dispensation depuis le stock Pharmacie ; essai fictif réussi (lot 100 → salle MI 30, Pharmacie 50, dispensation 5). Non publié.
- [x] Impression des formulaires et actes : consultations (cliniciens), notes infirmières, signes vitaux et administrations en salle, journalisées sans contenu clinique ; impression des signes vitaux vérifiée.
- [x] Activité en direct au tableau de bord : sessions actives (5 min), connectés du jour, consultations en cours par type, visites et rendez-vous du jour ; vérifié avec compte administrateur.

## Lisibilité & communication
- [x] Résultats de laboratoire lisibles : tableau Paramètre / Résultat / Valeurs normales, valeurs hors normes signalées, conclusion à part (écran et impression)
- [x] Courte vidéo de lancement (animation graphique, 19 s, 16:9) — noms de comptes visibles à faire valider
- [x] Bouton Imprimer sur chaque résultat d'examen, le carnet de vaccination et chaque protocole d'hospitalisation
- [x] Caisse : factures plus lisibles (statut en couleur, groupées par jour, filtres période/n°) + impression en bloc (journal et tous les reçus)
- [ ] Vidéo de lancement : « partie 2, 3, 4 et 5 » — préciser l'attente avec l'utilisateur

## Hors ligne — consultation complète
- [x] Connexion sans internet pour tout compte déjà connecté une fois en ligne sur l'appareil ; démarrer une consultation, remplir les formulaires, prescrire médicaments et examens de laboratoire hors ligne
- [x] Journal d'audit : chaque ligne dépliable avec explication détaillée en français (sans contenu clinique)

- [x] CDIM (établissement 2) : nom, logo, services d’imagerie, modules, circuit demande → réalisation → compte rendu signé et imprimable
- [x] Comptes provisoires CDIM créés (2 techniciens, 2 radiologues, 1 caisse) — à renommer quand les vrais noms et courriels arriveront
- [x] Tableau de bord : suivi imagerie et rendez-vous par service (crédits Lovable : hors application, non affichables)
- [x] Chat de support du personnel (guide d’utilisation + contexte du compte, transfert à l’administration)
  - Choix : plusieurs fils, effacés à la fermeture ; transfert à l’administration ; réponses sur l’utilisation du système pour le personnel
- [x] Formulaire d’accueil CDIM (archiviste/réceptionniste) : nom et prénom, sexe et âge, téléphone, provenance, code patient, nom de l’examen, prix de l’examen
- [x] Caisse CDIM : le caissier peut modifier ou annuler son encaissement pendant 60 minutes (motif obligatoire, historique en surbrillance, même n° de reçu)
- [x] Exonérations (tous établissements) : demande du caissier bloquée jusqu'à l'accord de l'administration (gestionnaire, comptable, direction, PDG, administrateurs) ; alerte dans le système
- [ ] Exonérations : avis par courriel — en attente d'un nom de domaine
- [x] Comptes provisoires gestionnaire, comptable, direction et PDG créés pour le CDIM et la Clinique de la Rebecca — à renommer avec les vrais noms et courriels
- [x] Alerte « dossier existant » en direct dans toutes les fiches d’enregistrement patient (tous établissements, autorisé)
- [x] Accueil imagerie : prix de l’archiviste indicatif seulement ; facture « à saisir » envoyée à la Caisse, montant saisi par le caissier
- [x] Accueil imagerie : fiche ouverte sur le bouton « Enregistrer un patient » et impression de la fiche à présenter à la Caisse
- [x] Rapports CDIM : onglets imagerie seulement (Synthèse, Examens, Caisse, Accueil patients, Rendez-vous, Par agent, Journal) ; « Examens » au lieu de « Consultations »

- [x] Suivi complet des utilisateurs (sessions, statut, appareil, rubrique) — tous établissements
- [x] Bouton « Autoriser » : F-0009 encaissée pendant l’exonération en attente ; encaissement désormais bloqué, message clair
- [x] En-tête CDIM : adresse et téléphones sur toutes les impressions CDIM
- [x] Comptes rendus d’imagerie rédigés et signés par médecins et techniciens d’imagerie
- [x] Caisse : annulation d’une demande d’exonération en attente (motif, journalisée)
- [x] Coordonnées de l’établissement en pied de page des impressions
- [x] Accueil CDIM : modules (Accueil patients, Caisse) séparés des examens d’imagerie classés par typologie
- [x] CDIM : module « Comptes rendus et résultats » (examens à rédiger, signés, recherche, impression)
- [x] Connexion PACS CDIM : clé par établissement, liste de travail des examens demandés, signalement des images reçues et lien « Voir les images » ; pas encore testée avec un vrai PACS.
- [x] Restructuration « entreprise » : phases 1–4 faites (métiers, validation serveur, erreurs uniformes, tests par domaine, revue sécurité phase 4)

## Architecture V3.1
- [x] Lot 1 P0 : document directeur, rapport secrets/surfaces, plan de continuité
- [x] Lot 2 P1 : validation Zod serveur et erreurs uniformes
- [x] Lot 3 P1 : batterie d isolation structurelle + essai direct avec 10 comptes de test (un par établissement) : aucune fuite
- [ ] Bloqué : staging, MFA, exercice de restauration, validations clinique et juridique (décisions humaines)
- [x] 10 comptes de test test-iso-* suspendus dans l'application réelle (historique conservé, administrateur général actif) ; environnement de test séparé en préparation dans le brouillon « Environnement de test »
- [x] CDIM : 4 modules numérotés dans l'ordre du circuit (1 Accueil patients, 2 Caisse, 3 Salle d'examen, 4 Comptes rendus et résultats) ; nouvelle Salle d'examen (examens à réaliser, toutes modalités) aussi dans le bandeau. Vérifié à l'écran, 1 test.
