import styled from "styled-components";

const StyledBanner = styled.div`
    background-image: url(${props => props.$bannerImage});
    background-repeat: no-repeat;
    min-height: 328px;
    width: 100%;
    position: relative;
    border-radius: 20px;
    background-size: cover;
`;

const StyledBannerTitle = styled.h1`
    position: absolute;
    top: 50%;
    left: 60px;
    transform: translateY(-50%);
    color: #FFF;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: block;
    width: 301px;
`;

const Banner = ({image, text}) => {
    return(
        <StyledBanner $bannerImage={image}>
            <StyledBannerTitle>{text}</StyledBannerTitle>
        </StyledBanner>
    )
}

export default Banner;