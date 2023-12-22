import styled from "styled-components";

const HelloWorld = styled.div`
  color: ${(p) => p.theme.colors.main};
`;

function App() {
  return (
    <>
      <HelloWorld>Hello World!</HelloWorld>
    </>
  );
}

export default App;
