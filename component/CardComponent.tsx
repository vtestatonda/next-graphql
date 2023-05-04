export const CardComponent = ({ character }) => {
  if (!character) {
    return <h4>CHANGE TO TEST VERCEL</h4>;
  }
  return (
    <a className={"card"}>
      <img src={character.image} style={{ width: "100%" }} />
      <h2>{character.name}</h2>
      <p>{character.species}</p>
    </a>
  );
};
