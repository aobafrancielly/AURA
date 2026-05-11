const questions = [
    {
        question: "Qual cenário combina mais com você?",
        answers: [
            { text: "Café elegante em um dia chuvoso", type: "classic" },
            { text: "Praia ao pôr do sol", type: "boho" },
            { text: "Jantar sofisticado", type: "luxury" },
            { text: "Galeria de arte moderna", type: "modern" }
        ]
    },
    {
        question: "Qual metal você escolheria?",
        answers: [
            { text: "Ouro Amarelo", type: "luxury" },
            { text: "Prata 925", type: "modern" },
            { text: "Ouro Branco", type: "romantic" },
            { text: "Mistura de metais", type: "boho" }
        ]
    },
    {
        question: "O que mais importa em uma joia?",
        answers: [
            { text: "Elegância discreta", type: "classic" },
            { text: "Impacto visual", type: "luxury" },
            { text: "Significado emocional", type: "romantic" },
            { text: "Originalidade", type: "modern" }
        ]
    },
    {
        question: "Seu look favorito seria...",
        answers: [
            { text: "Alfaiataria sofisticada", type: "classic" },
            { text: "Vestido leve e delicado", type: "romantic" },
            { text: "Total black moderno", type: "modern" },
            { text: "Visual livre e criativo", type: "boho" }
        ]
    },
    {
        question: "Qual pedra preciosa mais te atrai?",
        answers: [
            { text: "Diamante", type: "luxury" },
            { text: "Rubi", type: "classic" },
            { text: "Esmeralda", type: "modern" }
        ]
    }
];

const results = {
    classic: {
        title: "Clássica Atemporal",
        text: "Você busca elegância que nunca sai de moda.",
        jewel: "Colar Aurora",
        desc: "Uma peça discreta e iluminada, perfeita para o seu estilo."
    },
    luxury: {
        title: "Luxo Marcante",
        text: "Você nasceu para brilhar com peças imponentes.",
        jewel: "Anel Solitário Éden",
        desc: "O brilho do diamante 18k é a tradução da sua personalidade."
    },
    romantic: {
        title: "Romântica Delicada",
        text: "Suas escolhas refletem doçura e feminilidade.",
        jewel: "Brincos de Rubi Aura",
        desc: "A delicadeza que faltava para emoldurar seu rosto."
    },
    modern: {
        title: "Moderna Autêntica",
        text: "Você prefere o design contemporâneo e ousado.",
        jewel: "Brincos Constelação",
        desc: "Linhas geométricas em ouro branco que fogem do comum."
    },
    boho: {
        title: "Boho Livre",
        text: "Sua joia ideal precisa ter alma e fluidez.",
        jewel: "Pulseira de Pedras Naturais",
        desc: "Um mix de texturas que celebra a sua liberdade."
    }
};

let currentQuestion = 0;
let score = { classic: 0, luxury: 0, romantic: 0, modern: 0, boho: 0 };

// Seleção de elementos
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const progressBar = document.getElementById("progressBar");
const quizDiv = document.getElementById("quiz");
const resultDiv = document.getElementById("result");

function startQuiz() {
    currentQuestion = 0;
    score = { classic: 0, luxury: 0, romantic: 0, modern: 0, boho: 0 };
    quizDiv.style.display = "block";
    resultDiv.style.display = "none";
    showQuestion();
}

function showQuestion() {
    const q = questions[currentQuestion];
    questionEl.innerText = q.question;
    answersEl.innerHTML = "";
    
    // Atualiza barra de progresso
    const progress = (currentQuestion / questions.length) * 100;
    progressBar.style.width = `${progress}%`;

    q.answers.forEach(ans => {
        const btn = document.createElement("button");
        btn.innerText = ans.text;
        btn.classList.add("answer-btn");
        btn.onclick = () => selectAnswer(ans.type);
        answersEl.appendChild(btn);
    });
}

function selectAnswer(type) {
    score[type]++;
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizDiv.style.display = "none";
    resultDiv.style.display = "block";
    progressBar.style.width = "100%";

    // Lógica para achar o maior score
    let winner = Object.keys(score).reduce((a, b) => score[a] > score[b] ? a : b);
    const res = results[winner];

    document.getElementById("resultTitle").innerText = res.title;
    document.getElementById("resultText").innerHTML = `
        <p>${res.text}</p>
        <div style="margin-top: 20px; padding: 15px; border: 1px solid #c5a059; background: #fffaf0;">
            <p style="color: #c5a059; font-weight: bold; text-transform: uppercase; font-size: 0.8rem;">Sua Joia Ideal:</p>
            <h3 style="margin: 10px 0;">${res.jewel}</h3>
            <p style="font-style: italic; font-size: 0.9rem;">${res.desc}</p>
        </div>
    `;
}

function restartQuiz() {
    startQuiz();
}

// Inicia ao carregar a página
window.onload = startQuiz;