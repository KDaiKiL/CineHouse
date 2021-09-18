const catalogo = [
    {
        codigo: 1,
        titulo: "Luca",
        duracao: 1.5,
        atores: ['Kalebe', 'Gioavanna', 'Leonardo'],
        anoDeLançamento: 2021,
        emCartaz: true
    },
    {
        codigo: 2,
        titulo: "Raya e o Último Dragão",
        duracao: 2.15,
        atores: ["Deivid", "Rafaela", "Vitória"],
        anoLancamento: 2021,
        emCartaz: false
    },
    {
        codigo: 3,
        titulo: "Coração de Dragão",
        duracao: 2.1,
        atores: ["Gemma", "Sandra", "Alan"],
        anoLancamento: 2021,
        emCartaz: true
    }
]


function adicionarFilme(
    codigo,
    titulo,
    duracao,
    atores,
    anoLancamento,
    emCartaz
) {
    this.codigo = codigo,
    this.titulo = titulo,
    this.duracao = duracao,
    this.atores = atores,
    this.anoLancamento = anoLancamento,
    this.emCartaz = emCartaz
}
var moana = new adicionarFilme(4, "Moana", 1.5, ["Moana", "Maui", "Te Fite"], 2016, true)
var upAventuras = new adicionarFilme(5, "Up - Altas Aventuras", 2, ["Sr. Fredericksen", "Russell", "Dug"], 2009, false)
catalogo.push(moana, upAventuras)


const acoesCinema = {
    buscarFilme: function buscar(codigo) {
                let oFilme = catalogo.find(filme => filme.codigo == codigo);
                return oFilme.titulo
            },
    alterarStatus: function alterar(catag, codigo) {
                    let filme = catag.find(filme => filme.codigo == codigo)
                    return filme.emCartaz == true ? filme.emCartaz = !true : filme.emCartaz = !false 
                },
    listarTodosOsFilmes: function listarTodosFilmes(catag) {
                        let a = []
                        for(let i of catag) {
                            a.push(i.titulo)
                        } 
                        return a.join('<br> >> ')
                    },
    listarFilmesEmCartaz: function listarEmCartaz(catag) {
                            let a = []
                            let filme = catag.filter(filme => filme.emCartaz == true)
                            for(let i of filme) {
                                a.push(i.titulo)
                            }
                            return a.join('<br> >> ')
                        },
    listarFilmesEmLongaDuracao: function listarFilmesLongaDuracao(catag) {
                                    let a = []
                                    let filme = catag.filter(filme => filme.duracao >= 2)
                                    for(let i of filme) {
                                        a.push(i.titulo)
                                    }
                                    return a.join('<br> >> ')
                                }
}

module.exports = acoesCinema
