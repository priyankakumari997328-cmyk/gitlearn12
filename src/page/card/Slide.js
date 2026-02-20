import { Box, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";
import muiSliderStyles from "../../css/slide";

const slides = [
  {
    title: "Complete Auth Flow",
    lines: [
      "Seamless Login - Signup - Dashboard",
      "- Logout flow with persistent demo",
      "storage and validation",
    ],
  },
  {
    title: "Complete Flow",
    lines: [
      "Seamless Login - Signup - Dashboard",
      "- Logout flow with persistent demo",
      "storage and validation",
    ],
  },
  {
    title: "Complete Auth",
    lines: [
      "Seamless Login - Signup - Dashboard",
      "- Logout flow with persistent demo",
      "storage and validation",
    ],
  },
];

const MuiSlider = () => {
  const styles = muiSliderStyles();
  const [index, setIndex] = useState(0);

  // 🔹 Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000); // 3 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={styles.wrapper}>
      <Box
        sx={{
          ...styles.slide,
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {slides.map((slide, i) => (
          <Box key={i} sx={styles.slider}>
            <Typography variant="h6" fontWeight="bold">
              {slide.title}
            </Typography>

            {slide.lines.map((line, j) => (
              <Typography key={j} sx={styles.sliderText}>
                {line}
              </Typography>
            ))}
          </Box>
        ))}
      </Box>

      <Button
        onClick={() =>
          setIndex((index - 1 + slides.length) % slides.length)
        }
        sx={{ ...styles.navBtn, ...styles.prev }}
      >
        ❮
      </Button>

      <Button
        onClick={() => setIndex((index + 1) % slides.length)}
        sx={{ ...styles.navBtn, ...styles.next }}
      >
        ❯
      </Button>

      <Box sx={styles.dots}>
        {slides.map((_, i) => (
          <Box
            key={i}
            onClick={() => setIndex(i)}
            sx={{
              ...styles.dot,
              ...(i === index ? styles.activeDot : {}),
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default MuiSlider;
