import React from 'react';
import './App.css';
import IdleTimerContainer from './components/IdleTimerContainer';
import ColorPicker from './components/ColorPicker';
import CreditCard from './components/CreditCard';
import DatePick from './components/DatePick';
import LoadingIndicator from './components/LoadingIndicator';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import DoughnutChart from './components/DoughnutChart';
import Icon from './components/Icon';
import ToastNotify from './components/ToastNotify';
import ModalToggle from './components/ModalToggle';
import ToolTip from './components/ToolTip';
import CountDigit from './components/CountDigit';
import VideoPlayer from './components/VideoPlayer';
import FormFormik from './components/FormFormik';


function App() {

  return (
    <div className='App'>
      <Icon></Icon>
      <FormFormik></FormFormik>
      <CreditCard></CreditCard>
      <LoadingIndicator></LoadingIndicator>
      <DatePick></DatePick>
      <ColorPicker></ColorPicker>
      <div className='chart'>
        <LineChart></LineChart>
        <BarChart></BarChart>
        <DoughnutChart></DoughnutChart>
      </div>
      <ToastNotify></ToastNotify>
      <ModalToggle></ModalToggle>
      <ToolTip></ToolTip>
      <IdleTimerContainer></IdleTimerContainer>
      <CountDigit></CountDigit>
      <VideoPlayer></VideoPlayer>
    </div>
  );
}

export default App;
