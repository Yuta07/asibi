import { rest } from 'msw'

import { mockPost } from './resolvers/mockPost'

export const handlers = [rest.get('/entry/msw-test', mockPost)]
