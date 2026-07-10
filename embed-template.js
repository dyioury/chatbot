// ChatBot Pro - Client Embed Script
// This is what clients paste into their website

(function() {
    'use strict';

    // Configuration - each client gets a unique key
    var CONFIG = {
        apiKey: 'STORE_AUSTIN_482', // Unique per client
        apiUrl: 'https://yourapi.com/chatbot',
        theme: {
            primaryColor: '#e74c3c',
            position: 'bottom-right'
        }
    };

    // Check subscription status
    function checkSubscription() {
        fetch(CONFIG.apiUrl + '/status?key=' + CONFIG.apiKey)
            .then(function(response) { return response.json(); })
            .then(function(data) {
                if (data.active) {
                    loadChatbot(data.config);
                } else {
                    console.log('ChatBot Pro: Subscription expired');
                }
            })
            .catch(function() {
                console.log('ChatBot Pro: Unable to verify subscription');
            });
    }

    // Load the chatbot widget
    function loadChatbot(clientConfig) {
        // This would inject the full chatbot HTML/CSS/JS
        // For now, it's a placeholder showing the concept
        console.log('ChatBot Pro: Loading for ' + clientConfig.storeName);
    }

    // Initialize
    checkSubscription();
})();