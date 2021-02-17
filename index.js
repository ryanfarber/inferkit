


const axios = require("axios")


class Inferkit {
	constructor(apiKey, settings = {}) {
		// let apiKey = settings.apiKey
		this.apiKey = apiKey
	}

	async get(prompt, settings = {}) {
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
		}).catch(err => {throw new Error(err.message)})

		if (result) {
			output = result.data.data.text.replace(/\n/gi, " ").trim()
			return output
		}
	}
};


const inferkit = new Inferkit("8917df9e-3a55-4bb6-97f1-eca1025ef233")


inferkit.get("hello world.  I am playing around with an AI.", {length: 300}).then(console.log)