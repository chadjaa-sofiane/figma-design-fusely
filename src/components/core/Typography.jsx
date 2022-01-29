import styled from "styled-components";

// h1,h2,h3,h4,h5,h6{
//     font-family: "Playfair Display";
// }
const TitlesCommonStyle = styled.h1`
  font-family: "Playfair Display";
  color: ${({ theme }) => theme.colors.titleColor};
`;

export const Title1 = styled(TitlesCommonStyle)`
  line-height: 1em;
  font-size: ${({ theme }) => theme.fontSizes["xxl"]};
`;

export const Title2 = styled(TitlesCommonStyle).attrs({ as: "h2" })`
  font-size: ${({ theme }) => theme.fontSizes["xl"]};
`;
export const Title3 = styled(TitlesCommonStyle).attrs({ as: "h3" })`
  font-size: ${({ theme }) => theme.fontSizes["lg"]};
`;
export const Title4 = styled(TitlesCommonStyle).attrs({ as: "h4" })`
  font-size: ${({ theme }) => theme.fontSizes["md"]};
`;
export const Title5 = styled(TitlesCommonStyle).attrs({ as: "h5" })`
  font-size: ${({ theme }) => theme.fontSizes["sm"]};
`;
export const Title6 = styled(TitlesCommonStyle).attrs({ as: "h6" })`
  font-size: ${({ theme }) => theme.fontSizes["xs"]};
`;

const PTypes = ["body_lg", "body_md", "body_sm"];

export const Paragraphe = styled.p`
  color: ${({ theme }) => theme.colors.neutral["300"]};
  font-size: ${({ type, theme }) =>
    PTypes.includes(type) ? theme.fontSizes[type] : theme.fontSizes["body_md"]};
`;

export const ParagrapheTitle = styled(Paragraphe).attrs({ type: "body_md" })`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.neutral["500"]};
`;
