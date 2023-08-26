// Get DOM elements
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

// Predefined responses
const responses = {
    "hello": "Hello! How can I assist you?",
    "how are you": "I'm just a bot, but thanks for asking!",
    "bye": "Goodbye! Have a great day!",
};

// Function to add a message to the chat box
function addMessage(message, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${sender}`;
    messageDiv.innerHTML = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to handle user input
function handleUserInput() {
    const userMessage = userInput.value.toLowerCase();
    addMessage(`<strong>You:</strong> ${userMessage}`, "user");

    if (responses[userMessage]) {
        const botResponse = responses[userMessage];
        setTimeout(() => addMessage(`<strong>Bot:</strong> ${botResponse}`, "bot"), 1000);
    } else {
        setTimeout(() => addMessage(`<strong>Bot:</strong> I don't understand that.`, "bot"), 1000);
    }

    userInput.value = "";
}

// Event listener for sending messages
sendButton.addEventListener("click", handleUserInput);
userInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        handleUserInput();
    }
});
