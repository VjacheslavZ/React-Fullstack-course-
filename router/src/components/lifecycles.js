import React, { PureComponent } from 'react';

class  Life extends PureComponent {
    //1 get def props
    //2 set def states
    state = {
        title:'Life cycles'
    };
    //3 before render
    // componentWillMount(){
    //     console.log('before render')
    // }
    // componentWillUpdate(){}
    // componentDidUpdate(){}

    // shouldComponentUpdate(nextProps, nexState){
    //     if(nexState.title === this.state.title){
    //         return false
    //     }
    //     return true;
    // }
    
    // componentWillReceiveProps(){
    //     console.log('before reveive props');
    // }
    //
    // componentWillUnmount(){
    //     console.log("unmount")
    // }

    //4 render jsx
    render(){
        console.log('RENDER');
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
    // componentDidMount(){
    //     document.querySelector('h3').style.color = 'red'
    // }
}

export default Life;