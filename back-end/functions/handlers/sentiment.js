const functions = require("firebase-functions");
const language = require("@google-cloud/language");


async function analyze(document) {
    // Instantiates a client
    const client = new language.LanguageServiceClient({ keyFilename: functions.config().google.credentials });

    // Detects the sentiment of the text
    const [result] = await client.analyzeSentiment({ document: document });
    const sentiment = result.documentSentiment;

    return {
        score: sentiment.score,
        magnitude: sentiment.magnitude,
    };
}

module.exports.analyze = analyze;