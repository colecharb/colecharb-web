import ProjectBytePair from '../projects/ProjectBytePair';
import ProjectClearCast from '../projects/ProjectClearCast';
// import ProjectFlavorNavigator from '../projects/ProjectFlavorNavigator'; // TODO: flavor-navigator modules missing
import ProjectPocketChange from '../projects/ProjectPocketChange';

export default function ProjectsPage() {
  return (
    <div style={{ display: 'grid', gap: '8em' }}>
      <ProjectBytePair />
      <ProjectClearCast />
      {/* <ProjectFlavorNavigator /> */}
      <ProjectPocketChange />
    </div>
  );
}
