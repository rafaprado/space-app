import styled from "styled-components";

const GalleryCard = styled.figure`
    display: flex;
    flex-direction: column;
    margin: 0;
    width: ${props => props.$expanded ? '100%' : '460px'};
    max-width: 100%;
`;

const CardImage = styled.img`
    max-width: 100%;
    border-radius: 20px 20px 0 0;
`;

const CardCaption = styled.figcaption`
    box-sizing: border-box;
    display: block;
    width: 100%;
    border-radius: 0 0 20px 20px;
    background-color: #001634;
    padding: 16px;
`;

const CardTitle = styled.h3`
    color: #FFF;
    font-family: "GandhiSans-Bold";
    font-size: 20px;
    margin: 0;
`;

const CardFooter = styled.footer`
    display: flex;
    gap: 24px;
`;

const ImagePath = styled.h3`
    color: #FFF;
    font-size: 16px;
    flex: 1;
`;

const CardButton = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    width: 24px;
    height: 24px;
`;


const Image = ({photo, onZoom, expanded = false, onToggleFavorite}) => {
    const favoriteIcon = photo.favorite ? "/icons/favorito-ativo.png" : "/icons/favorito.png";

    return(
        <GalleryCard $expanded={expanded}>
            <CardImage src={photo.path} alt="" />
            <CardCaption>
                <CardTitle>{photo.titulo}</CardTitle>
                <CardFooter>
                    <ImagePath>{photo.fonte}</ImagePath>
                    <CardButton onClick={_ => onToggleFavorite(photo)}>
                        <img src={favoriteIcon} alt="" />
                    </CardButton>
                    {!expanded && <CardButton onClick={() => onZoom(photo)}>
                        <img src="/icons/expandir.png" alt="" />
                    </CardButton>}
                </CardFooter>
            </CardCaption>
        </GalleryCard>
    )
}

export default Image;