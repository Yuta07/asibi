import { rest } from 'msw'

import { mockOgpRequest } from './resolvers/mockOgpRequest'

export const handlers = [rest.post('/api/getOgp', mockOgpRequest)]
