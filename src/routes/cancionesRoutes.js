import {Router} from 'express';
import { deleteRepertorio, getRepertorio, gethtml,postRepertorio, putRepertorio} from '../controller/cancionesController.js';



const router = Router();


router.get("/",gethtml)

router.get('/repertorio',getRepertorio)

router.post('/repertorio',postRepertorio)

router.put('/repertorio/:id', putRepertorio);

router.delete('/repertorio/:id',deleteRepertorio);


export default router;