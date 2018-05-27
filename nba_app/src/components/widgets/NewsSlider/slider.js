import React, { Component } from 'react';
import axios from 'axios';

import  SliderTempaltes  from './slider_tempalte'

class NewsSlider extends Component {

    state = {
        news: []
    };

    componentWillMount(){
        axios.get(`http://localhost:3004/articles?_start=0&_end=3`)
            .then( response => {
                this.setState({
                    news: response.data
                })
            })
    }

    render(){
        return(
            <SliderTempaltes data={this.state.news}/>
        )
    }
}

export default NewsSlider;