import React, { Component, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
const Div = styled.div`
  display: flex;
  justify-content: center;
  padding: 200px;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .field {
    /* padding: 20px; */
    /* margin: 20px;
     */
    margin-bottom: 20px;
  }

  .button1 {
    transition: transform 250ms ease-out;
  }

  .button1:hover {
    transition: transform 250ms ease-in;
    transform: scale(1.04);
  }

  .input1 {
    transition: transform 250ms ease-in;
  }
  .input1:focus {
    transform: scale(5);
    transition: transform 250ms ease-in;
  }

  .title-container {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 40px;
    color: #fff;
    margin-bottom: 30px;
  }
  .span {
    transition: transform 250ms ease-out;
    align-items: center;
    background-color: transparent;
    display: inline-flex;
    flex-direction: row;
    width: auto;
    z-index: 1;
  }

  .span:hover {
    transform: translateY(-4.05px);
    transition: transform 250ms ease-in;
    cursor: pointer;
  }
`;

function Contact() {
  const textFieldStyles = {};
  return (
    <Div className="contact">
      <div className="title-container">
        <h1>
          <div className="span">C</div>
          <div className="span">o</div>
          <div className="span">n</div>
          <div className="span">t</div>
          <div className="span">a</div>
          <div className="span">c</div>
          <div className="span">t</div>&nbsp;
          <div className="span">m</div>
          <div className="span">e</div>
        </h1>
      </div>

      <form action="/contact" method="post" name="contact">
        <input type="hidden" name="form-name" value="contact" />
        <div class="field">
          <div class="field-half">
            <Input
              className="field"
              type="text"
              name="name"
              id="name"
              className="input1"
              required
              placeholder="Name"
            />
          </div>
          <div class="field field-half">
            <Input
              type="email"
              required
              name="email"
              className="input1"
              id="email"
              placeholder="Email"
            />
          </div>
          <div class="field field">
            <TextField
              required
              name="message"
              id="message"
              className="input1"
              multiline
              style={textFieldStyles}
              placeholder="Message"
              variant="filled"
              rows={7}
            />
            <div data-netlify-recaptcha="true" className="field"></div>
            <Button
              className="button1"
              style={{ background: "white" }}
              variant="containted"
              type="submit"
            >
              Submit&nbsp; ^_^
            </Button>
          </div>
        </div>
      </form>
    </Div>
  );
}

export default Contact;
