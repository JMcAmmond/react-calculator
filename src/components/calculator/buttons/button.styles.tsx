import styled from "styled-components";

export const ButtonGrid = styled.div`
  height: 400px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 5px;
  grid-template-areas:
    'seven eight nine clear'
    'four five six divide'
    'one two three multiple'
    'dot zero subtract add'
    'equals equals equals equals';
`;

export const CalculatorButton = styled.button<{ area: string }>`
  grid-area: ${({ area }) => area};
  height: 100%;
  width: 100%;
  color: #000000;
  cursor: pointer;

  &.equals {
    background-color: #c9cdff;
    border: 1px solid #676b9b;
  }
`;