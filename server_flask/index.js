const express = require('express');
const cors = require('cors');
const app = express();

// Konfigurasi CORS
app.use(cors()); // Mengizinkan semua asal

// Atau untuk mengizinkan hanya asal tertentu
// app.use(cors({
//   origin: 'http://localhost:5173'
// }));

app.use(express.json());

// Endpoint contoh untuk signin
app.post('/signin', (req, res) => {
  console.log('Received login request:', req.body);
  // Logika autentikasi Anda di sini
  const { email, password } = req.body;

  // Contoh autentikasi sederhana
  if (email === 'admin@example.com' && password === 'password') {
    res.json({ message: 'User authenticated successfully', user: { username: 'Admin', isAdmin: true } });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Jalankan server
const PORT = process.env.PORT || 5173;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
