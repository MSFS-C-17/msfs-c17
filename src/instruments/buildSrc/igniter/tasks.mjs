import fs from 'fs';
import { ExecTask } from '@flybywiresim/igniter';
import { Directories } from '../directories.mjs';

function getInputs() {
    const baseInstruments = fs.readdirSync(`${Directories.instruments}/src`, { withFileTypes: true })
        .filter((d) => d.isDirectory() && fs.existsSync(`${Directories.instruments}/src/${d.name}/config.json`));

    return [
        ...baseInstruments.map(({ name }) => new ExecTask(
            name,
            `node src/instruments/buildSrc/igniter/worker.mjs ${name}`,
            [`src/instruments/src/${name}`, `MSFS C-17 Instruments/html_ui/Pages/VCockpit/Instruments/C-17A/${name}`],
        ))
    ];
}

export default getInputs();
