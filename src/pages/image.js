import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  CardMedia,
  IconButton, Typography
} from "@material-ui/core";
import { MdFileDownload, MdInfo } from "react-icons/md";

import Layout from "../components/layout";

const ImagePage = ({ match }) => {
  const id = match.params.id;
  const [image, setImage] = useState('');
  const [isImageFullSize, setIsImageFullSize] = useState(false);

  useEffect(() => {
    fetch(`https://picsum.photos/id/${match.params.id}/info`)
      .then(res => res.json())
      .then(json => setImage(json))
      .catch(error => console.log(error));
  },[match]);

  return (
    <Layout>
      <Grid container spacing={2} justify="center">
        <Grid item xs={12}>
          <Grid container justify="center">
            <Grid item>
              <Link to={`/image/${match.params.id}/info`}>
                <IconButton>
                  <MdInfo />
                </IconButton>
              </Link>
              <IconButton>
                <MdFileDownload />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={isImageFullSize ? 12 : 8} >
          <img 
            className={isImageFullSize ? 'info-image-zoom-out': 'info-image-zoom-in'} 
            onClick={() => setIsImageFullSize(!isImageFullSize)} 
            width="100%" 
            src={image.download_url} alt=""/>
        </Grid>
      </Grid>
      <div>
        <Typography variant="h5">Related images</Typography>
        <Grid container spacing={2} justify="space-between">
          <Grid item >
            <Link to={`/image/${parseInt(id)+1}`}>
              <CardMedia
              style={{ paddingTop: '56.25%', width: '200px' }}
              image={`https://picsum.photos/id/${parseInt(id)+1}/200/200`}
              />
            </Link>
          </Grid>
          <Grid item >
            <Link to={`/image/${parseInt(id)+2}`}>
              <CardMedia
              style={{ paddingTop: '56.25%', width: '200px' }}
              image={`https://picsum.photos/id/${parseInt(id)+2}/200/200`}
              />
            </Link>
          </Grid>
          <Grid item >
            <Link to={`/image/${parseInt(id)+3}`}>
              <CardMedia
              style={{ paddingTop: '56.25%', width: '200px' }}
              image={`https://picsum.photos/id/${parseInt(id)+3}/200/200`}
              />
            </Link>
          </Grid>
          <Grid item >
            <Link to={`/image/${parseInt(id)+4}`}>
              <CardMedia
              style={{ paddingTop: '56.25%', width: '200px' }}
              image={`https://picsum.photos/id/${parseInt(id)+4}/200/200`}
              />
            </Link>
          </Grid>
          <Grid item >
            <Link to={`/image/${parseInt(id)+5}`}>
              <CardMedia
              style={{ paddingTop: '56.25%', width: '200px' }}
              image={`https://picsum.photos/id/${parseInt(id)+5}/200/200`}
              />
            </Link>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
};

export default ImagePage;
