const url = "http://rallycoding.herokuapp.com/api/music_albums"

export function getMusicAlbums(){

    return fetch(url).then((response) => {
        return response.json()

    }).then((result) => {
        //console.log(result)
        return result
    })
}
