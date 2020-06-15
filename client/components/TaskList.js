import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import Task from '../components/Task';
import ConfirmModal from '../components/ConfirmModal';
import { deleteTaskEffect } from '../redux/effect';

export default function TaskList({ tasks }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentTask, setCurrentTask] = useState({});
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  function handleClose() {
    setShowDeleteModal(false);
  }

  function handleConfirm() {
    deleteTaskEffect({ id: currentTask.id, setError, dispatch });
    setShowDeleteModal(false);
  }

  function handleOpen(task) {
    setCurrentTask(task);
    setShowDeleteModal(true);
  }

  return (
    <Fragment>
      <div>
        {tasks.map(task => <Task key={task.id} task={task} handleDeleteModalOpen={handleOpen} />)}
      </div>
      <ConfirmModal
        title="Delete Task"
        content={`Do you want to delete this task: ${currentTask.title}`}
        show={showDeleteModal}
        handleClose={handleClose}
        handleConfirm={handleConfirm}
        error={error}
      />
    </Fragment>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
};
