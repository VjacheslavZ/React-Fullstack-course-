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
        mother: 'Matha'
    };

    render(){
        return(
            <div>
                <UserTempalte {...this.state}/>
            </div>
        );
    }
}

export default User;