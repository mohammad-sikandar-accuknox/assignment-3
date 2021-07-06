import React from "react";
import Card from "@material-ui/core/Card";
import { Typography } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";

function TrelloCard(props) {
  const { text, handleDragStart, handleDragEnd } = props;
  return (
    <Card
      style={styles.cardContainer}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <CardContent>
        <Typography gutterBottom>{text}</Typography>
      </CardContent>
    </Card>
  );
}

const styles = {
  cardContainer: {
    marginBottom: 8,
  },
};
export default TrelloCard;
