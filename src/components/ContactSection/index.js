import React, { useState } from 'react'
import { ContactForm, 
        ContactH1, 
        Container, 
        InputBox, 
        ContactDetail, 
        ContactInput, 
        BankOptions, 
        Option, 
        Btn } from './ContactElements'

const Contact = () => {

    const handleSubmit = e => {
        e.preventDefault();
    }

  return (
    <Container id='contact' onSubmit={handleSubmit}> 
        <ContactH1>Contact Us</ContactH1>
        <ContactForm>
            <InputBox>
                <ContactDetail>Your Name</ContactDetail>
                <ContactInput type="text" placeholder="enter your full name" name='name' required ></ContactInput>
            </InputBox>
            <InputBox>
                <ContactDetail>Your Email</ContactDetail>
                <ContactInput  type="email" placeholder="enter your email" name='email' required ></ContactInput>
            </InputBox>
            <InputBox>
                <ContactDetail>Your Phone Number</ContactDetail>
                <ContactInput  type="text" placeholder="enter your phone number" name='number' required></ContactInput>
            </InputBox>
            <InputBox>
                <ContactDetail>Choose your option</ContactDetail>
                <BankOptions>
                    <Option></Option>
                    <Option>Save and Invest</Option>
                    <Option>Rewards</Option>
                    <Option>24/7 Support</Option>
                    <Option>All the above options</Option>
                </BankOptions>
            </InputBox>
        </ContactForm>        
        <Btn type='submit' to='services' >Submit</Btn>
    </Container>
  )
}

export default Contact
