import React from 'react';
import Svg, { Path, LinearGradient, Stop } from 'react-native-svg';

import colorsToGradient from '../../colorsToGradient';

const SvgComponent = ({
  size,
  color = '#000000',
  withGradient = false,
  ...props
}) => {
  const [start, end] = colorsToGradient[(color || '').toLowerCase()] || [];

  return (
    <Svg width={size} height={size} viewBox="0 0 50 50" {...props}>
      {withGradient && (
        <LinearGradient id="grad" y1="0" y2={size}>
          <Stop offset="0" stopColor={start} stopOpacity="1" />
          <Stop offset="1" stopColor={end} stopOpacity="1" />
        </LinearGradient>
      )}

      <Path
        style={{
          stroke: 'none',
          fillRule: 'nonzero',
          fill: withGradient ? 'url(#grad)' : color,
          fillOpacity: 1,
        }}
        d="M 13 9 C 12.691406 9 12.398438 9.144531 12.210938 9.390625 C 12.019531 9.632812 11.957031 9.953125 12.03125 10.25 L 18 33.125 L 18 42 C 18 42.550781 18.449219 43 19 43 L 31 43 C 31.550781 43 32 42.550781 32 42 L 32 33.128906 L 37.96875 10.25 C 38.042969 9.953125 37.980469 9.632812 37.789062 9.390625 C 37.601562 9.144531 37.308594 9 37 9 Z M 14.292969 11 L 35.707031 11 L 30.046875 32.6875 C 29.601562 34.027344 29.003906 34.789062 28.21875 35.277344 C 27.4375 35.765625 26.390625 36 25 36 C 23.609375 36 22.5625 35.765625 21.78125 35.277344 C 20.996094 34.789062 20.398438 34.027344 19.949219 32.683594 L 15.859375 17 L 32 17 L 32.574219 15 L 15.335938 15 Z M 20 36.425781 C 20.226562 36.628906 20.464844 36.8125 20.71875 36.972656 C 21.9375 37.734375 23.390625 38 25 38 C 26.609375 38 28.0625 37.734375 29.28125 36.972656 C 29.535156 36.8125 29.773438 36.628906 30 36.425781 L 30 41 L 20 41 Z M 20 36.425781 "
      />
    </Svg>
  );
};

export default SvgComponent;
