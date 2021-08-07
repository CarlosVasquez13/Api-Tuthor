var  app = require('./App')
var  db = require('./Database/Connection')

db()
// Start server 
app.listen(app.get('port'), () => {
    
    console.info("Server on port: ", app.get('port'))
})