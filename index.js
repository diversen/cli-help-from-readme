import fs from 'fs';
import path from 'path';
import removeMd from 'remove-markdown';

function getHelpMessage(filename) {
    const scriptPath = fs.realpathSync(process.argv[1]);
    const dirname = path.dirname(scriptPath);

    let helpFile = null;

    // List of potential help files
    const potentialFiles = filename ? [filename, 'README.md', 'readme.md'] : ['README.md', 'readme.md'];

    for (const file of potentialFiles) {
        const filePath = path.join(dirname, file);
        if (fs.existsSync(filePath)) {
            helpFile = filePath;
            break;
        }
    }

    if (!helpFile) {
        throw new Error('No help file found');
    }

    const help = fs.readFileSync(helpFile, { encoding: 'utf8' });
    return removeMd(help);
};

export { getHelpMessage };