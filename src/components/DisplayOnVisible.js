import React, { Component } from "react";

const isElementInViewport = el => {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight ||
        document.documentElement.clientHeight) /*or $(window).height() */ &&
    rect.right <=
      (window.innerWidth ||
        document.documentElement.clientWidth) /*or $(window).width() */
  );
};

export class DisplayOnVisible extends Component {
  constructor(props) {
    super(props);

    this.el = React.createRef();

    this.state = {
      visible: false
    };

    this.onScroll = this.onScroll.bind(this);
  }

  onScroll() {
    if (!this.state.visible) {
      if (isElementInViewport(this.el)) {
        this.setState({ visible: true });
      }
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
    this.onScroll();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  render() {
    const { children } = this.props;
    const { visible } = this.state;

    return <div ref={el => (this.el = el)}>{visible && children}</div>;
  }
}
