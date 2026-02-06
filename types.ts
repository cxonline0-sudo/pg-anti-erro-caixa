
export interface ChecklistItem {
  id: string;
  title: string;
  explanation: string;
  hasNote?: boolean;
}

export interface Step {
  id: number;
  title: string;
  description: string;
  items: ChecklistItem[];
  type?: 'default' | 'financial' | 'dates' | 'resources' | 'errors';
}

export interface AppState {
  checkedItems: Record<string, boolean>;
  notes: Record<string, string>;
  financials: {
    lanceMax: number;
    comissao: number;
    itbi: number;
    escritura: number;
    registro: number;
    iptu: number;
    condominio: number;
    desocupacao: number;
  };
  dates: {
    pagamento: string;
    escritura: string;
    registro: string;
  };
  lastActiveStep: number;
}
