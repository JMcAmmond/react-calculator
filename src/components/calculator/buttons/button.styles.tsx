import styled from "styled-components";

export const ButtonGrid = styled.div`
  height: 400px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 1px;
  grid-template-areas:
    'clear delete divide multiple'
    'seven eight nine subtract'
    'four five six add'
    'one two three equals'
    'zero zero dot equals';
`;

export const CalculatorButton = styled.button<{ area: string }>`
  grid-area: ${({ area }) => area};
  height: 100%;
  width: 100%;
  cursor: pointer;
  border: none;
  background-color: #263650;
  color: #cbedf6;

  &:hover {
    background-color: #304362;
  }

  &.modifier:not(.dot) {
    background-color: #1c7f92;

    &:hover {
      background-color: #176c7c;
    }

    &.equals {
      background-color: #e58121;

      &:hover {
        background-color: #ca6c12;
      }
    }
  }

`;