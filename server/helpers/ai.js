const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.CHAT_GPT_API_KEY,
});

const ai = new OpenAIApi(configuration);

module.exports = {
  ai,
};
