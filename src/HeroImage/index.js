export function HeroImage({ hero }) {
  const css = {
    height: "100px",
    border: "3px solid red",
  };

  return (
    <div>
      <img src={hero.image.url} alt={hero.name} style={css} />
    </div>
  );
}
