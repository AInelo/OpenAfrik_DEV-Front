const express = require('express');
const path = require('path');


let initial_path = path.join(__dirname, "build");

const app = express();


app.use(express.static(initial_path));


app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "index.html"));
})

const port = 3001; // Port sur lequel le serveur écoute
const ipAddress = "192.168.1.105"; // Remplacez par votre adresse IP WLAN

//  const ipAddress = " 192.168.1.102" 
//  192.168.0.191  

// app.listen(port, ipAddress, () => {
//   console.log(`Le serveur écoute sur ${ipAddress}:${port}`);
//  });


app.listen(port, () => {
    console.log(`Le serveur écoute sur localhost  :${port}.....`);
}); 