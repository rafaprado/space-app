import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header/Header";
import LateralMenu from "./components/LateralMenu";
import Banner from "./components/Banner";
import bannerBackground from './assets/foto-destaque.png'
import Gallery from "./components/Gallery";

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

  return (
    <>
     <GradientBackgorund>
        <GlobalStyles />
        <AppContainer>
          <Header />
          <MainContainer>
            <LateralMenu />
            <GalleryContent>
              <Banner 
                text="A galeria mais completa de fotos do espaço!"
                image={bannerBackground}
              />
              <Gallery />
            </GalleryContent>
          </MainContainer>
        </AppContainer>
     </GradientBackgorund>
    </>
  )
}

export default App
