import { state } from './state';

import { getIndex } from '../utils/utils';
import type { ProjectData, Project } from '../types/types';

const ProjectModel = (() => {
  const createProject = (data: ProjectData) => ({
    title: data.title,
    id: `ID${Math.random().toString(16).slice(2)}`,
  });

  const addProject = (data: ProjectData) => {
    const newProject = createProject(data);

    state.projects.push(newProject);

    // _persistToLocalStorage('projects');
  };

  const updateProject = (data: Project) => {
    const target = state.projects[getIndex(state.projects, data.id)] as Project;

    Object.assign(target, data);

    updateProjectNames(data.id, data.title);

    Object.assign(target, data);

    // _persistToLocalStorage('projects');
    // _persistToLocalStorage('tasks');
  };

  const deleteProject = (id: string) => {
    deleteTasksUnderProject(id);

    state.projects.splice(getIndex(state.projects, id), 1);

    // _persistToLocalStorage('projects');
    // _persistToLocalStorage('tasks');
  };

  const updateProjectNames = (id: string, newProjName: string) => {
    state.tasks.forEach((task) => {
      if (task.projectID === id) {
        task.projectName = newProjName;
      }
    });
  };

  const deleteTasksUnderProject = (id: string) => {
    const tasksToDelete = state.tasks.filter((el) => el.projectID === id);

    tasksToDelete.forEach((item) => {
      let itemIndex = state.tasks.findIndex(
        (task) => task.projectID === item.projectID,
      );

      state.tasks.splice(itemIndex, 1);
    });
  };

  return {
    addProject,
    updateProject,
    deleteProject,
    updateProjectNames,
    deleteTasksUnderProject,
  };
})();

export default ProjectModel;
