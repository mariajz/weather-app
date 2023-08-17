const { execSync } = require('child_process');

const changedFiles = execSync(
    'git diff --cached --name-only --diff-filter=ACM',
    { encoding: 'utf-8' },
)
    .split('\n')
    .filter(Boolean);

const pattern = /\.test.js$/;
const testableFiles = changedFiles.filter(file => {
    try {
        if (pattern.test(file)) {
            return true;
        }
    } catch (error) {
        return false;
    }
});
let jestCommand;
if (testableFiles.length === 0) {
    console.log('No testable files found. Passing with no tests');
} else {
    jestCommand = `jest ${testableFiles.join(' ')}`;
    try {
        execSync(jestCommand, { stdio: 'inherit' });
    } catch (error) {
        process.exit(1);
    }
}
