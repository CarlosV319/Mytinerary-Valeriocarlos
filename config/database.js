const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI,{
    useUnifiedTopology:true,
   
    useNewUrlParser:false, 
    
})
.then(()=>console.log('database connected'))
.catch(err =>console.error(err))