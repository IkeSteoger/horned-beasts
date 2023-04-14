import React from 'react';
import Form from 'react-bootstrap/Form'

class FilterForm extends React.Component {
    render() {
        return (
        <Form>
            <Form.Select onChange={this.props.onFilter}>
                <option value="10">No Filter</option>
                <option value="1">One Horn</option>
                <option value="2">Two Horns</option>
                <option value="3">Three Horns</option>
                <option value="100">One Hundred Horns</option>
            </Form.Select>
        </Form>
        )}
}

export default FilterForm;