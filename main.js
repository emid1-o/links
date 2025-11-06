
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

//parte do form
document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); 

        const form = event.target;
        const statusMessage = document.getElementById('status-message');
        const submitButton = form.querySelector('button[type="submit"]');
        const data = new FormData(form);

        statusMessage.innerText = 'Enviando...';
        statusMessage.style.color = 'gray';
        submitButton.disabled = true;

        fetch(form.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                statusMessage.innerText = 'Mensagem enviada :)';
                statusMessage.style.color = 'white';
                form.reset();
            } else {
                response.json().then(data => {
                    
                    statusMessage.innerText = data.errors ? data.errors.map(error => error.message).join(', ') : 'Erro ao enviar. Tente novamente.';
                    statusMessage.style.color = 'red';
                });
            }
        }).catch(error => {
            console.log('FALHA...', error);
            statusMessage.innerText = 'Erro ao enviar. Tente novamente.';
            statusMessage.style.color = 'red';
        }).finally(() => {
            submitButton.disabled = false;
        });
    });

    
    document.getElementById('contact-form').action = "https://formspree.io/f/xpwovlqy";
    document.getElementById('contact-form').method = 'POST';




    

  