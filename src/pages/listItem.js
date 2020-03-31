import React from "react";
import { Link } from "react-router-dom";
import {
    Grid,
    Card,
    CardMedia,
    Button
  } from "@material-ui/core";
import { MdFavorite } from "react-icons/md";

const ListItem = ({ item, onClick }) => (
    <Grid container className='infinit-item'>
        <Grid item className='infinit-item-card-wrapper'>
            <Card className='infinit-item-card'>
                <div className='infinit-item-author-name'>{item.author}</div>
                <Link to={`/image/${item.id}`}>
                    <CardMedia
                    style={{ paddingTop: '56.25%' }}
                    image={`https://picsum.photos/id/${item.id}/200/200`}
                    title={item.author}
                    />
                </Link>
                <Button onClick={onClick} className='infinit-item-like'>
                    <MdFavorite /> 0
                </Button>
            </Card>
        </Grid>
    </Grid>
);

export default ListItem;
