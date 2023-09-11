import { ComponentProps, FC } from 'react';
import './create-button.css';

type Props = ComponentProps<'button'>;

const CreateButton: FC<Props> = (props) => {
  const { onClick } = props;

  return (
    <div className="button-container">
      <button className="create-button" type="button" onClick={onClick}>
        Сотворить
      </button>
    </div>
  );
};

export { CreateButton };
