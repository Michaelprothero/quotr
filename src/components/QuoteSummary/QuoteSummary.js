import React from 'react'
import ListItem from '../ListItem/ListItem'
import { getSplitCurrencyString } from '../../utils/stringUtils'
import { Container, BoldLabel, LargeAmountText }  from './style'

const QuoteSummary = (props) => {

    return (
        <Container>
            {props.totalLabels.order.map(key => {
                const splitString = getSplitCurrencyString(props.totals[key]);

                return React.createElement(ListItem, {
                    key: key,
                    leftComponent: <BoldLabel>{props.totalLabels[key]}</BoldLabel>,
                    rightComponent: key!== 'gross' ? <h2>£{splitString[0]}<span>.{splitString[1]}</span></h2> :
                        <LargeAmountText>£{splitString[0]}<span>.{splitString[1]}</span></LargeAmountText>,
                })
            })}
        </Container>
    );
};

export default QuoteSummary