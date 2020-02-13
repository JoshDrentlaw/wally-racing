import React from 'react'

import styled from 'styled-components'
import tw from 'tailwind.macro'

const Form = styled.form`
    ${tw`w-full md:w-3/4 lg:w-1/2 mx-auto p-4 flex flex-col items-center border border-black rounded`}
`

const FormGroup = styled.div`
    ${tw`w-full md:w-3/4 mx-auto mt-4 -mb-2`}
`

const Label = styled.label`
    ${tw`block focus:font-bold float-left`}

    transform: translate(0.5rem, -25px);
    transition: all 0.2s ease;
`

const Input = styled.input`
    ${tw`w-full block border-b border-black p-2 focus:outline-none`}
    
    &::placeholder {
        ${tw`text-transparent`}
    }

    &:focus + label, &:not(:placeholder-shown) + label {
        transform: translateY(-270%) scale(0.7);
        padding-left: 0.5rem;
        transform-origin: left;
    }
`

const TextArea = styled.textarea`
    ${tw`w-3/4 mx-auto my-4 block border border-black rounded p-2 focus:outline-none`}

    &:placeholder-shown {
        transition: all 0.3s ease-out;
    }
`

const Contact = (props) => {

    return (
        <Form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <FormGroup>
                <Input id="name" type="name" placeholder="Full Name" required />
                <Label htmlFor="name">Full Name</Label>
            </FormGroup>
            <FormGroup>
                <Input id="email" type="email" placeholder="Email" required />
                <Label htmlFor="email">Email</Label>
            </FormGroup>
            <TextArea id="message" rows="4" placeholder="If you have any questions or comments, please leave them here." />
            <button type="submit" className="mx-auto rounded border-black border-2 p-3 hover:bg-black hover:text-white">Submit</button>
        </Form>
    )
}

export default Contact