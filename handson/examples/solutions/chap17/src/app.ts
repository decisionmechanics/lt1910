

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("click-me-button") as HTMLButtonElement;
    button.addEventListener("click", () => {
        const die1 = rollDie();
        const die2 = rollDie();
        const messageParagraph = document.getElementById("message") as HTMLParagraphElement;
        messageParagraph.innerText = `You rolled a ${die1} and a ${die2}.`;
    });
});

    function rollDie() :number {
        return Math.floor(Math.random() * 6) + 1;
        }