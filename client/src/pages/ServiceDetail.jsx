import { useParams } from "react-router-dom";
import Nursing from "../component/service-details/Nursing";
import AlliedHealthcare from "../component/service-details/AlliedHealthcare";
import Therapy from "../component/service-details/Therapy";
import Practitioners from "../component/service-details/Practitioners";
import Laboratory from "../component/service-details/Laboratory";
import Practice from "../component/service-details/Practice";
const ServiceDetail = () => {
  const { slug } = useParams();

  switch (slug) {
    case "nursing":
      return <Nursing />;
    case "allied-healthcare":
      return <AlliedHealthcare />;
    case "therapy":
      return <Therapy />;
    case "nurse-practitioners":
      return <Practitioners />;
    case "laboratory-professionals":
      return <Laboratory />;
    case "advanced-practice-registered-nurses":
      return <Practice />;
    default:
      return (
        <div className="p-6 text-center text-red-600">
          No content yet for "{slug.replaceAll("-", " ")}"
        </div>
      );
  }
};

export default ServiceDetail;
