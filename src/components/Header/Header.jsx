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

const Header = ({filter, setFilter}) => {
    return (<>
        <StyledHeader>
            <img src="/images/logo.png" alt="" />
            <TextField filter={filter} setFilter={setFilter} />
        </StyledHeader>
    </>);
}

export default Header;