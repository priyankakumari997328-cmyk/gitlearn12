import { Card, CardContent, Typography } from "@mui/material";
import OverviewStyle from "../../../css/Overview";

const QuickCard = ({ icon, title, desc, onClick }) => {
    const styles = OverviewStyle();
  return (
    <Card onClick={onClick} sx={styles.quickCard}>
      <CardContent>
        <Typography variant="h5">{icon}</Typography>
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="body2">{desc}</Typography>
      </CardContent>
    </Card>
  );
};

export default QuickCard;