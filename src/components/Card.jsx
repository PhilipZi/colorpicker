import styled from "styled-components";
import Button from "./Button";

const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  height: 6rem;
  width: 6rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export default function Card({ color }) {
  return (
    <StyledCard backgroundColor={color}>
      <Button>{color}</Button>
    </StyledCard>
  );
}
