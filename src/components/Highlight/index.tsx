import { ContainerHighlight, Subtitle, Title } from "./styles";

type HighlightProps = {
  title: string;
  subtitle: string;
};

export function Highlight({ title, subtitle }: HighlightProps) {
  return (
    <ContainerHighlight>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </ContainerHighlight>
  );
}
