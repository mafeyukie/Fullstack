const express = require('express');
const path = require('path');

const app = express();
const PORT = 80;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Route for the root → redirects to Home.html
app.get('/', (req, res) => {
  res.redirect('/Home.html');
});

// Start the server on all network interfaces (0.0.0.0)
// so other computers on the same network can access it
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
  console.log(`🌐 Access from other computers using your IP:`);
  console.log(`   http://<your-ip>/Home.html`);
  console.log(`   http://<your-ip>/Project.html`);
  console.log(`\n📌 To find your IP, run: ipconfig (Windows) or ifconfig (Mac/Linux)`);
});
