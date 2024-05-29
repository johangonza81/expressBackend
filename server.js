import express from "express";
import chalk from 'chalk';
import cancionesRoutes from "./src/routes/cancionesRoutes.js";


const PORT = 3000
const app= express();


app.use(express.json())
app.use("/", cancionesRoutes);





app.listen(PORT, () =>{
    console.log(chalk.blue('        🔥  Server On  🔥'));
    console.log(chalk.grey(`Click to open: ${chalk.underline(`http://localhost:${PORT}`)}`));     
});




