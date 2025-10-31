
const username = "mdio_";
const apiKey = "566a28cd486504e88a577cdb0b1897e4";

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

fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=1`)
  .then(res => res.json())
  .then(data => {
    const track = data.recenttracks.track[0];
    const albumImage = track.image.find(img => img.size === "medium")["#text"];
    console.log("Última música:", track.name);
    console.log("Artista:", track.artist["#text"]);
    console.log("Album:", track.album["#text"]);
    console.log("Tocando agora?", track["@attr"]?.nowplaying === "true" ? "Sim" : "Não");
    lastHeard.textContent = `Último scrobble: ${track.name} - ${track.artist["#text"]}`;
    albumImg.style.backgroundImage = `url(${albumImage})`;
  })
  .catch(err => console.error(err));




  const namespace = "emidioVisitas";
    const name = "visitas";

    const registrarVisita = async () => {
      try {
        
        const res = await fetch(`https://api.counterapi.dev/v1/${namespace}/${name}/up`);
        const data = await res.json();

        
        console.log(`Total de visitas: ${data.value}`);
      } catch (err) {
        console.error("Erro ao registrar visita:", err);
      }
    };

    registrarVisita();
  

  