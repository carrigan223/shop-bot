import styled from "styled-components";

const ChatbotContainer = styled.div`
  @media (min-width: 768px) {
    border: 2px solid black;
    border-radius: 10px;
    /* margin: 50px 20px; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    box-shadow: 2px 2px 25px black;
    width: 30vw;
    height: 70vh;
    margin-left: auto;
    background-color: white;
    padding: 0px 5px 5px 5px;
    /* background-color: black; */
    background: rgba(123, 239, 178, 0.3);
  }

  @media (max-width: 768px) {
    margin: 20px;

    text-align: center;
    width: 90vw;
    border: 0.5px solid lightgrey;
    margin-bottom: 30px;
  }
`;

const ShowChatContainer = styled.div`
  height: 80vh;
  position: fixed;
  bottom: 50px;
  right: 20px;
`;

const CloseButton = styled.button`
  margin-left: auto;
  color: lightgreen;
  background: none;
  border: none;
  padding: 10px;
  font-size: 1.5rem;

  :hover {
    cursor: pointer;
  }
`;

const ShowButton = styled.button`
  position: fixed;
  left: 90%;
  bottom: 20px;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  border: 2px solid black;
  padding: 1rem;
  border-radius: 100%;
  height: 10vh;
  width: 10vh;
  background-color: black;
  color: lightgreen;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Lobster";

  :hover {
    cursor: pointer;
  }
`;

const ChatbotInterface = styled.div`
  width: 100%;
  height: 80%;
  overflow: scroll;
  /* background: rgba(65, 62, 62, .9); */
  background: rgba(170, 250, 170, .4);

  border-radius: 30px;
  border: 2px solid black;

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
  margin-top: -20px;
  padding: 10px;
  background-color: black;
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

const ShowButtonContainer = styled.div`
  height: 80px;
  position: fixed;
  bottom: 0;
  left: 90px;
  right: 0;
`;

export {
  TextInput,
  ChatbotHeader,
  ChatbotInterface,
  ChatbotContainer,
  CardRow,
  ShowButton,
  ShowButtonContainer,
  ShowChatContainer,
  CloseButton,
};
