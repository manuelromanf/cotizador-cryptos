import styled from '@emotion/styled'

    const Texto = styled.div`
        background-color: #b7322C;
        color: #FFF;
        padding: 15px;
        font-size: 22px;
        text-transform: uppercase;
        font-family: 'Lato' sans-serif;
        font-weight: 700;
        text-align: center;
        border-radius: 10px;
    `


export const Error = ({children}) => {
  return (
    <Texto>{children}</Texto>
  )
}
