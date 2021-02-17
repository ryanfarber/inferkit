
const axios = require("axios")


class InferKit {
	constructor(apiKey, settings = {}) {
		// let apiKey = settings.apiKey
		this.apiKey = apiKey
	};

	async process(prompt, settings = {}) {
		if (!this.apiKey) return console.error("please enter your inferkit API Key")

		if (!prompt) throw new Error("you must provide a prompt")
		let generatorid = settings.generator || "standard"
		let length = settings.length || 300
		let continuation = settings.continuation || false

		let output

		let result = await axios.post(`https://api.inferkit.com/v1/models/${generatorid}/generate`, {
			prompt: {
				text: prompt,
				isContinuation: continuation
			},
			length: length,
			startFromBeginning: false,
			streamResponse: false,
			forceNoEnd: false,
			topP: 0.9,
			temperature: 1.0
		}, {
			headers: {
				Authorization: `Bearer ${this.apiKey}`
			}
		}).catch(err => {throw new Error(err.message)});

		if (result) {
			output = result.data.data.text.replace(/\n/gi, " ").trim();
			return output;
		};
	};
};

module.exports = InferKit