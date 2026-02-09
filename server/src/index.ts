import express from 'express';
import cors from 'cors';
import bookRoutes from "./routes/bookRoutes.js"
import libraryRoutes from "./routes/libraryRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import inventoryRoutes from './routes/inventoryRoutes.js';
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());// allows your frontend to talk to this backend
app.use(express.json());//allow server to read json files

app.get('/', (req , res) => {
    res.send("Bookscout app is working");
});



app.use('/api/books',bookRoutes);
app.use('/api/libraries',libraryRoutes);
app.use('/api/users',userRoutes);
app.use('/api/inventory', inventoryRoutes);
 
app.listen(PORT , () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})

