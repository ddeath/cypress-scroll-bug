import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          {[1,2,3,4,5,6,7,8,9,10].map(item =>
            <p key={item} className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          )}
          
          <div id="footer">
            <SelectField
              floatingLabelText="Frequency"
              value={1}
              className="selector"
            >
              <MenuItem className="item-1" value={1} primaryText="Never" />
              <MenuItem className="item-2" value={2} primaryText="Every Night" />
              <MenuItem className="item-3" value={3} primaryText="Weeknights" />
              <MenuItem className="item-4" value={4} primaryText="Weekends" />
              <MenuItem className="item-5" value={5} primaryText="Weekly" />
            </SelectField>
          </div>

          {[1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(item =>
            <p key={item} className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          )}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
