const functions = require("firebase-functions");
const { GoogleDLPRedactor } = require("redact-pii");

async function redact(text) {
    const redactor = new GoogleDLPRedactor({
        disableAutoBatchWhenContentSizeExceedsLimit: true,
        clientOptions: {
            keyFilename: functions.config().google.credentials
        }
    });

    return await redactor.redactAsync(text);
}

module.exports = redact;