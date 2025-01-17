const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function chatbotConsole() {
    rl.question("Enter the website URL to fetch content from: ", async (url) => {
        console.log("Fetching website content...");
        const websiteContent = await fetchWebsiteContent(url);

        if (websiteContent.startsWith("Error")) {
            console.log(websiteContent);
            rl.close();
            return;
        }

        console.log("Website content fetched successfully. You can now interact with the chatbot.");
        
        rl.on('line', async (userInput) => {
            if (userInput.toLowerCase() === 'exit' || userInput.toLowerCase() === 'quit') {
                console.log("Exiting chatbot. Goodbye!");
                rl.close();
                return;
            }

            const prompt = `Here is the website content:\n${websiteContent}\n\nUser Query: ${userInput}`;
            const response = await generateChatgptResponse(prompt);
            console.log(`ChatGPT: ${response}`);
        });
    });
}


chatbotConsole();
