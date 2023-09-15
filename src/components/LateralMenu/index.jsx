import styled from "styled-components";
import NavigationItem from "./NavigationItem";

const StyledList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`

const LateralMenu = () => {
    return (
        <aside>
            <nav>
                <StyledList>
                    <NavigationItem activedIcon="/icons/home-ativo.png" inactiveIcon="/icons/home-inativo.png" active={true}>Home</NavigationItem>
                    <NavigationItem activedIcon="/icons/mais-vistas-ativo.png" inactiveIcon="/icons/mais-vistas-inativo.png">Trending</NavigationItem>
                    <NavigationItem activedIcon="/icons/mais-curtidas-ativo.png" inactiveIcon="/icons/mais-curtidas-inativo.png">More liked</NavigationItem>
                    <NavigationItem activedIcon="/icons/novas-ativo.png" inactiveIcon="/icons/novas-inativo.png">New</NavigationItem>
                    <NavigationItem activedIcon="/icons/surpreenda-me-ativo.png" inactiveIcon="/icons/surpreenda-me-inativo.png">Explore</NavigationItem>
                </StyledList>
            </nav>
        </aside>
    );
}

export default LateralMenu;