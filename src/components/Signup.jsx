import React from 'react'
import styled from 'styled-components'

import PatreonHello from '../assets/img/step3-top.svg'


const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  label {
    margin: 15px 0 0;
  }
`

const BoxWrap = styled.div`
  width: 100%;
`

const ImageLogin = styled.img`
  width: 90%;
`

const BoxWrapper = (props) => (
  <BoxWrap>
    {props.children}
  </BoxWrap>
)

const LoginText = styled.div`
  h1 {
    font-weight: 600;
    font-size: 3.5rem;  
  }
  p {
    font-size: 2rem;
  }
`

const Input = styled.input`
  padding: 10px 20px;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 0 2px grey;
  background-color: whitesmoke;
  border: none;
  margin: 0px 0;
`

const LoginComponent = ({children}) => (
  <LoginText>
    {children}
  </LoginText>
)

export default function Signup() {
  return (
    <div className="container">
      <Wrapper>
        <BoxWrapper>
          <LoginComponent>
            <div className="m-5"></div>
            <h1>Signup</h1>
            <p>Join with patreon</p>
            <form action="">
              <div style={{width: '80%'}} className="text-left">
                <span>
                  <label htmlFor="">Your name</label>
                  <Input name="name" />
                </span>
                <span>
                  <label htmlFor="">Email</label>
                  <Input name="email" type="email" />
                </span>
                <span>
                  <label htmlFor="">Confirm email</label>
                  <Input name="confirm_email" type="email" />
                </span>
                <span>
                  <label htmlFor="">Password</label>
                  <Input name="password" type="password" />
                </span>
                <span className="mb-3 mt-3">
                  <input type="checkbox" name="term" id="term" />&nbsp;
                  <label htmlFor="">Agree with all terms</label>
                </span>
                <br/>
                <button 
                  type="submit" 
                  className="btn btn-danger mt-3" 
                  style={{width: '100%', borderRadius: '20px', padding: '10px'}}>
                  Signup
                </button>
              </div>
            </form>
          </LoginComponent>
        </BoxWrapper>
        <BoxWrapper>
          <div className="text-center">
            <ImageLogin src={PatreonHello} />
          </div>
        </BoxWrapper>
      </Wrapper>
    </div>
  )
}
