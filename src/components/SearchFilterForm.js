import React, { Component } from 'react';
import { Form, Input, Button, Radio } from 'antd';

class SearchFilterForm extends Component {
    render() {
        return (
            <div className="searchForm">
                <Form>
                    <Form.Item label="I'm looking for a carpark from">
                    <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item label="At">
                    <Input placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item label="Advanced filter" name="layout">
                    <Radio.Group>
                        <Radio.Button value="horizontal">Off</Radio.Button>
                        <Radio.Button value="vertical">On</Radio.Button>
                    </Radio.Group>
                    </Form.Item>
                    <Button type="primary">Show Results</Button>
                </Form>
            </div>
        );
    }
}

export default SearchFilterForm;