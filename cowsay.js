const cowsay = require('cowsay');
const colors = require('colors');

module.exports = cowsay.think({
	text: 'Megan Kim'.bold.white + '\n' + 'Software Developer'.rainbow,
  f: 'dragon'
});
