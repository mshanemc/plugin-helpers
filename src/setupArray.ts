import * as chalk from 'chalk';
import { UX } from '@salesforce/command';

const ux = await UX.create();

const setupArray = (existing, arrayName: string) => {
    const updated = replacementBuilder(existing[arrayName]);
    if (!Array.isArray(updated)) {
        ux.logJson(existing);
        ux.error(chalk.red(`${arrayName} is not an array even after I tried to correct it`));
    }
    return { ...existing, [arrayName]: updated };
};

const replacementBuilder = (original) => {
    if (Array.isArray(original)) {
        return original;
    }
    if (original) {
        return [original];
    }
    return [];
};

export { setupArray };
