document.addEventListener('DOMContentLoaded', function() {
    const chatlog = document.getElementById('chatlog');
    const userInput = document.getElementById('userInput');
    const sendBtn = document.getElementById('sendBtn');

    // Initial greeting
    greetUser ();

    sendBtn.addEventListener('click', function() {
        const userMessage = userInput.value;
        if (userMessage) {
            addMessage('User ', userMessage);
            userInput.value = '';
            handleUser Input(userMessage);
        }
    });

    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendBtn.click();
        }
    });

    function greetUser () {
        addMessage('Bot', "Hello! How can I assist you today? Please tell me your problem.");
        addOptions(['Technical Issue', 'Billing Question', 'General Inquiry']);
    }

    function handleUser Input(message) {
        if (message.toLowerCase().includes('technical')) {
            addMessage('Bot', "What technical issue are you facing?");
            addOptions(['Software Issue', 'Hardware Issue']);
        } else if (message.toLowerCase().includes('billing')) {
            addMessage('Bot', "What billing question do you have?");
            addOptions(['Payment Issues', 'Invoice Questions']);
        } else if (message.toLowerCase().includes('general')) {
            addMessage('Bot', "What would you like to know?");
            addOptions(['Company Information', 'Product Info']);
        } else {
            addMessage('Bot', "I'm sorry, I didn't understand that. Can you please specify?");
        }
    }

    function addMessage(sender, message) {
        const messageDiv = document.createElement('div');
        messageDiv.textContent = `${sender}: ${message}`;
        chatlog.appendChild(messageDiv);
        chatlog.scrollTop = chatlog.scrollHeight; // Scroll to the bottom
    }

    function addOptions(options) {
        const optionDiv = document.createElement('div');
        options.forEach(option => {
            const optionButton = document.createElement('button');
            optionButton.textContent = option;
            optionButton.classList.add('option-button');
            optionButton.onclick = function() {
                addMessage('User ', option);
                handleUser Input(option);
            };
            optionDiv.appendChild(optionButton);
        });
        chatlog.appendChild(optionDiv);
        chatlog.scrollTop = chatlog.scrollHeight; // Scroll to the bottom
    }
});