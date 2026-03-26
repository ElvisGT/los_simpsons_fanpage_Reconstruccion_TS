import {createBrowserRouter} from 'react-router-dom';
import {App} from '../components/App.tsx';
import CharacterDetails from '../components/CharacterDetails.tsx';

const router = createBrowserRouter([
    {
        path:"/",
        element:<App />,
    },
    {
        path:'/:name',
        element:<CharacterDetails />,
    }
])

export {router};