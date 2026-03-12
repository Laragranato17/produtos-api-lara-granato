
const express = require('express');
const app = express();

const produtosRouter = require('./routes/produtos');

app.use('/api/v1/produtos', produtosRouter);


app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} ${new Date().toISOString()}`);
  next();
});

app.use((err, req, res, next) => {
  res.status(500).json({ erro: err.message });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});


