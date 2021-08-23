import React from 'react';
import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import closeImg from '../../assets/close.svg';
import { Container, RadioBox, TansactionTypeContainer } from './style';
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
const [type, setType] = React.useState('deposit')

  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button" 
        onClick={onRequestClose} 
        className="react-modal-close">
        <img src={closeImg} alt="" />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>

        <input 
          placeholder="Título" 
        />

        <input 
          type="number"
          placeholder="Valor" 
        />

        <TansactionTypeContainer>
          <RadioBox
            type="button"
            isActive={type === 'deposit'}
            activeColor="green"
            onClick={() => { setType('deposit'); }}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            isActive={type === 'withdram'}
            activeColor="red"
            onClick={() => { setType('withdram'); }}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TansactionTypeContainer>

        <input 
          placeholder="Categoria" 
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
  </Modal>
  )
}