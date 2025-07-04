import * as React from 'react';
import { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import { Modal, Box, TextField, Grid } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function MoviesCard({ movie, allCategories }) {

  const [copyText, setCopyText] = useState("Copy");
  const [open, setOpen] = React.useState(false);
  const [openDetails, setOpenDetails] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenDetails = () => setOpenDetails(true);
  const handleCloseDetails = () => setOpenDetails(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(movie.title);
    setCopyText("Copied!");

    setTimeout(() => {
      setCopyText("Copy");
    }, 1000);
  };



  const handleShareToWhatsApp = () => {
    const message = `Check out this movie: ${movie.title}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleShareToTelegram = () => {
    const message = `Check out this movie: ${movie.title}`;
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(message)}`;
    window.open(telegramUrl, "_blank");
  };

  const handleShareToGmail = () => {
    const subject = `Movie Recommendation: ${movie.title}`;
    const body = `Hi,\n\nI wanted to share this movie with you: ${movie.title}. Check it out!`;
    const gmailUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, "_blank");
  };

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '20rem',
        height: '26rem',
        marginBottom: '2rem',
        transition: '0.1s ease-in-out',
        '&:hover': {
          border: '3px solid white',
          boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.5)',
        },
      }}
    >

<CardMedia
  component="div"
  sx={{
    height: '18rem',
    width: '100%',
    backgroundImage: `url(${movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : defaultImage})`,
    backgroundSize: '100%',
    backgroundPosition: 'top center',
    backgroundRepeat: 'no-repeat',
    flexShrink: 0,

  }}
  title={movie.title}
/>



      <CardContent sx={{ flexGrow: 1, overflow: 'hidden' }}>
        <Typography gutterBottom variant="h5" component="div">
          {movie.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          Rating: {movie.vote_average}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <Button size="small" onClick={handleOpenDetails} >See Details</Button>
          <Button size="small">Watch</Button>
        </div>
        <ShareIcon sx={{ ml: 'auto', mr: 2, cursor: 'pointer' }} onClick={handleOpen} />
      </CardActions>

      {/* share modal */}
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2" sx={{ color: "#FFC107" }}>
            Share Movie
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            Share <b >{movie.title}</b> with your friends!
          </Typography>

          <TextField
            id="outlined-read-only-input"
            label="Movie Title"
            defaultValue={movie.title}
            fullWidth
            slotProps={{ input: { readOnly: true } }}
            sx={{ mt: 3 }}
          />

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
            <Button
              variant="contained" onClick={handleCopy} sx={{ bgcolor: "#FFC107", "&:hover": { bgcolor: "#FFA000" } }}
            >            {copyText}
            </Button>
            <WhatsAppIcon onClick={handleShareToWhatsApp} sx={{ "&:hover": { color: "green" }, cursor: 'pointer', }} />
            <MailOutlineIcon onClick={handleShareToGmail} sx={{ "&:hover": { color: "blue" }, cursor: 'pointer', }} />
            <TelegramIcon onClick={handleShareToTelegram} sx={{ "&:hover": { color: "#48A6A7" }, cursor: 'pointer', }} />
            <Button variant="outlined" onClick={handleClose} sx={{ color: "#FFC107", borderColor: "#FFC107", "&:hover": { color: "#FFA000" } }}>
              Close
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* details modal */}
      <Modal open={openDetails} onClose={handleCloseDetails} aria-labelledby="modal-title" aria-describedby="modal-description">
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '60%',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Grid container spacing={3}>
            {/* Movie Photo */}
            <Grid item xs={12} md={4}>
              <CardMedia
                sx={{
                  height: 300,
                  width: '100%',
                  objectFit: 'cover',
                }}
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                title={movie.title}
              />
            </Grid>

            {/*  Movie Name and Overview */}
            <Grid item xs={12} md={8}>
              <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                {movie.title}
              </Typography>
              <Typography variant="body2" sx={{ mt: 2 }}>
                {movie.overview}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', overflow: 'hidden', textOverflow: 'ellipsis', pt: 2 }}>
                Release Date: {movie.release_date}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                Vote Count:  {movie.vote_count}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                Categories:{" "}
                {movie.genre_ids
                  .map((id) => allCategories.find((cat) => cat.id === id)?.name)
                  .filter(Boolean)
                  .join(", ")}
              </Typography>
            </Grid>
          </Grid>
          {/* Close Button */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="outlined" onClick={handleCloseDetails} sx={{ color: "#FFC107", borderColor: "#FFC107", "&:hover": { color: "#FFA000" } }}>
              Close
            </Button>
          </Box>
        </Box>
      </Modal>




    </Card>
  );
}
