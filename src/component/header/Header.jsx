import styled from "styled-components";

const Title = styled.div`
  width: 100%;
  height: auto;
  font-family: "Pretendard-bold";
  color: #503c3c;
  font-size: 30px;
  text-align: center;
`;

const Header = ({ children }) => {
  return (
    <>
      <Title>{children}</Title>
    </>
  );
};

export default Header;
