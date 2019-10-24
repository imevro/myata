import React from 'react';
import Svg, { Path, LinearGradient, Stop } from 'react-native-svg';

const colorsToGradient = {
  '#20b4ab': ['#20B4AB', '#0F5752'],
  '#e79f6d': ['#E79F6D', '#48342C'],
  '#ffffff': ['#ffffff', '#333333'],
};

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
        d="M 20.5625 0.25 C 20.175781 0.265625 19.789062 0.3125 19.40625 0.40625 C 17.882812 0.789062 16.332031 1.730469 14.96875 3.09375 C 13.609375 4.453125 12.695312 6.007812 12.3125 7.53125 C 11.929688 9.054688 12.089844 10.652344 13.15625 11.71875 C 14.179688 12.742188 15.664062 12.921875 17.15625 12.59375 C 17.640625 15.117188 19.015625 18.136719 21.65625 21.5 L 17.875 25.28125 C 17.488281 25.671875 17.488281 26.296875 17.875 26.6875 L 19.875 28.71875 C 18.992188 29.3125 18.273438 29.234375 17.34375 29.125 C 16.753906 29.054688 16.089844 28.9375 15.34375 29 C 14.597656 29.0625 13.773438 29.382812 13.09375 30.0625 C 12.136719 31.019531 11.917969 32.300781 12.15625 33.375 C 12.394531 34.449219 12.949219 35.421875 13.46875 36.3125 C 13.988281 37.203125 14.476562 38.042969 14.65625 38.65625 C 14.835938 39.269531 14.839844 39.472656 14.46875 39.84375 C 14.097656 40.214844 13.894531 40.210938 13.28125 40.03125 C 12.667969 39.851562 11.828125 39.363281 10.9375 38.84375 C 10.046875 38.324219 9.101562 37.773438 8.03125 37.53125 C 6.960938 37.289062 5.664062 37.488281 4.71875 38.4375 C 4.007812 39.148438 3.980469 40.160156 4.15625 40.96875 C 4.332031 41.777344 4.664062 42.527344 5 43.25 C 5.335938 43.972656 5.679688 44.652344 5.8125 45.125 C 5.878906 45.363281 5.878906 45.554688 5.875 45.625 C 5.855469 45.644531 5.257812 45.855469 4.34375 46 C 3.429688 46.144531 2.214844 46.347656 1.28125 47.28125 C 0.882812 47.679688 0.882812 48.320312 1.28125 48.71875 C 1.679688 49.117188 2.320312 49.117188 2.71875 48.71875 C 3.140625 48.296875 3.820312 48.101562 4.65625 47.96875 C 5.492188 47.835938 6.480469 47.863281 7.3125 47.03125 C 7.664062 46.679688 7.839844 46.207031 7.875 45.78125 C 7.910156 45.355469 7.824219 44.96875 7.71875 44.59375 C 7.507812 43.84375 7.140625 43.109375 6.8125 42.40625 C 6.484375 41.703125 6.199219 41.011719 6.09375 40.53125 C 5.988281 40.050781 6.019531 39.949219 6.125 39.84375 C 6.613281 39.355469 6.957031 39.324219 7.59375 39.46875 C 8.230469 39.613281 9.066406 40.054688 9.9375 40.5625 C 10.808594 41.070312 11.714844 41.640625 12.71875 41.9375 C 13.722656 42.234375 14.984375 42.140625 15.875 41.25 C 16.765625 40.359375 16.859375 39.0625 16.5625 38.0625 C 16.265625 37.0625 15.726562 36.183594 15.21875 35.3125 C 14.710938 34.441406 14.265625 33.605469 14.125 32.96875 C 13.984375 32.332031 13.996094 31.972656 14.5 31.46875 C 14.863281 31.105469 15.136719 31.03125 15.53125 31 C 15.925781 30.96875 16.4375 31.046875 17.09375 31.125 C 18.230469 31.257812 19.796875 31.238281 21.3125 30.125 L 23.4375 32.28125 C 23.625 32.476562 23.886719 32.585938 24.15625 32.585938 C 24.425781 32.585938 24.6875 32.476562 24.875 32.28125 L 28.65625 28.46875 C 32.011719 31.101562 35.039062 32.484375 37.5625 32.96875 C 37.234375 34.472656 37.410156 35.972656 38.4375 37 C 39.503906 38.066406 41.101562 38.226562 42.625 37.84375 C 44.148438 37.460938 45.703125 36.546875 47.0625 35.1875 C 48.421875 33.824219 49.335938 32.242188 49.71875 30.71875 C 50.101562 29.195312 49.941406 27.628906 48.875 26.5625 C 48.273438 25.957031 47.519531 25.625 46.6875 25.53125 C 46.105469 25.464844 45.488281 25.519531 44.875 25.65625 C 44.226562 22.273438 41.957031 17.988281 37.0625 13.09375 C 32.167969 8.199219 27.882812 5.902344 24.5 5.25 C 24.8125 3.773438 24.609375 2.296875 23.59375 1.28125 C 23.058594 0.75 22.410156 0.441406 21.6875 0.3125 C 21.328125 0.25 20.949219 0.234375 20.5625 0.25 Z M 20.65625 2.25 C 21.351562 2.199219 21.863281 2.363281 22.1875 2.6875 C 22.625 3.125 22.789062 3.964844 22.5 5.0625 C 20.726562 5.160156 19.628906 6.183594 18.9375 6.875 C 18.21875 7.59375 17.136719 8.78125 17 10.59375 C 15.875 10.910156 15.007812 10.757812 14.5625 10.3125 C 14.132812 9.882812 13.976562 9.089844 14.25 8 C 14.523438 6.910156 15.246094 5.632812 16.375 4.5 C 17.507812 3.367188 18.820312 2.648438 19.90625 2.375 C 20.179688 2.308594 20.425781 2.265625 20.65625 2.25 Z M 22.46875 7.0625 C 22.621094 7.054688 22.785156 7.050781 22.96875 7.0625 C 25.800781 7.242188 30.25 9.125 35.625 14.5 C 40.777344 19.652344 42.757812 23.96875 43.0625 26.8125 C 43.0625 26.820312 43.0625 26.835938 43.0625 26.84375 C 43.109375 27.839844 42.367188 29.195312 42.03125 29.53125 C 41.359375 30.207031 40.320312 31.058594 39.3125 31.15625 C 39.074219 31.050781 38.808594 31.039062 38.5625 31.125 C 35.675781 30.753906 31.367188 28.742188 26.375 23.75 C 21.28125 18.65625 19.34375 14.289062 19.03125 11.40625 C 19.042969 11.257812 19.023438 11.109375 18.96875 10.96875 C 18.957031 9.667969 19.636719 9.023438 20.375 8.28125 C 21.082031 7.574219 21.410156 7.105469 22.46875 7.0625 Z M 22.9375 23.03125 C 23.558594 23.742188 24.234375 24.449219 24.96875 25.1875 C 25.695312 25.914062 26.390625 26.601562 27.09375 27.21875 L 24.15625 30.15625 L 22.125 28.15625 C 22.105469 28.132812 22.085938 28.113281 22.0625 28.09375 L 20 26 Z M 46.40625 27.5 C 46.871094 27.550781 47.226562 27.726562 47.46875 27.96875 C 47.898438 28.398438 48.054688 29.164062 47.78125 30.25 C 47.507812 31.335938 46.789062 32.648438 45.65625 33.78125 C 44.523438 34.914062 43.210938 35.632812 42.125 35.90625 C 41.039062 36.179688 40.273438 35.992188 39.84375 35.5625 C 39.398438 35.117188 39.222656 34.273438 39.53125 33.15625 C 41.347656 32.996094 42.710938 31.664062 43.4375 30.9375 C 44.140625 30.234375 44.828125 29.082031 45 27.6875 C 45.523438 27.539062 46.011719 27.457031 46.40625 27.5 Z M 46.40625 27.5 "
      />
    </Svg>
  );
};

export default SvgComponent;
