const {default:mongoose} = require("mongoose")

const connection = {}
export let connecToDb = async () =>{
try {
    if (connection.isConnected) {
        console.log("using existing conection")
        return;
    }
    const db = await mongoose.connect(process.env.MONGO)
    connection.isConnected = db.connections[0].readyState
  
} catch (error) {
    throw new Error("Error connecting to databse")
}
}