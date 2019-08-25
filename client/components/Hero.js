import React from 'react';
import Konva from 'Konva';
import { Stage, Layer, Text, Star } from 'react-konva';

class Hero extends React.Component {
  componentDidMount() {
    const period = 500;

    for (let i = 0; i <= 100; i++) {
      const anim = new Konva.Animation(frame => {
        this.star.opacity((Math.sin(frame.time / period) + 1) / 2);
        // const starName = `star${i}`;
      }, this.star.getLayer());

      anim.start();
    }
  }

  render() {
    return (
      <div className="hero">
        <Stage width={window.innerWidth} height={400} background-color="58566D">
          <Layer>
            <Text text="Hello, world!" />
            {[...Array(100)].map((el, i) => (
              <Star
                key={i}
                x={Math.random() * window.innerWidth}
                y={Math.random() * 400}
                numPoints={7}
                innerRadius={10}
                outerRadius={40}
                fill="white"
                rotation={Math.random() * 180}
                opacity={Math.random() * 0.8}
                ref={node => {
                  this.star = node;
                  // this.star[i] = this.star;
                }}
              />
            ))}
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default Hero;
