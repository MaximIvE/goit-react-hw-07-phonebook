import styled from "styled-components";

export const Wrapper = styled.div`
@media screen and (min-width:480px){
    width: 85%;
    max-width: ${props => {if (props.element === "form") return "20vw"}};
    min-width: ${props => {if (props.element === "form") return "160px"}};
    padding: 12px 12px 4px 12px;
    }
padding: 2px;
width: 100%;

    &:first-child{
        box-shadow: inset 0 -2px 1px rgba(193,193,193,0.1), inset -2px -4px 4px rgba(0,0,0,0.2), 0 2px 1px rgba(193,193,193,0.1), 2px 4px 4px rgba(0,0,0,0.2);
        background-color: rgba(0,0,0,0.1);
        border-radius: 4px;
    };

    &:last-child{
        display: flex;
        flex-direction: column;
        align-items: stretch;
        background-color: rgba(0,0,0,0.1);
        border-radius: 4px;

    };
`;

export const Title = styled.h2`
    text-align: center;
    margin:  4px 0;
    @media screen and (min-width:480px){
        margin:  28px 0;
    }
`;