import React from 'react';
import styled from 'styled-components';

import { Icon } from './_base';

const UpArrowSVG = styled(Icon).attrs({ viewBox: '0 0 63 40' })`
    width: 1.575em;
`;

const DownArrowSVG = UpArrowSVG;

const LeftArrowSVG = styled(Icon).attrs({ viewBox: '0 0 26 40' })`
    width: 0.65em;
`;

const RightArrowSVG = LeftArrowSVG;

const Arrow = ({ color = '#000', direction, ...props }) => {
    switch (direction) {
        case Arrow.direction.down:
            return (
                <DownArrowSVG
                    data-test="icon-arrow-down"
                    {...props}
                >
                    <polygon
                        fill={color}
                        points="31.5,40 0.1,8.6 8.7,0 31.5,22.8 54.3,0 62.9,8.6"
                    />
                </DownArrowSVG>
            );

        case Arrow.direction.left:
            return (
                <LeftArrowSVG
                    data-test="icon-arrow-left"
                    {...props}
                >
                    <polygon
                        fill={color}
                        points="20.3,40 25.7,34.5 11.2,20 25.7,5.5 20.3,0 0.3,20"
                    />
                </LeftArrowSVG>
            );

        case Arrow.direction.right:
            return (
                <RightArrowSVG
                    data-test="icon-arrow-right"
                    {...props}
                >
                    <polygon
                        fill={color}
                        points="5.7,40 0.3,34.5 14.8,20 0.3,5.5 5.7,0 25.7,20"
                    />
                </RightArrowSVG>
            );

        case Arrow.direction.up:
            return (
                <UpArrowSVG
                    data-test="icon-arrow-up"
                    {...props}
                >
                    <polygon
                        fill={color}
                        points="31.5,0 62.9,31.4 54.3,40 31.5,17.2 8.7,40 0.1,31.4"
                    />
                </UpArrowSVG>
            );
        
        default: 
    }
};

Arrow.direction = {
    down: 'down',
    left: 'left',
    right: 'right',
    up: 'up',
};

export {
    Arrow as default,
    Arrow,
};
