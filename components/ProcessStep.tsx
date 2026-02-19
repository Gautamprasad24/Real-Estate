import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faMapLocationDot,
  faIndianRupeeSign,
  faUniversity,
  faCouch
} from "@fortawesome/free-solid-svg-icons";

const iconMap: any = {
  connect: faComments,
  tour: faMapLocationDot,
  price: faIndianRupeeSign,
  finance: faUniversity,
  interior: faCouch
};

export default function ProcessStep({ step }: any) {
  return (
    <div className="text-center px-4">

      {/* ICON */}
      <div className="text-yellow-400 text-4xl mb-4">
        <FontAwesomeIcon icon={iconMap[step.icon]} />
      </div>

      {/* TITLE */}
      <h3 className="text-white font-semibold mb-1">
        {step.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-yellow-400 text-sm">
        {step.desc}
      </p>

    </div>
  );
}
