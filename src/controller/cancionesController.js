import fs from 'fs';
import path from 'path';


const gethtml = (req,res) =>{
    const filePath = path.resolve("index.html");
    res.sendFile(filePath);
}

const getRepertorio = (req,res) =>{
    try{
    const repertorio = JSON.parse(fs.readFileSync('canciones.json','utf8'));
    res.status(200).json(repertorio);
    }catch(error){
        res.status(500).json({message:"error"});

    }
}


const postRepertorio = (req,res) =>{
    try{
        const cancion = req.body;
        const canciones = JSON.parse(fs.readFileSync('canciones.json', 'utf8'));
        canciones.push(cancion);
        fs.writeFileSync('canciones.json', JSON.stringify(canciones));
        res.status(200).send('Cancion agregada con exito');

    }catch{
        res.status(500).json({message:"error"});
    }
}
    const putRepertorio = (req, res) => {
        try {
            const { id } = req.params;
            const nuevaCancion = req.body;
            const canciones = JSON.parse(fs.readFileSync('canciones.json', 'utf8'));
    
            const index = canciones.findIndex(cancion => cancion.id === parseInt(id));
    
            if (index !== -1) {
                canciones[index] = nuevaCancion;
                fs.writeFileSync('canciones.json', JSON.stringify(canciones));
                res.status(200).send('Cancion actualizada con exito');
            } else {
                res.status(404).send('Cancion no encontrada');
            }
        } catch (error) {
            res.status(500).json({ message: "error" });
        }
    }

    const deleteRepertorio = (req, res) => {
        try {
            const { id } = req.params;
            let canciones = JSON.parse(fs.readFileSync('canciones.json', 'utf8'));
            canciones = canciones.filter(c => c.id != id);
            fs.writeFileSync('canciones.json', JSON.stringify(canciones));
            res.status(200).send('Cancion eliminada con exito');
        } catch {
            res.status(500).json({ message: "error" });
        }
    }


export {gethtml,getRepertorio,postRepertorio,putRepertorio,deleteRepertorio};