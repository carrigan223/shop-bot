import styled from "styled-components";

const ChatbotContainer = styled.div`
  @media (min-width: 768px) {
    border: 0.5px solid lightgrey;
    border-radius: 10px;
    margin: 50px 20px 25px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    box-shadow: 2px 2px 25px grey;
    width: 50vw;
    margin-left: auto;
    /* overflow: scroll; */
    background-color: white;
    padding: 10px;
  }

  @media (max-width: 768px) {
    margin: 20px;
    text-align: center;
    width: 90vw;
    border: 0.5px solid lightgrey;
    margin-bottom: 30px;
  }
`;

const ChatbotInterface = styled.div`
  width: 100%;
  height: 40vh;
  overflow: scroll;
`;

const ChatbotHeader = styled.h2`
  font-family: "Lobster";
  font-size: 2rem;
  text-align: center;
  width: 100%;
`;

const TextInput = styled.input`
  border-radius: 15px 50px 30px;
  border: 2px solid black;
  padding: 20px;
  width: 75%;
  height: 15px;
  font-size: 1.25rem;
`;

export { TextInput, ChatbotHeader, ChatbotInterface, ChatbotContainer };
