import app from './App'
import './Database/Connection'

// Start server 
app.listen(app.get('port'), () => {
    
    console.info("Server on port: ", app.get('port'))
})