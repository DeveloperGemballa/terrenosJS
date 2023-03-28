

class Terreno {
    constructor(proprietario, endereco, largura, comprimento) {
      this.proprietario = proprietario;
      this.endereco = endereco;
      this.largura = largura;
      this.comprimento = comprimento;
    }  
    area() {
        return this.largura * this.comprimento;
    }

    set _setProprietario(proprietario) {
    this.proprietario = proprietario;
    }
    set _setEndereco(endereco) {
    this.endereco = endereco;
    }
    set _setLargura(largura) {
    this.largura = largura;
    }
    set _setComprimento(comprimento) {
    this.comprimento = comprimento;
    }

    get _proprietario() {
    return this.proprietario;
    }
    get _endereco() {
    return this.endereco;
    }
    get _largura() {
    return this.largura;
    }
    get _comprimento() {
    return this.comprimento;
    }
  }

var terrenos = [];

function fIncluirTerreno(proprietario, endereco, largura, comprimento) {
   let vterreno = new Terreno(proprietario, endereco, largura, comprimento);
   terrenos.push(vterreno);
   return vterreno.area();
}

function fListarTerrenos(TrInicio = ' : ', TdInicio = " : " , TdFinal ,TrFinal = ";") {
  let retorno = "";
  terrenos.forEach(function(vterreno,i) {
    retorno += TrInicio + TdInicio +'<strong ondblclick="fApagaTerreno('+(i+1)+')">&nbsp;'+(i+1)+'&nbsp;</strong>'+ TdFinal + TdInicio + vterreno._proprietario + TdFinal + TdInicio + vterreno._endereco + TdFinal + TdInicio + vterreno._largura+ "(m2)" + TdFinal + TdInicio + vterreno._comprimento+ "(m2)" + TdFinal + TdInicio + "Area: " +vterreno.area()+"(m2)"+TrFinal;
  });
  return retorno;
}

function fLimparTerrenos() {
  terrenos = [];
}

function fApagaTerreno(i) {
  //console.log(i);
  terrenos.splice(i,1);
  //console.log(terrenos);
  
}

function fContaTerrenos() {
  return terrenos.length;
}
