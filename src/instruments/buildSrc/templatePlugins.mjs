import instrumentTemplate from '@flybywiresim/rollup-plugin-msfs';
import { Directories } from './directories.mjs';

export function getTemplatePlugin({ name, config, imports = [], isInstrument }) {
    if (isInstrument) {
        return instrumentTemplate({
            name,
            elementName: `c17a-${name.toLowerCase()}`,
            config,
            imports,
            outputDir: `${Directories.root}/MSFS C-17 Instruments/html_ui/Pages/VCockpit/Instruments/C17A`,
        });
    }
}
