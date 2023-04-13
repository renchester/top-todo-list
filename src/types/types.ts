export type State = {
  tasks: Task[];
  projects: Project[];
  notes: Note[];
};

export type TaskData = {
  title: string;
  details?: string | undefined;
  priority: string;
  projectName: string;
  projectID: string;
  status: unknown;
  date: Date;
  pinned: boolean;
};

export type Task = TaskData & { id: string };

export type ProjectData = {
  title: string;
};

export type Project = ProjectData & { id: string };

export type NoteData = {
  title?: string | undefined;
  details?: string | undefined;
};

export type Note = NoteData & { id: string };
