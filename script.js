const messages = [
    "I hope you're having a nice day, take care.",
    "Wasssuppp, ki khobor",
    "Awwww look who's here",
    "Do you rmb 6th of April?😂",
    "Come back to this site more often hon!",
    "Love you to the moon and back.",
    "You're fun",
    "oouuu looking gorgeous today!!",
    "rmb dinosaur?",
    "mukhot deh",
    "nom nom",
    "How does it feel to be someone's constant fav for 8 years in a row?🫣",
    "Godzilla is a fun movie, even with the 3d glasses off",
    "hope you're doing well, pretty lady",
    "I miss fighting with you :(",
    "This website will still be up even if I die",
    "Text me if you hate me, call me if you don't😋",
    "Just thought I'd brighten your day!",
    "I'd say hi if you were here",
    "Guess who's thinking of you?",
    "You're a gem!",
    "My lil celeb crush",
    "Sending you good wishes, love and care !",
    "Ever had your hair eaten?",
    "Forever gonna be your well wisher !",

];

function displayRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const messageElement = document.getElementById('message');
    messageElement.textContent = messages[randomIndex];
}

window.onload = displayRandomMessage;
