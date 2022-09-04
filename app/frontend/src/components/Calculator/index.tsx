import React, { useState } from 'react';

import { Container } from './styles';
import { calculatorButtons, MINIMUM_VALUE, signalStore } from '../../utils/data';

import { AiFillCloseCircle } from 'react-icons/ai';
import { MdOutlineNightlight, MdOutlineLightMode } from 'react-icons/md';
import { useAppSelector } from '../../redux/store/hooks';
import { toggleButton } from '../../redux/reducers/closeCalculator';
import { useAppDispatch } from '../../redux/store/store';

interface IItem {
  class: string;
  name: string;
}

const Calculator: React.FC = () => {
  const [buttonValue, setButtonValue] = useState('');
  const [changeStyle, setChangeStyle] = useState(true);

  const dispatch = useAppDispatch();
  const { buttonClose } = useAppSelector(state => state.buttonClose);

  const handleClick = (e: React.MouseEvent) => {
    const target = (e.target as HTMLButtonElement);
    const targetValue = target.textContent || '';
    if (targetValue === '=') {
      setButtonValue((eval(buttonValue)).toFixed(2).toString());
      return;
    } else if (buttonValue.length < MINIMUM_VALUE) {
      if(signalStore.includes(targetValue)
      && signalStore.includes(buttonValue[buttonValue.length - 1])) {
        const targetText = buttonValue.slice(0, -1) + targetValue;
        return setButtonValue(targetText as string);
      }
      const targetText =
        buttonValue + targetValue;
      return setButtonValue(targetText as string);
    }
  }

  const clearAll = () => {
    setButtonValue('');
  }

  const handleClickChange = () => {
    setChangeStyle((prev) => !prev);
  }

  return (
    <Container style={ { backgroundColor: !changeStyle ? 'black' : '#ffffff' } }>
      <article className="close-btn__container">
        <button
          type="button"
          className="btn-toggle-light"
          onClick={ handleClickChange }
          style={ { color: changeStyle ? 'black' : '#ffffff' } }
        >
          {
            changeStyle ?
            <MdOutlineLightMode />
            : <MdOutlineNightlight />
          }
          <span>
            {!changeStyle ? 'Modo noturno' : 'Modo diurno'}
          </span>
        </button>
        <button
          type="button"
          className="btn-close"
          style={ { color: changeStyle ? 'black' : '#ffffff' } }
          onClick={() => dispatch(toggleButton(!buttonClose))}
        >
          <AiFillCloseCircle />
          <span>
            Clique para fechar
          </span>
        </button>
      </article>
      <section>
        <article className="window-calc__container">
          <p>{ buttonValue }</p>
        </article>
        <article className="btn-calc__container">
          {
            calculatorButtons.map((item: IItem) => (
              <button
                type="button"
                className={ `btn ${item.class}` }
                key={ item.name }
                onClick={ item.name === 'AC' ? clearAll : handleClick }
              >
                { item.name }
              </button>
            ))
          }
        </article>
      </section>
    </Container>
  );
}

export default Calculator;
