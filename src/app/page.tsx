export default function Home() {
  const data = ["id", "name", "age"];
  return (
    <div>
      <h4 className="title">Apple Fresh</h4>
      {data.map((a) => {
        return (
          <div className="" key={a}>
            <h4>{a}</h4>
          </div>
        );
      })}
    </div>
  );
}
