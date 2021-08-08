import type { TypePolicies, FieldPolicy } from '@apollo/client'
import type { Project } from '../__generated__/graphql'

type Fields = {
  project: FieldPolicy<Project>
}

const fields: Fields = {
  project: {
    keyArgs: ['id'],
    merge: (existing, incoming, { mergeObjects }) => {
      if (existing == null) {
        return incoming
      }

      return mergeObjects(existing, incoming)
    },
  },
}

const typePolicies: TypePolicies = {
  Query: {
    fields,
  },
}

export default typePolicies
