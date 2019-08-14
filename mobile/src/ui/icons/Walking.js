import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = props => (
  <Svg width={props.size} height={props.size} viewBox="0 0 50 50" {...props}>
    <Path
      fill={props.color}
      d="M27 2c-2.75 0-5 2.25-5 5s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5zm0 2c1.668 0 3 1.332 3 3s-1.332 3-3 3-3-1.332-3-3 1.332-3 3-3zm-3.79 9a5 5 0 00-3.038 1.031l-5.953 4.559c-.035.027-.07.058-.106.09-.34.277-.625.633-.816 1.047a.945.945 0 00-.082.152l-2.836 6.687c-.23.422-.379.91-.379 1.434 0 1.645 1.355 3 3 3 1.316 0 2.438-.871 2.832-2.063l2.45-5.496 1.14-.832-1.235 5.067a.98.98 0 00-.03.262c-.079.32-.153.656-.157 1.035 0 .011-.004.02-.004.027l-1.426 7.156-4.617 5.953.082-.093A3.501 3.501 0 0011 44.5c0 1.922 1.578 3.5 3.5 3.5 1.09 0 1.992-.574 2.633-1.355a.996.996 0 00.316-.27l4.969-6.473c.078-.105.137-.222.172-.347l.945-3.477 1.684 1.531 1.832 7.371c.035.258.097.52.199.778l.012.043a.986.986 0 00.457.62C28.352 47.329 29.316 48 30.5 48c1.922 0 3.5-1.578 3.5-3.5 0-.488-.121-.934-.293-1.34l-2.008-8.05a.993.993 0 00-.168-.356l-4.437-5.957 1.246-4.582 1.523 1.691c.125.14.29.242.469.293l5.566 1.59.024.008c.117.047.246.07.371.066.23.063.453.137.707.137 1.645 0 3-1.355 3-3 0-1.082-.656-1.93-1.52-2.457a1.017 1.017 0 00-.542-.39l-4.657-1.368-3.797-5.383c-.027-.043-.062-.082-.093-.117a4.503 4.503 0 00-3.672-2.254c-.035-.011-.106-.015-.168-.02-.004-.003-.008-.003-.016-.003-.012 0-.023-.008-.035-.008h-.016-.011zm0 2h2.29c1.39 0 2.5 1.11 2.5 2.5 0 .215-.043.441-.113.7a.857.857 0 00-.04.198l-2.812 10.348a.999.999 0 00.164.86l4.61 6.18 1.957 7.859c.02.07.043.136.074.199A1.486 1.486 0 0130.5 46a1.49 1.49 0 01-1.355-.867.063.063 0 00-.016-.028v-.003a1.63 1.63 0 01-.11-.461.928.928 0 00-.023-.145l-1.91-7.66a1 1 0 00-.297-.496l-5.016-4.578a.838.838 0 00-.195-.137 3.032 3.032 0 01-.98-.89l.039.304a1.036 1.036 0 00-.14-.398c-.005-.004-.009-.004-.009-.008a.954.954 0 00-.125-.156l.11.113A2.977 2.977 0 0120 29c0-.25.047-.504.125-.785.008-.047.02-.094.023-.137.032-.129 1.211-4.629 1.872-7.687a1.002 1.002 0 00-.434-1.047.994.994 0 00-1.133.031l-3.562 2.61a.99.99 0 00-.325.402l-2.562 5.738c-.02.047-.035.094-.05.14A.978.978 0 0113 29c-.566 0-1-.434-1-1a.97.97 0 01.152-.516.732.732 0 00.067-.136l2.785-6.57-.063.081a.996.996 0 00.137-.234.977.977 0 01.332-.426.86.86 0 00.2-.195l-.07.09 5.847-4.473v-.004A3.014 3.014 0 0123.21 15zm6.497 4.188l2.14 3.035c.133.183.321.32.54.382l4.875 1.43c.02.012.039.02.062.027A.987.987 0 0138 25a.982.982 0 01-1.352.93l-.074-.024h-.004l-.03-.011a1.159 1.159 0 00-.204-.032h-.004c-.375-.02-.73.176-.918.5l.348-.691-4.606-1.317-2.191-2.437zm6.625 6.675c-.043-.008-.086-.02-.098-.02h-.011l.109.02zm-.098-.02l.254.036a.927.927 0 00-.254-.035zM19.36 32.399c.332.352.715.653 1.13.899l1.5 1.367a.996.996 0 00-.266.461L20.71 38.84l-4.246 5.535.781.59a1 1 0 00-.797-.184 1.02 1.02 0 00-.664.473A1.48 1.48 0 0114.5 46c-.84 0-1.5-.66-1.5-1.5 0-.422.168-.79.445-1.063.032-.03.059-.066.086-.097l4.766-6.149a.952.952 0 00.187-.414zm0 0"
    />
  </Svg>
);

export default SvgComponent;