//         let tab1 = [];

        // Fonction de tri
        function trierTableau(tab) {
            let n = tab.length;
            for (let i = 0; i < n - 1; i++) {
                let minIndex = i;
                for (let j = i + 1; j < n; j++) {
                    if (tab[j] < tab[minIndex]) {
                        minIndex = j;
                    }
                }
                // Échanger les éléments
                if (minIndex !== i) {
                    let temp = tab[i];
                    tab[i] = tab[minIndex];
                    tab[minIndex] = temp;
                }
            }
            return tab;
        }

        // Fonction pour trouver max et min
        function trouverMaxMin(tab) {
            if (tab.length === 0) return { max: null, min: null };

            let max = tab[0];
            let min = tab[0];

            for (let i = 1; i < tab.length; i++) {
                if (tab[i] > max) {
                    max = tab[i];
                }
                if (tab[i] < min) {
                    min = tab[i];
                }
            }

            return { max: max, min: min };
        }

        // Afficher les résultats dans le navigateur
        function afficherResultats(resultat) {
            const resultatsDiv = document.getElementById('resultats');
            resultatsDiv.innerHTML = resultat;
        }

        // Événement pour le bouton de soumission
        document.getElementById('soumettre').addEventListener('click', () => {
            const input = document.getElementById('nombres').value;
            tab1 = input.split(',').map(Number); // Convertir la chaîne en tableau de nombres

            if (tab1.some(isNaN)) {
                afficherResultats("Veuillez entrer uniquement des nombres valides.");
                return;
            }

            afficherResultats("Nombres saisis : " + tab1.join(', '));
        });

        // Événements pour trier et trouver max/min
        document.getElementById('trier').addEventListener('click', () => {
            let tabTrie = trierTableau(tab1.slice()); // Utiliser slice() pour ne pas modifier tab1
            afficherResultats(`Tableau trié : ${tabTrie.join(', ')}`);
        });

        document.getElementById('trouverMaxMin').addEventListener('click', () => {
            let { max, min } = trouverMaxMin(tab1);
            afficherResultats(`Valeur max : ${max}, Valeur min : ${min}`);
        });