import styled from "styled-components";
import TextField from "../TextField/";

const StyledHeader = styled.header`
    padding: 60px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
        max-width: 212px;
    }
`;

const Header = () => {
    return (<>
        <StyledHeader>
            <img src="/images/logo.png" alt="" />
            <TextField />
        </StyledHeader>
    </>);
}

export default Header;