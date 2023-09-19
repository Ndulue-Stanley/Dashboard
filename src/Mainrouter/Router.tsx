import {createBrowserRouter} from 'react-router-dom'
import Body from '../Pages/Body'
import Layout from '../Component/DashboardLayout/Layout'


export const Mainrouter = createBrowserRouter([{
    path: '/',
    element: <Layout />,
    children: ([
        {
            index: true,
            element: <Body/>
        }
    ])
}])