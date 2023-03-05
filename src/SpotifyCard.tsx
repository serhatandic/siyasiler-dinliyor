import { Box, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import AdjustIcon from "@mui/icons-material/Adjust";
import React from "react";

interface SpotifyCardProps {
  name: string;
  songDetails: { name: string; artist: string };
  playlistDetails: string;
}

const SpotifyCard: React.FC<SpotifyCardProps> = ({
  name,
  songDetails,
  playlistDetails,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#2b2a28",
        padding: "300px",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "15px",
          backgroundColor: "black",
          padding: "30px",
          justifyContent: "center",
        }}
      >
        {name && (
          <img
            src={"./" + name + ".png"}
            style={{ width: "90px", height: "90px", borderRadius: "100%" }}
          ></img>
        )}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              fontFamily: "Golos Text",
              color: "#FAFAFA",
              fontSize: "1.5rem",
              fontWeight: "500",
              whiteSpace: "nowrap",
            }}
          >
            {name}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                fontFamily: "Golos Text",
                color: "#FAFAFA",
                fontWeight: "500",
                whiteSpace: "nowrap",
                marginRight:"5px"
              }}
            >
              {songDetails.name}
            </Typography>
            <CircleIcon sx={{ fontSize: "8px", color: "#FAFAFA", paddingTop:"1px" }} />
            <Typography
              sx={{
                fontFamily: "Golos Text",
                color: "#FAFAFA",
                fontWeight: "500",
                whiteSpace: "nowrap",
                marginLeft:"5px"
              }}
            >
              {songDetails.artist}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <AdjustIcon
              sx={{ fontSize: "22px", color: "#FAFAFA", margin: "0 0 0 -1px" }}
            />
            <Typography
              sx={{
                fontFamily: "Golos Text",
                color: "#FAFAFA",
                fontWeight: "500",
                whiteSpace: "nowrap",
              }}
            >
              {playlistDetails}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SpotifyCard;
