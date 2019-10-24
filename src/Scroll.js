

class Scrollable extends Component {

  handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {console.log("hey") }
  }

  render() {
    return (
      <ScrollableElement onScroll={this.handleScroll}>
        
      </ScrollableElement>
    );
  }
}
