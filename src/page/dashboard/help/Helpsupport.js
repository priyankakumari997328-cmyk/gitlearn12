import { Box, Typography, Paper } from "@mui/material";
import Faqitem from "./Faqitem";

const HelpSupport = () => {
  return (
    <Paper
      sx={{
        borderRadius: 3,
        backgroundColor: "rgb(20, 47, 71)",
        p: 3,
        ml: "285px",
        mt: "80px",
        border: "1px solid #2563eb",
        borderTop: "3px solid #2563eb",
        boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
        maxWidth: 970,
      }}
    >
      <Typography variant="h6" color="white" mb={2}>
        ❓ Frequently Asked Questions
      </Typography>

      <Faqitem
        question="How do I update my profile?"
        answer='Click on "Profile Settings" in the sidebar to edit your personal information, address, and other details.'
      />

      <Faqitem
        question="Is my data secure?"
        answer="This is a demo application that stores data in your browser’s localStorage. In a production app, data would be encrypted and stored securely on servers."
      />

      <Faqitem
        question="How do I change my password?"
        answer='Go to "Security" in the sidebar, enter your current password, then set and confirm your new password.'
      />

      <Box mt={3}>
        <Typography variant="h6" color="white">
          📞 Contact Support
        </Typography>
        <Typography color="#94a3b8">
          This is a demonstration application for learning web development. In a
          real application, you would find contact information and support
          options here.
        </Typography>
      </Box>
    </Paper>
  );
};

export default HelpSupport;