import React from 'react';
import { 
    FBButton
} from './HeaderFeedback.styled';
import PropTypes from 'prop-types';

const HeaderFeedback = ({plusFeedBack}) => {
    const addGoodFB = () => {
        plusFeedBack('good')
    };
    const addNeutralFB = () => {
        plusFeedBack('neutral')
    };
    const addBadFB = () => {
        plusFeedBack('bad')
    };

    return <>
            <FBButton onClick={addGoodFB}>Good</FBButton>
            <FBButton onClick={addNeutralFB}>Neutral</FBButton>
            <FBButton onClick={addBadFB}>Bad</FBButton>
    </>
};

HeaderFeedback.propTypes = {
    plusFeedBack: PropTypes.any.isRequired
}

export default HeaderFeedback;