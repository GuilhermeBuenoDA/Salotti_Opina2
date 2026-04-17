async function carregarUsuarios() {
    try {
        const res = await fetch("http://localhost:3000/me", {
            credentials: "include"
        })

        const data = await res.json()

        if (!res.ok) {
            throw new Error(data.message)
        }

        document.getElementById("nome").textContent = `${data.nome}`;
    } catch (error) {
        console.log(error)
    }
}
window.addEventListener("DOMContentLoaded", carregarUsuarios);