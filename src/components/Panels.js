import React from 'react';
import Panel from './Panel.js';
import PropTypes from 'prop-types';

function Panels(props) {
    var list = [];
    for(var i = 0; i < 9; i++) {
        list.push(
            <Panel key={i} id={i} color={props.colors[i]}
                isSelected={props.selectedPanel === i} selectPanel={props.selectPanel}/>
        );
    }

    return ( <div id="panels">{list}</div> );
}

Panels.propTypes = {
    colors: PropTypes.object,
    selectedPanel: PropTypes.number,
    selectPanel: PropTypes.func,
};

export default Panels;
