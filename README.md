# inferkit
a wrapper for the [inferkit](https://inferkit.com) api.


```javascript

const inferkit = new Inferkit(inferkit_api_key)

inferkit.process("hello world.  I am playing around with an AI.").then(console.log)
inferkit.process("hello world.  I am playing around with an AI.", {length: 100}).then(console.log)

/*
	The goal is to make it learn to write longer programs, 
	but I'm trying not to be too harsh on it for now. 
	Here are a few of the responses I got. 
	It learned to recognize / read basic symbols and strings 
	like numbers, booleans, strings and so on. 
	It has learned to recognize its own program and write...
*/


````