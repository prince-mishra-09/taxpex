import fs from 'fs';
import https from 'https';

// Read API key from .env.local
const envContent = fs.readFileSync('.env.local', 'utf-8');
const match = envContent.match(/VITE_GEMINI_API_KEY=["']?([^"'\r\n]+)["']?/);

if (!match) {
  console.error("No API key found in .env.local");
  process.exit(1);
}

const apiKey = match[1];
const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

https.get(url, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const parsed = JSON.parse(data);
      if (parsed.models) {
        console.log("Available models:");
        parsed.models.forEach(m => console.log(m.name));
      } else {
        console.log("Error response:", parsed);
      }
    } catch (e) {
      console.log("Parse error:", e);
    }
  });
}).on('error', err => {
  console.error("Request error:", err);
});
