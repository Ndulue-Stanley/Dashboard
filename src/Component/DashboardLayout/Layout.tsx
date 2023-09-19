import DashboardHead from "../../Static/DashboardHead";
import {Outlet} from 'react-router-dom'
import Sidebar from "../../Static/Sidebar";
import {styled} from 'styled-components'
import Settings from "../../Pages/SettingsDrop";
import MicMenu from "../../Pages/MicMenu";

const Layout = () =>{
    return(
        <div>
            <DashboardHead/>
            <Holder>
            <Sidebar/>
            <Settings/>
            <Outlet/>
            </Holder>
        </div>
    )
}

export default Layout;

const Holder = styled.div`
    display: flex;
    height: calc(100vh - 60px);
    position: relative;
    
`