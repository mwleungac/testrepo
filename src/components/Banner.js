import React, { Component } from 'react';
import SearchFilterForm from './SearchFilterForm';

class Banner extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <div>
                    <Trailor />
                </div> */}
                <div className="formArea">
                    <SearchFilterForm />
                </div>
            </React.Fragment>
        );
    }
}

export default Banner;