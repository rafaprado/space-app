import styled from "styled-components";
import Title from "../../Title";
import { OutlinedButton } from "../../Button";
import photos from "./popular-photos.json";

const PopularContainer = styled.section`
    width: 212px;
    flex-shrink: 0;
`;

const PopularList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const PopularItem = styled.div`
    width: 100%;
    height: 158px;

    & > img {
        width: 100%;
        height: 100%;
        border-radius: 20px;
    }
`;

const Popular = () => {
    return (
        <PopularContainer>
            <Title $align="center">Populares</Title>

            <PopularList>
                {photos.map(photo => {
                    return(
                        <PopularItem key={photo.id}>
                            <img src={photo.path} alt={photo.alt} />
                        </PopularItem>
                    )
                })}

                <OutlinedButton>Ver mais</OutlinedButton>
            </PopularList>
        </PopularContainer>
    );
}

export default Popular;