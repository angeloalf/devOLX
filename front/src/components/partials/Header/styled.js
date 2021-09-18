import styled from "styled-components" // pegar da dependência

export const HeaderArea = styled.div`
background-color: #fff;
height: 60px;
border-bottom: 1px solid #ccc;

a {
    text-decoration: none;
}

.container {
    max-width: 1000px;
    margin: auto;
    display: flex;
}

.logo {
    flex: 1;
    display: flex;
    align-itens: center;
    height: 60px;
    line-height: 60px;
}

.logoO, 
.logoL,
.logoX {
    font-size: 30px;
    font-weight: bold;
}

.logoO  {color: #FF0000;}
.logoL  {color: #00FF00;}
.logoX  {color: #0000FF;}
    
`