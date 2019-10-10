import {readdirSync, writeFileSync} from 'fs';
import {basename, join, extname} from 'path';

/**
 *
 * @param path
 * @param ext
 * @returns {{}}
 */
const walk = ({path, ext}) => readdirSync(path)
    .filter(file => extname(file) === ext)
    .reduce((acc, file) => (
        (acc[basename(file, ext)] = join(path, file)) && acc
    ), {})
;

/**
 *
 * @param input
 */
const extract = (input) => {
    let output = {};

    for (let entry of input) {
        if (typeof entry === 'string') {
            const [head, ...tail] = entry.split('/')
                .sort((a) => a === 'index.js' && -1)
            ;

            if (head === 'index.js') {
                const name = tail.slice(-1);
                output[name] = entry;
            } else {
                let name = tail.slice(-1).pop();
                name = basename(name, '.js');
                output[name] = entry;
            }

            continue;
        }

        if (typeof entry === 'object') {
            output = {
                ...output,
                ...walk(entry),
            };
        }
    }

    return output;
};

/**
 *
 * @param data
 * @param path
 */
const write = (data, path) => {
    writeFileSync(path, data);
};

/**
 *
 * @param output
 * @param ext
 * @param dir
 */
const build = (output, {ext, dir}) => {
    const head = [];
    const tail = [];

    for (const file in output) {
        if (basename(file, ext) === 'vendor') {
            continue;
        }

        const {[file]: {exports}} = output;
        const name = basename(file, ext);
        const path = join(dir, file);

        if (exports.includes('default')) {
            tail.push(`export {default as ${name}} from './${path}';`);
        } else {
            head.push(`import * as ${name} from './${path}';`);
            tail.push(`export {${name} as ${name}};`);
        }
    }

    return [
        ...head,
        ...tail,
    ].join('\n');
};


/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 01.10.2019
 * Time: 23:30
 */
export default () => {
    const state = {
        dir: undefined,
        inputs: undefined,
        index: {
            head: [],
            tail: [],
        },
    };

    return {
        name: 'index',
        options(options) {
            const {input} = options;
            state.inputs = extract(input);

            options.input = state.inputs;
        },
        outputOptions({dir, entryFileNames}) {
            state.dir = dir;
            state.ext = extname(entryFileNames);
        },
        writeBundle(output) {
            const data = build(output, state);
            const path = join(state.dir, 'index.js');

            write(data, path);
        },
    };
}