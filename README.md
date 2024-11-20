# Projet : Application d'Analyse de Données Météorologiques
- **Objectif :** Faire une API de collecte de données avec un systeme d'automatisation (tache cron)

## Étapes du projet

### 1. Récupérer des données (Extraction)
- **Objectif :** Utiliser une API météo publique pour obtenir des données météorologiques.
- **Exemple de données à récupérer :**
  - Température
  - Humidité
  - Conditions météo pour une ville donnée
- **API :**
  - [OpenWeatherMap](https://openweathermap.org/)
- **Outils :**
  - `axios` ou `fetch` pour les appels API.

---

### 2. Stocker les données (Chargement)
- **Objectif :** Configurer un système de stockage pour les données récupérées.
- **Options de stockage :**
  - **Local :** Fichiers JSON ou base de données SQLite.
- **Points importants :**
  - Implémenter une logique pour éviter de surcharger l’API (limitation des appels).
  - Prévoir une méthode pour vérifier et valider les données stockées.

---

### 3. Nettoyer et structurer les données (Transformation)
- **Objectif :** Organiser les données pour leur exploitation.
- **Actions à réaliser :**
  - Identifier et gérer les données manquantes.
  - Agréger les données par jour ou par semaine pour simplifier l'analyse.
- **Outils :**
  - `moment.js` pour la gestion des dates.
  - Scripts en JavaScript pour transformer les données.

---

### 4. Visualiser les données
- **Objectif :** Présenter les données sous forme de graphiques et de visualisations claires.
- **Types de visualisations :**
  - Graphiques de température par jour.
  - Histogrammes d’humidité.
- **Outils :**
  - [Chart.js](https://www.chartjs.org/)
    

---

### 5. Ajouter des automatisations
- **Objectif :** Automatiser la récupération des données.
- **Méthodes :**
  - Utiliser `node-cron` pour configurer des tâches planifiées qui récupèrent les données à intervalles réguliers.
- **Initialisation :**
  - Récupérer les données toutes les heures ou une fois par jour.

---

## Outils utiliser

### Langage
- **JavaScript**
  - Backend : Node.js
  - Frontend (optionnel) : aucun

### APIs
- OpenWeatherMap

### Base de données
- SQLite

### Bibliothèques utiles
- **Pour les appels API :** `axios`, `fetch`.
- **Pour la gestion des dates :** `moment.js`, `date-fns`.
- **Pour l'automatisation des tâches :** `node-cron`.
- **Pour la visualisation :** Chart.js, D3.js.
