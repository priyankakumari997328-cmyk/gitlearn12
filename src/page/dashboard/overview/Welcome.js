import { Box, Typography, Grid, Paper } from "@mui/material";
import WCard from "./wcard";
import OverviewStyle from "../../../css/Overview";
import QuickCard from "./Quickcard";
import ProfileForm from "../profile/ProfileForm";

const Welcome = ({ showDiv }) => {
    const styles = OverviewStyle();
    return (
        <Paper
            sx={styles.welcome}>
            <Typography variant="h5" color="white" >
                Welcome back, Demo User 👋
            </Typography>

            <Typography variant="body2" color="#ccc">
                Manage your profile settings and account preferences. Your data is securely stored in your browser’s
                localStorage.
            </Typography>

            <Grid sx={styles.container}>
                <Grid sx={styles.card}>
                    <WCard icon="🎨" title="Theme" desc="Dark/Light mode persisted" progress={100} />
                </Grid>

                <Grid sx={styles.card}>
                    <WCard icon="🔐" title="Authentication" desc="Secure session stored" progress={100} />
                </Grid>

                <Grid sx={styles.card}>
                    <WCard icon="📄" title="Profile" desc="20% profile completed" progress={20} />
                </Grid>

                <Grid sx={styles.card}>
                    <WCard icon="🛡️" title="Security" desc="Account security" progress={70} />
                </Grid>
            </Grid>

            <Typography variant="h6" mt={3} color="white">
                Quick Action
            </Typography>

            <Grid container spacing={2} mt={1}>
                <Grid item xs={12} md={6}>
                    <QuickCard
                        icon="✏️"
                        title="Edit Profile"
                        desc="Update your personal information"
                        onClick={() => showDiv(2)}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <QuickCard
                        icon="🔒"
                        title="Change Password"
                        desc="Update your account security"
                        onClick={() => showDiv(3)}
                    />
                </Grid>
            </Grid>
            
        </Paper>
    );
};

export default Welcome;