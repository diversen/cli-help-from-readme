# cli-help-from-readme

This will generate a CLI help message using a README.md or readme.md file 
placed at the same level as you executable, e.g. cli.js. It will return 
the `readme` message stripped of any markdown formatting.

## Install

```bash
npm install --save cli-help-from-readme
```

## Usage

```js
    import { getHelpMessage } from './index.js';
    // Returns a string with the help message 
    let helpMessage = getHelpMessage(); 

    // Or read a specific file
    let helpMessage = getHelpMessage('path/to/readme.md');

    console.log(helpMessage);

```

## Licence

MIT © [Dennis Iversen](https://github.com/diversen)
