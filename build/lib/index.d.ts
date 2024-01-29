/// <reference types="node" />
import * as cp from 'child_process';
import * as spIndex from './subprocess';
import * as execIndex from './exec';
declare const spawn: typeof cp.spawn;
declare const SubProcess: typeof spIndex.SubProcess;
declare const exec: typeof execIndex.exec;
export { exec, spawn, SubProcess };
export { AITProcessProps, AITProcessExecOptions, AITProcessExecStringResult } from './exec';
//# sourceMappingURL=index.d.ts.map