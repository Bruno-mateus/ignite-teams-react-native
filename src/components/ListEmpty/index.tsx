import { ContainerListEmpty, Message } from "./styles";
type Props = {
  message: string;
};

export function ListEmpty({ message }: Props) {
  return (
    <ContainerListEmpty>
      <Message>{message}</Message>
    </ContainerListEmpty>
  );
}
