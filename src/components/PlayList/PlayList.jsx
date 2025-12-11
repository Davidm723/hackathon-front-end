const PlayList = (props) => {
  return (
    <main>
      {props.songs.map((song) => (
        <p key={song._id}>{song.title}</p>
      ))}
    </main>
  );
};

export default PlayList;
