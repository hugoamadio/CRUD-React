import styled from "styled-components";

const FormTag = styled.form`
     display: flex;
     background-color: #ececec;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     gap: 34px;
     box-sizing: border-box;
     border-radius: 25px;
     box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
     height: 60vh;
     width: 40vw;
     padding: 0 0 50px 0;
`

interface FormStyledProps{
     onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
     children: React.ReactNode;
}

function FormStyled({onSubmit, children}: FormStyledProps){
     return(
          <FormTag onSubmit={onSubmit}>
               {children}
          </FormTag>
     )
}
export default FormStyled