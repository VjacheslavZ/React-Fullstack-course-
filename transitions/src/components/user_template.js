import React from 'react';
import PropTypes from 'prop-types';

const UserTempalte = (props) => {
    console.log(props);
    return (
        <div>
            template
        </div>
    )
};

UserTempalte.propTypes = {
    name: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.oneOf(['francis', 'Steve'])
    ]),
    lastname: PropTypes.string,
    age: PropTypes.number,
    hobbies: PropTypes.arrayOf(PropTypes.string),
    shanish: PropTypes.bool,
    message: PropTypes.func,
    car: PropTypes.object,
    mother: PropTypes.string.isRequired
};

export default UserTempalte