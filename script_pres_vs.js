document.addEventListener("DOMContentLoaded", () => {
    const player1Input = document.getElementById("player1");
    const player2Input = document.getElementById("player2");
    const validate1 = document.getElementById("validate1");
    const validate2 = document.getElementById("validate2");
    const startGame = document.getElementById("startGame");

    let player1Ready = false;
    let player2Ready = false;

    const validatePlayer = (playerInput, playerNumber) => {
        if (playerInput.value.trim() === "") {
            alert(`Le pseudo du joueur ${playerNumber} est vide.`);
        } else {
            
            if (playerNumber === 1) player1Ready = true;
            if (playerNumber === 2) player2Ready = true;
            checkStartGame();
        }
    };

    const checkStartGame = () => {
        if (player1Ready && player2Ready) {
            startGame.classList.add("active");
            startGame.disabled = false;
        }
    };

    validate1.addEventListener("click", () => validatePlayer(player1Input, 1));
    validate2.addEventListener("click", () => validatePlayer(player2Input, 2));

    startGame.addEventListener("click", () => {
        if (player1Ready && player2Ready) {
            // Stocker les noms des joueurs dans le localStorage
            localStorage.setItem("player1Name", player1Input.value.trim());
            localStorage.setItem("player2Name", player2Input.value.trim());
            
            // Rediriger vers la page du jeu
            window.location.href = "game.html";
        }
    });
});