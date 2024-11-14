module.exports = {
    trailingComma: 'es5',
    printWidth: 140,
    semi: false,
    singleQuote: true,
    tabWidth: 4,
    arrowParens: 'avoid',
    jsxSingleQuote: true,
    importOrder: ['^(components)/(.*)$', '^[./]'],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
}
