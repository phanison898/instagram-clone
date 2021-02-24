import { Backdrop } from "@material-ui/core";
import Animation from "./Animation";
import WaveLoading from "../../../assets/lottie/wave-loading.json";
import { useSelector } from "react-redux";

const Loading = () => {
  const { loading } = useSelector((state) => state.util);

  return (
    <Backdrop open={loading} style={{ zIndex: 10000 }}>
      <div style={{ width: "500px", height: "250px" }}>
        <Animation src={WaveLoading} />
      </div>
    </Backdrop>
  );
};

export default Loading;
