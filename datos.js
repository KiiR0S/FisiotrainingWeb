const form = document.getElementById("appointmentForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    nombre: document.getElementById("nombre").value,
    apellido: document.getElementById("apellido").value,
    telefono: document.getElementById("telefono").value,
    edad: document.getElementById("edad").value,
    correo: document.getElementById("correo").value,
    molestia: document.getElementById("molestia").value,
    tiempo: document.getElementById("tiempo").value,
    sede: document.getElementById("sede").value,
    comentario: document.getElementById("comentario").value,
  };

  await fetch(
    "https://script.google.com/macros/s/AKfycbynEH62nCJIZuYjGqnMw2VOqn7laSjL3tIXByHbLfOCnI3Ttgp8lfBVzSbMy6wJ4bxCWw/exec",
    {
      method: "POST",
      body: JSON.stringify(data),
    },
  );

  alert("Solicitud enviada correctamente");

  form.reset();
});
