import View from './View';

class TaskView extends View {
  _parentElement = document.querySelector('.content-display');
  _navShowAll = document.querySelector('.tasks-all');

  addHandlerShowAllTasks = (handler) => {
    this._navShowAll.addEventListener('click', handler);
  };

  addHandlerToggleStatus = (handler) => {
    const statusBoxes = [...document.querySelectorAll('.task-status')];

    statusBoxes.forEach((box) =>
      box.addEventListener('click', (e) => {
        const { id } = e.target.closest('.task').dataset;

        const status = e.target.checked ? 'finished' : 'on-going';

        handler({ id, status });
      }),
    );
  };

  _generateMarkup = () => {
    const markup = this._data
      .map(
        (task) => `
       <div class="task" data-id="${task.id}">
            <div class="task-condensed">
              <div class="task-left">

                <input
                  type="checkbox"
                  name="task-status"
                  id="task-status"
                  class="task-status"
                  ${task.status === 'finished' ? 'checked' : ''}
                />

                <span class="task-title${
                  task.status === 'finished' ? 'task-finished' : ''
                }">${task.title}</span>

              </div>

              <div class="task-details-icon">

                <span class="material-symbols-outlined">expand_more</span>

              </div>
            </div>
            <div class="task-expanded hidden">
              <div class="task-details">
                ${task.details}
              </div>
              <div class="task-priority">Priority: ${this._capitalizeFirstLetter(
                task.priority,
              )}</div>
              <div class="task-date">Due Date: ${task.date}</div>
              <div class="task-project">Project: ${this._capitalizeFirstLetter(
                task.project,
              )}</div>
              <div class="task-status">Status: ${this._capitalizeFirstLetter(
                task.status,
              )}</div>
              <div class="btn-container">
                <button type="button" class="btn-edit-task">Edit</button
                ><button type="button" class="btn-delete-task">Delete</button>
              </div>
            
            </div>
          </div>
    `,
      )
      .join('');

    return markup;
  };

  _generateBackup = () => {
    const markup = `
         <div class="task" data-id="null">
            <div class="task-condensed">
              <div class="task-left">
                <input
                  type="checkbox"
                  name="task-status"
                  id="task-status"
                  value="Finished"
                  checked
                />
                <span class="task-title">Sample task</span>
              </div>
              <div class="task-details-icon">
                <span class="material-symbols-outlined">expand_more</span>
              </div>
            </div>
            <div class="task-expanded">
              <div class="task-details">
                You are seeing this task because you have not added a task yet. Add one now through the add button!
              </div>
              <div class="task-priority">Priority: Low</div>
              <div class="task-date">Due Date: Jan. 01,  2000</div>
              <div class="task-project">Project: Home</div>
              <div class="task-status">Status: Finished</div>
            </div>
          </div>
          
           <div class="task" data-id="null">
            <div class="task-condensed">
              <div class="task-left">
                <input
                  type="checkbox"
                  name="task-status"
                  id="task-status"
                  value="Finished"
                  checked
                />
                <span class="task-title">Sample task</span>
              </div>
              <div class="task-details-icon">
                <span class="material-symbols-outlined">expand_more</span>
              </div>
            </div>
            <div class="task-expanded hidden">
              <div class="task-details">
                You are seeing this task because you have not added a task yet. Add one now through the add button!
              </div>
              <div class="task-priority">Priority: Low</div>
              <div class="task-date">Due Date: Jan. 01,  2000</div>
              <div class="task-project">Project: Home</div>
              <div class="task-status">Status: Finished</div>
            </div>
          </div>`;

    return markup;
  };
}

export default new TaskView();

/*
const taskView = function () {
  let taskViewObj = Object.create(View());

  // Properties

  taskViewObj.parentElement = document.querySelector('.content-display');

  // Methods

  taskViewObj.generateMarkup = function () {
    console.log(this);
    const markup = this.data
      .map(
        (task) => `
       <div class="task" data-id="${task.id}">
            <div class="task-condensed">
              <div class="task-left">
                <input
                  type="checkbox"
                  name="task-status"
                  id="task-status"
                  value="Finished"
                  ${task.status === 'finished' ? 'checked' : ''}
                />
                <span class="task-title ${
                  task.status === 'finished' ? 'task-finished' : ''
                }">${task.title}</span>
              </div>
              <div class="task-details">
                <span class="material-symbols-outlined"> expand_more </span>
              </div>
            </div>
          </div>
    `,
      )
      .join('');

    return markup;
  };

  taskViewObj.addHandlerAddTask = function (handler) {
    document.querySelector('.btn-add').addEventListener('click', handler);
  };

  return taskViewObj;
};

export default taskView();
*/
