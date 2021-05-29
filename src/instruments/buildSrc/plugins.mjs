import fs from 'fs';
import image from '@rollup/plugin-image';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel as babelPlugin } from '@rollup/plugin-babel';
import { typescriptPaths } from 'rollup-plugin-typescript-paths';
import replace from '@rollup/plugin-replace';
import { Directories } from './directories.mjs';

const extensions = ['.ts', '.tsx', '.js', '.jsx', '.mjs'];

function babel() {
    return babelPlugin({
        presets: [
            ['@babel/preset-env', { targets: { safari: '11' } }],
            ['@babel/preset-react', { runtime: 'automatic' }],
            ['@babel/preset-typescript'],
        ],
        plugins: [
            '@babel/plugin-proposal-class-properties',
            ['@babel/plugin-transform-runtime', { regenerator: true }],
        ],
        babelHelpers: 'runtime',
        compact: false,
        extensions,
    });
}

export function baseCompile(instrumentName, instrumentFolder) {
    return [
        image(),
        nodeResolve({ extensions }),
        commonjs({ include: /node_modules/ }),
        babel(),
        typescriptPaths({
            tsConfigPath: `${Directories.src}/tsconfig.json`,
            preserveExtensions: true,
        }),
        replace({ 'process.env.NODE_ENV': '"production"' })
    ];
}
