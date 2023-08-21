import path from 'path';
import { promises as fs } from 'fs';
import { Project } from '@/types/project';

const getProjects = async () => {
  const jsonDirectory = path.join(process.cwd(), 'json');
  const jsonData = await fs.readFile(jsonDirectory + '/projects.json', 'utf8');

  const data = JSON.parse(jsonData);
  const projects = data.projects as Project[];

  return projects;
};

export default getProjects;
