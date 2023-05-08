import {
  Box,
  MenuItem,
  Select,
  TextField,
  SelectChangeEvent,
  InputLabel,
  FormControl,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { useState } from "react";
import SpotifyCard from "./SpotifyCard";
import html2canvas from "html2canvas";
import { styled } from "@mui/material/styles";

import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const ResponsiveBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "90vw",
  },
}));

function App() {
  const [politician, setPolitician] = useState("");
  const [song, setSong] = useState("");
  const [artist, setArtist] = useState("");
  const [playlist, setPlaylist] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e: SelectChangeEvent) => {
    setPolitician(e.target.value);
  };

  const handleDownloadImage = async () => {
    if (politician && song && artist && playlist) {
      setSnackbarOpen(false);
      const component = document.getElementById("result");

      html2canvas(component!).then((canvas) => {
        const dataUrl = canvas.toDataURL();
        const link = document.createElement("a");
        link.download = `${politician}.png`;
        link.href = dataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    } else {
      setSnackbarOpen(true);
    }
  };
  return (
    <div className="App">
      <Box sx={{display:"flex", gap:"10px", position:"absolute", right:"15px", top:"5px"}}>
        <a href="https://twitter.com/Porigam" target="_blank"><TwitterIcon sx={{color:"blue", fontSize:"36px"}}/></a>
        <a href="https://github.com/serhatandic/siyasiler-dinliyor" target="_blank"><GitHubIcon sx={{fontSize:"36px"}}/></a>
      </Box>
      <ResponsiveBox
        sx={{
          width: "40%",
          margin: "auto",
          marginTop: "25vh",
          borderRadius: "15px",
          backgroundColor: "white",
        }}
      >
        <Box
          sx={{
            width: "70%",
            margin: "auto",
            paddingTop: "20px",
          }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleDownloadImage();
            }}
          >
            <FormControl
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              <InputLabel id="politician-select-label">Siyasetçi</InputLabel>
              <Select
                labelId="politician-select-label"
                id="politician-select"
                value={politician}
                onChange={handleChange}
                label="Siyasetçi"
              >
                <MenuItem value={"Kemal Kılıçdaroğlu"}>
                  Kemal Kılıçdaroğlu
                </MenuItem>
                <MenuItem value={"Recep Tayyip Erdoğan"}>
                  Recep Tayyip Erdoğan
                </MenuItem>
                <MenuItem value={"Sinan Ogan"}>Sinan Ogan</MenuItem>
                <MenuItem value={"Muharrem İnce"}>Muharrem İnce</MenuItem>
                <MenuItem value = {"Devlet Bahçeli"}>Devlet Bahçeli</MenuItem>
                <MenuItem value={"Meral Akşener"}>Meral Akşener</MenuItem>
                <MenuItem value={"Ali Babacan"}>Ali Babacan</MenuItem>
                <MenuItem value={"Temel Karamolluoğlu"}>
                  Temel Karamolluoğlu
                </MenuItem>
                <MenuItem value={"Ahmet Davutoğlu"}>Ahmet Davutoğlu</MenuItem>
                <MenuItem value={"Fatih Erbakan"}>Fatih Erbakan</MenuItem>
                <MenuItem value={"Ekrem İmamoğlu"}>Ekrem İmamoğlu</MenuItem>
                <MenuItem value={"Güntekin Onay"}>Güntekin Onay</MenuItem>
                <MenuItem value={"Fatih Erbakan"}>Fatih Erbakan</MenuItem>
                <MenuItem value={"Süleyman Soylu"}>Süleyman Soylu</MenuItem>
              </Select>

              <TextField
                fullWidth
                id="outlined-basic"
                label="Şarkı"
                variant="outlined"
                inputProps={{
                  maxLength: 35,
                }}
                onChange={(e) => {
                  setSong(e.target.value);
                }}
              />

              <TextField
                fullWidth
                id="outlined-basic"
                label="Sanatçı"
                variant="outlined"
                inputProps={{
                  maxLength: 35,
                }}
                onChange={(e) => {
                  setArtist(e.target.value);
                }}
              />

              <TextField
                fullWidth
                id="outlined-basic"
                label="Playlist"
                variant="outlined"
                inputProps={{
                  maxLength: 70,
                }}
                onChange={(e) => {
                  setPlaylist(e.target.value);
                }}
              />
              <Button
                sx={{ marginBottom: "15px" }}
                variant="contained"
                type="submit"
              >
                Oluştur
              </Button>
            </FormControl>
          </form>
        </Box>
      </ResponsiveBox>
      <Box id="result" sx={{ width: "1000px", marginTop: "2000px" }}>
        <SpotifyCard
          name={politician}
          songDetails={{ name: song, artist: artist }}
          playlistDetails={playlist}
        />
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => {
          setSnackbarOpen(false);
        }}
      >
        <Alert
          onClose={() => {
            setSnackbarOpen(false);
          }}
          severity="warning"
          sx={{ width: "100%" }}
        >
          Lütfen Tüm Alanları Doldurunuz
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;
