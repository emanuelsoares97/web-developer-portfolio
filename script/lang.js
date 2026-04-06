const translations = {
    en: {
        // nav
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-projects': 'Projects',
        'nav-contact': 'Contact',
        // index
        'hero-greeting': "Hi I'm",
        'hero-desc1': "I'm passionate about creating efficient and scalable systems. With experience in Flask, Python and automation, I focus on building robust backend solutions.",
        'hero-desc2': "I'm currently working on projects involving automation, API development, and more. I love solving challenges and constantly learning new technologies to improve my skills.",
        'btn-about': 'About Me',
        'btn-contact': 'Contact',
        // about
        'about-title': 'About Me',
        'about-p1': "Hi! I'm Emanuel, a self-taught backend developer with a strong focus on Django. I started coding in November 2024 and quickly fell in love with building real, production-ready web applications.",
        'about-p2': "Django became my main tool for creating robust solutions — from fullstack platforms with authentication, email flows, and payment tracking, to REST APIs and automated pipelines. I love the way Django lets me move fast without sacrificing structure.",
        'about-p3': "I've shipped projects like a church management platform, a blog with CI/CD, a store system, and several automation tools — all available on my GitHub. Every project taught me something I couldn't learn from tutorials alone.",
        'about-p4': "My goal is to grow as a Django developer, work on challenging products, and eventually contribute to teams building things that matter. I'm currently open to junior backend opportunities.",
        // projects
        'projects-title': 'Some of my projects',
        'projects-technologies': 'Technologies:',
        'projects-repo': 'Repository',
        'projects-demo': 'Live Demo',
        // contacts
        'contact-title': 'Contact Me',
        'contact-subtitle': "If you'd like to get in touch, feel free to send me a message!",
        'contact-btn-send': 'Send',
        'contact-or': 'Or connect with me on:',
    },
    pt: {
        // nav
        'nav-home': 'Início',
        'nav-about': 'Sobre',
        'nav-projects': 'Projetos',
        'nav-contact': 'Contacto',
        // index
        'hero-greeting': 'Olá, sou',
        'hero-desc1': 'Sou apaixonado por criar sistemas eficientes e escaláveis. Com experiência em Flask, Python e automação, foco-me na construção de soluções backend robustas.',
        'hero-desc2': 'Atualmente trabalho em projetos de automação, desenvolvimento de APIs e muito mais. Adoro resolver desafios e aprender constantemente novas tecnologias para melhorar as minhas competências.',
        'btn-about': 'Sobre Mim',
        'btn-contact': 'Contacto',
        // about
        'about-title': 'Sobre Mim',
        'about-p1': 'Olá! Sou o Emanuel, um programador backend autodidata com foco em Django. Comecei a programar em novembro de 2024 e rapidamente me apaixonei por construir aplicações web reais e prontas para produção.',
        'about-p2': 'O Django tornou-se a minha principal ferramenta para criar soluções robustas — desde plataformas fullstack com autenticação, fluxos de email e controlo de pagamentos, até APIs REST e pipelines automatizados. Adoro a forma como o Django me permite avançar rapidamente sem perder estrutura.',
        'about-p3': 'Já coloquei em produção projetos como uma plataforma de gestão de igrejas, um blog com CI/CD, um sistema de loja e várias ferramentas de automação — todos disponíveis no meu GitHub. Cada projeto ensinou-me algo que nenhum tutorial conseguiria.',
        'about-p4': 'O meu objetivo é crescer como programador Django, trabalhar em produtos desafiantes e, eventualmente, contribuir para equipas que constroem coisas que importam. Estou atualmente à procura de oportunidades como junior backend.',
        // projects
        'projects-title': 'Alguns dos meus projetos',
        'projects-technologies': 'Tecnologias:',
        'projects-repo': 'Repositório',
        'projects-demo': 'Demo ao Vivo',
        // contacts
        'contact-title': 'Contacte-me',
        'contact-subtitle': 'Se quiser entrar em contacto, sinta-se à vontade para me enviar uma mensagem!',
        'contact-btn-send': 'Enviar',
        'contact-or': 'Ou conecte-se comigo em:',
    }
};

const placeholders = {
    en: { name: 'Your name', email: 'Your email', message: 'Your message' },
    pt: { name: 'O seu nome', email: 'O seu email', message: 'A sua mensagem' }
};

function applyLang(lang) {
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
        var key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key] !== undefined) {
            el.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
        var key = el.getAttribute('data-i18n-placeholder');
        if (placeholders[lang] && placeholders[lang][key] !== undefined) {
            el.placeholder = placeholders[lang][key];
        }
    });

    document.documentElement.lang = lang;

    document.querySelectorAll('[data-lang-opt]').forEach(function(span) {
        span.classList.toggle('active', span.getAttribute('data-lang-opt') === lang);
    });

    localStorage.setItem('lang', lang);

    if (typeof renderProjects === 'function') {
        renderProjects(lang);
    }
}

function toggleLang() {
    var current = localStorage.getItem('lang') || 'en';
    applyLang(current === 'en' ? 'pt' : 'en');
}

document.addEventListener('DOMContentLoaded', function() {
    var saved = localStorage.getItem('lang') || 'en';
    applyLang(saved);
});
