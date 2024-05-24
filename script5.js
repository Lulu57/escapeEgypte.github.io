document.addEventListener("DOMContentLoaded", function() {
  const checkRiddle1Btn = document.getElementById('checkRiddle1');
  const riddle1Input = document.getElementById('riddle1');
  const solution1Message = document.getElementById('solution1');

  // Énigme 1
  checkRiddle1Btn.addEventListener('click', function() {
    const playerAnswer = riddle1Input.value.trim().toLowerCase();
    const correctAnswer = 'le jour'; // Réponse correcte à l'énigme

    if (playerAnswer === correctAnswer) {
      solution1Message.textContent = 'Bravo ! Vous pouvez accéder à la suite !';
	  setTimeout(function() {
        window.location.href = "chambre5suite.html"; // Redirection vers la Chambre 5
      }, 4000); // Redirection après 4 secondes
    } else {
      solution1Message.textContent = 'Désolé, la réponse est incorrecte. Réessayez !';
    }
  });

  // Ajoutez ici le code pour gérer les autres énigmes et défis de la Chambre 5
});
