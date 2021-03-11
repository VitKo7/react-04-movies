import styled from 'styled-components';

export const MoviesContainer = styled.nav`
  height: 20px;
  padding: 10px 20px;

  .titleContainer {
    display: flex;
    margin-bottom: 20px;
  }

  .btnBack {
    margin-left: 10px;
    margin-right: 40px;
    padding: 5px 15px;
    border-radius: 5px;
    font-weight: 700;
    color: #fff;
    background: cornflowerblue;
  }
  .navLink {
    text-decoration: none;
    margin: 0 10px;
  }

  .activeNavLink {
    color: red;
    text-decoration: underline;
  }

  .movieContainer {
    display: flex;
    margin-bottom: 20px;
  }

  .movieImg {
    max-width: 160px;
    /* height: 100%; */
    border-radius: 5px;
    margin-right: 10px;
    margin-top: 10px;
  }

  .movieInfo {
    margin-left: 20px;
  }

  .addInfo {
    padding: 10px 5px 1px 10px;
    /* background: cornflowerblue; */
    /* border-bottom: 1px dashed cornflowerblue; */
    margin-bottom: 10px;
  }
`;
