import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header/Header";

const GradientBackgorund = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100vw;
  min-height: 100vh;
`;

function App() {

  return (
    <>
     <GradientBackgorund>
        <GlobalStyles />
        <Header>
        </Header>
     </GradientBackgorund>
    </>
  )
}

export default App
