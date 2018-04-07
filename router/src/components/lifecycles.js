import React, { Component } from 'react';

class  Life extends Component {
    state = {
        title:'Life cycles'
    };
    //1 get def props
    //2 set def states
    //3 before render
    componentWillMount(){
        console.log('before render')
    }
    componentWillUpdate(){

    }
    componentDidUpdate(){

    }

    shouldComponentUpdate(nextProps, nexState){
        console.log(this.state.title);
        console.log(nexState.title);

        if(nexState.title === 'something else'){
            return false
        }
        return true;
    }
    
    componentWillReceiveProps(){
        console.log('before reveive props');
    }

    componentWillUnmount(){
        console.log("unmount")
    }

    //4 render jsx

    render(){
        return(
            <div>
                <h3>{this.state.title}</h3>
                <div onClick={
                    () => this.setState({
                        title: "something else"
                    })
                }>Click to change</div>
            </div>
        )
    }
    //5 after jsx
    componentDidMount(){
        document.querySelector('h3').style.color = 'red'
    }
}

export default Life;