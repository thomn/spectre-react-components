import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-babel-minify';

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
            babel({exclude: 'node_modules/**'}),
            minify(),
        ],
    },
];