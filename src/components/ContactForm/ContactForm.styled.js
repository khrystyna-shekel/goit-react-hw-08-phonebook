import styled from 'styled-components';

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledForm = styled.form`
  border: 2px solid rgb(161, 161, 218);
  border-radius: 10px;
  padding: 15px 10px;
  box-shadow: 1px 2px 4px rgb(161, 161, 218);
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: auto;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 700;
  font-size: 20px;
  color: rgb(161, 161, 218);
`;

export const StyledInput = styled.input`
  width: auto;
  height: 24px;
  font-weight: 600;
  font-size: 18px;
  color: rgb(139, 139, 187);
  border: 2px solid rgb(139, 139, 187);
  border-radius: 4px;
  transition: all 0.3s ease;

  &:focus {
    border-color: lavenderblush;
    box-shadow: 1px 2px 4px lavender;
    border-radius: 4px;
    outline: none;
  }

  &::placeholder {
    color: rgb(139, 139, 187);
  }
`;

export const StyledBtn = styled.button`
  cursor: pointer;
  border: none;

  font-size: 16px;

  width: 140px;
  height: 30px;
  padding: 4px 6px;
  border-radius: 5px;
  box-shadow: 1px 2px 4px rgb(204, 203, 203);

  font-weight: 700;
  background-color: lavenderblush;
  color: rgb(139, 139, 187);
  transition: all 0.3s ease;

  &:hover {
    background-color: rgb(161, 161, 218);
    color: lavender;
    scale: 1.1;
  }
`;
