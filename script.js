const caixaPrincipal = document.querySelector (".caixa-principal");
const caixaPerguntas = document.querySelector (".caixa-perguntas");
const caixaAlternativas = document.querySelector (".caixa-alternativas");
const caixaResultado = document.querySelector (".caixa-resultado");
const textoResultado = document.querySelector (".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é um dos principais fatores que contribui para a pobreza em muitos países?",
        alternativas: [
            {
                texto:"Desigualdade econômica e falta de acesso a educação de qualidade.",
                afirmacao:
            },
            {
                texto: "A alta taxa de natalidade sem relação com a economia.",
                afirmacao:
            }
            
           
        ]
    },
    {
        enunciado: "Qual é uma das consequências da discriminação de gênero?",
        alternativas: [
            {
                texto: "A limitação de oportunidades econômicas e profissionais para mulheres.  ",
                afirmacao:
            },
            {
                texto: "O aumento na participação feminina em esportes.",
                afirmacao:
            }
           
           
        ]
    }
    {
        enunciado: "O que é a marginalização em um contexto social?",
        alternativas: [
            {
                texto:"O processo pelo qual grupos ou indivíduos são excluídos da participação plena na sociedade. ",
                afirmacao:
            },
            {
                texto:"A inclusão de todos os grupos sociais na tomada de decisões.",
                afirmacao:
            }
            
            
        ]
    }
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta { } {
if (atual >= perguntas.lenght) {
    mostraResultado();
    return;

}
   perguntaAtual = perguntas [atual];
   caixaPerguntas.textContent = perguntaAtual. enunciado;
caixaAlternativas.textContent = "";
   mostraAlternativas( ) ;
}
function mostraAlternativas{ } {
   for(const alternativa of perguntaAtual.alternativas) {
   const botaoAlternativas = document.createElement ("button") ;
   botaoAlternativas. textContent = alternativa.texto ;
   botaoAlternativas.addEventListener ("click", ( ) =>; respostaSelecionada (alternativa)) ;
   caixalternativas.appendChild(botaoAlternativas) 
}
}


function respostaselecionada (opcaoselecionada) {
  const afirmacoes = opcaoSelecionada.afirmacoes ;
  historiaFinal += afirmacoes +"";
  atual++;
mostraPergunta ( ) ; 
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    
}
mostraPergunta();