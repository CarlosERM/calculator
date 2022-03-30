import React from 'react'
import {KeyNumBody, KeyDelResetBody, KeyResetBody, KeyEqualBody} from './styles';

const Key = () => {
  return (
    <>
      <KeyNumBody>7</KeyNumBody>
      <KeyNumBody>8</KeyNumBody>
      <KeyNumBody>9</KeyNumBody>
      <KeyDelResetBody>DEL</KeyDelResetBody>
      <KeyNumBody>4</KeyNumBody>
      <KeyNumBody>5</KeyNumBody>
      <KeyNumBody>6</KeyNumBody>
      <KeyNumBody>+</KeyNumBody>
      <KeyNumBody>1</KeyNumBody>
      <KeyNumBody>2</KeyNumBody>
      <KeyNumBody>3</KeyNumBody>
      <KeyNumBody>-</KeyNumBody>
      <KeyNumBody>.</KeyNumBody>
      <KeyNumBody>0</KeyNumBody>
      <KeyNumBody>/</KeyNumBody>
      <KeyNumBody>x</KeyNumBody>
      <KeyResetBody>reset</KeyResetBody>
      <KeyEqualBody>=</KeyEqualBody>
    </>

  )
}

export default Key