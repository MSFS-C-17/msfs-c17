import fs from 'fs';
import { baseCompile } from './plugins.mjs';
import { getTemplatePlugin } from './templatePlugins.mjs';
import { Directories } from './directories.mjs';

process.chdir(Directories.src);

function getInputs() {
    const baseInstruments = fs.readdirSync(`${Directories.instruments}/src`, { withFileTypes: true })
        .filter((d) => d.isDirectory() && fs.existsSync(`${Directories.instruments}/src/${d.name}/config.json`));

    return [
        ...baseInstruments.map(({ name }) => ({ path: name, name, isInstrument: true }))
    ];
}

export default getInputs()
    .map(({ path, name, isInstrument }) => {
        const config = JSON.parse(fs.readFileSync(`${Directories.instruments}/src/${path}/config.json`));

        return {
            watch: true,
            name,
            input: `${Directories.instruments}/src/${path}/${config.index}`,
            output: {
                file: `${Directories.temp}/bundle.js`,
                format: 'iife',
            },
            watch:{},
            plugins: [
                ...baseCompile(name, path),
                getTemplatePlugin({ name, path, imports: ['/JS/dataStorage.js'], config, isInstrument }),
            ],
        };
    });
