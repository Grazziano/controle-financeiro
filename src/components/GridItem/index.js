import React from 'react';
import {
  FaRegArrowAltCircleDown,
  FaRegArrowAltCircleUp,
  FaTrash,
} from 'react-icons/fa';
import * as C from './styles';

export default function GridItem({ itens, onDelete }) {
  return (
    <C.Tr>
      <C.Td>{itens.desc}</C.Td>
      <C.Td>{itens.amount}</C.Td>
      <C.Td alignCenter>
        {itens.expense ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </C.Td>
      <C.Td alignCenter>
        <FaTrash onClick={() => onDelete(itens.id)} />
      </C.Td>
    </C.Tr>
  );
}
