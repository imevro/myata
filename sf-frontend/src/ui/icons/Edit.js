import React from 'react';

const SvgComponent = ({ size, color, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill={color} {...props}>
    <g id="surface196410">
      <path
        style={{
          stroke: 'none',
          fillRule: 'nonzero',
          fill: color,
          fillOpacity: 1,
        }}
        d="M 86.25 4 C 83.757812 4 81.273438 4.976562 79.375 6.875 L 77.75 8.5 L 91.5 22.25 C 91.492188 22.257812 93.125 20.625 93.125 20.625 C 96.929688 16.820312 96.921875 10.671875 93.125 6.875 C 91.21875 4.976562 88.742188 4 86.25 4 Z M 74.6875 12.0625 C 74.234375 12.125 73.8125 12.351562 73.5 12.6875 L 8.625 77.625 C 8.367188 77.859375 8.171875 78.164062 8.0625 78.5 L 4.0625 93.5 C 3.882812 94.1875 4.085938 94.914062 4.585938 95.414062 C 5.085938 95.914062 5.8125 96.117188 6.5 95.9375 L 21.5 91.9375 C 21.835938 91.828125 22.140625 91.632812 22.375 91.375 L 87.3125 26.5 C 88.109375 25.726562 88.117188 24.453125 87.34375 23.65625 C 86.570312 22.859375 85.296875 22.851562 84.5 23.625 L 19.9375 88.1875 L 11.8125 80.0625 L 76.375 15.5 C 76.976562 14.921875 77.15625 14.023438 76.820312 13.257812 C 76.484375 12.492188 75.710938 12.015625 74.875 12.0625 C 74.8125 12.0625 74.75 12.0625 74.6875 12.0625 Z M 74.6875 12.0625 "
      />
    </g>
  </svg>
);

export default SvgComponent;