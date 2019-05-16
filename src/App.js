import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


function App() {
  return (
    <React.Fragment>
      <Typography variant="h1" align="center" gutterBottom> To Do´s </Typography>

      <TextField 
          placeholder="Add to do" 
          type="text" 
          margin="normal"  
          />
          
      <List >
          <ListItem  dense button >
            <Checkbox/>
            <ListItemText primary="check the pre-work" />
            <ListItemSecondaryAction>
              <IconButton >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
      </List>
    </React.Fragment>
    );
}

export default App;
