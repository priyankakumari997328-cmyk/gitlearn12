import { Card, CardContent, Typography, Box, LinearProgress } from "@mui/material";
import OverviewStyle from "../../../css/Overview";
const WCard = ({ icon, title, desc, progress }) => {
    const styles = OverviewStyle();
  return (
    <Card
      sx={styles.wCard}

    >
      <CardContent>
        <Typography variant="h6">
          {icon} <br /> {title}
        </Typography>

        <Typography variant="body2" color="#ccc">
          {desc}
        </Typography>

        <Box sx={{ mt: 1 }}>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{ height: 6, borderRadius: 5 }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default WCard;