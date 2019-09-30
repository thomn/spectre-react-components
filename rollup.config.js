import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-babel-minify';
import resolve from 'rollup-plugin-node-resolve';
import cleanup from 'rollup-plugin-cleanup';

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 25.09.2019
 * Time: 20:22
 */
export default [
    {
        input: 'src/index.js',
        output: {
            name: 'spectre-react-components',
            file: 'dist/lib.js',
            format: 'es',
        },
        external: [
            'react',
            'react-dom',
            'prop-types',
        ],
        plugins: [
            babel(),
            minify(),
            resolve({
                extensions: ['.js', '.jsx'],
            }),
            cleanup({}),
        ],
    },
];
