import { RuntimeOptions, runWith } from "firebase-functions";
import * as express from 'express';



//Iniciar firebase
//admin.initializeApp(functions.config().firebase);

//Iniciar express
const app = express();
const routes = express.Router();

app.use('/api', app)
app.use(express.json());
routes.get('/', (req, res)=> {
    return res.json({
        Hello: 'World'
    })
})
app.use(routes);



//app.use(express.urlencoded({extended: false}));


const runtimeOpts: RuntimeOptions = {
    timeoutSeconds: 540,
    memory: "1GB",
 }
export const webApi = runWith(runtimeOpts).https.onRequest(app);
