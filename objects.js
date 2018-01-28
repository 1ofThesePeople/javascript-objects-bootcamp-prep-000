var playlist = {Ryan: "She Won\'t Wait"}

function updatePlaylist(playlist, artist, song) {
  var addition = {artist: song}
  return Object.assign({}, playlist, addition)
}