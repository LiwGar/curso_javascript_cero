// Metodos que modifican el array original (Mutabilidad)

// Ejemplo1
const arrayNumbers = [4, 18, 1, 62, 34, 8, 10, 65];

const newArrayNumbers = arrayNumbers.unshift(27, 78, 19);

console.log(arrayNumbers);
console.log(newArrayNumbers);

const removeArrayNumber = arrayNumbers.shift();

console.log(arrayNumbers);
console.log(removeArrayNumber);

// Ejemplo2
const colors = ['yellow','blue','red'];

const removedColors=colors.shift();

console.log(colors);
console.log(removedColors);

const newColors = colors.unshift('pink','purple');

console.log(colors);
console.log(newColors);



// Ejercicio Playlist

function managePlaylist(playlist, newSong) {
    playlist.shift();
    playlist.unshift(newSong);
    return playlist;
};

const initialPlaylist = ['Sweater Weather','What you know','Eventually'];

const newSongToAdd = 'The Adults Are Talking';

const updatedPlaylist = managePlaylist(initialPlaylist,newSongToAdd);

console.log('Initial playlist: ', initialPlaylist);
console.log('New song to add: ', newSongToAdd);
console.log('Updated playlist: ', updatedPlaylist); 