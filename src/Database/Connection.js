import mongoose from 'mongoose'


( async ( ) => {
    await mongoose.connect('mongodb+srv://Test:Sbcrh8QaFTQ0zLGM@cluster0.fnlxs.mongodb.net/developmentDB?retryWrites=true&w=majority', {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true
    }).then(result => {
        console.info('MongoDb Connection Complete.' );
        
    }).catch(err => {
        console.info(err)
    })
})();