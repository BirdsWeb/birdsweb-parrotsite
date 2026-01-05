// Inizializza Firebase
const db = firebase.database();
const messagesRef = db.ref("messages");

// Invia un messaggio
function sendMessage(user, text) {
  messagesRef.push({ user, text });
}

// Ascolta nuovi messaggi
messagesRef.on("child_added", snapshot => {
  const msg = snapshot.val();
  console.log(msg.user + ": " + msg.text);
});
