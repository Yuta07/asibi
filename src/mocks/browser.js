import { rest, setupWorker } from 'msw'

import { handlers } from './handlers'

export const worker = setupWorker(...handlers)

window.msw = {
	worker,
	rest,
}
