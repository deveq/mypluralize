import pluralize from 'pluralize';

export function getPluralize(str: any): string {
    return pluralize.plural(str);
}