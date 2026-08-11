const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        const dirPath = path.join(dir, f);
        const isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const SHADOW_CLASSES = 'shadow-[0_4px_24px_rgba(37,99,235,0.15)] hover:shadow-[0_8px_32px_rgba(37,99,235,0.4)] transition-all duration-300';

let filesModified = 0;

walkDir(srcDir, (filePath) => {
    if (filePath.endsWith('.jsx')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;

        // Pattern 1: Converted glassy cards
        content = content.replace(/bg-white\/5 backdrop-blur-sm border border-white\/10/g, (match) => {
            return `${match} ${SHADOW_CLASSES}`;
        });

        // Pattern 2: Transparent cards with border
        content = content.replace(/bg-transparent border border-white\/10(?!.*shadow-\[0_4px_24px)/g, (match) => {
            return `${match} ${SHADOW_CLASSES}`;
        });
        
        // Ensure we don't duplicate shadow classes if script is run multiple times
        content = content.replace(new RegExp(`${SHADOW_CLASSES} ${SHADOW_CLASSES}`, 'g'), SHADOW_CLASSES);
        content = content.replace(/transition-all duration-300 transition-all/g, 'transition-all duration-300');

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated shadows in: ${path.relative(srcDir, filePath)}`);
            filesModified++;
        }
    }
});

console.log(`\nFinished! Added shadows to ${filesModified} files.`);
