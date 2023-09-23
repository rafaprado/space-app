import styled from 'styled-components';
import Title from '../Title';
import Tags from './Tags';
import Popular from './Popular';
import Image from './image';

const GalleryContainer = styled.div`
    display: flex;
`;

const FluidSection = styled.section`
    flex-grow: 1;
`;

const ImagesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
`;

const Gallery = ({ photos = [], onSelectedPhoto, onToggleFavorite, setTag}) => {
    return (
        <>
            <Tags setTag={setTag}/>
            <GalleryContainer>
                <FluidSection>
                    <Title>Search in the gallery</Title>

                    <ImagesContainer>
                        {photos.map(photo => <Image onToggleFavorite={onToggleFavorite} key={photo.id} photo={photo} onZoom={onSelectedPhoto} />)}
                    </ImagesContainer>
                </FluidSection>
                
                <Popular />

            </GalleryContainer>
        </>
    );
};

export default Gallery;