import React from "react";
import { styled } from "styled-components";

const FormComponent = styled.form`
  width: 80%;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  backdrop-filter: blur(5px);
  padding: 3rem 3rem 1rem 3rem;
  padding-bottom: 1rem ;
  margin-top: 1.5rem;
`;

const Group = styled.div`
  margin-bottom: 1rem;
`;
const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  font-size: 1rem;
  line-height: 1.5;
  -moz-appearance: none;
  color: #ffffff;

  &::placeholder {
    color: #ffffff;
  }
  &:focus {
    border-color: rgba(167, 139, 250);
  }
`;

const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  padding: 1rem 1.5rem;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  transition: all 0.5s ease;
  font-size: 1rem;
  background-color: transparent;
    color: #ffffff;

  &:hover {

    background-color: #fff;
  color: #030348;
  }
`;

const Form = () => {
  return (
    <FormComponent id="create_bot">
      <Group>
        <Input
          id="full_name"
          name="full_name"
          type="text"
          className="form-control"
          placeholder="Your name ..."
        />
      </Group>
      <Group>
        <Input
          id="email"
          name="email"
          type="email"
          className="form-control"
          placeholder="Your email ..."
        />
      </Group>
      <Group>
        <Input
          id="website"
          name="website"
          type="text"
          className="form-control"
          placeholder="Your website ..."
        />
      </Group>
      <div className="text-end">
        <Button className="btn btn-warning" id="create_bot_btn">
          Create Chatbot
        </Button>
      </div>
    </FormComponent>
  );
};

export default Form;
