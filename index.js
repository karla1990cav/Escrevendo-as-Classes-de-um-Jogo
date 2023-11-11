class aventuraDoHeroi{

    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    chamaAtaque() {

        let ataque = ""
       
        switch (this.tipo) {
            case "guerreiro":
                ataque = "espada";
                break;
            case "mago":
                ataque = "magia";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            case "monge":
                ataque = "artes marciais"
                break;
            default:
                ataque = "desconhecido";
                break;

        }
        
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }


}

const guerreiro = new aventuraDoHeroi("João", 21, "guerreiro")
guerreiro.chamaAtaque();
const mago = new aventuraDoHeroi("Adalberto", 64, "mago")
mago.chamaAtaque();
const ninja = new aventuraDoHeroi("Evaristo", 45, "ninja")
ninja.chamaAtaque();
const monge = new aventuraDoHeroi ("Amenaldo", 74, "monge")
monge.chamaAtaque();