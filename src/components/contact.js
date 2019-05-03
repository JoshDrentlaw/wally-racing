import React from 'react'

import styled from 'styled-components'
import tw from 'tailwind.macro'

const Form = styled.form`
    ${tw`w-1/3 mx-auto p-4 flex flex-col items-center`}
`

const FormGroup = styled.div`
    ${tw``}
    input~label {
        color: red;
    }
`

const Label = styled.label`
    ${tw`block focus:font-bold`}

    /* transform: translateY(20px); */
`

const Input = styled.input`
    ${tw`block border-b border-black`}
`

const Contact = (props) => {

    return (
        <Form>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input id="email" type="email" placeholder="Email" />
            </FormGroup>
        </Form>
    )
}

export default Contact