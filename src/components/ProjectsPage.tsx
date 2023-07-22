import ProjectClearCast from './ProjectClearCast';
import ProjectFlavorNavigator from './ProjectFlavorNavigator';
import ProjectPocketChange from './ProjectPocketChange';

export default function ProjectsPage() {
  return (
    <div style={{ display: 'grid', gap: '8em' }}>
      <ProjectClearCast />
      <ProjectFlavorNavigator />
      <ProjectPocketChange />
    </div>
  );
}
