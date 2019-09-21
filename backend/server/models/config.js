const mongoose  = require('mongoose');

// DB connection
mongoose.connect('mongodb+srv://fortune:jDKLWkxldk3VEcEf@cluster0-uheks.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true,
    useUnifiedTopology: true})
.then(() => console.log('connected sucessfully mongodb'))
.catch(err => new Error('something went wrong'))

