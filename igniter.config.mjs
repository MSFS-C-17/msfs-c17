import { ExecTask, TaskOfTasks } from '@flybywiresim/igniter';
import instrumentsTasks from './src/instruments/buildSrc/igniter/tasks.mjs';

export default new TaskOfTasks('c17a', [
    new TaskOfTasks('build', [
        new TaskOfTasks('instruments',instrumentsTasks, true)
    ]),
    new TaskOfTasks('dist', [
        new ExecTask('manifests', 'node scripts/build.js'),
        new ExecTask('metadata', 'bash scripts/metadata.sh'),
    ]),
]);
