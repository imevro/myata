import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const SvgComponent = ({ size, ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 50 50" fill="#000000" {...props}>
    <G id="surface139412">
      <Path
        style={{
          stroke: 'none',
          fillRule: 'nonzero',
          fill: '#000000',
          fillOpacity: 1,
        }}
        d="M 31.5 1.585938 L 27.585938 5.5 L 31.5 9.414062 L 35.414062 5.5 Z M 19 4 C 18.449219 4 18 4.449219 18 5 L 18 10 C 18 10.550781 18.449219 11 19 11 L 20 11 C 21.195312 11 21.457031 11.359375 21.710938 11.933594 C 21.964844 12.507812 22 13.371094 22 14 C 22 14.816406 21.902344 15.675781 21.761719 16.5 C 20.882812 16.191406 20.039062 16.003906 19.257812 16 C 18.375 15.992188 17.496094 16.242188 16.871094 16.871094 C 16.601562 17.136719 16.421875 17.457031 16.28125 17.796875 L 16.265625 17.789062 L 5.273438 45.648438 L 34.128906 35.769531 L 34.125 35.75 C 34.492188 35.613281 34.839844 35.421875 35.128906 35.128906 C 35.878906 34.382812 36.082031 33.304688 35.96875 32.226562 C 35.902344 31.546875 35.703125 30.828125 35.421875 30.082031 C 36.210938 30.035156 37.050781 30 38 30 C 39.425781 30 40.773438 30.171875 41.652344 30.476562 C 42.089844 30.628906 42.398438 30.816406 42.546875 30.957031 C 42.695312 31.097656 42.703125 31.140625 42.703125 31.25 L 42.703125 32 C 42.707031 32.550781 43.152344 33 43.703125 33 L 48 33 C 48.269531 33 48.527344 32.890625 48.71875 32.695312 C 48.90625 32.503906 49.007812 32.242188 49 31.96875 C 49 31.96875 48.96875 30.738281 48.96875 30.722656 C 48.972656 30.722656 48.972656 30.722656 48.96875 30.722656 C 48.988281 28.453125 47.558594 26.691406 45.796875 25.609375 C 44.03125 24.53125 41.890625 24 39.980469 24 C 36.816406 24 34.464844 24.820312 32.890625 25.632812 C 32.390625 24.957031 31.84375 24.277344 31.25 23.605469 C 31.605469 23.488281 31.964844 23.382812 32.316406 23.289062 C 33.019531 23.097656 33.6875 22.941406 34.203125 22.828125 C 34.722656 22.710938 35.007812 22.660156 35.269531 22.589844 C 36.078125 22.363281 37.179688 22.085938 38.167969 21.425781 C 39.152344 20.765625 40 19.582031 40 18 C 40 17.566406 39.789062 17.328125 39.652344 17 L 40 17 C 42.136719 17 44 15.273438 44 13 L 44 11.625 C 44 11.625 44.007812 11.488281 44.101562 11.335938 C 44.195312 11.183594 44.269531 11 45 11 L 46 11 C 46.550781 11 47 10.550781 47 10 L 47 6 C 47 5.449219 46.550781 5.003906 46 5 L 44.378906 5 C 41.722656 5 40.078125 6.230469 39.203125 7.398438 C 38.550781 8.269531 38.347656 9.339844 38.195312 10.261719 C 38.128906 10.664062 38.140625 10.707031 38.109375 11 L 38 11 C 36.277344 11 34.929688 11.625 34.109375 12.609375 C 33.285156 13.59375 33 14.832031 33 16 L 33 17.359375 C 31.359375 17.898438 29.484375 18.773438 27.871094 20.300781 C 26.917969 19.492188 25.972656 18.769531 25.042969 18.167969 C 26.066406 16.359375 27 13.921875 27 11 C 27 9.277344 26.429688 7.539062 25.234375 6.207031 C 24.039062 4.875 22.207031 4 19.925781 4 Z M 31.5 4.414062 L 32.585938 5.5 L 31.5 6.585938 L 30.414062 5.5 Z M 10.5 5.585938 L 6.585938 9.5 L 10.5 13.414062 L 14.414062 9.5 Z M 20 6.015625 C 21.742188 6.035156 22.9375 6.640625 23.746094 7.542969 C 24.570312 8.460938 25 9.722656 25 11 C 25 13.082031 24.394531 14.78125 23.6875 16.246094 C 23.800781 15.476562 24 14.800781 24 14 C 24 13.371094 24.035156 12.230469 23.539062 11.121094 C 23.042969 10.011719 21.804688 9 20 9 Z M 44.375 7 C 44.378906 7.003906 44.378906 7.003906 44.378906 7 L 45 7 L 45 9 C 43.730469 9 42.804688 9.628906 42.398438 10.289062 C 41.992188 10.949219 42 11.625 42 11.625 L 42 13 C 42 14.226562 41.113281 15 40 15 L 38 15 C 37.628906 15 37.289062 15.207031 37.113281 15.535156 C 36.941406 15.863281 36.964844 16.261719 37.175781 16.566406 C 37.175781 16.566406 37.253906 16.664062 37.261719 16.671875 C 37.265625 16.679688 37.269531 16.683594 37.273438 16.6875 C 37.28125 16.695312 37.289062 16.703125 37.300781 16.71875 C 37.324219 16.742188 37.355469 16.777344 37.390625 16.824219 C 37.46875 16.917969 37.570312 17.046875 37.667969 17.195312 C 37.863281 17.492188 38 17.867188 38 18 C 38 18.957031 37.660156 19.355469 37.054688 19.761719 C 36.449219 20.167969 35.550781 20.433594 34.730469 20.660156 C 34.761719 20.652344 34.300781 20.753906 33.765625 20.875 C 33.234375 20.996094 32.539062 21.15625 31.796875 21.359375 C 30.648438 21.667969 29.507812 22.167969 28.453125 22.699219 C 30.125 20.613281 32.425781 19.480469 34.269531 18.964844 C 34.703125 18.84375 35 18.449219 35 18 L 35 16 C 35 15.167969 35.214844 14.40625 35.640625 13.890625 C 36.070312 13.375 36.722656 13 38 13 L 39 13 C 39.53125 13 39.96875 12.582031 40 12.050781 C 40 12.050781 40.035156 11.386719 40.167969 10.589844 C 40.300781 9.792969 40.601562 8.863281 40.796875 8.601562 C 40.800781 8.601562 40.800781 8.601562 40.800781 8.601562 C 41.421875 7.769531 42.28125 7 44.375 7 Z M 10.5 8.414062 L 11.585938 9.5 L 10.5 10.585938 L 9.414062 9.5 Z M 45.5 17 L 43 19.5 L 45.5 22 L 48 19.5 Z M 6.5 18 L 4 20.5 L 6.5 23 L 9 20.5 Z M 19.242188 18 C 19.765625 18.003906 20.492188 18.195312 21.324219 18.53125 C 21.035156 19.625 20.761719 20.429688 20.675781 20.6875 C 20.535156 21.113281 20.695312 21.582031 21.070312 21.832031 C 21.445312 22.082031 21.941406 22.050781 22.28125 21.753906 C 22.421875 21.632812 22.667969 21.402344 23.113281 20.894531 C 23.351562 20.621094 23.628906 20.28125 23.921875 19.886719 C 24.773438 20.421875 25.660156 21.070312 26.550781 21.8125 C 26.421875 21.988281 26.285156 22.152344 26.164062 22.34375 L 24.160156 25.457031 C 23.902344 25.859375 23.964844 26.386719 24.308594 26.714844 C 24.648438 27.046875 25.175781 27.089844 25.566406 26.824219 L 28.578125 24.746094 C 28.753906 24.625 28.984375 24.5 29.246094 24.375 C 29.960938 25.144531 30.613281 25.925781 31.1875 26.6875 C 30.867188 26.933594 30.617188 27.152344 30.566406 27.199219 C 30.566406 27.199219 30.566406 27.199219 30.566406 27.203125 L 28.296875 29.441406 C 27.960938 29.777344 27.902344 30.300781 28.160156 30.699219 C 28.417969 31.09375 28.917969 31.257812 29.359375 31.089844 C 29.359375 31.085938 30.671875 30.589844 33.332031 30.265625 C 33.699219 31.105469 33.921875 31.855469 33.984375 32.433594 C 34.054688 33.148438 33.914062 33.519531 33.71875 33.71875 C 33.640625 33.792969 33.53125 33.859375 33.390625 33.90625 L 33.289062 33.941406 C 33.113281 33.988281 32.886719 34.011719 32.589844 33.996094 C 31.964844 33.957031 31.105469 33.722656 30.136719 33.28125 C 28.191406 32.398438 25.800781 30.710938 23.546875 28.453125 C 21.289062 26.199219 19.601562 23.808594 18.71875 21.863281 C 18.277344 20.894531 18.042969 20.03125 18.003906 19.40625 C 17.988281 19.097656 18.011719 18.863281 18.0625 18.683594 C 18.070312 18.664062 18.078125 18.648438 18.082031 18.628906 C 18.136719 18.480469 18.203125 18.363281 18.28125 18.28125 C 18.449219 18.117188 18.71875 17.996094 19.242188 18 Z M 16.683594 22.179688 C 16.753906 22.351562 16.816406 22.519531 16.894531 22.691406 C 17.917969 24.941406 19.734375 27.472656 22.128906 29.871094 C 24.527344 32.265625 27.058594 34.082031 29.308594 35.105469 C 29.398438 35.144531 29.484375 35.175781 29.574219 35.214844 L 8.726562 42.355469 Z M 39.980469 26 C 41.5 26 43.371094 26.46875 44.75 27.316406 C 46.128906 28.164062 46.980469 29.261719 46.96875 30.703125 C 46.96875 30.78125 46.972656 30.878906 46.976562 31 L 44.59375 31 C 44.515625 30.429688 44.308594 29.871094 43.921875 29.503906 C 43.472656 29.078125 42.917969 28.800781 42.304688 28.589844 C 41.078125 28.160156 39.574219 28 38 28 C 35.425781 28 33.664062 28.265625 32.140625 28.515625 C 32.367188 28.292969 34.835938 26 39.980469 26 Z M 38.5 37.585938 L 34.585938 41.5 L 38.5 45.414062 L 42.414062 41.5 Z M 38.5 40.414062 L 39.585938 41.5 L 38.5 42.585938 L 37.414062 41.5 Z M 38.5 40.414062 "
      />
    </G>
  </Svg>
);

export default SvgComponent;