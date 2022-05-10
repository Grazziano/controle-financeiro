import React from 'react';
import ResumeItem from '../ResumeItem';
import * as C from './styles';

export default function Resume() {
  return (
    <C.Container>
      <ResumeItem />
      <ResumeItem />
      <ResumeItem />
    </C.Container>
  );
}
