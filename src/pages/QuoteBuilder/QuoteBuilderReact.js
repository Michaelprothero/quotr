import React from 'react'
import ListItem from '../../components/ListItem/ListItem'
import ItemAddField from '../../components/ItemAmendField/ItemAmendField'
import QuoteSummary from '../../components/QuoteSummary/QuoteSummary'
import FormButton from '../../components/FormButton/FormButton'
import { getSplitCurrencyValue } from '../../utils/stringUtils'

import { BUTTON_LABELS, FIELD_LABELS } from '../../constants/labels'
import { DISCLAIMER_TEXT } from '../../constants/copy';

import {
    ContentContainer,
    Footer,
    QuoteItemList,
    AddQuoteItem,
    AddItemButton,
    ValueContainer,
    ButtonContainer,
    DisclaimerText
} from './style'


export default class QuoteBuilderReact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedAddField: false,
        }
    }

    componentWillMount() {

    }

    checkEditMode() {
        return this.props.editMode
    }

    renderListItems() {
        const { quoteItems, selectedItem } = this.props;
        const itemSelected = selectedItem > -1;

        if (quoteItems && quoteItems.length > 0) {
            return quoteItems.map((item, index) => {
                return (
                    itemSelected && selectedItem === index ?
                        this.renderAddItemTextField(item, index) : this.renderListItem(item, index)
                )
            })
        }
    }

    renderListItem(item, index) {
        const splitString = getSplitCurrencyValue(item.value);
        return (
            <ListItem
                key={index}
                leftComponent={item.name}
                rightComponent={<ValueContainer><h2>{splitString[0]}<span>.{splitString[1]}</span>
                </h2>{this.renderEditItemButton(index)}</ValueContainer>}
            />
        )
    }

    renderEditItemButton(index) {
        if (!this.checkEditMode()) return null;
        const { selectEditItem } = this.props;
        return <div onClick={() => selectEditItem(index)}><h4> edit </h4></div>
    }

    renderAddItemTextField({ name, value }, index) {
        if (!this.checkEditMode()) return null;
        const { addQuoteItem, saveEditItem, selectEditItem, deleteEditedItem, selectedItem } = this.props;
        return (
            <AddQuoteItem>
                <ItemAddField
                    index={index}
                    selectedItem={selectedItem}
                    editingItem={index > -1}
                    addAction={addQuoteItem}
                    editAction={saveEditItem}
                    resetAction={selectEditItem}
                    deleteAction={deleteEditedItem}
                    itemPlaceholder={name ? name : FIELD_LABELS.ITEM_NAME} valuePlaceholder={`${value ? value : ''}`}/>
            </AddQuoteItem>
        )
    }

    renderAddItemButton() {
        const { selectedItem } = this.props;
        if (!this.checkEditMode()) return null;
        if (this.state.selectedAddField && selectedItem === -1 ) {
            return this.renderAddItemTextField({}, selectedItem)

        } else {
            return <AddItemButton onClick={() => this.addingNewItem()}><h2>{BUTTON_LABELS.ADD_QUOTE}</h2></AddItemButton>
        }
    }

    addingNewItem() {
        const { selectedItem, selectEditItem } = this.props;
        this.setState({ selectedAddField: true });
        if (selectedItem !== -1) {
            this.setState({ selectedAddField: true }, () => selectEditItem(-1));
        }
    }

    renderDisclaimerText() {
        if (!this.checkEditMode()) return null;
        return (
            <DisclaimerText>
                {DISCLAIMER_TEXT}
            </DisclaimerText>
        )
    }

    renderFormButtons() {
        if (!this.checkEditMode()) return null;
        const { discardChanges, saveQuote, quoteItems } = this.props;
        return (
            <ButtonContainer>
                <FormButton text={BUTTON_LABELS.DISCARD} action={() => discardChanges()} primary={false}/>
                <FormButton text={BUTTON_LABELS.UPDATE} action={() => saveQuote(quoteItems)} primary={true}/>
            </ButtonContainer>
        )
    }

    render() {
        const { totalLabels, totals } = this.props;
        return (
            <ContentContainer>
                <QuoteItemList>
                    {this.renderListItems()}
                    {this.renderAddItemButton()}
                </QuoteItemList>
                <Footer>
                    <QuoteSummary totalLabels={totalLabels} totals={totals}/>
                    {this.renderDisclaimerText()}
                    {this.renderFormButtons()}
                </Footer>
            </ContentContainer>
        )
    }
}