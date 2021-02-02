export const mutatorLang = (args, state, utils) => {
    utils.changeValue(state, 'lang', () => String(args))
}