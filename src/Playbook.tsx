import React, { useState } from 'react';
import { 
  BookOpen, 
  Target, 
  BarChart3, 
  Settings, 
  Briefcase, 
  RefreshCcw, 
  PhoneCall, 
  CalendarCheck, 
  Database,
  Info
} from 'lucide-react';

// --- COMPONENTES DE UI (Minimalistas) ---

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl font-semibold text-slate-900 mb-6 tracking-tight">{children}</h2>
);

const TextBody = ({ children }: { children: React.ReactNode }) => (
  <p className="text-slate-600 leading-relaxed mb-6">{children}</p>
);

const RoleCard = ({ title, icon: Icon, description }: { title: string, icon: any, description: string }) => (
  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
    <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-100 transition-colors">
      <Icon className="w-5 h-5 text-teal-600" />
    </div>
    <h3 className="text-lg font-medium text-slate-900 mb-2">{title}</h3>
    <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
  </div>
);

const MetricBlock = ({ title, type, children }: { title: string, type: 'neutral' | 'success' | 'danger', children: React.ReactNode }) => {
  const styles = {
    neutral: 'border-l-teal-500 bg-slate-50',
    success: 'border-l-emerald-500 bg-emerald-50/50',
    danger: 'border-l-rose-500 bg-rose-50/50',
  };

  return (
    <div className={`p-5 rounded-r-xl border-l-4 ${styles[type]} mb-4`}>
      <h4 className="text-sm font-semibold text-slate-900 mb-2">{title}</h4>
      <div className="text-sm text-slate-600 space-y-2">{children}</div>
    </div>
  );
};

// --- MÓDULOS DE CONTEÚDO ---

const ModuloIntroducao = () => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="mb-12">
      <span className="text-teal-600 font-semibold tracking-wider text-sm uppercase mb-2 block">Bem-vindo</span>
      <h1 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Playbook BrightDash</h1>
      <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
        O mapa definitivo da nossa metodologia comercial. Previsibilidade e alta performance em vendas através de processos e ciência de dados.
      </p>
    </div>

    <SectionTitle>A Metodologia e Especialização</SectionTitle>
    <TextBody>
      O BrightDash foi construído com base nas melhores práticas de <strong>Receita Previsível (Predictable Revenue)</strong>. Acreditamos que vendas não é arte, é processo e matemática. Para que um motor de vendas funcione em alta rotação, é fundamental dividir o processo em etapas claras.
    </TextBody>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      <RoleCard 
        icon={Target} 
        title="Pré-Vendas (SDR / BDR)" 
        description="Os caçadores. Foco exclusivo em prospectar, aquecer leads, qualificar e agendar reuniões. A meta é gerar oportunidades válidas." 
      />
      <RoleCard 
        icon={Briefcase} 
        title="Vendas (Closer)" 
        description="Os fechadores. Recebem as reuniões agendadas, conduzem a negociação e focam 100% em converter a oportunidade em receita." 
      />
      <RoleCard 
        icon={RefreshCcw} 
        title="Vendedor ponta a ponta (FullCycle)" 
        description="Para operações enxutas, o mesmo profissional prospecta e fecha. O sistema cruza os dados de ponta a ponta sem perder a visão." 
      />
    </div>
  </div>
);

const ModuloPreVendas = () => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="mb-10">
      <h1 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">O Funil de Pré-Vendas</h1>
      <p className="text-slate-500">Gerando a demanda. O sucesso do fechamento amanhã depende do que o Pré-vendas faz hoje.</p>
    </div>

    <div className="space-y-12">
      <section>
        <div className="flex items-center gap-3 mb-6">
          <PhoneCall className="text-teal-600 w-6 h-6" />
          <h3 className="text-xl font-semibold text-slate-900">1. Produtividade (O Esforço Diário)</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <MetricBlock title="Cadastros" type="neutral">Combustível da máquina. Quantos leads novos entraram na base no período.</MetricBlock>
          <MetricBlock title="Cadência (Tentativas)" type="neutral">Volume de ações realizadas. Se a cadência cai, o funil seca na semana seguinte.</MetricBlock>
          <MetricBlock title="Em Contato" type="neutral">Taxa de conexão. O lead atendeu ou respondeu? Crucial para validar a lista e o canal.</MetricBlock>
          <MetricBlock title="Reuniões Agendadas" type="neutral">O resultado final e palpável do esforço diário de prospecção.</MetricBlock>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-6">
          <BarChart3 className="text-teal-600 w-6 h-6" />
          <h3 className="text-xl font-semibold text-slate-900">2. A Qualificação (O Filtro de Qualidade)</h3>
        </div>
        <TextBody>Não basta agendar reuniões, é preciso agendar com a pessoa certa. O sistema rastreia o ciclo de vida do lead para definir se ele tinha o perfil adequado.</TextBody>
        
        <div className="space-y-4 mb-8">
          <MetricBlock title="Qualificados Positivos (QP)" type="success">
            Medido como reuniões agendadas que <strong>viraram reunião realizada</strong>. O negócio chegou em <em>Reunião Agendada</em> (SDR) e houve confirmação de <em>Realizada</em> (Closer).
          </MetricBlock>
          <MetricBlock title="Qualificados Negativos (QN)" type="danger">
            Negócios perdidos (status LOST) enquanto estavam na fase de <em>Reunião Agendada</em>. O famoso "não-qualificado" que caiu no ponto de agenda.
          </MetricBlock>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-6">
          <CalendarCheck className="text-teal-600 w-6 h-6" />
          <h3 className="text-xl font-semibold text-slate-900">3. Assertividade da Agenda (Volume vs. Qualidade)</h3>
        </div>
        <TextBody>De nada adianta um SDR bater a meta agendando dezenas de reuniões se a maioria dos leads não comparece ou não tem perfil de compra. Um volume alto de agendamentos isolado não define um bom SDR; a verdadeira métrica de sucesso é a qualidade e o comparecimento dessas agendas.</TextBody>
        
        <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
          <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
            <Info className="w-4 h-4 text-teal-600" /> Como funciona na prática?
          </h4>
          <p className="text-sm text-slate-600 mb-4">
            A <strong>Assertividade da Agenda</strong> compara as <em>Reuniões Agendadas</em> com os <em>Qualificados Positivos</em> (reuniões que de fato aconteceram e tinham o perfil correto). 
          </p>
          <div className="bg-white p-4 rounded-lg border border-slate-200 text-sm text-slate-600">
            <strong>Exemplo prático:</strong> Se o seu SDR agendou <strong>10 reuniões</strong> nesta semana, mas apenas <strong>6 leads compareceram e foram validados</strong> pelo Closer, a assertividade é de <strong>60%</strong>. Os outros 4 podem ter sido faltas (No-Show) ou leads que compareceram mas foram desqualificados na demonstração. 
            <br/><br/>
            Para melhorar esse índice, o SDR precisa refinar as perguntas de qualificação na abordagem inicial e engajar melhor o lead para garantir seu compromisso com a reunião.
          </div>
        </div>
      </section>
    </div>
  </div>
);

const ModuloTecnico = () => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="mb-10">
      <h1 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">Cálculos e Motor</h1>
      <p className="text-slate-500">Entenda de onde vêm os números, como eles são calculados e o porquê de cada métrica ser importante para a gestão (Versão 0.4.0).</p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <Database className="w-6 h-6 text-teal-600 mb-4" />
        <h3 className="text-lg font-semibold text-slate-900 mb-2">Motor Event-Driven</h3>
        <p className="text-sm text-slate-600 mb-4">
          As métricas são atualizadas baseadas em eventos do CRM: Criação de negócio, Mudança de fase, Mudança de status (WON/LOST) e Criação de tarefas.
        </p>
        <div className="bg-amber-50 text-amber-800 text-xs p-3 rounded-lg border border-amber-200 flex gap-2">
          <Info className="w-4 h-4 shrink-0" />
          <span>Fases não mapeadas aos Marcos Semânticos entram como IGNORAR e não entram nos cálculos.</span>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <RefreshCcw className="w-6 h-6 text-teal-600 mb-4" />
        <h3 className="text-lg font-semibold text-slate-900 mb-2">Gerenciamento de Cache (Redis)</h3>
        <ul className="text-sm text-slate-600 space-y-2 list-disc pl-4">
          <li>Métricas não são calculadas "do zero" ao abrir o dash. Elas são incrementadas.</li>
          <li>Rotina mensal zera os dados operacionais no 1º dia do mês (exceto gerentes).</li>
          <li>Sincronização retroativa reconstrói os números de ~3 meses.</li>
        </ul>
      </div>
    </div>

    <div className="mt-12">
      <SectionTitle>4. Pré-Vendas (Operacional): Regras de Cálculo</SectionTitle>
      <TextBody>As métricas operacionais refletem o esforço do usuário em tempo real.</TextBody>
      <div className="grid grid-cols-1 gap-4">
        <MetricBlock title="Cadastros" type="neutral">
          <p>Incrementa na criação do negócio ou ao entrar na fase <strong>PRE_VENDAS_CADASTRO</strong>.</p>
          <p className="mt-2 text-teal-700 font-medium">Por que importa?</p>
          <p>É o oxigênio do seu funil. Sem volume no topo, não haverá vendas no fundo.</p>
          <p className="mt-2 text-slate-500 italic text-xs border-t border-slate-200 pt-2">
            Exemplo: Se a sua conversão é de 1% para fechar um contrato, e a meta são 5 vendas, o sistema precisa mostrar pelo menos 500 novos cadastros trabalhados no mês.
          </p>
        </MetricBlock>

        <MetricBlock title="Cadência / Tentativas" type="neutral">
          <p>Incrementa quando o negócio passa pela fase <strong>PRE_VENDAS_CADENCIA</strong> (medido pelo fluxo do funil, não por contagem manual).</p>
          <p className="mt-2 text-teal-700 font-medium">Por que importa?</p>
          <p>Mede a consistência do esforço. Um SDR que não cadencia, não gera volume de conversas.</p>
          <p className="mt-2 text-slate-500 italic text-xs border-t border-slate-200 pt-2">
            Exemplo: O lead não atendeu na segunda-feira, mas na quarta-feira o SDR o moveu para a etapa de "Follow-up" ou "Tentativa 3". Isso gera o incremento da cadência.
          </p>
        </MetricBlock>

        <MetricBlock title="Em Contato" type="neutral">
          <p>Incrementa ao entrar na fase <strong>PRE_VENDAS_EM_CONTATO</strong>.</p>
          <p className="mt-2 text-teal-700 font-medium">Por que importa?</p>
          <p>Mostra a taxa real de conexão e valida a qualidade da sua lista de prospecção.</p>
          <p className="mt-2 text-slate-500 italic text-xs border-t border-slate-200 pt-2">
            Exemplo: O time ligou para 100 empresas, mas apenas 15 contatos foram estabelecidos (15%). Pode indicar que os telefones estão desatualizados ou o horário da ligação é ruim.
          </p>
        </MetricBlock>

        <MetricBlock title="Reuniões Agendadas" type="neutral">
          <p>Incrementa ao entrar na fase <strong>PRE_VENDAS_REUNIAO_AGENDADA</strong>. O sistema salva o ID do negócio para rastreá-lo no futuro.</p>
          <p className="mt-2 text-teal-700 font-medium">Por que importa?</p>
          <p>É a principal meta de entrega do SDR e o que alimenta o Vendedor.</p>
        </MetricBlock>
      </div>
    </div>

    <div className="mt-12">
      <SectionTitle>5. Lógica Gerencial e de Perdas (Pré-Vendas)</SectionTitle>
      <TextBody>A visão gerencial correlaciona IDs para definir a qualidade da entrega do SDR.</TextBody>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <MetricBlock title="Qualificados Positivos (QP)" type="success">
          <p>Acionado quando uma reunião é reconhecida como <strong>realizada</strong> pelo Vendedor, vinculada ao ID agendado pelo SDR.</p>
          <p className="mt-2 text-emerald-700 font-medium text-xs">Exemplo prático:</p>
          <p className="text-xs text-slate-500">O SDR agendou com a 'Empresa X'. Quando o Closer arrastar a 'Empresa X' para 'Reunião Realizada' no CRM, o SDR ganha 1 QP.</p>
        </MetricBlock>
        
        <MetricBlock title="Qualificados Negativos (QN)" type="danger">
          <p>Entra quando o negócio vira <strong>LOST</strong> ainda no marco de agendamento do SDR.</p>
          <p className="mt-2 text-rose-700 font-medium text-xs">Exemplo prático:</p>
          <p className="text-xs text-slate-500">O SDR agendou, mas o Closer ligou para o cliente e descobriu que ele não tinha dinheiro (Falta de Budget) e deu LOST sem nem fazer a demonstração.</p>
        </MetricBlock>
      </div>
    </div>

    <div className="mt-12">
      <SectionTitle>6. Vendas (Operacional): Regras de Cálculo</SectionTitle>
      <TextBody>Acompanha o funil de negociação e fechamento de receita.</TextBody>
      <div className="grid grid-cols-1 gap-4">
        <MetricBlock title="Reuniões Realizadas" type="neutral">
          <p>Conta 1 quando o negócio entra na fase <strong>VENDAS_REUNIAO_REALIZADA</strong>.</p>
          <p className="mt-2 text-teal-700 font-medium">Por que importa?</p>
          <p>Marca o início real da negociação. O Closer assumiu o bastão.</p>
        </MetricBlock>
        
        <MetricBlock title="Propostas" type="neutral">
          <p>Ao entrar em <strong>VENDAS_PROPOSTA</strong>, o sistema soma 1 no volume e soma o valor (R$) do negócio, atualizando o Ticket Médio.</p>
          <p className="mt-2 text-teal-700 font-medium">Por que importa?</p>
          <p>Mostra quanto dinheiro há na mesa (Pipeline financeiro) prestes a ser fechado.</p>
          <p className="mt-2 text-slate-500 italic text-xs border-t border-slate-200 pt-2">
            Exemplo: Se o vendedor apresentou valores para 10 empresas que somam R$ 100 mil, sabemos que ele tem boas chances de fechar a meta do mês se mantiver sua taxa de conversão padrão.
          </p>
        </MetricBlock>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <MetricBlock title="Negócios Ganhos (WON)" type="success">
            <p>Quando vira WON, soma 1 em ganhos e o valor no total em R$.</p>
            <p className="mt-2 text-emerald-700 font-medium text-xs">A métrica que paga as contas da empresa.</p>
          </MetricBlock>
          <MetricBlock title="Negócios Perdidos (LOST)" type="danger">
            <p>Soma a quantidade de perdas e registra o motivo para gerar o gráfico gerencial.</p>
          </MetricBlock>
        </div>
      </div>
    </div>

    <div className="mt-12">
      <SectionTitle>7. Visão Gerencial de Vendas e Perdas</SectionTitle>
      <TextBody>Onde os diretores encontram insights para mudar o rumo da empresa.</TextBody>
      <div className="grid grid-cols-1 gap-4">
        <MetricBlock title="Motivos de Perda por Etapa" type="danger">
          <p>O sistema separa inteligentemente onde ocorreu o "sangramento" do funil:</p>
          <ul className="list-disc pl-4 space-y-1 mt-2 text-sm">
            <li><strong>Reunião Marcada:</strong> LOST antes do Closer atuar.</li>
            <li><strong>Proposta:</strong> LOST após envio de valores (Ex: Perdeu pro concorrente).</li>
            <li><strong>Negociação:</strong> LOST em outras etapas do meio do funil.</li>
          </ul>
          <p className="mt-3 text-rose-700 font-medium">Por que importa?</p>
          <p className="text-sm">É o diagnóstico perfeito para treinamento.</p>
          <p className="mt-2 text-slate-500 italic text-xs border-t border-slate-200 pt-2">
            Exemplo: Se a maior perda na fase de Proposta for "Achou o preço alto", o vendedor precisa de treinamento para gerar percepção de valor, ou o marketing está atraindo empresas muito pequenas (sem budget).
          </p>
        </MetricBlock>
      </div>
    </div>

    <div className="mt-12">
      <SectionTitle>8. Metas e Inteligência</SectionTitle>
      <TextBody>Como o sistema projeta o sucesso do time.</TextBody>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <MetricBlock title="Atualização Automática" type="neutral">
          <p>Seja meta de <strong>Quantidade</strong> ou de <strong>Valor</strong>, cada evento de negócio no CRM move a barra de progresso da meta em tempo real.</p>
        </MetricBlock>
        <MetricBlock title="Insights Diários (O GPS)" type="neutral">
          <p>O sistema cruza o que foi feito com os dias restantes do mês.</p>
          <p className="mt-2 text-teal-700 font-medium text-xs">Exemplo prático:</p>
          <p className="text-xs text-slate-500">"Faltam 5 reuniões para a sua meta. Faltando 10 dias úteis no mês, você precisa agendar 0.5 reuniões por dia para chegar lá."</p>
        </MetricBlock>
      </div>
    </div>

  </div>
);

// --- COMPONENTE PRINCIPAL (LAYOUT) ---

export default function PlaybookBrightDash() {
  const [activeTab, setActiveTab] = useState('intro');

  const navItems = [
    { id: 'intro', label: '1. A Metodologia', icon: BookOpen },
    { id: 'prevendas', label: '2. Funil de Pré-Vendas', icon: Target },
    { id: 'tecnico', label: '3. Cálculos e Motor', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans">
      
      {/* SIDEBAR MINIMALISTA */}
      <aside className="w-full md:w-72 bg-white border-r border-slate-200 md:min-h-screen flex-shrink-0 sticky top-0 z-10">
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-sm">
              <img src="/logo-svg.svg" alt="Logo" />
            </div>
            <span className="font-bold text-xl text-slate-900 tracking-tight">Playbook</span>
          </div>

          <nav className="space-y-2">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 pl-3">Sumário</p>
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive 
                      ? 'bg-teal-50 text-teal-700' 
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <item.icon className={`w-4 h-4 ${isActive ? 'text-teal-600' : 'text-slate-400'}`} />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* ÁREA DE CONTEÚDO */}
      <main className="flex-1 p-6 md:p-12 lg:p-16 overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          {activeTab === 'intro' && <ModuloIntroducao />}
          {activeTab === 'prevendas' && <ModuloPreVendas />}
          {activeTab === 'tecnico' && <ModuloTecnico />}
        </div>
      </main>

    </div>
  );
}