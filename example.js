import { getHelpMessage } from './index.js';

// Try to read the help file from README.md or readme.md
// These files are located in the same directory as the script
let help = getHelpMessage();
console.log(help);

// Or READ a specific file
let helpMessage = getHelpMessage('./help.md');
console.log(helpMessage)
