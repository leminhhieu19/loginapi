import styled from "styled-components";

const StyledHeader = styled.div`
.header {
    overflow: hidden;
    background-color: #f1f1f1;
    padding: 20px 10px;
  }
  
  .header a {
    float: left;
    color: black;
    text-align: center;
    padding: 12px;
    text-decoration: none;
    font-size: 18px;
    line-height: 25px;
    border-radius: 4px;
  }
  
  .header a.logo {
    font-size: 25px;
    font-weight: bold;
  }
  
  .header a:hover {
    background-color: #ddd;
    color: black;
  }
  .header a.active {
    background-color: dodgerblue;
    color: white;
  }
  
  .header-right {
    float: right;
  }
  
  @media screen and (max-width: 500px) {
    .header a {
      float: none;
      display: block;
      text-align: left;
    }
    .header-right {
      float: none;
    }
  }
`;

export default StyledHeader;