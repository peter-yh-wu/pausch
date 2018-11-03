import React from 'react';
import img from '../assets/pauschtest1.jpg';
import PropTypes from 'prop-types';

function Panel(props) {
    return (
        <div
            className='panel'
            style={{
                backgroundColor: props.color,
                borderColor: props.isSelected ? '#3f51b5' : '#808080',
            }}
            onClick={function() {
                props.selectPanel(props.id);
            }}
        >
            <img src={img} alt="Pausch Panel" width="200px" height="300px"/>
        </div>
    );
}

Panel.propTypes = {
    id: PropTypes.number,
    color: PropTypes.string,
    isSelected: PropTypes.bool,
    selectPanel: PropTypes.func,
};

export default Panel;
