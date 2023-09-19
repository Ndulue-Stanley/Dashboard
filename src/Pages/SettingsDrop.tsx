import styled from 'styled-components'
import {ImCross} from 'react-icons/im'
import {BsToggleOn} from 'react-icons/bs'
import { useState } from 'react'

const Settings = () =>{
    const [show, setShow] = useState<Boolean>(false)
    const Toggle = () =>{
       setShow(show)
    }
    return(
        <Container>
            <Wrapper>
                <Head>
                <h4>Settings</h4>
                <ImCross style={{fontSize: '15px', fontWeight: '50', color: 'gray'}}/>
                </Head>
                <General>
                   <h4>General</h4>
                    <Hold>
                        Confirm before deleting
                        <IconHold>
                            <BsToggleOn style={{fontSize: '25px', fontWeight: '50', color: 'navy'}}/>  On
                        </IconHold>
                    </Hold>
                    <Hold>
                      Add new tasks on top
                        <IconHold>
                            <BsToggleOn style={{fontSize: '25px', fontWeight: '50', color: 'navy'}}/>  On
                        </IconHold>
                    </Hold>
                    <Hold>
                       Move starred tasks to top
                        <IconHold>
                            <BsToggleOn style={{fontSize: '25px', fontWeight: '50', color: 'navy'}}/>  On
                        </IconHold>
                    </Hold>
                    <Hold>
                       Play completion sound
                        <IconHold>
                            <BsToggleOn style={{fontSize: '25px', fontWeight: '50', color: 'navy'}}/>  On
                        </IconHold>
                    </Hold>
                    <Hold>
                       Show right-click menus
                        <IconHold>
                            <BsToggleOn style={{fontSize: '25px', fontWeight: '50', color: 'navy'}}/>  On
                        </IconHold>
                    </Hold>
                    <Hold>
                      Turn on reminder notifications
                        <IconHold>
                            <BsToggleOn style={{fontSize: '25px', fontWeight: '50', color: 'navy'}}/>  On
                        </IconHold>
                    </Hold>
                    <Hold>
                        Show tasks that seems important in My Day
                        <IconHold>
                            <BsToggleOn style={{fontSize: '25px', fontWeight: '50', color: 'navy'}}/>  On
                        </IconHold>
                    </Hold>
                    <Hold>
                      Turn on night mode
                        <IconHold>
                            <BsToggleOn style={{fontSize: '25px', fontWeight: '50', color: 'grey'}}/>  On
                        </IconHold>
                    </Hold>
                </General>
                <General>
                   <h4>Smart</h4>
                    <Hold>
                       Important
                        <IconHold>
                            <BsToggleOn style={{fontSize: '25px', fontWeight: '50', color: 'navy'}}/>  On
                        </IconHold>
                    </Hold>
                    <Hold>
                       Planned
                        <IconHold>
                            <BsToggleOn style={{fontSize: '25px', fontWeight: '50', color: 'navy'}}/>  On
                        </IconHold>
                    </Hold>
                    <Hold>
                      All 
                        <IconHold>
                            <BsToggleOn style={{fontSize: '25px', fontWeight: '50', color: 'grey'}}/>  On
                        </IconHold>
                    </Hold>
                    <Hold>
                      Completed
                        <IconHold>
                            <BsToggleOn style={{fontSize: '25px', fontWeight: '50', color: 'grey'}}/>  On
                        </IconHold>
                    </Hold>
                    <Hold>
                       Assigned to me
                        <IconHold>
                            <BsToggleOn style={{fontSize: '25px', fontWeight: '50', color: 'navy'}}/>  On
                        </IconHold>
                    </Hold>
                    <Hold>
                     Auto-hide empty smart-lists
                        <IconHold>
                            <BsToggleOn style={{fontSize: '25px', fontWeight: '50', color: 'grey'}}/>  On
                        </IconHold>
                    </Hold>
                    <Hold>
                        Show 'Due Today'tasks in My Day
                        <IconHold>
                            <BsToggleOn style={{fontSize: '25px', fontWeight: '50', color: 'navy'}}/>  On
                        </IconHold>
                    </Hold>
                </General>
                <General>
                   <h4>Connected Apps</h4>
                    <Hold>
                       Planned
                        <IconHold>
                            <BsToggleOn style={{fontSize: '25px', fontWeight: '50', color: 'navy'}}/>  On
                        </IconHold>
                        <p>Tasks assigned to you in Planner</p>
                    </Hold>
                    <Hold>
                       Notifications
                        <IconHold>
                            <BsToggleOn style={{fontSize: '25px', fontWeight: '50', color: 'navy'}}/>  On
                        </IconHold>
                        <p>Get notified when a list is sharde with you</p>
                    </Hold>
                </General>
            </Wrapper>
        </Container>
    )
}

export default Settings;

const IconHold = styled.div`
display: flex;
align-items: center;
gap: 10px;
`
const Hold = styled.div`
padding: 10px 10px;
gap: 10px;
transition: all 350ms;
&:hover{
    cursor: pointer;
    border-radius: 10px;
    transform: scale(1.05);
}p{
    font-size: 10px;
}
`
const General = styled.div`
padding: 10px 10px;
display: flex;
justify-content: center;
flex-direction: column;
gap: 12px;
margin-top: 20px;
h4{
    margin: 0px;
    font-size: 18px;
    font-weight: 400;
}
`
const Head = styled.div`
width: 100%;
height: 20px;
display: flex;
justify-content: space-between;
h4{
    margin: 0px;
    font-size: 20px;
    font-weight: 400;
}
`
const Wrapper = styled.div`
height: 98%;
width: 90%;
gap: 50px;
`
const Container = styled.div`
width: 400px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 20px 8px 0px;
z-index: 8;
overflow-x: auto;
display: flex;
justify-content: center;
align-items: center;
position: absolute; 
right: 0;
top: 0;
bottom: 0;
`