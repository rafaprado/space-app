import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

const StyledTextField = styled.div`
    border-radius: 10px;
    border: 2px solid var(--Degrad-com-rosa, #C98CF1);
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 600px;
    gap: 16px;

    input {
        border: none;
        background-color: transparent;
        outline: none;
        flex: 1;
        color: #D9D9D9;
        font-weight: 400;
        font-size: 20px;
        line-height: 20px;
        width: 566px;
        box-sizing: border-box;
    }

    svg {
        color: #C98CF1;
    }
`;

const TextField = () => {
    return (
        <StyledTextField>
            <input type="text" name="search" placeholder="O que você procura?" />
            <AiOutlineSearch size={32} />           
        </StyledTextField>
    );
}

export default TextField;