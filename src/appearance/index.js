export function Appearance({ appearance }) {
  return (
    <ul>
      {Object.entries(appearance).map((entry) => {
        return (
          <li>
            {entry[0]} = {entry[1]}
          </li>
        );
      })}
    </ul>
  );
}
