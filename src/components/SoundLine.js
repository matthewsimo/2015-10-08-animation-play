'use strict';

import React from 'react';

class SoundLine extends React.Component {

  constructor( props ) {
    super( props );
  }

  static propTypes = {
    origin: React.PropTypes.object,
  }


  render() {
    let { origin, height, ...others } = this.props;
    return (
      <line x1={ origin.x } y1={ origin.y }
            x2={ origin.x } y2={ origin.y - height }
            stroke="dodgerblue" strokeWidth="8" />
    );
  }

}

export default SoundLine;
