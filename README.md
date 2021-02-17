# inferkit
a wrapper for the [InferKit](https://inferkit.com) api.


*from InferKit's website*:
> InferKit's text generation tool takes text you provide and generates what it thinks comes next, using a state-of-the-art neural network. It's configurable and can produce any length of text on practically any topic. An example:
>
> Input:
>
> While not normally known for his musical talent, Elon Musk is releasing a debut album
>
> Completion:
>
> While not normally known for his musical talent, Elon Musk is releasing a debut album. It's called "The Road to Re-Entry," and it features an astounding collection of songs... (continued)


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