import { useRouter } from 'next/router';

function Game() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>Game: {id}</h1>
    </>
  );
}

export default Game
