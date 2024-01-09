/// <reference types="node" />
export * from "./exec";
export * from "./subprocess";
export * from "child_process";
export const exec: typeof execIndex.exec;
export const spawn: typeof cp.spawn;
export const SubProcess: typeof spIndex.SubProcess;
import * as execIndex from './exec';
import * as cp from 'child_process';
import * as spIndex from './subprocess';
//# sourceMappingURL=index.d.ts.map