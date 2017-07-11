import React from 'react'
import { Container, InputWrapper, CurrencyBox} from './style'
import InputField from '../InputField/InputField'
import ItemEditMenu from '../ItemEditMenu/ItemEditMenu'
import CurrencyInput from 'react-currency-input'

class ItemAmendField extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formValues: {
                name: props.itemPlaceholder,
                value: props.valuePlaceholder,
                floatValue: ''
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
        this.addItem = this.addItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.resetItem = this.resetItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    handleChange(event) {
        this.setState({ formValues: Object.assign({}, this.state.formValues, {
            [event.target.name]: event.target.value})
        });
    }

    handleCurrencyChange(maskedvalue, floatvalue) {
        this.setState({ formValues: Object.assign({}, this.state.formValues, {
            value: maskedvalue,
            floatvalue: floatvalue
        })})

    }

    addItem() {
        const { addAction } = this.props;
        addAction(this.state.formValues);
        this.resetItem()
    }

    editItem() {
        const { index, editAction } = this.props;
        editAction({index, item: this.state.formValues})
    }

    resetItem() {
        const { resetAction } = this.props;
        resetAction(-1)
        this.setState({ formValues: {}})

    }

    deleteItem() {
        const { index, deleteAction, selectedItem} = this.props;
        selectedItem > -1 ? deleteAction(index) : null;
        this.resetItem()
    }

    renderItemEditMenu() {
        const { editingItem, index, selectedItem } = this.props;
        return (
            <ItemEditMenu
                index={index}
                selectedItem={selectedItem}
                editingItem={editingItem}
                addItem={this.addItem}
                editItem={this.editItem}
                resetItem={this.resetItem}
                deleteItem={this.deleteItem}
            />
        )
    }

    validInput() {
        return this.state.formValues.name.length > 0 && this.state.formValues.value.length > 0
    }

    render() {
        const { placeholder } = this.props;
        const { name, value } = this.state.formValues;
        return (
            <Container>
                <InputWrapper>
                <InputField name={"name"} placeholder={placeholder} value={name}  onChange={this.handleChange}/>
                </InputWrapper>
                <CurrencyBox>
                    <h1>£</h1>
                    <CurrencyInput name={"value"} value={value} onChange={this.handleCurrencyChange} />
                </CurrencyBox>
                    {this.renderItemEditMenu()}
            </Container>
        )
    }
}

export default ItemAmendField