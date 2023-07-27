import styled from "styled-components";

const Wrapper = styled.div`
  border-top: px solid gray;
  border-bottom: 1px solid gray;
  padding: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  > .body {
    display: flex;
    align-items: center;
    > .image {
      width: 100px;
      height: 100px;
      margin-right: 20px;
      > img {
        object-fit: contain;
        width: 100%;
        height: 100%;
      }
    }
    > .content {
      > .title,
      > .order-id {
        font-weight: bold;
      }
      > .order-id {
        margin-bottom: 10px;
      }
      > .message {
        color: gray;
        font-size: 15px;
      }
    }
  }
  > .date {
    color: gray;
    font-size: 15px;
    font-weight: bold;
  }
`;

export default Wrapper;
