import {join} from 'path';
import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-babel-minify';
import resolve from 'rollup-plugin-node-resolve';

const root = join(__dirname, 'src');

const config = {
    plugins: [
        ['module-resolver', {
            extensions: ['.js', '.jsx'],
            alias: {
                'components': join(root, 'components'),
                'hooks': join(root, 'hooks'),
                'utils': join(root, 'utils.js'),
                'factory': join(root, 'factory.js'),
            },
        }],
    ],
    exclude: 'node_modules/**',
    presets: [
        [
            '@babel/preset-env',
            {
                'modules': false,
            },
        ],
        '@babel/preset-react',
    ],
};

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
            babel(config),
            minify(),
            resolve({
                extensions: ['.js', '.jsx'],
            }),
        ],
    },
];
