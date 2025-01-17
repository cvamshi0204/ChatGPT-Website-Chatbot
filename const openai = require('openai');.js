const openai = require('openai');

openai.apiKey = 'your_openai_api_key';

async function generateChatgptResponse(prompt) {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                { role: "user", content: prompt }
            ]
        });
        return response.choices[0].message.content;
    } catch (error) {
        return `Error with ChatGPT API: ${error.message}`;
    }
}
