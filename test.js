import { getHelpMessage } from "./index.js";

// import assert
import assert from 'assert';

// Create test
const helpMessage = getHelpMessage('help.md');
assert.strictEqual(helpMessage, `This is a test help file`);
