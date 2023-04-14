import { state } from './state';

import Firestore from './firestore';

import { getIndex } from '../utils/utils';
import type { ProjectData, Project } from '../types/types';

const ProjectModel = (() => {
  let userId: string;

  const createProject = (data: ProjectData) => ({
    title: data.title,
    id: `ID${Math.random().toString(16).slice(2)}`,
  });

  const addProject = (data: ProjectData) => {
    const newProject = createProject(data);

    state.projects = [...state.projects, newProject];

    Firestore.updateProjects(state.projects, userId);
  };

  const updateProject = (data: Project) => {
    const target = state.projects[getIndex(state.projects, data.id)];

    data.title && updateProjectNames(data.id, data.title);
    target && Object.assign(target, data);

    Firestore.updateProjects(state.projects, userId);
    Firestore.updateTasks(state.tasks, userId);
  };

  const deleteProject = (id: string) => {
    deleteTasksUnderProject(id);

    state.projects = state.projects.filter((proj) => proj.id !== id);

    Firestore.updateProjects(state.projects, userId);
    Firestore.updateTasks(state.tasks, userId);
  };

  const updateProjectNames = (id: string, newProjName: string) => {
    state.tasks.forEach((task) => {
      if (task.projectID === id) {
        task.projectName = newProjName;
      }
    });
  };

  const deleteTasksUnderProject = (id: string) => {
    state.tasks = state.tasks.filter((task) => task.projectID !== id);
  };

  const initializeModel = async (currentUserId: string) => {
    userId = currentUserId;

    state.projects = await Firestore.getProjects(userId);
  };

  return {
    addProject,
    updateProject,
    deleteProject,
    updateProjectNames,
    deleteTasksUnderProject,
    initializeModel,
  };
})();

export default ProjectModel;
