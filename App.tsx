
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { STEPS } from './constants';
import { AppState } from './types';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StepView from './components/StepView';

const STORAGE_KEY = 'caixa_checklist_state_2026';

const DEFAULT_STATE: AppState = {
  checkedItems: {},
  notes: {},
  financials: {
    lanceMax: 0,
    comissao: 0,
    itbi: 0,
    escritura: 0,
    registro: 0,
    iptu: 0,
    condominio: 0,
    desocupacao: 0,
  },
  dates: {
    pagamento: '',
    escritura: '',
    registro: '',
  },
  lastActiveStep: 0,
};

const App: React.FC = () => {
  const [state, setState] = useState<AppState>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : DEFAULT_STATE;
  });
  const [activeStepIndex, setActiveStepIndex] = useState(state.lastActiveStep || 0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Auto-save on state change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...state, lastActiveStep: activeStepIndex }));
  }, [state, activeStepIndex]);

  const toggleItem = (id: string) => {
    setState(prev => ({
      ...prev,
      checkedItems: {
        ...prev.checkedItems,
        [id]: !prev.checkedItems[id]
      }
    }));
  };

  const updateNote = (id: string, note: string) => {
    setState(prev => ({
      ...prev,
      notes: {
        ...prev.notes,
        [id]: note
      }
    }));
  };

  const updateFinancial = (field: keyof AppState['financials'], value: number) => {
    setState(prev => ({
      ...prev,
      financials: {
        ...prev.financials,
        [field]: value
      }
    }));
  };

  const updateDate = (field: keyof AppState['dates'], value: string) => {
    setState(prev => ({
      ...prev,
      dates: {
        ...prev.dates,
        [field]: value
      }
    }));
  };

  const totalItemsCount = useMemo(() => STEPS.reduce((acc, step) => acc + step.items.length, 0), []);
  const checkedItemsCount = useMemo(() => Object.values(state.checkedItems).filter(Boolean).length, [state.checkedItems]);
  const globalProgress = useMemo(() => (totalItemsCount === 0 ? 0 : Math.round((checkedItemsCount / totalItemsCount) * 100)), [checkedItemsCount, totalItemsCount]);

  const isStepCompleted = useCallback((index: number) => {
    const step = STEPS[index];
    if (step.items.length === 0) return true;
    return step.items.every(item => state.checkedItems[item.id]);
  }, [state.checkedItems]);

  const goToNextStep = () => {
    if (activeStepIndex < STEPS.length - 1) {
      setActiveStepIndex(activeStepIndex + 1);
      window.scrollTo(0, 0);
    }
  };

  const goToPrevStep = () => {
    if (activeStepIndex > 0) {
      setActiveStepIndex(activeStepIndex - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900">
      <Header 
        progress={globalProgress} 
        onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)} 
      />
      
      <div className="flex flex-1 pt-16">
        <Sidebar 
          steps={STEPS} 
          activeStepIndex={activeStepIndex} 
          onStepSelect={(idx) => {
            setActiveStepIndex(idx);
            setIsSidebarOpen(false);
          }}
          isStepCompleted={isStepCompleted}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        
        <main className="flex-1 p-4 md:p-8 lg:p-12 bg-gray-50 pb-24 lg:ml-72 transition-all">
          <div className="max-w-4xl mx-auto">
            <StepView 
              step={STEPS[activeStepIndex]} 
              state={state}
              onToggleItem={toggleItem}
              onUpdateNote={updateNote}
              onUpdateFinancial={updateFinancial}
              onUpdateDate={updateDate}
              isCompleted={isStepCompleted(activeStepIndex)}
              onNext={goToNextStep}
              onPrev={goToPrevStep}
              isLast={activeStepIndex === STEPS.length - 1}
              isFirst={activeStepIndex === 0}
            />
          </div>
        </main>
      </div>

      <footer className="fixed bottom-0 w-full bg-white border-t border-gray-200 py-3 px-6 text-center text-xs text-gray-500 z-40">
        <p>“Conteúdo educativo e independente, não afiliado à Caixa Econômica Federal. Baseado em editais públicos e práticas de mercado. Atualizado para 2026.”</p>
      </footer>
    </div>
  );
};

export default App;
