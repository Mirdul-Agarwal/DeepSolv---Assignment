// const { Configuration, OpenAIApi } = require('openai');

// // Initialize OpenAI API client
// const openai = new OpenAIApi(new Configuration({
//   apiKey: process.env.OPENAI_API_KEY, // Fetching API key from environment variable
// }));

// // Function to generate a page summary
// async function generatePageSummary(pageDetails) {
//   const prompt = `Generate a summary of a Facebook page based on the following details:
//   - Followers: ${pageDetails.totalFollowers}
//   - Likes: ${pageDetails.totalLikes}
//   - Category: ${pageDetails.category}
//   - About the page: ${pageDetails.about || 'No description available.'}
//   - Type of followers: ${pageDetails.followersType || 'General'}

//   Please make it short and to the point.`;

//   try {
//     const response = await openai.createCompletion({
//       model: "text-davinci-003", // GPT model to use
//       prompt,                    // The input prompt
//       max_tokens: 100,           // Limit response length
//     });
//     return response.data.choices[0].text.trim();  // Get the generated summary
//   } catch (error) {
//     console.error("Error generating summary:", error);
//     return null;
//   }
// }

// module.exports = { generatePageSummary };
