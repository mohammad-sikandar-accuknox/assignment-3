import React from "react";
import TrelloCard from "./TrelloCard";
import TrelloActionButton from "./TrelloActionButton";
import { connect } from "react-redux";
import { updatingCard } from "../actions/CardActions";

function TrelloList({ title, cards, listId, dispatch }) {
  console.log(cards);

  const handleDragStart = (e, cardId, listId) => {
    console.log("drag start", cardId);
    e.dataTransfer.setData("cardId", cardId);
    e.dataTransfer.setData("listId", listId);
    console.log(cardId, listId);
    setTimeout(() => {
      e.target.style.visibility = "hidden";
    }, 1);
  };
  const handleDragEnd = (e, id) => {
    setTimeout(() => {
      e.target.style.visibility = "visible";
    }, 1);
  };
  const handleAllowDrop = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    var oldcardid = e.dataTransfer.getData("cardId");
    var oldlistid = e.dataTransfer.getData("listId");
    if (e.target.id !== oldlistid) {
      updateCard(oldcardid, oldlistid, e.target.id);
    }
  };
  const updateCard = (cid, lid, tlist) => {
    console.log("delete card", cid);
    console.log(lid, tlist);
    dispatch(updatingCard({ cid, lid, tlist }));
  };
  return (
    <div
      style={styles.container}
      onDragOver={handleAllowDrop}
      onDrop={handleDrop}
      id={`${listId}`}
    >
      {title}
      {cards.map((card) => (
        <TrelloCard
          text={card.text}
          key={card.id}
          handleDragStart={(e) => handleDragStart(e, card.id, listId)}
          handleDragEnd={(e) => handleDragEnd(e, card.id)}
          id={`${listId}`}
        />
      ))}

      <TrelloActionButton listId={listId} />
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#dfe3e6",
    borderRadius: 3,
    width: 300,
    padding: 10,
    marginRight: 8,
    height: "100%",
  },
};
export default connect()(TrelloList);
