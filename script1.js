document.addEventListener("DOMContentLoaded", function() {
  const checkSolutionBtn = document.getElementById('checkSolution');
  const word1Select = document.getElementById('word1');
  const word2Select = document.getElementById('word2');
  const solutionMessage = document.getElementById('solution');

  checkSolutionBtn.addEventListener('click', function() {
    const selectedWord1 = word1Select.value.toLowerCase(); // Convertir en minuscules pour être insensible à la casse
    const selectedWord2 = word2Select.value.toLowerCase(); // Convertir en minuscules pour être insensible à la casse
    const correctWord1 = 'lumière'; // Mot manquant 1 correct
    const correctWord2 = 'mystère'; // Mot manquant 2 correct

    if (selectedWord1 === correctWord1 && selectedWord2 === correctWord2) {
      solutionMessage.textContent = 'Bravo ! Vous avez trouvé la bonne solution. Vous pouvez accéder à la Chambre 2!.';
      setTimeout(function() {
        window.location.href = "chambre2.html"; // Redirection vers la Chambre 2
      }, 4000); // Redirection après 4 secondes
    } else {
      solutionMessage.textContent = 'Solution incorrecte. Réessayez !';
    }
  });
});

