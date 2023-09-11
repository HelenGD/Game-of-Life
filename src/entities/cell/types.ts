export type CellType = 'dead' | 'live' | 'life';

export type Cell = {
  id: string;
  title: string;
  description: string;
  type: CellType;
};
