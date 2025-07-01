const { execSync } = require('child_process');

// Install xyd globally
console.log('Installing xyd globally...');
try {
  execSync('bun add -g xyd', { stdio: 'inherit' });
  console.log('xyd installed successfully!');
} catch (error) {
  console.error('Failed to install xyd:', error.message);
  process.exit(1);
}

// Start the development server
console.log('Starting xyd development server...');
try {
  execSync('xyd', { stdio: 'inherit' });
} catch (error) {
  console.error('Failed to start xyd:', error.message);
  process.exit(1);
} 