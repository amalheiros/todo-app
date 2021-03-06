import React from 'react'
import Grid from '../template/grid'
import IconButtons from '../template/iconButtons'

export default props => (
    <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
            <input className='form-control' id='description' 
                onChange={props.handleChange}
                value={props.description}
                placeholder='Adicione uma tarefa'>
            </input>
        </Grid>
        <Grid cols='12 3 2'>
            <IconButtons style='primary' icon='plus'
                onClick={props.handleAdd}></IconButtons>
        </Grid>
    </div>
)