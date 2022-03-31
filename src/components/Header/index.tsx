import { FiUser, FiEdit } from "react-icons/fi";

import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <div className="logo">
          <span>Activity List</span>
          <FiEdit size={28} />
        </div>
        <div className="user">
          <FiUser size={28} />
          <div className="user-info">
            <h2>Ednardo Gomes</h2>
            <p>Bem-vindo(a) ao Activity List</p>
          </div>
        </div>
      </Content>
    </Container>
  );
}
