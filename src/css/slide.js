const muiSliderStyles = () => ({
  wrapper: {
    position: "relative",
    width: 500,
    margin: "auto",
    overflow: "hidden",
    backgroundColor: "rgb(19, 45, 70)",
    borderRadius: "10px",
    boxShadow: "-5px 5px 5px rgba(148, 66, 66, 0.3)",
  },

  slide: {
    display: "flex",
    textAlign: "center",
    transition: "transform 0.5s ease-in-out",
  },

  slider: {
    padding: "50px 88px",
    minWidth: "100%",
    boxSizing: "border-box",
  },

  sliderText: {
    color: "#c7c6c6",
  },

  navBtn: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "rgba(31,30,30,0.5)",
    color: "white",
    fontSize: "20px",
    cursor: "pointer",
    borderRadius: "10%",
  },

  prev: { left: "10px" },
  next: { right: "10px" },

  dots: {
    display: "flex",
    justifyContent: "center",
    margin: "30px",
    gap: "8px",
  },

  dot: {
    height: "12px",
    width: "12px",
    backgroundColor: "#888",
    borderRadius: "50%",
    cursor: "pointer",
  },

  activeDot: {
    backgroundColor: "#fff",
  },
});

export default muiSliderStyles;
