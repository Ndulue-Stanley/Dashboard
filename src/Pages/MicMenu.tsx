import styled from 'styled-components'
import {ImCross} from 'react-icons/im'
import {AiFillWindows} from 'react-icons/ai'
import {AiFillApple} from 'react-icons/ai'
import {AiFillAndroid} from 'react-icons/ai'
import pic from '../Assets/picture.jpg'
import { useState } from 'react'

const MicMenu = () =>{
    const [show, setShow] = useState<Boolean>(false)
    const Toggle = () =>{
       setShow(!show)
    }
    return(
        <div>
            <Container>
            <Wrapper>
                <Head>
                <h4>What's new</h4>
                <ImCross style={{fontSize: '15px', fontWeight: '50', color: 'gray'}}/>
                </Head>
               <General>
                <Card>
                    <Img src = {pic}/>
                </Card>
                <p>Now you can change to Darkmode theme from settings</p>
                <Button>Try it</Button>
               </General>
               <General>
                <Card>
                    <Img src = {pic}/>
                </Card>
                <p>Now you can resize your details pane by dragging the edge of your pane</p>
                <Button>Got it</Button>
               </General>
               <General2>
               <p>Download the app</p>
               <IconHolder>
                <AiFillWindows/>
                <AiFillApple/>
                <AiFillAndroid/>
               </IconHolder>
               </General2>
            </Wrapper>
        </Container>
       
        </div>
    )
}

export default MicMenu;

const Holder = styled.div`
    
`

const IconHolder = styled.div`
    width: 20%;
    padding: 5px 5px;
    font-size: 21px;
`

const Button = styled.div`
padding: 5px 5px;
width: 60px;
height: 20px;
background-color: white;
border-radius: 10px;
border: 1px solid grey;
text-align: center;
`
const Img = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
border-radius: 10px;
`
const Card = styled.div`
width: 100%;
height: 65%;
`
const General = styled.div`
padding: 10px 10px;
display: flex;
background-color: white;
box-shadow: rgba(99, 99, 99, 0.2) 0px 20px 8px 0px;
justify-content: center;
flex-direction: column;
gap: 12px;
margin-top: 20px;
border-radius: 10px;
p{
    margin: 0px;
    font-size: 18px;
    font-weight: 400;
   
}`
const General2 = styled.div`
padding: 10px 10px;
display: flex;
background-color: white;
box-shadow: rgba(99, 99, 99, 0.2) 0px 20px 8px 0px;
justify-content: space-between;
align-items: center;
margin-top: 20px;
border-radius: 10px;
p{
    margin: 0px;
    font-size: 14px;
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
height: calc(100vh - 60px);
box-shadow: rgba(99, 99, 99, 0.2) 0px 20px 8px 0px;
z-index: 8;
overflow-x: auto;
display: flex;
justify-content: center;
align-items: center;
position: absolute; 
right: 0;
bottom: 0;
`