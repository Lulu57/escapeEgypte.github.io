// Création des éléments de la page
const body = document.body;

// Création du cadre
const cadre = document.createElement('div');
cadre.style.border = '5px solid';
cadre.style.borderImage = 'linear-gradient(45deg, #994C00, #FFD700) 1'; 
cadre.style.padding = '20px'; // Ajoutez d'autres styles selon vos préférences
cadre.style.borderRadius = '20px'; // Ajout de bordures arrondies

// Création de l'élément pour le texte
const texte = document.createElement('p');
texte.textContent = 'Entrez le code :';
texte.style.color = 'white'; // Définir la couleur du texte en blanc

// Création de la zone de texte pour le code
const input = document.createElement('input');
input.setAttribute('type', 'text');
input.id = 'codeInput';
input.style.marginBottom = '10px'; // Espacement en dessous de la zone de texte

// Création du bouton de vérification
const button = document.createElement('button');
button.textContent = 'Vérifier';
button.id = 'checkButton';

// Création de l'élément pour le message d'erreur
const message = document.createElement('p');
message.id = 'message';

// Création de l'élément pour le timer
const timerDisplay = document.createElement('div');
timerDisplay.id = 'timer';

// Ajout des éléments à votre cadre
cadre.appendChild(texte);
cadre.appendChild(input);
cadre.appendChild(button);
cadre.appendChild(message);
cadre.appendChild(timerDisplay);

// Ajout du cadre à la page
body.appendChild(cadre);

// Gestion du compte à rebours
let timeLeft = 600; // 10 minutes en secondes

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  if (timeLeft <= 60) {
    timerDisplay.style.color = 'red'; // Vers 1 minute, le timer devient rouge
    timerDisplay.style.fontWeight = 'bold'; // En gras
  } else if (timeLeft % 2 === 0) {
    timerDisplay.style.color = 'red'; // Une fois sur deux, le timer est en rouge
    timerDisplay.style.fontWeight = 'normal'; // Normal
  } else {
    timerDisplay.style.color = 'white'; // Sinon, le timer est en blanc
    timerDisplay.style.fontWeight = 'normal'; // Normal
  }

  timerDisplay.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  timerDisplay.style.fontFamily = 'Egyptienne'; // Police spéciale égyptienne
}

updateTimer(); // Affiche le temps initial

const countdown = setInterval(() => {
  timeLeft--;
  updateTimer();

  if (timeLeft === 0) {
    clearInterval(countdown);
    window.location.href = 'perdu2.html'; // Redirection vers la page de défaite
  }
}, 1000);

// Gestion de la vérification du code
const checkButton = document.getElementById('checkButton');
checkButton.addEventListener('click', function() {
  const correctCode = "1234"; // Remplacez par votre code correct
  const enteredCode = document.getElementById('codeInput').value;

  if (enteredCode === correctCode) {
    window.location.href = 'fin.html'; // Redirection vers la page de réussite
  } else {
    message.textContent = 'Mauvais code, réessayez.';
    message.style.backgroundImage = 'linear-gradient(45deg, #FFD700, #FFD700)';
    message.style.backgroundClip = 'text';
    message.style.color = 'transparent';
    message.style.webkitBackgroundClip = 'text';
    message.style.webkitTextFillColor = 'transparent';
    // Effacer le champ de saisie pour une nouvelle tentative
    document.getElementById('codeInput').value = '';
  }
});

// Style pour le timer (en haut à droite et en gros)
timerDisplay.style.position = 'fixed';
timerDisplay.style.top = '20px';
timerDisplay.style.right = '20px';
timerDisplay.style.fontSize = '48px';
timerDisplay.style.color = 'white'; // Définir la couleur du texte en blanc
