import View from './View';

class TaskDetailsView extends View {
  _parentElement = document.querySelector('.task-expanded');

  addHandlerTaskDetails(handler) {
    // Allows event to be passed through
    document
      .querySelectorAll('.task')
      .forEach((el) =>
        el.addEventListener('click', this._toggleDetails.bind(this, handler)),
      );
  }

  _toggleDetails(handler, e) {
    if (!e.target.parentNode.classList.contains('task-details-icon')) return;

    const targetTask = e.target.closest('.task');
    const taskDetails = targetTask.querySelector('.task-expanded');

    const detailsIcon = targetTask.querySelector('.material-symbols-outlined');
    detailsIcon.textContent = this._toggleDetailsIcon(detailsIcon);

    taskDetails.classList.toggle('hidden');
  }

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

  _generateMarkup = () => `
    <div class="task-expanded">
     <div class="task-details">
       This is a finished project Lorem ipsum dolor sit amet consectetur
       adipisicing elit. Mollitia obcaecati velit voluptatum adipisci error
       aliquid! Repellat et perferendis consequatur animi, explicabo aperiam
       iste rerum illum quos fugiat illo cum optio!
     </div>
     <div class="task-priority">Priority: High</div>
     <div class="task-date">Due Date: Jan. 23, 2023</div>
     <div class="task-project">Project: Home</div>
     <div class="task-status">Status: Finished</div>
     <div class="btn-container">
       <button type="button" class="btn-edit-task">
         Edit
       </button>
       <button type="button" class="btn-delete-task">
         Delete
       </button>
     </div>
   </div>`;
}

export default new TaskDetailsView();
