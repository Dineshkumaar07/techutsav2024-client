import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { blue } from "@mui/material/colors";
export default function MainLoader() {
  const [progress, setProgress] = useState(0);
  const theme = createTheme({
    palette: {
      primary: blue,
    },
  });
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-black font-poppins">
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl sm:text-4xl text-white text-center">
          Loading....
        </h1>
        <div className="flex gap-3 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-purple-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
          <ThemeProvider theme={theme}>
            <Box sx={{ width: "100%" }}>
              <LinearProgress
                variant="determinate"
                value={progress}
                color="secondary"
              />
            </Box>
          </ThemeProvider>
          <div className="flex items-center">
            <p className="text-purple-500">/</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-purple-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-4xl sm:text-6xl text-white">Techutsav 2024</h1>
      </div>
    </div>
  );
}
