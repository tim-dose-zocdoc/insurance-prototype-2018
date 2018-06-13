import React from 'react';
import styled from 'styled-components';

const BaseSVG = ({ height, width, ...props }) => <svg {...props} />;

/*
 * This equates to a 40x40 square SVG icon.
 *
 * Adjust the em values to simulate the aspect ratio of your icon based on the
 * viewBox width & height values (values 3 and 4, respectively in "0 0 0 0").
 *
 * if you need to resize the icon in a media query, just change the font-size,
 * which effectively maps to "height" and the icon will resize itself without
 * distorting the aspect ratio.
 */
const Icon = styled(BaseSVG)`
    display: inline-block;
    font-size: ${p => p.height ? `${p.height}px` : '1em'};
    height: 1em;
    width: 1em;
`;

export {
    Icon as default,
    Icon,
};
