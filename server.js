const express = require('express') ;
const path = require('path') ;

let iniPath = path.join(__dirname , 'public') ;
let app = express() ;

app.use(express.static(iniPath)) ;

app.get('/' , (req , res) => {
 res.sendFile(path.join(iniPath , 'index.html')) ;
})

app.listen('3000' , () => {
 console.log('listening.....') ;
})