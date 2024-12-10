import styled from "styled-components";
import GloablStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  /* background-color: orange; */
  padding: 20px;
`;

function App() {
  return (
    <>
      <GloablStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">Hellow world</Heading>
            <div>
              <Heading as="h2">Check in and out</Heading>
              <Button
                variation="primary"
                size="medium"
                onClick={() => alert("alert")}>
                Check in.
              </Button>
              <Button
                variation="secondary"
                size="small"
                onClick={() => alert("alert")}>
                Check out
              </Button>
            </div>
          </Row>
          <Row>
            <Heading as="h3">Form</Heading>
            <form>
              <Input type="number" placeholder="No. of guests" />
              <Input type="number" placeholder="No. of guests" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
