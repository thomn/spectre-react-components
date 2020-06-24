import React from 'react';
import {factory} from 'nean';
import {number} from '../propTypes';

/**
 *
 * @type {*}
 */
const Meter = factory({
    type: 'meter',
    className: 'meter',
});

Meter.propTypes = {
    value: number.isRequired,
    optimum: number,
    min: number,
    max: number,
    low: number,
    high: number,
};

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 24.06.2020
 * Time: 19:32
 */
export default Meter;