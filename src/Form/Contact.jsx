import React, { Component, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
  padding: 200px;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .title-container {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 40px;
    color: #fff;
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
              type="text"
              name="name"
              id="name"
              required
              placeholder="Name"
            />
          </div>
          <div class="field-half">
            <Input
              type="email"
              required
              name="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div class="field">
            <TextField
              required
              name="message"
              id="message"
              placeholder="Message"
              rows={7}
            />
            <div className="field">
              <input
                type="file"
                name="myfile"
                id="myfile"
                placeholder="Upload File"
                rows={7}
              />
            </div>
            <div data-netlify-recaptcha="true" className="field"></div>
            <button type="submit">Submit ^_^</button>
          </div>
        </div>
      </form>
    </Div>
  );
}

export default Contact;
