import { Icon, Button } from "@material-ui/core";
import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import TextArea from "react-textarea-autosize";
import { connect } from "react-redux";
import { addList } from "../actions/ListActions";
import { addCard } from "../actions/CardActions";

function TrelloActionButton(props) {
  console.log(props.listId);
  const [formOpen, setFormOpen] = useState(false);
  const [text, setText] = useState("");
  const openForm = () => {
    setFormOpen(true);
  };
  const closeForm = () => {
    setFormOpen(false);
  };
  const handleInputChange = (e) => {
    setText(e.target.value);
  };
  const handleAddList = () => {
    const { dispatch } = props;
    if (text) {
      dispatch(addList({ title: text }));
    }
    setText("");
  };
  const handleAddCard = () => {
    const { dispatch } = props;
    if (text) {
      dispatch(addCard({ text, listId: props.listId }));
    }
    setText("");
  };
  const renderAddButton = () => {
    const buttonText = props.list ? "Add another list" : "Add another card";
    const buttonTextOpacity = props.list ? 1 : 0.5;
    const buttonTextColor = props.list ? "white" : "inherit";
    const buttonTextBackground = props.list ? "rgba(0,0,0,.15)" : "inherit";
    const buttonMarginTop = props.list ? null : "70px";

    return (
      <div
        onClick={openForm}
        style={{
          ...styles.openForButtonGroup,
          opacity: buttonTextOpacity,
          color: buttonTextColor,
          backgroundColor: buttonTextBackground,
          marginTop: buttonMarginTop,
        }}
      >
        <Icon>add</Icon>
        <p>{buttonText}</p>
      </div>
    );
  };
  const renderForm = () => {
    const placeholder = props.list
      ? "Enter list title..."
      : "Enter a title for this card...";
    const buttonTitle = props.list ? "Add list" : "Add card";
    return (
      <div>
        <Card
          style={{
            minHeight: 85,
            minWidth: 272,
            padding: "6px 8px 2px",
          }}
        >
          <TextArea
            placeholder={placeholder}
            autoFocus
            onBlur={closeForm}
            value={text}
            onChange={handleInputChange}
            style={{
              resize: "none",
              width: "100%",
              outline: "none",
              border: "none",
              overflow: "hidden",
            }}
          />
        </Card>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 8,
          }}
        >
          <Button
            onMouseDown={props.list ? handleAddList : handleAddCard}
            variant="contained"
            style={{ color: "white", backgroundColor: "#5aac44" }}
          >
            {buttonTitle}
          </Button>
          <Icon style={{ marginLeft: 8, cursor: "pointer" }}>close</Icon>
        </div>
      </div>
    );
  };
  return formOpen ? renderForm() : renderAddButton();
}

const styles = {
  openForButtonGroup: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 3,
    height: 36,
    width: 272,
    paddingLeft: 8,
  },
};
export default connect()(TrelloActionButton);
