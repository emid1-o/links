
const username = "mdio_";
//nao vou fazer um backend so pra isso, roube essa api se quiser
const nada = "c0fd96bd4eedb15646e559594a313257";

const lastHeard = document.getElementById("lastHeard");
const albumImg = document.getElementById("albumImg") 



document.addEventListener('DOMContentLoaded', () => {
    
    
    const musicaDiv = document.getElementById('musicHeader');

    
    const delayEmMs = 2000; 

    
    setTimeout(() => {
        
        if (musicaDiv) {
            musicaDiv.style.opacity = '1';
        }
    
  
    }, delayEmMs);

});

fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${nada}&format=json&limit=1`)
  .then(res => res.json())
  .then(data => {
    const track = data.recenttracks.track[0];
    const albumImage = track.image.find(img => img.size === "medium")["#text"];
    lastHeard.textContent = `Último scrobble: ${track.name} - ${track.artist["#text"]}`;
    albumImg.style.backgroundImage = `url(${albumImage})`;
  })
  .catch(err => console.error(err));




    

  