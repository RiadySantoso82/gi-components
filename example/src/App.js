import React, {useState } from 'react'

import { InputText, Btn, ModalBox, MsgBox, DialogAsk, MsgModal, NumericInput } from 'gi-components'
import 'gi-components/dist/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [isErr, setIsErr] = useState(false);
  const [msg, setMsg] = useState('');
  const [msgAsk, setMsgAsk] = useState('');
  const [msgModal, setMsgModal] = useState('');

  const showErr = () => {
    setIsErr(true)
    setMsg('Error')
  }
  const showInfo = () => {
    setIsErr(false)
    setMsg('Information')
  }
  const showMsgModalErr = () => {
    setMsgModal('Error Test Message Modal')
    setIsErr(true)
  }
  const showMsgModal = () => {
    setMsgModal('Test Message Modal')
    setIsErr(false)
  }

  return (
    <>
      <ModalBox show={showModal} title='Modal Box' body='Test' onHide={() => setShowModal(false)}/>
      <MsgBox msg='Message Box' isErr={isErr} msg={msg} onClickClose={() => setMsg('')}/>
      <DialogAsk msg={msgAsk} title='Ask' onClickClose={() => setMsgAsk('')} onClickYes={() => setMsgAsk('')} />
      <MsgModal msg={msgModal} onClickClose={() => {
        setMsgModal('')
        setIsErr(false)
      }} isErr={isErr}/>
      <InputText placeholder='test' caption='Text'/>
      <NumericInput caption='Number' />
      <Btn onClick={() => setShowModal(!showModal)}>Show Modal Box</Btn>
      <br/>
      <br/>
      <Btn onClick={() => showErr()}>Show Error Message Box</Btn>
      <br/>
      <br/>
      <Btn onClick={() => showInfo()}>Show Information Message Box</Btn>
      <br/>
      <br/>
      <Btn onClick={() => setMsgAsk('Asking SomeThing ?')}>Show Message ASK</Btn>
      <br/>
      <br/>
      <Btn onClick={() => showMsgModalErr()}>Show Message Modal Error</Btn>
      <br/>
      <br/>
      <Btn onClick={() => showMsgModal()}>Show Message Modal</Btn>
    </>
  )
}

export default App
