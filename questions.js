export default [
    {
      question: "O que caracteriza um circuito elétrico em série?",
      answers: [
        { option: "Todos os componentes estão conectados em paralelo", correct: false },
        { option: "A corrente elétrica se divide em diferentes caminhos", correct: false },
        { option: "Todos os componentes estão conectados em uma única linha", correct: true },
        { option: "A tensão é a diferente em todos os componentes", correct: false },
      ],
    },
    {
      question: "Como a corrente elétrica se comporta em um circuito em série?",
      answers: [
        { option: "A corrente varia em cada componente", correct: false },
        { option: "A corrente é a mesma em todos os componentes", correct: true },
        { option: "A corrente se divide igualmente entre os componentes", correct: false },
        { option: "A corrente é zero em todos os componentes", correct: false },
      ],
    },
    {
      question: "Se um resistor em um circuito em série falhar, o que acontece com o circuito?",
      answers: [
        { option: "O circuito inteiro para de funcionar", correct: true },
        { option: "A tensão aumenta", correct: false },
        { option: "A corrente aumenta", correct: false },
        { option: "O circuito continua funcionando normalmenteA corrente se divide igualmente entre os componentes", correct: false },
      ],
    },
    {
      question: "Qual é a diferença principal entre um circuito em série e um circuito em paralelo?",
      answers: [
        { option: "Em série, a corrente é a mesma em todos os componentes; em paralelo, a tensão é a mesma", correct: true },
        { option: "Em série, a tensão é a mesma em todos os componentes; em paralelo, a corrente é a mesma", correct: false },
        { option: "Em série, a corrente se divide; em paralelo, a corrente é a mesma", correct: false },
        { option: "Em série, a tensão se divide; em paralelo, a tensão é a mesma", correct: false },
      ],
    },
    {
        question: "Por que os circuitos em série não são ideais para a maioria das aplicações domésticas?",
        answers: [
          { option: "Porque SIM", correct: false },
          { option: "Porque a tensão é a mesma em todos os componentes", correct: false },
          { option: "Porque se um componente falhar, todo o circuito para de funcionar.", correct: true },
          { option: "Porque a resistência total é sempre alta.", correct: false },
        ],
    },
    {
        question: "Dois resistores, de resistências iguais a 20 Ω e 30 Ω, são ligados em série e conectados a uma bateria de 30 V. Determine a resistência equivalente dessa associação de resistores",
        answers: [
          { option: "10 Ω", correct: false },
          { option: "50 Ω", correct: true },
          { option: "120 Ω", correct: false },
          { option: "60 Ω", correct: false },
        ],
    },
    {
        question: "Em um ramo de um circuito, há 10 resistores ôhmicos ligados em série. Sabendo-se que a corrente elétrica que passa no primeiro dos resistores é igual a 10 A, a corrente elétrica que passa através do último resistor da associação será igual a:",
        answers: [
          { option: "0,1 A", correct: false },
          { option: "100 A", correct: false },
          { option: "1 A", correct: false },
          { option: "10 A", correct: true },
        ],
    },
    {
        question: "A associação de resistores em série é usada nas situações em que caso ocorra queima de algum dos resistores, todos os outros também queimem. Então, dentre as alternativas abaixo, em qual temos a aplicação de apenas associações de resistores em série?",
        answers: [
          { option: "Lâmpadas residenciais", correct: false },
          { option: "Pisca-pisca", correct: true },
          { option: "Celulares", correct: false },
          { option: "Lâmpadas públicas", correct: false },
        ],
    }, 
  ];