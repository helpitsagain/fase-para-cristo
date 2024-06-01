import { Grid } from "@mui/material";
import "./style.scss";

const QuemSomos = () => {
  return (
    <div className="container-content">
      <Grid container className="grid-content quem-somos">
        <Grid item xs={5}>
          <h1>Quem Somos</h1>
          <p>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </p>
        </Grid>
        <Grid item xs={7}>
          <img src="https://images.pexels.com/photos/461049/pexels-photo-461049.jpeg" />
        </Grid>
      </Grid>
      <Grid container className="grid-content content-reverse contribua">
        <Grid item xs={5}>
          <h1>Contribua</h1>
          <p>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </p>
        </Grid>
        <Grid item xs={7}>
          <img src="https://images.pexels.com/photos/6994788/pexels-photo-6994788.jpeg" />
        </Grid>
      </Grid>
      <Grid container className="grid-content equipes">
        <Grid item xs={5}>
          <h1>Equipes</h1>
          <p>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </p>
        </Grid>
        <Grid item xs={7}>
          <img src="https://images.pexels.com/photos/6995108/pexels-photo-6995108.jpeg" />
        </Grid>
      </Grid>
      <Grid container className="grid-content content-reverse seja-voluntario">
        <Grid item xs={5}>
          <h1>Seja Voluntário</h1>
          <p>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </p>
        </Grid>
        <Grid item xs={7}>
          <img src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg" />
        </Grid>
      </Grid>
    </div>
  );
};

export default QuemSomos;
