import ProjectBytePair from '../projects/ProjectBytePair';
import ProjectClearCast from '../projects/ProjectClearCast';
import ProjectFlavorNavigator from '../projects/ProjectFlavorNavigator';
import ProjectPocketChange from '../projects/ProjectPocketChange';

export default function ProjectsPage() {
  return (
    <div style={{ display: 'grid', gap: '8em' }}>
      <ProjectBytePair />
      <ProjectClearCast />
      <ProjectFlavorNavigator />
      <ProjectPocketChange />
    </div>
  );
}
