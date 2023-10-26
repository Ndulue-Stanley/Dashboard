import {styled} from 'styled-components'
import {FiMenu} from 'react-icons/fi'
import {BsSun} from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

const Sidebar = () =>{
    return(
        <Container>
          <Icon><FiMenu/></Icon>

        <NavLink to= "" style={({
            isActive }) =>{
                return{
                    backgroundColor: isActive ? "#EFF6FC" : '#fff',
                    borderLeft: isActive ?
                    "4px solid blue" : "none",
                    textDecoration: isActive ? 'none': '',
                    height: "50px",
                    display: isActive ? 'flex' : 'flex',
                    marginTop: isActive ? '8px' : '8px'
                }
            }}
        >
        <Myday>
            <Sun><BsSun/></Sun>
            <h3>My Day</h3>
          </Myday>
            </NavLink>
        </Container>
    )
}

export default Sidebar;

const Sun = styled.div``
const Myday = styled.div`
width: 100%;
height: 50px;
display: flex;
align-items: center;
margin-top: 25px;
padding-left: 30px;
background-color: red;
h3{
    font-weight: 400;
    margin-left : 13px;
}
`

const Icon = styled.div`
    font-size: 20px;
    margin-left: 30px;

`

const Container = styled.div`
width:300px;
height: 100%;
display: flex;
flex-direction: column;
box-shadow: rgba(99, 99, 99, 0.2) 0px 20px 8px 0px;
background-color: #fff;
padding-top: 30px;
overflow-x: hidden;
`