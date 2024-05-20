// var alunos = new Array(3)
// alunos.push("Apollo")
// alunos.push("Nyrx")
// alunos.push("Morthien")

// for(var nomes of alunos){
//     console.log(nomes)
// }
var button, quebra_linha, jogada = 1, vencedor=0
var tabuleiro = new Array(3)
    for(var i = 0; i< tabuleiro.length; i ++){
        tabuleiro[i] = new Array(3)
}
    for(var i = 0; i< tabuleiro.length; i ++){
        quebra_linha = document.createElement("br")
        document.body.append(quebra_linha)
        for(var j = 0; j< tabuleiro[i].length;j++){
            button = document.createElement("button")
            button.setAttribute("type", "button")
            button.setAttribute("id", "bt"+i+""+j)
            button.setAttribute("class", "btJogo" +i)
            button.setAttribute("onclick", "marca(" +i+',' +j+ ')')
            button.append(document.createTextNode(""))
            document.body.append(button)
        }            
}

    // function marca() {
    //     var marcaCasa00 = "bt00", marcaCasa01 = "bt01", marcaCasa02 = "bt02",
    //         marcaCasa10 = "bt10", marcaCasa11 = "bt11", marcaCasa12 = "bt12",
    //         marcaCasa20 = "bt20", marcaCasa21 = "bt21", marcaCasa22 = "bt22";
            
    //     return [marcaCasa00, marcaCasa01, marcaCasa02, marcaCasa10, 
    //             marcaCasa11, marcaCasa12, marcaCasa20, marcaCasa21, marcaCasa22];
    // }
 

//  var marcaCasa00 = "bt00", marcaCasa01 = "bt01", marcaCasa02 = "bt02", marcaCasa10 = "bt10",
//     marcaCasa11 = "bt11", marcaCasa12 = "bt12", marcaCasa20 = "bt20", marcaCasa21 = "bt21",
//     marcaCasa22 = "bt22"
//    return  [marcaCasa00("bt00"), marcaCasa01("bt01"), marcaCasa02("bt02"), marcaCasa10("bt10"), 
//      marcaCasa11("bt11"), marcaCasa12("bt12"),marcaCasa20("bt20"), marcaCasa21("bt21"), marcaCasa22("bt22")]
//  }

    // function marca00(){
    //     marcaCasa("bt00")
    // } 
    // function marca01(){
    //     marcaCasa("bt01")
    // }
    // function marca02(){
    //     marcaCasa("bt02")
    // }
    // function marca10(){
    //     marcaCasa("bt10")
    // }
    // function marca11(){
    //     marcaCasa("bt11")
    // }
    // function marca12(){
    //     marcaCasa("bt12")
    
    // }function marca20(){
    //     marcaCasa("bt20")
    // }
    // function marca21(){
    //     marcaCasa("bt21")
    // }
    // function marca22(){
    //     marcaCasa("bt22")
    // }

    function marcaCasa(nomeBotao){
        if(jogada % 2 == 0){
           document.getElementById(nomeBotao).innerText = "O" 
           document.getElementById(nomeBotao).style.color = "red"
        }else{ document.getElementById(nomeBotao).innerText = "X"
        document.getElementById(nomeBotao).style.color = "black"
        }
        document.getElementById(nomeBotao).disabled = true
        let line= nomeBotao.charAt(2)
        let column= nomeBotao.charAt(3)
        alert(line+""+column)
        jogada ++
        if(jogada >= 5){
            encerrarjogo()
        }
        if(jogada > 9){
            alert("Deu velha, sua troxa!!")
        }
    }
    function marca(linha, coluna){
        marcaCasa("bt"+linha+""+coluna)
    }
    function encerrarjogo(){
        if(document.getElementById("bt00").innerText  == document.getElementById("bt01").innerText
        && document.getElementById("bt01").innerText  == document.getElementById("bt02").innerText
        && document.getElementById("bt00").innerText  != ""){
            alert("Jogo finalizado!\nVencedor: "+ document.getElementById("bt00").innerText)
            vencedor++
        }
        if(document.getElementById("bt10").innerText  == document.getElementById("bt11").innerText
        && document.getElementById("bt11").innerText  == document.getElementById("bt12").innerText
        && document.getElementById("bt10").innerText  != ""){
            alert("Jogo finalizado!\nVencedor: "+ document.getElementById("bt10").innerText)
            vencedor++
        }
        if(document.getElementById("bt20").innerText  == document.getElementById("bt21").innerText
        && document.getElementById("bt21").innerText  == document.getElementById("bt22").innerText
        && document.getElementById("bt20").innerText  != ""){
            alert("Jogo finalizado!\nVencedor: "+ document.getElementById("bt20").innerText)
            vencedor++
        }
        if(document.getElementById("bt00").innerText  == document.getElementById("bt10").innerText
        && document.getElementById("bt10").innerText  == document.getElementById("bt20").innerText
        && document.getElementById("bt00").innerText  != ""){
            alert("Jogo finalizado!\nVencedor: "+ document.getElementById("bt00").innerText)
            vencedor++
        }
        if(document.getElementById("bt01").innerText  == document.getElementById("bt11").innerText
        && document.getElementById("bt11").innerText  == document.getElementById("bt21").innerText
        && document.getElementById("bt01").innerText  != ""){
            alert("Jogo finalizado!\nVencedor: "+ document.getElementById("bt01").innerText)
            vencedor++
        }
        if(document.getElementById("bt02").innerText  == document.getElementById("bt12").innerText
        && document.getElementById("bt12").innerText  == document.getElementById("bt22").innerText
        && document.getElementById("bt02").innerText  != ""){
            alert("Jogo finalizado!\nVencedor: "+ document.getElementById("bt02").innerText)
            vencedor++
        }
        if(document.getElementById("bt00").innerText  == document.getElementById("bt11").innerText
        && document.getElementById("bt11").innerText  == document.getElementById("bt22").innerText
        && document.getElementById("bt00").innerText  != ""){
            alert("Jogo finalizado!\nVencedor: "+ document.getElementById("bt00").innerText)
            vencedor++
        }
        if(document.getElementById("bt02").innerText  == document.getElementById("bt11").innerText
        && document.getElementById("bt11").innerText  == document.getElementById("bt20").innerText
        && document.getElementById("bt02").innerText  != ""){
            alert("Jogo finalizado!\nVencedor: "+ document.getElementById("bt02").innerText)
            vencedor++
        }
    }