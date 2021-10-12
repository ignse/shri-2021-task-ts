import {color, TOptions} from './colors';
export function markdown(text: string, options: TOptions) {
    let result = text;
    if (options) {
        if (options.bold) {
            result = color(`**${result}**`, <TOptions>{font: 'yellow', effects: ['bright']});
        }
        if (options.italic) {
            result = color(`_${result}_`, <TOptions>{ font: 'magenta', effects: ['italic'] });
        }
        if (options.mono) {
            result = color(`\`${result}\``, <TOptions>{ font: 'green' });
        }
        if (options.link) {
            result = `[${result}](${color(options.link, <TOptions>{ font: 'blue', effects: ['underscore'] })})`;
        }
    }
    return result;
}
