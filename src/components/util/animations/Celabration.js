import { Backdrop } from "@material-ui/core";
import Animation from "./Animation";
import Celeb from "../../../assets/lottie/celebration.json";

const Celabration = ({ open }) => {
  return (
    <Backdrop open={open} style={{ zIndex: 10000 }}>
      <div style={{ width: "500px", height: "250px" }}>
        <Animation src={Celeb} />
      </div>
    </Backdrop>
  );
};

export default Celabration;
