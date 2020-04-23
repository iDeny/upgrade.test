import React from 'react';
import { FormControlLabel, 	Checkbox, List } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';

function TaskList(props) {
	const { onCheckboxChange, todos } = props;

	// cross out style for completed todos
	// const classes = makeStyles({
	// 	label: {
	// 		textDecoration: 'line-through'
	// 	}
	// });

  return (
		<List className="task-list">
			{todos.map(task => 
				<div className="task-list_item" key={task.id}>
					<FormControlLabel
            control={<Checkbox checked={task.completed} onChange={onCheckboxChange} name={`${task.id}`} />}
            label={task.text}
          />
				</div>
			)}
		</List>	
	)
}

export default TaskList;


{ /* import { ListItemIcon, ListItemText, FormGroup, ListItem } from '@material-ui/core';
	
	<ListItem role={undefined} dense button>
						<ListItemIcon>
							<FormGroup>
									<Checkbox
										edge="start"
										checked={task.completed}
										name={`${task.id}`}
										tabIndex={-1}
										onChange={handleCheckboxChange}
									/>
							</FormGroup>
						</ListItemIcon>
						<ListItemText id={task.id} primary={task.text} />
					</ListItem> */}