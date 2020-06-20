import React from 'react';
import {
    StatItem
} from './Statistics.styled';
import Notification from '../Notification/Notification';
import PropTypes from 'prop-types';

const Statistics = ({statistic}) => {
    return statistic.isEmpty ? 
    (<>
        <Notification message={"No feedback given"}/>
    </>) 
    : 
    (<>
        <StatItem>Good: {statistic.good}</StatItem>
        <StatItem>Neutral: {statistic.neutral}</StatItem>
        <StatItem>Bad: {statistic.bad}</StatItem>
        <StatItem>Total: {statistic.total}</StatItem>
        <StatItem>Positive feedback: {statistic.percentage} %</StatItem>
    </>)
};

Statistics.propTypes = {statistic: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    percentage: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired,
    isEmpty: PropTypes.bool.isRequired
})}

export default Statistics;