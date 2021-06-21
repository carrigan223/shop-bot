import styled from "styled-components";

const ChatbotContainer = styled.div`
  @media (min-width: 768px) {
    border: 2px solid lightgreen;
    border-radius: 10px;
    margin: 50px 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    box-shadow: 2px 2px 25px black;
    width: 30vw;
    margin-left: auto;
    background-color: white;
    padding: 0px 5px 5px 5px;
    background-color: black;
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
  height: 50vh;
  overflow: scroll;
  background: rgb(65, 62, 62);
  border-radius: 30px;
  border: 2px solid white;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const ChatbotHeader = styled.h2`
  font-family: "Lobster";
  font-size: 2rem;
  color: lightgreen;
  border: 2px solid white;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  background-color: darkgreen;
  border-radius: 30px;
`;

const TextInput = styled.input`
  border-radius: 30px;
  border: 2px solid black;
  padding: 10px;
  margin: 10px 0px;
  width: 75%;
  height: 15px;
  font-size: 1rem;
`;

const CardRow = styled.div`
  display: flex;
  overflow: scroll;
  margin-bottom: 10px;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export {
  TextInput,
  ChatbotHeader,
  ChatbotInterface,
  ChatbotContainer,
  CardRow,
};
