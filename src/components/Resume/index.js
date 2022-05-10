import React from 'react';
import ResumeItem from '../ResumeItem';
import * as C from './styles';
import {
  FaDollarSign,
  FaRegArrowAltCircleDown,
  FaRegArrowAltCircleUp,
} from 'react-icons/fa';

export default function Resume() {
  return (
    <C.Container>
      <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value="1000" />
      <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value="1000" />
      <ResumeItem title="Total" Icon={FaDollarSign} value="1000" />
    </C.Container>
  );
}
