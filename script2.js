// Fonction pour vérifier la réponse de l'utilisateur
function verifierReponse() {
    // Récupération de la réponse de l'utilisateur et conversion en minuscules
    var reponse = document.getElementById("answer").value.toLowerCase();

    // Tableau contenant les réponses valides
    var reponsesValides = ["homme", "humain", "l'homme", "l'humain"];

    // Vérification de la réponse
    if (reponsesValides.includes(reponse)) {
        // Félicitations pour l'utilisateur
        document.getElementById("solution").textContent = "Félicitations ! Vous avez trouvé la bonne réponse.";

        // Redirection vers chambre3.html après 4 secondes
        setTimeout(function() {
            window.location.href = "chambre3.html";
        }, 4000);
    } else {
        // Message d'erreur pour l'utilisateur
        document.getElementById("solution").textContent = "Désolé, la réponse est incorrecte. Veuillez essayer à nouveau.";
    }
}

// Récupération du bouton de vérification et ajout d'un écouteur d'événements
document.getElementById("checkAnswer").addEventListener("click", verifierReponse);

