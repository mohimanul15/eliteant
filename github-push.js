import { execSync } from 'child_process';

// Get the message from the command line arguments
// process.argv[2] is the first argument after 'node script.js'
const message = process.argv[2] || "Update project";

try {
  console.log("🚀 Staging files...");
  execSync('git add .', { stdio: 'inherit' });
  
  console.log(`📝 Committing with message: "${message}"`);
  execSync(`git commit -m "${message}"`, { stdio: 'inherit' });
  
  console.log("📤 Pushing to GitHub...");
  execSync('git push', { stdio: 'inherit' });
  
  console.log("✅ Successfully uploaded!");
} catch (error) {
  // If there are no changes to commit, git commit throws an error
  console.log("⚠️ No changes to commit or push failed.");
}