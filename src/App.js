import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

import { NICE, SUPER_NICE } from './Constants';

import SoundLine from './components/SoundLine';
import MinMax from './utils/MinMax';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      amplitude: 0,
      direction: 1,
      step: 1,
      max: 20,
      x: 20,
    }

  }

  componentDidMount() {
    this.adjustAmplitude();
  }

  adjustAmplitude() {
    setTimeout( () => {
    (this.state.amplitude === this.state.max * this.state.direction ) ?
        this.setState({ direction: -this.state.direction, amplitude: this.state.amplitude + this.state.step * -this.state.direction  }) :
        this.setState({ amplitude: this.state.amplitude + this.state.step * this.state.direction });

      this.adjustAmplitude();
    }, 150);
  }

  percentAmp( val, factor ) {
    return MinMax( 1, 100, ( val ) * factor );
  }

  render() {

    let rand = Math.random() * 100;

    return (
      <div>

        <svg width="100%" height="100%"  viewBox="0 0 500 300">

          <Motion style={{x: spring( this.percentAmp( rand + this.state.amplitude, .15 ) )}}>
            { value => <SoundLine origin={ {x: 40, y: 100 }} height={ value.x } /> }
          </Motion>

          <Motion style={{x: spring( this.percentAmp( rand + this.state.amplitude, .35 ) )}}>
            { value => <SoundLine origin={ {x: 50, y: 100 }} height={ value.x } /> }
          </Motion>

          <Motion style={{x: spring( this.percentAmp( rand + this.state.amplitude, .5 ) )}}>
            { value => <SoundLine origin={ {x: 60, y: 100 }} height={ value.x } /> }
          </Motion>

          <Motion style={{x: spring( this.percentAmp( rand + this.state.amplitude, .75 ) )}}>
            { value => <SoundLine origin={ {x: 70, y: 100 }} height={ value.x } /> }
          </Motion>

          <Motion style={{x: spring( this.percentAmp( rand + this.state.amplitude, .9 ) )}}>
            { value => <SoundLine origin={ {x: 80, y: 100 }} height={ value.x } /> }
          </Motion>

          <Motion style={{x: spring( this.percentAmp( rand + this.state.amplitude, .75 ) )}}>
            { value => <SoundLine origin={ {x: 90, y: 100 }} height={ value.x } /> }
          </Motion>

          <Motion style={{x: spring( this.percentAmp( rand + this.state.amplitude, .5 ) )}}>
            { value => <SoundLine origin={ {x: 100, y: 100 }} height={ value.x } /> }
          </Motion>

          <Motion style={{x: spring( this.percentAmp( rand + this.state.amplitude, .35 ) )}}>
            { value => <SoundLine origin={ {x: 110, y: 100 }} height={ value.x } /> }
          </Motion>

          <Motion style={{x: spring( this.percentAmp( rand + this.state.amplitude, .15 ) )}}>
            { value => <SoundLine origin={ {x: 120, y: 100 }} height={ value.x } /> }
          </Motion>

        </svg>
      </div>
    );
  }
}

/**
*
*
<path id="path1" d={ `M100,200 L 100,100 C
  ${ 250 + this.state.amplitude * 1 },${ 100 + this.state.amplitude * 5 }
  ${ 250 + this.state.amplitude * 1 },${ 100 + this.state.amplitude * -5 }
  400,100, L 400,200 z` } fill="dodgerblue" stroke="dodgerblue" stroke-width="7.06" />
*/
