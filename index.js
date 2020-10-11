const express = require('express');
const bodyParser = require('body-parser');
const conn = require('./database/config.js');
const app = express();
const port = 4000;

/// == Read or Get data == ///
app.get('/get/data/con_search',(req,res)=>{
    let sql = "SELECT * FROM con_search";
    let query = conn.query(sql, (err, results)=>{
        res.send(JSON.stringify({"status":200, "error":null, "response":results}));
        if(err) throw err;
        console.log('Success to get data');
    });
});

// Server listening
app.listen(port,()=>{
    console.log("Server runnning on port "+ port);
})
