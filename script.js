function contar(){
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let resultado = document.getElementById('res')
    
    if (inicio.value.length == 0 || fim.value.length == 0){
        alert('[ERRO] dados incorretos')
        resultado.innerHTML = "Preencha os dados acima!"
    } 
    else {
        resultado.innerHTML = 'Contando: <br>' // quebra de linha em HTML
        let i = Number(inicio.value) //convertendendo string em numero
        let f = Number(fim.value)
        let p = Number(passo.value)
        if ( p <= 0 ){
            alert('Considerando PASSO 1')
            p = 1
        }
        if ( i < f){
            //Contagem crescente
            for(let c = i; c <= f; c += p) {
                resultado.innerHTML += `${c} \u{1F449}` //emogi
            }
        } else {
            //Contagem regressiva
            for(let c = i; c >= f; c -= p){
                resultado.innerHTML += `${c} \u{1F449}`
            }
        }
        resultado.innerHTML += `\u{1F3C1}` //bandeira
    }
}