// Simple test to verify file structure
const fs = require('fs');

function testProjectStructure() {
    const requiredFiles = [
        'src/index.html',
        'src/css/style.css',
        'src/js/script.js',
        'README.md'
    ];
    
    requiredFiles.forEach(file => {
        if (!fs.existsSync(file)) {
            console.error(`Missing required file: ${file}`);
            process.exit(1);
        }
    });
    
    console.log('All project files are present!');
}

testProjectStructure();