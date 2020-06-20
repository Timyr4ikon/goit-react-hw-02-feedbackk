import React, {useState} from 'react';
import './App.css';
import HeaderFeedback from './components/HeaderFeedback/HeaderFeedback';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';

function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    percentage: 0,
    isEmpty: true
  });

  const plusFeedBack = (key) => {
    const newValue = state[key] + 1;
    const totalValue = countTotalFeedback(1);
    const percentagePositive = countPositiveFeedbackPercentage(key, totalValue);
    const isEmptyFB = isEmptyFeedBacks(totalValue);
    setState({...state, [key]: newValue, total: totalValue, percentage: percentagePositive, isEmpty: isEmptyFB});
  };

  const isEmptyFeedBacks = (totalValue) => {
    if (totalValue > 0){
      return false
    }
  }

  const countTotalFeedback = (value) => {
    return state.total + value
  };

  const countPositiveFeedbackPercentage = (key, totalValue) => {
      let newGoodValue = state.good;
      if (key === 'good'){
        newGoodValue = state.good + 1;
      }
        const percentage = Number(newGoodValue / totalValue * 100);
        return percentage.toFixed(2)
  };

  return <>
      <Section title="Please leave feedback" render={() => (
        <HeaderFeedback plusFeedBack={plusFeedBack}/>
      )}/>
      <Section title="Statistics" render={() => (
        <Statistics statistic={state}/>
      )}/>
  </>
}

export default App;
