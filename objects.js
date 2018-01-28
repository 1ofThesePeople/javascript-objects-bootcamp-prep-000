var playlist = {Ryan: "She Won\'t Wait"}

function updatePlaylist(playlist, artist, song) {
  return Object.assign({}, playlist, {[artist]: [song]})
}
