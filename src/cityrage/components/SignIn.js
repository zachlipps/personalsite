import React, { useState } from "react";
import styled from "styled-components";

const SignIn = ({ signIn, signUp }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);

  const handleClick = (fn, params) => {
    let newErrors = [];
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      let error = "You have entered an invalid email address!";
      newErrors.push(error);
    }
    if (password.length < 6) {
      let error = "Please use more than 6 characters.";
      newErrors.push(error);
    }
    
    if (!newErrors.length) {
      fn(...params);
    }
    setErrorMessages(newErrors);
  };

  const handleChange = (val, updateFn) => {
    updateFn(val);
  };

  const SignUpMessage = () => {
    if (isSignup) {
      return (
        <ButtonContainer>
          <div onClick={() => handleClick(signUp, [email, password])}>
            Sign Up
          </div>
          <Message onClick={() => setIsSignup(false)}>Already Have an Account?</Message>
        </ButtonContainer>
      );
    }
    return (
      <ButtonContainer>
        <div onClick={() => handleClick(signIn, [email, password])}>
          Sign In
        </div>
        <Message onClick={() => setIsSignup(true)}>
          Need an account?
        </Message>
      </ButtonContainer>
    );
  };

  return (
    <Container>
      <Form>
        <div>
          <InputContainer>
            <Label>Email</Label>
            <Input
              name="email"
              onChange={e => {
                handleChange(e.target.value, setEmail);
              }}
            ></Input>
          </InputContainer>
          <InputContainer>
            <Label>Password</Label>
            <Input
              name="password"
              onChange={e => {
                handleChange(e.target.value, setPassword);
              }}
            ></Input>
          </InputContainer>
        </div>
      </Form>
      <Errors errors={errorMessages} />
      {SignUpMessage()}
    </Container>
  );
};

const Errors = (props) => (
  <ErrorContainer>
    {props.errors.map((message, idx) => <Error key={idx}>{message}</Error>)}
  </ErrorContainer>
);

const ErrorContainer = styled.div`
  display: flex;
  align-content: flex-end;
  flex-direction: column;
  margin: 10px 0;
  font-size: .8em;
  color: red;
`;

const Error = styled.div`
  flex: 1;
  display: flex;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Message = styled.span`
  font-size: 0.75em;
  :hover {
    color: blue;
  }
  margin-top: 10px;
`;

const Form = styled.form`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-basis: 35%;
  flex-grow: 50%;
`;

const InputContainer = styled.div`
  display: flex;
  margin: 10px 0;
`;

const Input = styled.input`
  flex: 2;
  border-radius: 6px;
  padding: 10px 5px;
`;

const Label = styled.label`
  flex: 1;
`;

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export default SignIn;
