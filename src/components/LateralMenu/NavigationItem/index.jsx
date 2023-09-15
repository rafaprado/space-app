import styled from "styled-components";

const StyledListItem = styled.li`
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${props => props.$active ? '#7B78E5' : '#D9D9D9'};
    font-family: ${props => props.$active ? 'GandhiSans-Bold' : 'GandhiSans-Regular'};
    display: flex;
    align-items: center;
    gap: 22px;
`;

const NavigationItem = ({children, activedIcon, inactiveIcon, active = false}) => {
    return(
        <StyledListItem $active={active}>
            <img src={active ? activedIcon : inactiveIcon} alt="" />
            {children}
        </StyledListItem>
    );
}

export default NavigationItem;