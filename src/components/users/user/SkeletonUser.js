import { makeStyles } from "@material-ui/core/styles";
import { Skeleton } from "@material-ui/lab";

const SkeletonUser = () => {
  const classes = makeStyles((theme) => ({
    root: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      margin: "10px 0",
    },
    details: {
      flex: 1,
      marginLeft: 10,
    },
    button: {
      borderRadius: 4,
    },
  }))();

  return (
    <div className={classes.root}>
      <Skeleton variant="circle" width={42} height={42} />

      <div className={classes.details}>
        <Skeleton variant="text" width={200} height={20} />
        <Skeleton variant="text" width={100} height={15} />
      </div>

      <div className={classes.button}>
        <Skeleton variant="rect" width={85} height={30} />
      </div>
    </div>
  );
};

export default SkeletonUser;
