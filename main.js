//Application name	port
//API key	566a28cd486504e88a577cdb0b1897e4
//Shared secret	bd7f8dd413026e021299346a4b713b83
//Registered to	mdio_

const username = "mdio_";
const apiKey = "566a28cd486504e88a577cdb0b1897e4";

const lastHeard = document.getElementById("lastHeard");
const albumImg = document.getElementById("albumImg") 

fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=1`)
  .then(res => res.json())
  .then(data => {
    const track = data.recenttracks.track[0];
    const albumImage = track.image.find(img => img.size === "medium")["#text"];
    console.log("Última música:", track.name);
    console.log("Artista:", track.artist["#text"]);
    console.log("Album:", track.album["#text"]);
    console.log("Tocando agora?", track["@attr"]?.nowplaying === "true" ? "Sim" : "Não");
    lastHeard.textContent = `Último scrobble: ${track.name}`;
    albumImg.style.backgroundImage = `url(${albumImage})`;
  })
  .catch(err => console.error(err));

  

  