import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <Container>
      <Title> === StyledComponents ===</Title>
      <Button>FIGTH</Button>
    </Container>
  );
};

const Container = styled.div`
  border: solid 2px #392eff;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  display: flex;
  justify-content: space-around;
  alignitems: center;
`;

const Title = styled.p`
  margin: 0;
  color: #3d84a8;
`;

const Button = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 10px;
  border-radius: 10px;
  &:hover {
    background-color: pink;
    color: white;
    cursor: pointer;
  }
`;
