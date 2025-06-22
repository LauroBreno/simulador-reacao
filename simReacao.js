document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const c0 = parseFloat(document.getElementById("c0").value);
    const k = parseFloat(document.getElementById("k").value);
    const tempo = parseInt(document.getElementById("tempo").value);
  
    const tempos = [];
    const concentracoes = [];
  
    for (let t = 0; t <= tempo; t++) {
      const c = c0 * Math.exp(-k * t);
      tempos.push(t);
      concentracoes.push(parseFloat(c.toFixed(4)));
    }
  
    // Enviar para PHP
    fetch("..php/salvar_simulacao.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ c0, k, tempo })
    }).then(res => res.json()).then(res => {
      console.log("Simulação salva:", res);
    });
  
    // Gerar gráfico
    const ctx = document.getElementById('grafico').getContext('2d');
    if (window.graficoInstance) window.graficoInstance.destroy();
  
    window.graficoInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: tempos,
        datasets: [{
          label: 'Concentração (mol/L)',
          data: concentracoes,
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
          fill: false,
          tension: 0.3,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          title: { display: true, text: 'Cinética de Reação de 1ª Ordem' }
        }
      }
    });
  });
  