import { useFormik } from 'formik';
import { v4 as uuid } from 'uuid';
import DocumentHead from '../../components/documentHead';

function StartNewGame() {
  const formik = useFormik({
    initialValues: {
      player1: '',
      player2: '',
    },
    onSubmit: ({ player1, player2 }) => {
      const id = uuid().substr(0, 8);
      const newGame = {
        player1,
        player2,
        score: [0, 0],
      };
      window.localStorage.setItem(id, JSON.stringify(newGame));
    },
  });

  return (
    <>
      <DocumentHead title="New game" />
      <h1>Start New Game</h1>
      <form onSubmit={formik.handleSubmit}>
       <label htmlFor="player1">Name Player 1</label>
       <input
         id="player1"
         name="player1"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.player1}
       />
       <label htmlFor="player1">Name Player 2</label>
       <input
         id="player2"
         name="player2"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.player2}
       />
       <button type="submit">Start</button>
     </form>
    </>
  );
}

export default StartNewGame
