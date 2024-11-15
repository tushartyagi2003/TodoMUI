import { Dialog, DialogActions, DialogTitle, Button } from '@mui/material'
import React, { Fragment } from 'react'

const TodoDetail = ({todoDetail, openDialog, setOpenDialog, setTodoDetail}) => {
  return (
    
        <Dialog onClose={() => setOpenDialog(false) } open={openDialog}>
            <DialogTitle  >{todoDetail?.todo}</DialogTitle>
            <DialogActions>
                <Button onClick={() => {
                    setOpenDialog(false)
                    setTodoDetail(null)
                }
                }>Close</Button>
            </DialogActions>

        </Dialog>
  
  )
}

export default TodoDetail