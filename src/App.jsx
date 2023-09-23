import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header/Header";
import LateralMenu from "./components/LateralMenu";
import Banner from "./components/Banner";
import bannerBackground from './assets/foto-destaque.png'
import Gallery from "./components/Gallery";
import photos from "./fotos.json";
import { useEffect, useState } from "react";
import ZoomModal from "./components/ZoomModal";

const GradientBackgorund = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100vw;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const GalleryContent = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

function App() {

  const [photosFromGallery, setPhotosFromGallery] = useState(photos);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [filter, setFilter] = useState('');
  const [tag, setTag] = useState(0);

  const onToggleFavorite = photo => {
    if(photo.id === selectedPhoto?.id) {
      setSelectedPhoto({
        ...selectedPhoto,
        favorite: !selectedPhoto.favorite
      })
    }

    setPhotosFromGallery(photosFromGallery.map(photoFromGallery => {
      return {
        ...photoFromGallery,
        favorite: photo.id === photoFromGallery.id ? !photo.favorite : photoFromGallery.favorite
      }
    }));
  }

  useEffect(() => {
    const filteredPhotos = photos.filter(photo => {
      const filterByTag = !tag || photo.tagId === tag;
      const filterByTitle = !filter || photo.titulo.toLowerCase().includes(filter.toLocaleLowerCase());

      return filterByTag && filterByTitle;
    });

    setPhotosFromGallery(filteredPhotos);

  },[filter, tag]);

  return (
    <>
     <GradientBackgorund>
        <GlobalStyles />
        <AppContainer>
          <Header filter={filter} setFilter={setFilter}/>
          <MainContainer>
            <LateralMenu />
            <GalleryContent>
              <Banner 
                text="A galeria mais completa de fotos do espaço!"
                image={bannerBackground}
              />
              <Gallery setTag={setTag} onToggleFavorite={onToggleFavorite} onSelectedPhoto={photo => setSelectedPhoto(photo)} photos={photosFromGallery} />
            </GalleryContent>
          </MainContainer>
        </AppContainer>
        <ZoomModal onToggleFavorite={onToggleFavorite} onCloseImage={() => setSelectedPhoto(null)} photo={selectedPhoto} />        
     </GradientBackgorund>
    </>
  )
}

export default App
