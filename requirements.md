# 🐳 Spécifications projet System design - ELK 🐳

## Intégration ELK dans votre architecture microservice existante

-   [x] Intégrer Elasticsearch avec votre backend en ajoutant/remplaçant votre base actuelle dans votre `docker-compose.yml` file (vous pouvez vous appuyer sur le cours en ligne et les exemples de fichiers compose).
-   [x] Intégrer Logstash dans votre projet pour effectuer le traitement et l'agrégation des logs (vous pouvez générer des logs si votre application n’en produit pas assez/pas du tout).
-   [x] Développer au moins une pipeline Logstash qui collecte, traite et transfère les logs vers Elasticsearch et l'inclure dans le fichier `docker-compose.yml`.
-   [x] Ajouter le service Metricbeat pour collecter et transférer diverses métriques système et de service vers Elasticsearch et inclure Metricbeat dans le `docker-compose.yml`.

## Streaming de données avec Logstash

-   [x] Mettre en place un mécanisme ou un script de streaming de données qui génère et envoie des données à Logstash (vous pouvez vous appuyer sur les exemples du cours).

-   [x] Assurer que vos données en temps réel soient correctement formatées et envoyées à Logstash pour traitement (au minimum une custom pipeline avec des données différentes du cours).

## Tests et validation de pipelines

-   [ ] Créer des scripts de test pour valider le bon fonctionnement de Elastic, Logstash et Metricbeat, ainsi que du script de streaming de données.

-   [ ] S'assurer que l'intégration de ces outils n'introduise aucun problème dans la configuration existante.

-   Avoir au moins des fichiers (bash ou autre) de tests qui :
    -   [x] Testent la santé de vos conteneurs.
    -   [x] Testent le bon fonctionnement de votre application (front/back).
    -   [ ] Testent le bon fonctionnement de votre stack ELK.
    -   [ ] Sont automatisés dans votre `docker-compose.yml` file (au minimum 3).

## Fonctionnalités Applicatives

-   [ ] Implémenter des fonctionnalités de recherche dans le frontend qui exploitent Elasticsearch.

-   [ ] Implémenter la fonctionnalité d’auto-complétion de Elasticsearch dans votre front.

-   [ ] Implémenter un système d’authentification (JWT, OAuth, SSO…).
    -   Exemple de service auth : [Auth Service](https://www.youtube.com/watch?v=hmkF77F9TLw&t=2054s) / [GitHub Repository](https://github.com/kantancoding/microservices-python).

## Surveillance continue du flux stream

-   [x] Intégrer Elasticsearch avec Kibana pour la visualisation de données et la surveillance en temps réel.

-   [ ] Fournir une capture d'écran dans votre `readme.md` à la racine de votre GitHub du tableau de bord Kibana dans le cadre de votre solution de surveillance.

-   [ ] Implémenter un dashboard Kibana avec vos données en temps réel.

-   [ ] Implémenter une action d’intégration continue avec elastic curator tool (cf comme dans le chapitre ELK/monitoring de la doc fournie en cours).

## Documentation de l'Architecture

-   [ ] Mettre à jour le diagramme d'architecture de votre projet pour inclure Elasticsearch, montrant son rôle et son interaction avec d'autres composants/services que vous détaillerez en description.

-   [ ] Votre `readme.md` à la racine de votre GitHub doit contenir les explications nécessaires pour build et run votre projet ainsi qu’une démo en ligne sans erreur et/ou une capture d'écran.

## Suivi continu 🚀

-   [ ] Vous devez envoyer un push GitHub par demi-journée (au minimum).

-   [ ] Si vous rencontrez un problème bloquant votre avancement, ouvrez une issue GitHub (avec capture d'écran) et contactez le professeur en message privé en envoyant le lien.
