import { BsSun } from 'react-icons/bs';
import { styled } from 'styled-components'

const Body = () =>{
    return(
        <div>
          <Container>
            <Top>
                <Day>
                <Holder><Icon><BsSun/></Icon>
                <h3>My Day</h3>
                <p>Wednesday, September</p>
                </Holder>
                </Day>
            </Top>
          </Container>
        </div>
    )
}

export default Body;

const Holder = styled.div`
display: flex;
h3{
    margin-left: 5px;
}
`
const Icon = styled.div`
font-size: 17px;
`
const Day = styled.div`
display: flex;
flex-direction: column;
`
const Top = styled.div`
display: flex;
width: 100%;
height: 80px;
`
const Container = styled.div`
width: calc(100vw - 300px);
display: flex;
background-color: red;
/* padding-left: 12px;
padding-right: 12px; */
`