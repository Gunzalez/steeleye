import React from 'react';
import PropTypes from 'prop-types';

class SomeListComponent extends React.Component {

  constructor (props) {
    super(props);
    this.state = { items: props.items }
  }

  shouldComponentUpdate (nextProps) {
      return nextProps.items !== this.props.items
  }

  handleClick (index) {
      this.props.onClick(index)
  }

  renderElement (item, index) {
      return <li key={index} onClick={() => this.handleClick(index)}>{item.text}</li>
  }
  
  render () {

    const listDetails = this.props.listDetails;
    let height;
    let width;
    if (listDetails.hasOwnProperty('size')) {
        height = listDetails.size.height;
        width = listDetails.size.width;
    }

    return (
      <React.Fragment>
        <ul style={{ backgroundColor: 'red', height: height || 100, width }}>
          {this.state.items.map((item, i) => this.renderElement(item, i))}
        </ul>
      </React.Fragment>
    )}
}

export default SomeListComponent

// This to prevent errors in run time
SomeListComponent.defaultProps = {
  items: [{text: 'Frog'}, { text: 'Limp'}],
  listDetails: {
    size: {
      height: 600,
      width: 600
    }
  },
  onClick: function(item){
    console.log(item);
  }
}

// This to detect errors when developing
SomeListComponent.propTypes = {
  listDetails: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired
}