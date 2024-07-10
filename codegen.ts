import {CodegenConfig} from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'https://beta.pokeapi.co/graphql/v1beta/',
  documents: ['src/gql/*.{ts,tsx}'],
  generates: {
    'src/generated/types.ts': {
      plugins: ['typescript', 'typescript-operations'],
    },
  },
}

export default config
