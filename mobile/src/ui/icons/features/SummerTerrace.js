import React from 'react';
import Svg, { Path, LinearGradient, Stop } from 'react-native-svg';

import { icons as colorsToGradient } from '../../colorsToGradient';

const SvgComponent = ({
  size,
  color = '#000000',
  withGradient = false,
  ...props
}) => {
  const [start, end] = colorsToGradient[color.toLowerCase()];

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
        d="M 24.984375 0 C 24.65625 0.00390625 24.351562 0.171875 24.167969 0.445312 L 18.671875 8.6875 C 18.671875 8.691406 18.671875 8.691406 18.671875 8.691406 C 18.601562 8.796875 18.0625 9.015625 17.941406 8.992188 L 8.226562 7.046875 C 7.898438 6.984375 7.558594 7.085938 7.324219 7.324219 C 7.085938 7.558594 6.984375 7.898438 7.046875 8.226562 L 8.992188 17.941406 C 9.015625 18.0625 8.792969 18.601562 8.6875 18.671875 L 0.445312 24.167969 C 0.167969 24.351562 0 24.664062 0 25 C 0 25.335938 0.167969 25.648438 0.445312 25.832031 L 8.6875 31.328125 C 8.691406 31.328125 8.691406 31.328125 8.691406 31.328125 C 8.796875 31.398438 9.015625 31.9375 8.992188 32.058594 L 7.046875 41.777344 C 6.984375 42.101562 7.085938 42.441406 7.324219 42.679688 C 7.558594 42.914062 7.898438 43.015625 8.226562 42.953125 L 17.941406 41.007812 C 18.066406 40.984375 18.601562 41.207031 18.671875 41.3125 L 24.167969 49.554688 C 24.351562 49.832031 24.664062 50 25 50 C 25.335938 50 25.648438 49.832031 25.832031 49.554688 L 31.328125 41.3125 C 31.328125 41.308594 31.328125 41.308594 31.328125 41.308594 C 31.398438 41.203125 31.9375 40.984375 32.058594 41.007812 L 41.777344 42.953125 C 42.101562 43.015625 42.441406 42.914062 42.679688 42.675781 C 42.914062 42.441406 43.015625 42.101562 42.953125 41.773438 L 41.007812 32.058594 C 40.984375 31.933594 41.203125 31.398438 41.308594 31.328125 C 41.308594 31.328125 41.308594 31.328125 41.3125 31.328125 L 49.554688 25.832031 C 49.832031 25.648438 50 25.335938 50 25 C 50 24.664062 49.832031 24.351562 49.554688 24.167969 L 41.3125 18.671875 C 41.308594 18.671875 41.308594 18.671875 41.308594 18.671875 C 41.203125 18.601562 40.984375 18.0625 41.007812 17.941406 L 42.953125 8.226562 C 43.015625 7.898438 42.914062 7.558594 42.675781 7.320312 C 42.441406 7.085938 42.101562 6.984375 41.773438 7.046875 L 32.058594 8.992188 C 31.933594 9.015625 31.398438 8.792969 31.328125 8.6875 L 25.832031 0.445312 C 25.644531 0.160156 25.324219 -0.0078125 24.984375 0 Z M 25 2.804688 L 29.664062 9.796875 C 30.292969 10.742188 31.339844 11.175781 32.449219 10.953125 L 40.695312 9.304688 L 39.046875 17.550781 C 38.824219 18.660156 39.257812 19.707031 40.203125 20.335938 L 47.199219 25 L 40.203125 29.664062 C 39.257812 30.292969 38.824219 31.335938 39.046875 32.449219 L 40.695312 40.695312 L 32.449219 39.046875 C 31.339844 38.824219 30.292969 39.257812 29.664062 40.203125 L 25 47.199219 L 20.335938 40.203125 C 19.707031 39.257812 18.660156 38.824219 17.550781 39.046875 L 9.304688 40.695312 L 10.953125 32.449219 C 11.175781 31.339844 10.742188 30.292969 9.796875 29.664062 L 2.804688 25 L 9.796875 20.335938 C 10.742188 19.707031 11.175781 18.660156 10.953125 17.550781 L 9.304688 9.304688 L 17.550781 10.953125 C 18.660156 11.175781 19.707031 10.742188 20.335938 9.796875 Z M 25 12 C 17.832031 12 12 17.832031 12 25 C 12 32.167969 17.832031 38 25 38 C 32.167969 38 38 32.167969 38 25 C 38 17.832031 32.167969 12 25 12 Z M 25 14 C 31.085938 14 36 18.914062 36 25 C 36 31.085938 31.085938 36 25 36 C 18.914062 36 14 31.085938 14 25 C 14 18.914062 18.914062 14 25 14 Z M 25 14 "
      />
    </Svg>
  );
};

export default SvgComponent;
