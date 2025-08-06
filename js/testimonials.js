// Centralized Testimonials Data
const testimonials = [
    {
        rating: 5,
        content: "Cheguei para o tratamento de bursite no quadril com dores que dificultavam todas as atividades do meu dia a dia. No início, por experiências anteriores, estava cético quanto à efetividade do tratamento. Mas, aos poucos, o Kaique conquistou minha confiança — graças à sua impressionante competência técnica, atenção aos detalhes, conselhos valiosos e orientações claras. Hoje estou bem, recuperado e retornando progressivamente às minhas atividades físicas. Enfim, um excelente profissional. Recomendo com convicção.",
        authorImage: "images/author-1.jpg",
        authorName: "Antônio",
        authorTitle: "Paciente"
    },
    {
        rating: 5,
        content: "Se não fosse o Kaique não sei como teria conseguido lidar com a hérnia de disco, quando a gente tá com uma dor constante, que acha que nunca vai passar, isso acaba com nosso psicológico, e ele soube não só tratar o físico, mas soube lidar com meu psicológico num momento de fragilidade e me ajudou a me reerguer e me recuperar. Sou extremamente grata a ele por isso e recomendo seu trabalho de olhos fechados.",
        authorImage: "images/author-2.jpg",
        authorName: "Wanille A.",
        authorTitle: "Paciente"
    },
    {
        rating: 5,
        content: "Tenho uma contropatia patelar no joelho direito e desde que comecei a fisioterapia com o Kaique tive atenção e cuidado excepcional. Profissional conhecedor do assunto e com didática prática. Super indico!",
        authorImage: "images/author-3.jpg",
        authorName: "Lucas E.",
        authorTitle: "Paciente"
    },
    {
        rating: 5,
        content: "Eu estava com uma lesão no Adutor esquerdo e procurei por algum tempo fisioterapeutas para conseguir me curar e voltar a praticar futebol, que sempre joguei. Depois de algumas tentativas falhas e até um diagnóstico precoce de um ortopedista me dizendo que a lesão seria crônica, finalmente encontrei um ortopedista que me deu uma luz e ele indicou o atendimento da clínica em que o Kaique atende. Sempre muito atencioso e claro quanto aos procedimentos e o processo em que eu teria que passar. Após algumas sessões, já comecei a notar resultados. Bom, o resultado final foi que depois de um pequeno período realizando meu acompanhamento, finalmente o resultado veio. Consegui me curar por completo e voltar a realizar o futebol normalmente, só tenho a agradecer por toda atenção, profissionalismo e capacidade do Kaique, sou muito grato por tudo.",
        authorImage: "images/author-4.jpg",
        authorName: "Gustavo R.",
        authorTitle: "Paciente"
    },
    {
        rating: 5,
        content: "O Kaique é um fisioterapeuta com um trabalho maravilhoso e admirável. Hoje sou outra pessoa, reabilitada e fazendo o que eu mais gosto de fazer: treino funcional.",
        authorImage: "images/author-4.jpg",
        authorName: "Eliana B.",
        authorTitle: "Paciente"
    },
    {
        rating: 5,
        content: "Tive uma fratura do cotovelo e fiz cirurgia, após liberação para fisio fiz as sessões com Kaique para voltar a dobrar e esticar o braço normalmente, graças ao trabalho dele voltei 100% aos movimentos com função perfeita e hoje faço musculação pesada sem dores ou qualquer limitação.",
        authorImage: "images/author-1.jpg",
        authorName: "Victor F.",
        authorTitle: "Paciente"
    },
    {
        rating: 5,
        content: "Coloquei uma prótese de quadril direito. Foi muito difícil no início, porém meu fisioterapeuta Kaique fez toda a diferença em minha recuperação. Ele no início me disse que eu teria vida normal, mas eu não botei muita fé. Hoje corro, pulo, trabalho normal e devido a isso só posso dizer que ele é um profissional nota 10.",
        authorImage: "images/author-2.jpg",
        authorName: "Wanderley",
        authorTitle: "Paciente"
    },
    {
        rating: 5,
        content: "Minha experiência com o Kaique foi incrível. Ele acompanhou de perto toda a minha evolução e não hesitou em ajustar meu tratamento a medida que eu ia respondendo às sessões. Além disso, ele foi muito humano em todos os atendimento e sempre entendeu que a minha condição está ligada diretamente com o meu emocional, tendo então muito cuidado em sempre entender como eu estava em cada sessão.",
        authorImage: "images/author-3.jpg",
        authorName: "Vitória M.",
        authorTitle: "Paciente"
    },
    {
        rating: 5,
        content: "Sofri uma luxação de ombro. Já passei por outros atendimentos de fisioterapia antes, mas nenhum se compara à experiência que tive com o Kaique. Foi a primeira vez que realmente senti o que é passar por uma reabilitação de verdade, com um acompanhamento fisioterapêutico de qualidade. Eu tinha muitos medos e ele foi muito atencioso, paciente e empático em todas as situações, me escutou e me ajudou a entender o processo. Sem dúvidas, fez toda a diferença na minha recuperação!",
        authorImage: "images/author-4.jpg",
        authorName: "Bruna B.",
        authorTitle: "Paciente"
    }
];

// Function to generate testimonial HTML
function generateTestimonialHTML(testimonial) {
    let starsHTML = '';
    for (let i = 0; i < testimonial.rating; i++) {
        starsHTML += '<i class="fa-solid fa-star"></i>';
    }

    return `
    <div class="swiper-slide">
        <div class="testimonial-item">
            <div class="testimonial-header">
                <div class="testimonial-rating">
                    ${starsHTML}
                </div>
                <div class="testimonial-content">
                    <p>${testimonial.content}</p>
                </div>
            </div>
            <div class="testimonial-body">
                <div class="author-image">
                    <figure class="image-anime">
                        <img src="${testimonial.authorImage}" alt="${testimonial.authorName}">
                    </figure>
                </div>            
                <div class="author-content">
                    <h3>${testimonial.authorName}</h3>
                    <p>${testimonial.authorTitle}</p>
                </div>
            </div>
        </div>
    </div>
    `;
}

// Function to render testimonials in a swiper container
function renderTestimonials(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    testimonials.forEach(testimonial => {
        container.innerHTML += generateTestimonialHTML(testimonial);
    });
}

// Export for use in other files
window.testimonialSystem = {
    testimonials,
    generateTestimonialHTML,
    renderTestimonials
};
