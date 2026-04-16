const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html>
<head>
  <title>DevOps Project</title>
  <style>
    body {
      margin: 0;
      font-family: 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #0f2027, #2c5364);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      color: white;
    }

    .card {
      text-align: center;
      background: rgba(255, 255, 255, 0.1);
      padding: 40px;
      border-radius: 20px;
      backdrop-filter: blur(10px);
      box-shadow: 0 10px 40px rgba(0,0,0,0.5);
      animation: fadeIn 1.5s ease-in-out;
    }

    h1 {
      font-size: 2.5rem;
      margin-bottom: 10px;
    }

    p {
      font-size: 1.2rem;
      opacity: 0.8;
    }

    .badge {
      margin-top: 20px;
      padding: 10px 25px;
      background: #00c853;
      border-radius: 25px;
      display: inline-block;
      font-weight: bold;
      box-shadow: 0 0 10px #00c853;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>🚀 DevOps CI/CD Pipeline</h1>
    <p>Deployed using GitHub Actions, Docker & AWS EC2</p>
    <div class="badge">✔ LIVE ON CLOUD</div>
  </div>
</body>
</html>
  `);
});

app.listen(3000, () => console.log("Server running on port 3000"));