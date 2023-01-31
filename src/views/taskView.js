import View from './View';

class taskView extends View {
  _parentElement = document.querySelector('.content-display');

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
}

export default new taskView();

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
