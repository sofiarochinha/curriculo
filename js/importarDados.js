var json = (function () {
  var json = null;
  $.ajax ({
    url: 'https://sofiarochinha.github.io/webhosting/js/dados.json',
    dataType: 'json',
    success: function (data) {
      json = data;
      document.getElementById("nome").innerHTML = data.Nome;
      for (let x = 0; x<3; x++){
          document.getElementsByClassName("competencia")[x].innerHTML = data.Competencias[x]['Competencia'];
          document.getElementsByClassName("descricao")[x].innerHTML = data.Competencias[x]['Descricao'];
      }

      for (let x = 0; x<4; x++){
          document.getElementsByClassName("data")[x].innerHTML = data.Sobre[x]['Data'];
          document.getElementsByClassName("dataTitulo")[x].innerHTML = data.Sobre[x]['Titulo'];
          document.getElementsByClassName("dataDescricao")[x].innerHTML = data.Sobre[x]['Descricao'];
      }

      for (let x = 0; x<3; x++){
          document.getElementsByClassName("projetoTitulo")[x].innerHTML = data.Porjetos[x]['Titulo'];
          document.getElementsByClassName("projetoTituloPopup")[x].innerHTML = data.Porjetos[x]['Titulo'];
          document.getElementsByClassName("projetoTipo")[x].innerHTML = data.Porjetos[x]['Tipo'];
          document.getElementsByClassName("projetoDescricao")[x].innerHTML = data.Porjetos[x]['Descricao'];
      }

      console.log()
    },
  });
  return json;
}) ();





const labels = [
    'Python',
    'C',
    'MySQL',
    'HTML, CSS, JS',
    'PHP',
    'JSON',
    'PostgreSQL'
  ];

  const data = {
    labels: labels,
    datasets: [{
      axis: 'x',
      label: 'Linguagens',
      data: [40, 30, 70, 81, 56, 40, 45],
      fill: false,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  };

const config = {
  type: 'bar',
  data,
  options: {
    indexAxis: 'x',
  }
};

var myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
