import React from "react";

const styles = {
  scrollbar: {
    overflowY: "scroll",
    border: "1px solid black",
    height: "800px"
  }
};
const Scroll = props => {
  return <div style={styles.scrollbar}>{props.children}</div>;
};

export default Scroll;
