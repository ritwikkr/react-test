import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px;
  > .search {
    margin-bottom: 10px;
    > .title {
      margin-bottom: 5px;
    }
    > .search-bar {
      margin-bottom: 10px;
      > input {
        border: none;
        outline: none;
        width: 100%;
        border-bottom: 2px solid black;
      }
    }
  }
`;

export default Wrapper;
