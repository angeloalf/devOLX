import styled from "styled-components" // pegar da dependência

export const PageArea = styled.div `

form {
    background-color: #fff;
    border-radius: 3px;
    padding: 10px;
    box-shadow: 0px 0px 3px #999;
}

.area {
    display: flex;
    align-items: center;
    max-width: 500px;
    padding: 10px;

    .area--title {
        width: 200px;
        text-align: right;
        padding-right: 20px;
        font-weight: bold;
        font-size: 14px;
    }

    .area--input {
        flex: 1;

        input {
            width: 100%;
            font-size: 14px;
            border: 1px solid #ddd;
            padding: 5px;
            border-radius: 3px;
            outline: 0;
            transition: all ease .4s;

            &: focus {
                border: 1px solid #333;
                color: #333;                
            }             
        }

        .area--check {
            margin-left: -130px;
        }

        button {
            background-color: #0089FF;
            color: #fff;
            font-size: 15px;
            border: 0;
            outline: 0;
            padding: 5px 10px;
            border-radius: 4px;
            cursor: pointer;

            &: hover {
                background-color: #006FCE;
            }
        }
    }
}

`