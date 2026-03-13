import { useState } from 'react';
import { Zap, TrendingUp, Users, Search, Package, DollarSign, Compass } from 'lucide-react';

interface Skill {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  category: 'economy' | 'opportunity';
  time: string;
  schedule?: string;
  example: string;
}

const skills: Skill[] = [
  {
    id: 'context-compression',
    name: 'Context Compression',
    icon: <DollarSign className="w-6 h-6" />,
    description: 'Comprime histórico de conversa para reduzir tokens gastos em 20-40%',
    category: 'economy',
    time: '⚡ Automático',
    example: 'Usa automaticamente antes de respostas grandes',
  },
  {
    id: 'llm-prompt-optimize',
    name: 'Prompt Optimizer',
    icon: <Zap className="w-6 h-6" />,
    description: 'Otimiza seus prompts para gastar 15-30% menos tokens',
    category: 'economy',
    time: '⚡ Automático',
    example: 'Refina sua pergunta automaticamente',
  },
  {
    id: 'cost-optimization',
    name: 'Cost Analyzer',
    icon: <DollarSign className="w-6 h-6" />,
    description: 'Identifica gargalos de custo em infraestrutura cloud',
    category: 'economy',
    time: '⏱️ 15 min',
    example: 'Analisa AWS/GCP/Azure para encontrar desperdícios',
  },
  {
    id: 'apify-trend-analysis',
    name: 'Trend Analyzer',
    icon: <TrendingUp className="w-6 h-6" />,
    description: 'Identifica tendências emergentes em tempo real',
    category: 'opportunity',
    time: '🌅 Manhã (09:00)',
    schedule: 'Diário',
    example: 'Qual é a tendência emergente em marketing em 2026?',
  },
  {
    id: 'apify-competitor-intelligence',
    name: 'Competitor Intel',
    icon: <Users className="w-6 h-6" />,
    description: 'Analisa estratégia, preço e posicionamento de concorrentes',
    category: 'opportunity',
    time: '🌞 Meio-dia (12:00)',
    schedule: 'Diário',
    example: 'Qual estratégia de preço meus top 3 concorrentes usam?',
  },
  {
    id: 'apify-market-research',
    name: 'Market Validator',
    icon: <Search className="w-6 h-6" />,
    description: 'Valida viabilidade de oportunidade antes de investir',
    category: 'opportunity',
    time: '🌆 Tarde (15:00)',
    schedule: 'Diário',
    example: 'Este mercado é realmente promissor? Qual preço cobrar?',
  },
  {
    id: 'apify-lead-generation',
    name: 'Lead Generator',
    icon: <Package className="w-6 h-6" />,
    description: 'Gera leads B2B/B2C automaticamente de múltiplas plataformas',
    category: 'opportunity',
    time: '📞 On-demand',
    example: 'Gere 100 leads de empresas SaaS no Brasil',
  },
];

export function MeuArsenal() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'economy' | 'opportunity'>('all');
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const filtered = activeCategory === 'all' 
    ? skills 
    : skills.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-slate-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Compass className="w-8 h-8 text-amber-400" />
            <h1 className="text-4xl font-bold">Meu Arsenal</h1>
          </div>
          <p className="text-slate-400 text-lg">
            7 skills principais para encontrar oportunidades e economizar custos
          </p>
        </div>

        {/* Filtros */}
        <div className="flex gap-3 mb-8">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              activeCategory === 'all'
                ? 'bg-amber-500 text-slate-900'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            ✨ Todas (7)
          </button>
          <button
            onClick={() => setActiveCategory('economy')}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              activeCategory === 'economy'
                ? 'bg-green-500 text-slate-900'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            💰 Economia (3)
          </button>
          <button
            onClick={() => setActiveCategory('opportunity')}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              activeCategory === 'opportunity'
                ? 'bg-blue-500 text-slate-900'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            🚀 Oportunidades (4)
          </button>
        </div>

        {/* Grid de Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filtered.map(skill => (
            <button
              key={skill.id}
              onClick={() => setSelectedSkill(skill)}
              className="bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 rounded-xl p-6 transition-all text-left"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-amber-400">{skill.icon}</div>
                <div>
                  <h3 className="font-bold text-lg">{skill.name}</h3>
                  <p className="text-sm text-slate-400">{skill.time}</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm mb-3">{skill.description}</p>
              <div className="text-xs text-amber-400">Clique para detalhes →</div>
            </button>
          ))}
        </div>

        {/* Modal de Detalhes */}
        {selectedSkill && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 max-w-2xl w-full">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-amber-400 text-4xl">{selectedSkill.icon}</div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">{selectedSkill.name}</h2>
                  <p className="text-slate-400">{selectedSkill.time}</p>
                </div>
              </div>

              <p className="text-slate-300 mb-6">{selectedSkill.description}</p>

              <div className="bg-slate-900 rounded-lg p-4 mb-6 border border-slate-700">
                <h4 className="font-bold text-amber-400 mb-2">📝 Exemplo de Uso:</h4>
                <p className="text-slate-300 italic">"{selectedSkill.example}"</p>
              </div>

              {selectedSkill.schedule && (
                <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4 mb-6">
                  <h4 className="font-bold text-blue-400 mb-2">📅 Agendamento:</h4>
                  <p className="text-slate-300">{selectedSkill.schedule}</p>
                </div>
              )}

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    // Copia o comando para usar
                    const command = `/${selectedSkill.id} ${selectedSkill.example}`;
                    navigator.clipboard.writeText(command);
                    alert('Comando copiado! Cole no chat com Ambern.');
                  }}
                  className="flex-1 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 rounded-lg transition-all"
                >
                  ✅ Copiar Comando
                </button>
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="flex-1 bg-slate-700 hover:bg-slate-600 text-slate-100 font-bold py-3 rounded-lg transition-all"
                >
                  ❌ Fechar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Rodapé */}
        <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
          <p className="mb-2">💡 Dica: Seus lembretes automáticos vão sugerir qual skill usar a cada hora</p>
          <p className="text-sm">Ou copie o comando acima e cole no chat</p>
        </div>
      </div>
    </div>
  );
}
