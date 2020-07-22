import styled from "styled-components";

const StyledLoginRegister = styled.div`
*{
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;

  }
  .wrapper{
    max-width: 500px;
    width: 100%;
    background: #fff;
    margin: 20px auto;
    box-shadow: 1px 1px 2px rgba(0,0,0,0.125);
    padding: 30px;
  }
  
  .wrapper .title{
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 25px;
    color:black;
    text-transform: uppercase;
    text-align: center;
  }

  .recommend{
    font-size: 15px;
    margin-bottom: 25px;
    color:black;
    text-align: center;
  }
  
  .wrapper .form .inputfield{
    margin-bottom: 15px;
    display: flex;
    align-items: center;
  }
  
  .wrapper  label{
     width: 200px;
     color: #757575;
     margin-right: 10px;
    font-size: 14px;
  }
  
  .wrapper .form .inputfield .input,
  .wrapper .form .inputfield .textarea{
    width: 100%;
    outline: none;
    border: 1px solid #d5dbd9;
    font-size: 15px;
    padding: 8px 10px;
    border-radius: 3px;
    transition: all 0.3s ease;
  }
  
   .btn{
    width: 100%;
     padding: 8px 10px;
    font-size: 15px; 
    border: 0px;
    background:  black;
    color: #fff;
    cursor: pointer;
    border-radius: 3px;
    outline: none;
  }
  
  .btn:hover{
    background:  grey;
  }

  .forgot a {
    float: right;
    color: black;
    text-align: center;
    text-decoration: none;
    font-size: 12px;
    line-height: 25px;
    border-radius: 4px;
  }
  a:hover{
    color:  red;
  }
`;

export default StyledLoginRegister;
