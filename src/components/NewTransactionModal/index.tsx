import React, { FormEvent } from 'react';
import Modal from 'react-modal';
import { useTransactions } from '../../hooks/useTransactions';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';

import { Container, RadioBox, TansactionTypeContainer } from './style';
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();
const [title, setTitle] = React.useState('')
const [amount, setAmount] = React.useState(0)
const [category, setCategory] = React.useState('')
const [type, setType] = React.useState('deposit')

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
 
    await createTransaction(
      {
        title,
        amount,
        type,
        category
      }
    )
    setTitle('');
    setAmount(0);
    setType('deposit');
    setCategory('');
    onRequestClose();
  }

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

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input 
          placeholder="Título" 
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input 
          type="number"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
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
            isActive={type === 'withdraw'}
            activeColor="red"
            onClick={() => { setType('withdraw'); }}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TansactionTypeContainer>

        <input 
          placeholder="Categoria" 
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
  </Modal>
  )
}