import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import styled from 'styled-components';

export const Loader = () => {
  return (
    <StyledWrapper>
      <div>
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color=" #b1b1cc"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        <h2>Auth in progress...</h2>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & h2 {
    margin-top: 10px;
    color: #b1b1cc;
  }
`;
