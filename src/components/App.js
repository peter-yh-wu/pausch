import React from 'react';

import Header from './static/Header';
import ThemeDialog from './static/ThemeDialog';	
import PanelSelection from './PanelSelection';	
import Timeline from './Timeline';

export default class App extends React.Component {

    constructor(props) {	
        super(props);	
         this.state = {	
            name: 'Great Theme',	
            id: 'slade',	
            selectedEvent: 0,	
            events: {	
                0: {	
                    id: 0,	
                    name: 'Introduction',	
                    duration: '5',	
                    selectedPanel: -1,	
                    panels: {	
                        0: '#808080',	
                        1: '#808080',	
                        2: '#808080',	
                        3: '#808080',	
                        4: '#808080',	
                        5: '#808080',	
                        6: '#808080',	
                        7: '#808080',	
                        8: '#808080',	
                        9: '#808080',	
                    },	
                },	
            },	
        };	
    }	
     newTheme = () => {}	
     handleThemeClose = () => {	
        console.log('This will close the theme box');	
        this.setState({ dialogOpen: false });	
    }	
     // Event Information	
    selectEvent = (eventID) => {	
        console.log('selecting a new event with id', eventID);	
        this.setState({selectedEvent: eventID});	
    }	
     addEvent = () => {	
        const eventID = Math.floor(Math.random() * 101);	
        this.setState((prevState) => {	
            return { events: {	
                    ...prevState.events,	
                },	
            };	
        });	
        this.selectEvent(eventID);	
    }	
     deleteEvent = () => {	
        this.selectEvent(0);	
    }	
     // Panel Changing Information	
    selectPanel = (panel, event) => {	
        console.log('This panel is now selected', panel, 'in the event', event);	
        this.setState((prevState) => {	
            return { events: {	
                    ...prevState.events,	
                    [event]: {	
                        ...prevState.events[event],	
                        selectedPanel: panel,	
                    },	
                },	
            };	
        });	
    }	
     updateColor = (eventID, panelID, newColor) => {	
        console.log('is this working', eventID, panelID, newColor.hex);	
        this.setState((prevState) => {	
            return { events: {	
                    ...prevState.events,	
                    [eventID]: {	
                        ...prevState.events[eventID],	
                        panels: {	
                            ...prevState.events[eventID].panels,	
                            [panelID]: newColor.hex,	
                        },	
                    },	
                },	
            };	
        });	
    }	
     sendTheme = () => {	
        console.log('Going to send a theme');	
    }	

    render() {
        const {selectedEvent, name, events, dialogOpen} = this.state;	
        console.log('selected event', selectedEvent);	
         return (
            <div>
                <Header addNew={this.newTheme} title={name} sendTheme={this.sendTheme}/>
                <ThemeDialog isOpen={dialogOpen} handleRequestClose={this.handleThemeClose}	
                    handleRequestFinish={this.handleNewTheme}/>	
                <div id='content'>	                <div id='content'>
                    <Timeline events={events} selectedEvent={selectedEvent} selectEvent={this.selectEvent}/>
                    { selectedEvent !== -1 ?	
                        <PanelSelection event={events[selectedEvent]}	
                            selectPanel={this.selectPanel} updatePanel={this.updateColor}/>	
                        :	
                        <div>Please add a new event or select one to start editing</div>	
                    }	
                </div>
            </div>
        );
