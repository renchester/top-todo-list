import ModalView from './modalView';

class AddProjectView extends ModalView {
  constructor() {
    super();
  }

  uploadData(handler) {
    const projectTitle = this._parentElement.querySelector(
      '.new-project--project-title'
    ).value;

    if (this._validateTask(projectTitle)) {
      const data = {
        title: projectTitle,
      };

      this.toggleWindow();
      handler(data);
    } else {
      this._renderFormError();
    }
  }

  addHandlerAddProject(handler) {
    this._btnSubmit.addEventListener(
      'click',
      this.uploadData.bind(this, handler)
    );
  }

  _renderFormError() {
    console.log('error');
  }
}

export default new AddProjectView();
