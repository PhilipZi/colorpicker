import style from "styled-components";

const StyledButton = style.button`
    border: 2px solid black;
    border-radius: 7px;


`;

export default function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}
