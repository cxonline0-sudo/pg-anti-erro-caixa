
import React from 'react';
import { Step } from './types';

export const STEPS: Step[] = [
  {
    id: 1,
    title: "Visão Geral",
    description: "Prepare seu mindset para o processo de arrematação. Entenda que arrematar é assumir as responsabilidades do edital.",
    items: [
      { id: "v1", title: "Entender que pode haver débitos no imóvel", explanation: "Nem todos os débitos são limpos pela Caixa. Alguns editais transferem IPTU e condomínio atrasados para o comprador. Verifique sempre a cláusula de ônus." },
      { id: "v2", title: "Saber que o imóvel pode estar ocupado", explanation: "Cerca de 80% dos imóveis de leilão estão ocupados. A desocupação é responsabilidade do arrematante (judicial ou amigável)." },
      { id: "v3", title: "Confirmar que terá dinheiro dentro do prazo", explanation: "Os prazos da Caixa são rígidos. Geralmente o pagamento integral ou sinal deve ocorrer em até 24h ou 5 dias úteis, conforme o edital." }
    ]
  },
  {
    id: 2,
    title: "Entendimento Básico",
    description: "Domine os termos e as modalidades de venda antes de prosseguir.",
    items: [
      { id: "e1", title: "Diferenciar leilão, licitação e venda direta", explanation: "Leilão é disputa aberta. Licitação é proposta fechada. Venda direta é quem chegar primeiro com o valor mínimo. As regras de cada um variam levemente." },
      { id: "e2", title: "Confirmar se aceita financiamento", explanation: "Verifique na matrícula ou no anúncio se o imóvel 'Aceita Financiamento'. Se não aceitar, você precisará de 100% de capital próprio." },
      { id: "e3", title: "Ler regras de desistência e multas", explanation: "Desistir após o lance pode gerar multas de 5% a 20% sobre o valor da proposta, além de suspensão de participar de novos leilões." },
      { id: "e4", title: "Anotar número do edital e código do imóvel", explanation: "Essas informações são essenciais para qualquer dúvida jurídica ou técnica durante o processo." }
    ]
  },
  {
    id: 3,
    title: "Análise do Edital",
    description: "O edital é a lei do leilão. Leia cada linha com atenção total.",
    items: [
      { id: "a1", title: "Prazo máximo de pagamento", explanation: "Verifique se é pagamento à vista em 24h ou se há possibilidade de sinal + parcelamento/FGTS." },
      { id: "a2", title: "Forma de pagamento permitida", explanation: "Alguns imóveis só aceitam dinheiro vivo (recursos próprios), outros aceitam financiamento pela própria Caixa." },
      { id: "a3", title: "Responsável por IPTU atrasado", explanation: "O edital dirá se a Caixa paga os débitos até a data da venda ou se o comprador assume tudo." },
      { id: "a4", title: "Responsável por condomínio atrasado", explanation: "Dívida de condomínio é 'propter rem' (segue o imóvel). Se o edital não disser expressamente que a Caixa paga, prepare o bolso." },
      { id: "a5", title: "Situação de ocupação do imóvel", explanation: "Confirme se consta como 'Ocupado'. Isso impacta no seu custo de desocupação e tempo de posse." },
      { id: "a6", title: "Penalidade por não pagar no prazo", explanation: "Geralmente envolve perda do sinal e multa administrativa pesada." }
    ],
    type: 'default'
  },
  {
    id: 4,
    title: "Viabilidade Financeira",
    description: "Calcule todos os custos ocultos. Nunca dê um lance baseado apenas no valor de venda.",
    items: [
      { id: "f1", title: "Tenho dinheiro para pagar no prazo", explanation: "Certifique-se que o saldo está em conta corrente e livre para transferência imediata." },
      { id: "f2", title: "Tenho reserva para custos extras", explanation: "Sempre reserve 5% a 10% a mais para imprevistos (reformas, taxas judiciais, etc)." }
    ],
    type: 'financial'
  },
  {
    id: 5,
    title: "Documentos do Comprador",
    description: "Mantenha sua pasta digital pronta. O tempo é seu inimigo após o lance.",
    items: [
      { id: "d1", title: "RG ou CNH", explanation: "Documento oficial com foto, dentro da validade." },
      { id: "d2", title: "CPF regular", explanation: "Verifique no site da Receita Federal. CPF suspenso impede a arrematação." },
      { id: "d3", title: "Certidão de estado civil", explanation: "Se for casado, precisará dos documentos do cônjuge também (regime de bens)." },
      { id: "d4", title: "Comprovante de renda", explanation: "Essencial se for utilizar financiamento bancário." },
      { id: "d5", title: "Comprovante de residência", explanation: "Atualizado (últimos 60 dias)." },
      { id: "d6", title: "Certidões exigidas no edital", explanation: "Alguns editais pedem certidões negativas de débitos federais." }
    ]
  },
  {
    id: 6,
    title: "Momento do Lance",
    description: "Foco e disciplina. Não deixe a emoção do leilão subir à cabeça.",
    items: [
      { id: "l1", title: "Conferi novamente o edital", explanation: "A última checagem antes de clicar em 'Confirmar Lance'." },
      { id: "l2", title: "Revisei custo total calculado", explanation: "O valor do lance é apenas parte do investimento total." },
      { id: "l3", title: "Tenho documentos prontos", explanation: "Tudo escaneado em PDF pronto para envio." },
      { id: "l4", title: "Tenho dinheiro disponível no prazo", explanation: "Confirmação final de liquidez." }
    ]
  },
  {
    id: 7,
    title: "Pós-Arrematação",
    description: "Você venceu o lance! Agora começa a fase burocrática crítica.",
    items: [
      { id: "p1", title: "Pagar valor/sinal dentro do prazo", explanation: "Não espere o último minuto. O comprovante deve ser enviado conforme as instruções recebidas." },
      { id: "p2", title: "Enviar comprovantes para responsável", explanation: "Geralmente ao leiloeiro ou à agência da Caixa vinculada ao edital." },
      { id: "p3", title: "Iniciar escritura", explanation: "Procure o cartório de notas para lavrar a escritura (ou contrato de financiamento que tem força de escritura)." },
      { id: "p4", title: "Acompanhar registro em cartório", explanation: "Só é dono quem registra. Leve a escritura ao Registro de Imóveis competente." },
      { id: "p5", title: "Transferir IPTU e condomínio", explanation: "Vá à prefeitura e administradora do condomínio com o registro em mãos." }
    ]
  },
  {
    id: 8,
    title: "Prazos Críticos",
    description: "Controle as datas. Perder um prazo aqui pode significar perder o imóvel.",
    items: [
      { id: "t1", title: "Configurei lembretes dessas datas", explanation: "Use o Google Calendar ou alarmes no celular. Prazos de edital não têm prorrogação amigável." }
    ],
    type: 'dates'
  },
  {
    id: 9,
    title: "Erros fatais",
    description: "Aprenda com quem já errou. Estes pontos causam os maiores prejuízos.",
    items: [
      { id: "err1", title: "Dar lance sem ter dinheiro no prazo", explanation: "Gera multa pesada e bloqueio do seu CPF no sistema de leilões da Caixa." },
      { id: "err2", title: "Ignorar débitos do imóvel", explanation: "Dívidas de condomínio de 10 anos podem custar mais que o próprio imóvel." },
      { id: "err3", title: "Assumir que o imóvel estará vazio", explanation: "Prepare-se para lidar com o ocupante. O custo emocional e financeiro da desocupação deve ser planejado." },
      { id: "err4", title: "Achar que sempre dará para financiar", explanation: "Muitos imóveis têm problemas na matrícula que impedem financiamento. Só compre se tiver plano B." }
    ],
    type: 'errors'
  },
  {
    id: 10,
    title: "Modelos e Recursos",
    description: "Ferramentas práticas para acelerar sua comunicação.",
    items: [],
    type: 'resources'
  }
];
