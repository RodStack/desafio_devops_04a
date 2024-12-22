const express = require('express');
const app = express();
const PORT = 3000



app.get('/api/:mensaje', (req, res) => {
  res.json({
    mensaje: decodeURI(req.params.mensaje)
  });
});



app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

