import React, {Component} from 'react';
import UserTempalte from './user_template';

class User extends Component {
    state = {
        name: 'Jane',
        lastname: 'Jones',
        age: 25,
        hobbies: ['run', 'jump'],
        shanish: false,
        message(){console.log('hey')},
        car: {brand:'ford', model:'focus'},
        mother: 'Jane',
        color: 'red'
    };

    changeColor(){
        // this.setState({
        //     color: 'blue'
        // })
        this.refs.myColor.style.color = 'blue'
    }

    render(){
        const style = {
            color: this.state.color
        };
        return(
            <div>
                <h4 style={style} ref='myColor'>{this.state.mother}</h4>
                <div onClick={()=>this.changeColor()}>Change color</div>

                <UserTempalte {...this.state}/>
            </div>
        );
    }
}

export default User;