import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

import { STYLES } from './../constants';

class App extends React.Component {

  onChange(e) {
    this.props.onChangeInput(e.target.value);
  }

  render() {

    return (
      <main style={STYLES.main}>
        <Paper style={STYLES.header}>
          
        </Paper>
        <div style={STYLES.root}>
          <Paper style={STYLES.markdown}>
            <TextField style={STYLES.input} multiLine={true} onChange={(e) => this.onChange(e)} defaultValue={this.props.value} id="text-field"/>
          </Paper>
          <Paper style={STYLES.preview}>
             <ReactMarkdown source={this.props.value} />
          </Paper>
        </div> 
      </main>
    )
  }
}  

App.propTypes = {
  // onTouchTap: PropTypes.func.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};

export default App;