import TrelloList from "./TrelloList";
import { connect } from "react-redux";
import TrelloActionButton from "./TrelloActionButton";


function App(props) {
  const { lists } = props;
  console.log(lists);
  return (
    <>
      <h2>Trello Copy</h2>
      <div style={styles.listContainer}>
        {lists.map((list) => (
          <TrelloList
            title={list.title}
            key={list.id}
            cards={list.cards}
            listId={list.id}
          />
        ))}
        <TrelloActionButton list />
      </div>
    </>
  );
}

const styles = {
  listContainer: {
    display: "flex",
    flexDirection: "row",
  },
};
const mapStateToProps = (state) => ({
  lists: state.list,
});
export default connect(mapStateToProps)(App);
