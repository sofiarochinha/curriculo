var palavra = "";


Array.from(document.querySelector('#grid').children).forEach(function (child) {
    child.className = "gridItem";
});

Array.from(document.getElementsByClassName('gridItem')).forEach(function (element) {
    element.addEventListener('click', function () {
        if (leuFicheiro) {
            clicaBotao(element)
        }

    });
    element.addEventListener('mouseover', function () { mudarCor(element, event) });
    element.addEventListener('mouseout', function () { mudarCor(element, event) });
});

function mudarCor(element, event) {

    if (event.type == 'mouseover') {
        element.classList.add('mudarCor');
    } else {
        element.classList.remove("mudarCor");
    }
}

var erro = 0;

function clicaBotao(obj) {
    let acertou = false;

    [...palavra].forEach(function (char, number) {
        if (char == obj.innerText) {
            mostrarResultado(number, char);
            obj.classList.add("acerto");
            acertou = true;
            return;
        }
    })

    if (acertou) return;

    erro++;

    obj.classList.add("erro");

    switch (erro) {
        case 1:
            var imagem = new Image();
            imagem.src = 'wrong-1.gif';
            imagem.id = 'wrong';
            document.getElementById("imagens").appendChild(imagem);
            break;

        case 2:
            document.getElementById("wrong").src = 'wrong-2.gif';
            break;
        case 3:
            document.getElementById("wrong").src = 'wrong-3.gif';
            break;
        case 4:
            document.getElementById("wrong").src = 'wrong-4.gif';
            break;
        case 5:
            document.getElementById("wrong").src = 'wrong-5.gif';
            break;
        case 6:
            document.getElementById("wrong").src = 'wrong-6.gif';
            break;
        case 7:
            document.getElementById("wrong").src = 'wrong-7.gif';
            alert("perdeu");
            let contador = 0;
            while (contador < palavra.length) {
                console.log(document.getElementById("resultado").removeChild(
                    document.getElementById("resultado").lastChild));
                contador++;
            }

            readFile();
            break;
        default:
            console.log("erro nas imagens");
            break;
    }



}

var acertos = 0;

function mostrarResultado(number, char) {
    document.getElementsByClassName("trace")[number].innerText = char;
    acertos++;

    if (acertos == palavra.length) {
        alert("ganhou");

        let contador = 0;
        while (contador < palavra.length) {
            console.log(document.getElementById("resultado").removeChild(
                document.getElementById("resultado").lastChild));
            contador++;
        }

        acertos = 0;

        readFile();
    }

}

var leuFicheiro = false;

//depois de carregar o ficheiro
document.getElementById("ficheiro").onchange = function () {
    leuFicheiro = true;
    readFile()
};

//escolhe uma palavra a partir do ficheiro
function readFile() {
    let file = document.getElementById("ficheiro").files[0];

    let reader = new FileReader();

    reader.readAsText(file);

    reader.onload = function () {

        var resultados = reader.result;
        var array = resultados.split("\n");
        number = parseInt(Math.random() * array.length);
        palavra = array[number];

        contador = 0;

        while (contador < palavra.length) {
            var divNova = document.createElement("div");
            document.getElementById("resultado").appendChild(divNova);
            divNova.className = "trace";
            contador++;
        }

        console.log(palavra);

        Array.from(document.getElementsByClassName("erro")).forEach(function (element) {
            element.classList.remove("erro");
        });

        Array.from(document.getElementsByClassName("acerto")).forEach(function (element) {
            element.classList.remove("acerto");
        });

        document.getElementById("imagens").removeChild(document.getElementById("imagens").lastChild);

        erro = 0;
    };

    reader.onerror = function () {
        console.log(reader.error);
    };
}

