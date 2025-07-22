export default function CharacterListMock({ data, callback }: any) {
  return (
    <div>
      {data && data.map((char: any) => (
        <div key={char.id}>{char.name}</div>
      ))}
      <button onClick={() => callback({ id: 1, name: 'Rick' })}>Select Character</button>
    </div>
  );
}
