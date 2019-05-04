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
        transform: translateY(-250%) scale(0.8);
    }
`

const TextArea = styled.textarea`
    ${tw`w-3/4 mx-auto my-4 block border border-black rounded p-2 focus:outline-none`}
`

const Contact = (props) => {

    return (
        <Form>
            <FormGroup>
                <Input id="name" type="name" placeholder="Full Name" />
                <Label for="name">Full Name</Label>
            </FormGroup>
            <FormGroup>
                <Input id="email" type="email" placeholder="Email" />
                <Label for="email">Email</Label>
            </FormGroup>
            <TextArea id="message" type="message" placeholder="If you have any questions or comments, please leave them here." />
            <button type="submit" className="mx-auto rounded border-black border-2 p-3 hover:bg-black hover:text-white">Submit</button>
        </Form>
    )
}

export default Contact