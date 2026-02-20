import { Box, Typography } from "@mui/material";

const Faqitem = ({ question, answer }) => {
  return (
    <Box
      sx={{
        mb: 2,
        background: "rgb(23, 35, 48)",
        border: "1px solid rgb(179,176,176)",
        borderRadius: 2,
        p: 2,
      }}
    >
      <Typography variant="subtitle1" color="white">
        {question}
      </Typography>

      <Typography variant="body2" color="#94a3b8">
        {answer}
      </Typography>
    </Box>
  );
};

export default Faqitem;