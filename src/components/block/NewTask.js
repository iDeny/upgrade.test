import React from 'react';
import { OutlinedInput, FormControl, FormGroup, Button } from '@material-ui/core';

function NewTask(props) {
	const { taskInput, placeholder, onChange, onAdd } = props;

  return (
		<div className="new-task">
			<FormControl required>
				<FormGroup row>
					<OutlinedInput  
						required
						id="outlined-basic" 
						size="small" 
						variant="outlined" 
						placeholder={placeholder}
						value={taskInput} 
						onChange={onChange}
					/>
					<Button variant="contained" color="primary" onClick={onAdd}>Add</Button>
				</FormGroup>
			</FormControl>
		</div>
	)
}

export default NewTask;