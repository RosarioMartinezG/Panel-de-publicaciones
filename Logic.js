function publicar() {
    const textarea = document.querySelector("textarea");
    const publicaciones = document.getElementById("publicaciones");
    
    if (textarea.value.trim() === "") {
        alert("No puedes publicar un mensaje vacío.");
        return;
    }
    
    const publicacion = document.createElement("div");
    publicacion.classList.add("publicacion");
    publicacion.innerHTML = `
        <div class="usuario">
            <div class="avatar"></div>
            <span>Usuario</span>
        </div>
        <p>${textarea.value}</p>
        <div class="acciones">
            <button class="like" onclick="reaccionar(this, 'like')">👍 Me gusta</button>
            <button class="dislike" onclick="reaccionar(this, 'dislike')">👎 No me gusta</button>
        </div>
    `;
    
    publicaciones.prepend(publicacion);
    textarea.value = "";
}

function reaccionar(boton, tipo) {
    if (tipo === 'like') {
        boton.classList.toggle("liked");
    } else if (tipo === 'dislike') {
        boton.classList.toggle("disliked");
    }
}
