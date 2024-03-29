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
        d="M 0 7 L 0 39 L 50 39 L 50 7 Z M 2 9 L 48 9 L 48 37 L 2 37 Z M 10.8125 41 C 10.261719 41.050781 9.855469 41.542969 9.90625 42.09375 C 9.957031 42.644531 10.449219 43.050781 11 43 L 39 43 C 39.359375 43.003906 39.695312 42.816406 39.878906 42.503906 C 40.058594 42.191406 40.058594 41.808594 39.878906 41.496094 C 39.695312 41.183594 39.359375 40.996094 39 41 L 11 41 C 10.96875 41 10.9375 41 10.90625 41 C 10.875 41 10.84375 41 10.8125 41 Z M 10.8125 41 "
      />
    </Svg>
  );
};

export default SvgComponent;
