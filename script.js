document.getElementById('fetchArtistData').addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            try {
                const data = JSON.parse(this.responseText);
                displayArtistInfo(data);
            } catch (error) {
                console.error('Error parsing the API response:', error);
            }
        }
    });

    // Michael Jackson's Deezer ID is 259
    xhr.open('GET', 'https://deezerdevs-deezer.p.rapidapi.com/artist/259');
    xhr.setRequestHeader('x-rapidapi-key', 'ec3278b720msh09f7875cfb18ffdp17a501jsnf9050a07e63c');
    xhr.setRequestHeader('x-rapidapi-host', 'deezerdevs-deezer.p.rapidapi.com');

    xhr.send(null);
});

function displayArtistInfo(data) {
    document.getElementById('artistName').textContent = data.name;
    document.getElementById('artistPicture').src = data.picture_big;
    document.getElementById('artistFans').textContent = data.nb_fan.toLocaleString(); // Format number with commas
    const artistLink = document.getElementById('artistLink');
    artistLink.href = data.link;
    artistLink.textContent = 'Visit Deezer Profile';
}
