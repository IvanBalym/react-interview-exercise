import React, { useState, useEffect } from "react";
import Modal from '@material-ui/core/Modal';

const ImageInfo = (props) => {
  const [open, setOpen] = useState(true);
  const [info, setInfo] = useState({});

  const handleClose = () => {
    setOpen(false);
    props.history.goBack();
  };

  useEffect(() => {
    fetch(`https://picsum.photos/id/${props.match.params.id}/info`)
      .then(res => res.json())
      .then(json => setInfo(json))
      .catch(error => console.log(error));
    
  },[props.match]);

  return (
    <Modal 
      open={open}
      onClose={handleClose}>
        <div style={{
          margin: '0 auto',
          marginTop: '60px',
          width: '400px',
          backgroundColor: 'rgb(255, 255, 255)',
          padding: '10px'
        }}>
          <p>id: {info.id}</p>
          <p>author: {info.author}</p>
          <p>width: {info.width}</p>
          <p>height: {info.height}</p>
          <p>url: {info.url}</p>
          <p>download_url: {info.download_url}</p>
        </div>
    </Modal>
  );
};

export default ImageInfo;
