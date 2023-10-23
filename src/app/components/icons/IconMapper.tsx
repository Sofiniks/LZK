import Partnership from './Partnership';
import SafetySertificate from './SafetySertificate';
import ShipDarkBlue from './ShipDarkBlue';
import ShipGreyGradient from './ShipGreyGradient';
import Wrench from './Wrench';
type IconComponentMap = {
  [key: string]: React.ComponentType;
};

const componentMap: IconComponentMap = {
  Partnership,
  SafetySertificate,
  ShipDarkBlue,
  ShipGreyGradient,
  Wrench,
};

function getIconComponent(iconKey: string): React.ReactElement | null {
  const IconComponent = componentMap[iconKey];
  if (IconComponent) {
    return <IconComponent />;
  }
  return null;
}

export default getIconComponent;
