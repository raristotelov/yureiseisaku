import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
    // ...compat.extends('plugin:prettier/recommended')
    {
        rules: {
            semi: ['error', 'always'],
            quotes: ['error', 'single'],
            'jsx-quotes': ['error', 'prefer-single'],
            indent: ['error', 4],
            'comma-dangle': ['error', 'always-multiline'],
            'max-len': ['error', { code: 150 }],
            'arrow-parens': ['error', 'always'],
        },
    },
];

export default eslintConfig;
