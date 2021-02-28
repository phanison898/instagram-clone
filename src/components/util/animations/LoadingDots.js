import Animation from "./Animation";
import Loading from "../../../assets/lottie/loading-dots.json";
import { useSelector } from "react-redux";

const LoadingDots = () => {
  const { loading } = useSelector((state) => state.util);

  return (
    <div style={{ width: "500px", height: "250px", display: loading ? "block" : "none" }}>
      <Animation src={Loading} />
    </div>
  );
};

export default LoadingDots;
