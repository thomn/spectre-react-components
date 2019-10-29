import babel from 'rollup-plugin-babel';
import babelMinify from 'rollup-plugin-babel-minify';
import nodeResolve from 'rollup-plugin-node-resolve';
import cleanup from 'rollup-plugin-cleanup';
import index from './rollup.index.plugin';

/**
 * User: Oleg Kamlowski <oleg.kamlowski@thomann.de>
 * Date: 25.09.2019
 * Time: 20:22
 */
export default [
    {
        input: [
            {path: 'src/components/', ext: '.jsx'},
            'src/hooks/index.js',
        ],
        output: {
            name: 'spectre-react-components',
            dir: './',
            format: 'es',
            entryFileNames: '[name].js',
            chunkFileNames: '[name].js',
        },
        external: [
            'react',
            'react-dom',
            'prop-types',
        ],
        plugins: [
            babel(),
            babelMinify(),
            index(),
            nodeResolve({
                extensions: ['.js', '.jsx'],
            }),
            cleanup({}),
        ],
        manualChunks: {
            'vendor': [
                'src/factory.js',
                'src/propTypes.js'
            ]
        },
    },
];
