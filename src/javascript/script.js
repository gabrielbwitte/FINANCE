const novoBtn = document.getElementById('novo-bnt');
const dashboardBtn = document.getElementById('dashboard-btn');
const trasacaoBtn = document.getElementById('transações-btn');
const planejamentoBtn = document.getElementById('planejamento-btn');
const configuracaoBtn = document.getElementById('configuracao-bnt');

novoBtn.addEventListener('click', () => {
    document.getElementById('iframe').src = 'object/novo.html'
});

dashboardBtn.addEventListener('click', () => {
    document.getElementById('iframe').src = 'object/dashboard.html'
});

trasacaoBtn.addEventListener('click', () => {
    document.getElementById('iframe').src = 'object/transacao.html'
});

planejamentoBtn.addEventListener('click', () => {
    document.getElementById('iframe').src = 'object/planejamento.html'
});

configuracaoBtn.addEventListener('click', () => {
    document.getElementById('iframe').src = 'object/configuracao.html'
})