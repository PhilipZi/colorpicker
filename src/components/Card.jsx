import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  height: 3rem;
  width: 3rem;
  background-color: red;
`;

export default function Card() {
  return <StyledCard></StyledCard>;
}
