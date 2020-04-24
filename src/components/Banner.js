import React, { Component } from 'react';
import SearchFilterForm from './SearchFilterForm';

class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <SearchFilterForm />
            </div>
        );
    }
}

export default Banner;