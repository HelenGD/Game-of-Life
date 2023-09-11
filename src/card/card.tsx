import { FC } from 'react';
import './card.css';
import { CellType } from '../entities/cell/types';

const imgTypes: Record<CellType, string> = {
  dead: 'dead-cell-image',
  live: 'live-cell-image',
  life: 'life-image',
};

const gradietTypes: Record<CellType, string> = {
  dead: 'image-wrapper-dead-cell',
  live: 'image-wrapper-live-cell',
  life: 'image-wrapper-life',
};

type Props = {
  title: string;
  description: string;
  type: CellType;
};

export const Card: FC<Props> = (props) => {
  const { title, description, type } = props;

  return (
    <div className="cell-container">
      <div className={`image-wrapper ${gradietTypes[type]}`}>
        <div className={`image ${imgTypes[type]}`}></div>
      </div>
      <div className="cell-description">
        <p className="cell-title">{title}</p>
        <p className="cell-details">{description}</p>
      </div>
    </div>
  );
};
