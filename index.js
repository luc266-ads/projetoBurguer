
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('texto1').addEventListener('click', function () {
        document.getElementById('box').style.display = 'block';

    })
    document.getElementById('fechaBox').addEventListener('click', function () {
        document.getElementById('box').style.display = 'none';

    })

    document.getElementById('texto3').addEventListener('click', function () {
        document.getElementById('queSomos').style.display = 'block';

    })
    document.getElementById('fechaQuemSomos').addEventListener('click', function () {
        document.getElementById('queSomos').style.display = 'none';


    })

    let cliques = 0



    const botao = (document.getElementById('imagem'))
    const cliqueDisplay = document.getElementById('contagemBurguer')

    botao.addEventListener('click', function () {
        cliques++
        cliqueDisplay.textContent = `HAMBUGUERES VYNKEN ${cliques}`

        if (cliques == 10) {

            document.getElementById('imagem').addEventListener('click', function () {
                document.getElementById('imagemBurguer').style.display = 'block';

            })
            document.getElementById('fechaBurguer').addEventListener('click', function () {
                document.getElementById('imagemBurguer').style.display = 'none';


            })

            cliques = 0

        }

    })

    let cliques1 = 0
    const botao1 = (document.getElementById('imagem1'))
    const cliqueDisplay1 = document.getElementById('contagemBurguer')

    botao1.addEventListener('click', function () {
        cliques1++
        cliqueDisplay1.textContent = `HAMBUGUERES VYNKEN ${cliques1}`

        if (cliques1 == 10) {

            document.getElementById('imagem1').addEventListener('click', function () {
                document.getElementById('imagemBurguer').style.display = 'block';

            })
            document.getElementById('fechaBurguer').addEventListener('click', function () {
                document.getElementById('imagemBurguer').style.display = 'none';


            })

            cliques1 = 0

        }


    })
    let cliques2 = 0
    const botao2 = (document.getElementById('imagem2'))
    const cliqueDisplay2 = document.getElementById('contagemBurguer')

    botao2.addEventListener('click', function () {
        cliques2++
        cliqueDisplay2.textContent = `HAMBUGUERES VYNKEN ${cliques2}`

        if (cliques2 == 10) {

            document.getElementById('imagem2').addEventListener('click', function () {
                document.getElementById('imagemBurguer').style.display = 'block';

            })
            document.getElementById('fechaBurguer').addEventListener('click', function () {
                document.getElementById('imagemBurguer').style.display = 'none';


            })

            cliques2 = 0

        }


    })
    let cliques3 = 0
    const botao3 = (document.getElementById('imagem3'))
    const cliqueDisplay3 = document.getElementById('contagemBurguer')

    botao3.addEventListener('click', function () {
        cliques3++
        cliqueDisplay3.textContent = `HAMBUGUERES VYNKEN ${cliques3}`

        if (cliques3 == 10) {

            document.getElementById('imagem3').addEventListener('click', function () {
                document.getElementById('imagemBurguer').style.display = 'block';

            })
            document.getElementById('fechaBurguer').addEventListener('click', function () {
                document.getElementById('imagemBurguer').style.display = 'none';


            })

            cliques3 = 0

        }


    })
    let cliques4 = 0
    const botao4 = (document.getElementById('imagem4'))
    const cliqueDisplay4 = document.getElementById('contagemBurguer')

    botao4.addEventListener('click', function () {
        cliques4++
        cliqueDisplay4.textContent = `HAMBUGUERES VYNKEN ${cliques4}`

        if (cliques4 == 10) {

            document.getElementById('imagem4').addEventListener('click', function () {
                document.getElementById('imagemBurguer').style.display = 'block';

            })
            document.getElementById('fechaBurguer').addEventListener('click', function () {
                document.getElementById('imagemBurguer').style.display = 'none';


            })

            cliques4 = 0

        }


    })
    let cliques5 = 0
    const botao5 = (document.getElementById('imagem5'))
    const cliqueDisplay5 = document.getElementById('contagemBurguer')

    botao5.addEventListener('click', function () {
        cliques5++
        cliqueDisplay5.textContent = `HAMBUGUERES VYNKEN ${cliques5}`

        if (cliques5 == 10) {

            document.getElementById('imagem5').addEventListener('click', function () {
                document.getElementById('imagemBurguer').style.display = 'block';

            })
            document.getElementById('fechaBurguer').addEventListener('click', function () {
                document.getElementById('imagemBurguer').style.display = 'none';


            })

            cliques5 = 0

        }


    })
    let cliques6 = 0
    const botao6 = (document.getElementById('imagem6'))
    const cliqueDisplay6 = document.getElementById('contagemBurguer')

    botao6.addEventListener('click', function () {
        cliques6++
        cliqueDisplay6.textContent = `HAMBUGUERES VYNKEN ${cliques6}`

        if (cliques6 == 10) {

            document.getElementById('imagem6').addEventListener('click', function () {
                document.getElementById('imagemBurguer').style.display = 'block';

            })
            document.getElementById('fechaBurguer').addEventListener('click', function () {
                document.getElementById('imagemBurguer').style.display = 'none';


            })

            cliques6 = 0

        }


    })

    let cliques7 = 0
    const botao7 = (document.getElementById('imagem7'))
    const cliqueDisplay7 = document.getElementById('contagemBurguer')

    botao7.addEventListener('click', function () {
        cliques7++
        cliqueDisplay7.textContent = `HAMBUGUERES VYNKEN ${cliques7}`

        if (cliques7 == 10) {

            document.getElementById('imagem7').addEventListener('click', function () {
                document.getElementById('imagemBurguer').style.display = 'block';

            })
            document.getElementById('fechaBurguer').addEventListener('click', function () {
                document.getElementById('imagemBurguer').style.display = 'none';


            })

            cliques7 = 0

        }


    })

})



