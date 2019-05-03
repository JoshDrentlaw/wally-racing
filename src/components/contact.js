import React from 'react'

import styled from 'styled-components'
import tw from 'tailwind.macro'

const Form = styled.form`
    ${tw`w-1/3 mx-auto p-4 flex flex-col items-center border border-black rounded`}
`

const FormGroup = styled.div`
    ${tw`mt-4 -mb-2`}
`

const Label = styled.label`
    ${tw`block focus:font-bold`}

    transform: translateY(-20px);
    transition: all 0.2s ease;
`

const Input = styled.input`
    ${tw`block border-b border-black`}
    
    &::placeholder {
        ${tw`text-transparent`}
    }

    &:focus + label {
        transform: translate(200px, 220px);
        transform: scale(0.8);
    }
`

const Contact = (props) => {

    return (
        <Form>
            <FormGroup>
                <Input id="email" type="email" placeholder="Email" />
                <Label for="email">Email</Label>
            </FormGroup>
        </Form>
    )
}

export default Contact