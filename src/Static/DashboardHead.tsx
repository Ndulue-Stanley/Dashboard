import { styled } from "styled-components";
import {CgMenuGridO} from 'react-icons/cg'
import {LiaSearchSolid} from 'react-icons/lia'
import {AiOutlineQuestion} from 'react-icons/ai'
import {VscMegaphone} from 'react-icons/vsc'
import {CiSettings} from 'react-icons/ci'
import { useState } from "react";
import Settings from "../Pages/SettingsDrop";

const DashboardHead = () =>{

    const [show, setShow] = useState<Boolean>(false)
    const Toggle = () =>{
       setShow(!show)
    }

    return(
        <Container>
            <Wrapper>
                <Holder>
                <Menu>
                    <CgMenuGridO/>
                </Menu>
                <h3>To Do</h3>
                </Holder>
                <InputHold>
                <SearchHold>
                    <LiaSearchSolid/>
                    <Input type = 'text'/>
                </SearchHold>
                </InputHold>
                <IconHold>
                    <One>
                        <CiSettings onClick={Toggle}/>
                        </One>
                    <Two><AiOutlineQuestion/></Two>
                    <Three><VscMegaphone/></Three>
                    <Circle>
                      NS
                    </Circle>
                    </IconHold>
            </Wrapper>
        </Container>
        
    )
}

export default DashboardHead;

const Circle = styled.div`
width: 30px;
height: 30px;
border-radius: 100px;
border: 1px solid white;
display: flex;
justify-content: center;
align-items: center;
color: white;
font-size: 14px;
font-weight: 600;
margin-left: 30px;
`
const Three = styled.div`
font-size: 20px;
margin-left: 30px;
cursor: pointer;
`
const Two = styled.div`
font-size: 20px;
margin-left: 30px;
cursor: pointer;
`
const One = styled.div`
font-size: 20px;
margin-left: 30px;
cursor: pointer;
`
const IconHold = styled.div`
display: flex;
align-items: center;
color: white;

`
const Input = styled.input`
    flex: 1;
    height: 100%;
    border: none;
    outline: none;
    padding-left: 12px;
    overflow: hidden;
`

const SearchHold = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
/* background-color: #2564CF; */
font-size: 20px;
`
const InputHold = styled.div`
display: flex;
height: 32px;
width: 350px;
background-color: white;
border-radius: 5px;
overflow: hidden;
`
const Holder = styled.div`
display: flex;
align-items: center;
h3{
    color: white;
    margin-left: 30px;
}
`
const Menu = styled.div`
    color: white;
    font-size: 20px;
`
const Wrapper = styled.div`
    width: 98%;
    display: flex;
    align-items: center;
    /* background-color: red; */
    justify-content: space-between;
`
const Container = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    /* position: fixed; */
    background-color: #2564CF;
`