import React from "react";
import styled from "styled-components";

let Button = styled.button`
  background-color: blue;
  color: white;
  border-radius: 5px;
  width: 100px;
    height: 50px;
}
`;

let NewButton = styled(Button)`
  box-shadow: 5px 3px 5px black;
`;
let user = "Sathish";

function printsomethink(e) {
  //   console.log(e.target.innerText);
  //   console.log("hollow");
  user = "Rajan";
  console.log(user);
}

function printsomethink1(event) {
  console.log(event.target.innerText);
  console.log("Welcome");
}

const Content = () => {
  let headingstyle = {
    backgroundColor: "red",
    color: "white",
    boxShadow: "10px 10px 5px black",
  };

  return (
    <main>
      <p style={headingstyle}>Main Content -{user}</p>
      <Button onClick={printsomethink}>click me</Button>
      <NewButton
        onClick={(e) => {
          printsomethink1(e);
        }}
      >
        Dublicate{" "}
      </NewButton>
    </main>
  );
};

export default Content;
