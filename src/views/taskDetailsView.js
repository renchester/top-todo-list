import View from './View';

class TaskDetailsView extends View {
  addHandlerTaskDetails(handler) {
    document.querySelectorAll('.task').forEach((el) =>
      el.addEventListener('click', (e) => {
        if (!e.target.parentNode.classList.contains('task-details-icon'))
          return;

        const targetTask = e.target.closest('.task');
        const taskDetails = targetTask.querySelector('.task-expanded');

        const detailsIcon = targetTask.querySelector(
          '.material-symbols-outlined',
        );
        detailsIcon.textContent = this._toggleDetailsIcon(detailsIcon);

        this._toggleEl(taskDetails);

        handler();
      }),
    );
  }

  addHandlerEditTask = (handler) => {
    document.querySelectorAll('.task').forEach((el) =>
      el.addEventListener('click', (e) => {
        if (!e.target.classList.contains('btn-edit-task')) return;

        console.log('edit');
      }),
    );
  };

  addHandlerDeleteTask = (handler) => {
    document.querySelectorAll('.task').forEach((el) =>
      el.addEventListener('click', (e) => {
        if (!e.target.classList.contains('btn-delete-task')) return;

        const targetTask = e.target.closest('.task');
        const { id } = targetTask.dataset;

        handler(id);
      }),
    );
  };

  _toggleDetailsIcon(el) {
    let newText;
    if (el.textContent === 'expand_more') {
      newText = 'expand_less';
    }

    if (el.textContent === 'expand_less') {
      newText = 'expand_more';
    }

    return newText;
  }
}

export default new TaskDetailsView();
