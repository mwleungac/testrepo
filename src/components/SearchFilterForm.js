import React, { Component } from 'react';
import { DatePicker, Form, Input, Button, Radio } from 'antd';

const { RangePicker } = DatePicker

class SearchFilterForm extends Component {
    render() {
        return (
            <div className="searchForm">
                <Form>
                    <Form.Item label="I'm looking for a carpark from">
                    <RangePicker />
                    </Form.Item>
                    <Form.Item label="At">
                    <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item label="Advanced filter" name="layout">
                    <Radio.Group defaultValue="off">
                        <Radio.Button className="advanceFilterButton" value="off">Off</Radio.Button>
                        <Radio.Button className="advanceFilterButton" value="on">On</Radio.Button>
                    </Radio.Group>
                    </Form.Item>
                    <Button className="resultButton" type="primary">Show Results</Button>
                </Form>
            </div>
        );
    }
}

export default SearchFilterForm;