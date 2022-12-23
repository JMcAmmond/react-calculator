import styled from "styled-components";

export const ScreenContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: #263650;
  color: #f6fbfe;
  display: flex;
  padding: 5px;
  overflow: auto;
  justify-content: flex-start;
  align-items: flex-end;
  flex-direction: column;
`;

export const History = styled.div`
  opacity: 0.3;
  font-size: 14px;
`;

export const Output = styled.div`
  font-size: 32px;
`;