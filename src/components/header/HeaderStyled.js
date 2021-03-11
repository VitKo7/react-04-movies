import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: cornflowerblue;
  display: flex;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  /* border-bottom: 1px solid blue; */
  box-shadow: 0 2px 6px 2px rgba(50, 50, 255, 0.8);

  .navLink {
    text-decoration: none;
    margin: 20px 30px;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 500;
    color: white;
  }

  .activeNavLink {
    color: red;
  }
`;
