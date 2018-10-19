import React from 'react';
import PropTypes from 'prop-types';

class LazyImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoaded: false };
  }

  componentDidMount() {
    this.load();
  }

  load() {
    const image = new Image();
    setTimeout(() => {
      image.src = this.props.src;
    }, 2000);
    image.onload = this.handleLoad;
  };

  handleLoad = () => {
    this.setState({
      isLoaded: true,
    });
  };

  render () {
    const { alt, src, placeholderSrc, ...rest } = this.props;
    const { isLoaded } = this.state;

    return (
      <img
        onLoad={this.handleLoad}
        src={isLoaded ? src : placeholderSrc}
        alt={alt}
        { ...rest }
      />
    );
  }
}

LazyImage.prototypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  placeholderSrc: PropTypes.string,
};

export { LazyImage };
