import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editTask } from '../redux/action';

const EditTask = ({ el }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [newtext, setNewtext] = useState(el.action);
    const dispatch = useDispatch();

    const handleEdit = (e) => {
        e.preventDefault();
        if( newtext.trim() !== "") {
        const editedTask = {
            id : el.id,
            action : newtext,
            isDone : el.isDone,
        };

        dispatch(editTask(editedTask));
        handleClose()
    };
    }

  return (
    <div>
         <Button variant="outline-primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleEdit}>
                <Form.Control value={newtext} onChange={(e) => setNewtext(e.target.value)} />
                <Button variant="primary" type="submit">Save Changes</Button>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EditTask