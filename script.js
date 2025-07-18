document.getElementById("cdiForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const form = e.target;
  const metodo = form.metodo.value;
  const tasa = parseInt(form.tasa.value);
  const antiabuso = form.antiabuso.value;
  let perfil = "";
  if (metodo === "exencion" && tasa <= 5 && antiabuso === "no") {
    perfil = "Agresivo: favorece la inversión extranjera pero con bajo control fiscal.";
  } else if (metodo === "credito" && tasa >= 10 && antiabuso !== "no") {
    perfil = "Conservador: protege la base imponible y promueve la transparencia.";
  } else {
    perfil = "Equilibrado: busca atraer inversión sin comprometer la recaudación.";
  }
  document.getElementById("resultado").innerHTML = `
    <h2>Resultado de tu negociación</h2>
    <p><strong>Perfil:</strong> ${perfil}</p>
  `;
});
