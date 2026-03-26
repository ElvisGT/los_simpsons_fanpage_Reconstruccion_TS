import ReactDom from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import {router} from './routers/router';
import '../static/styles.css';


const root = document.querySelector("#root");
if (!root) throw new Error("El elemento no puede ser nulo");
const app = ReactDom.createRoot(root);

app.render(
    <RouterProvider router={router}/>
)