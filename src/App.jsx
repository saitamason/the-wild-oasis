import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles.js";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: orangered;
`;

const StyledApp = styled.div`
  background: green;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>Hello world!</H1>
      </StyledApp>
    </>
  );
}

export default App;
