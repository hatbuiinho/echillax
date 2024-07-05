import styled from "styled-components";

interface OutlinedLetterProps {
  innerStrokeColor: string;
  innerStrokeWidth?: number;
  outterStroke?: string;
  fontSize?: number;
  fontWeight?: number;
  color?: string;
}

const OutlinedLetter = styled.p<OutlinedLetterProps>`
  font-size: ${({ fontSize }) => fontSize};
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight ?? 600};
  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  color: ${({ color }) => color};
  text-shadow: ${({ innerStrokeColor, innerStrokeWidth }) =>
    "-" +
    innerStrokeWidth +
    "px -" +
    innerStrokeWidth +
    "px  0 " +
    innerStrokeColor +
    ", " +
    "0px -" +
    innerStrokeWidth +
    "px 0 " +
    innerStrokeColor +
    ", " +
    "" +
    innerStrokeWidth +
    "px -" +
    innerStrokeWidth +
    "px  0 " +
    innerStrokeColor +
    ", " +
    "" +
    innerStrokeWidth +
    "px 0px  0 " +
    innerStrokeColor +
    ", " +
    "" +
    innerStrokeWidth +
    "px " +
    innerStrokeWidth +
    "px  0 " +
    innerStrokeColor +
    ", " +
    "0px " +
    innerStrokeWidth +
    "px  0 " +
    innerStrokeColor +
    ", " +
    "-" +
    innerStrokeWidth +
    "px " +
    innerStrokeWidth +
    "px  0 " +
    innerStrokeColor +
    ", " +
    "-" +
    innerStrokeWidth +
    "px 0px  0 " +
    innerStrokeColor +
    ""};
  paint-order: stroke fill;
  -webkit-text-stroke: ${({ outterStroke }) => outterStroke};
`;

export default OutlinedLetter;
