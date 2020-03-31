import React from "react";
import InfiniteScroll from 'react-infinite-scroller';
import Layout from "../components/layout";
import ListItem from "./listItem";

class Homepage extends React.Component {
  state = {
    images: [],
    hasMore: true
  };

  likeImage = (item) => {
    fetch(`${item.url}/info`)
      .then(res => res.json())
      .then(json => console.log(json))
  };

  loadItems = page => {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`)
      .then(res => res.json())
      .then(json => this.setState({ images: [...this.state.images, ...json] }))
      .catch(() => this.setState({ hasMore: false }));
    return this.state.images;
  }

  render() {
    const items = [];
    this.state.images.map(item => {
        items.push(
          <ListItem key={item.id} item={item} onClick={() => this.likeImage(item)}/>
        );
    });

    return (
      <Layout>
        <InfiniteScroll
          className='infinit-scroll'
          pageStart={0}
          loadMore={this.loadItems.bind(this)}
          hasMore={this.state.hasMore}
          loader={<div className="loader" key={0}></div>}
        >
          {items}
        </InfiniteScroll>
      </Layout>
    );
  }
}

export default Homepage;
