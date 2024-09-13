const caixaPrincipal = document.querySelector (".caixa-principal");
const caixaPerguntas = document.querySelector (".caixa-perguntas");
const caixaAlternativas = document.querySelector (".caixa-alternativas");
const caixaResultado = document.querySelector (".caixa-resultado");
const textoResultado = document.querySelector (".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é um dos principais fatores que contribui para a pobreza em muitos países?",
        alternativas: [
            "Desigualdade econômica e falta de acesso a educação de qualidade.",
            "A alta taxa de natalidade sem relação com a economia."
        ]
    },
    {
        enunciado: "Qual é uma das consequências da discriminação de gênero?",
        alternativas: [
            "A limitação de oportunidades econômicas e profissionais para mulheres.  ",
            "O aumento na participação feminina em esportes."
        ]
    }
    {
        enunciado: "O que é a marginalização em um contexto social?",
        alternativas: [
            "O processo pelo qual grupos ou indivíduos são excluídos da participação plena na sociedade. ",
            "A inclusão de todos os grupos sociais na tomada de decisões."
        ]
    }
];
let atual = 0;
let perguntaAtual;

function mostrapergunta() {
    perguntaAtual = perguntas [atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}
mostrapergunta()