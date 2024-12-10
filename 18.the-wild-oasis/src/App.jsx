import styled from "styled-components";
import GloablStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

const StyledApp = styled.div`
  background-color: orange;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GloablStyles />
      <StyledApp>
        <H1>Hellow world</H1>
        <Button onClick={() => alert("alert")}>Check in.</Button>
        <Button onClick={() => alert("alert")}>Check out</Button>
        <Input type="number" placeholder="No. of guests" />
      </StyledApp>
    </>
  );
}

export default App;
