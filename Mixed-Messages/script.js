// create an object with 3 different properties
const randomMessageGenerator = {
  'Inspiring Message': [
    'You always pass failure on the way to success. -Mickey Rooney',
    'It always seems impossible until it is done. -Nelson Mandela',
    'The only time you fail is when you fall down and stay down. -Stephen Richards',
  ],

  Joke: [
    'Hear about the new restaurant called Karma? There’s no menu: You get what you deserve.',
    'A man tells his doctor, "Doc, help me. I’m addicted to Twitter!" The doctor replies, "Sorry, I don’t follow you …"',
    'What is an astronaut’s favorite part on a computer? The space bar.',
  ],

  'Fortune-Telling Cookie Message': [
    'Wherever you go, go with all your heart.',
    'An amazing adventure awaits you.',
    'You are protected by silent love and friendship near you',
  ],
}

const format = (key, msg) => {
  if (key === 'Inspiring Message') {
    words = msg.split('-')
    // console.log(words);
    return `
${key}:
${words[0]}
- ${words[1]}`
  }

  return `
${key}:
${msg}`;
}

// loop through the object
for (key in randomMessageGenerator) {
  // pick a random number between 0 to 2
  let randomNumber = Math.floor(Math.random() * 3)

  // output inspiring, jokes and fortune tell messages of the day
  let formatted = format(key, randomMessageGenerator[key][randomNumber]);
  console.log(formatted)
}

/*
Inspiring Messages taken from https://www.berries.com/blog/positive-quotes
Jokes taken from https://www.rd.com/list/short-jokes/
Fortune Cookie Messages taken from http://blossomtrilogy.com/favorite-fortune-telling-cookie-messages/
*/
