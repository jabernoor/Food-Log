import orderResolver from './order'
import providerResolver from './provider'
import unitResolver from './unit'
import userResolver from './user'
import orderEntriesResolver from './orderEntries'

export default root = {
    order: orderResolver,
    provider: providerResolver,
    unit: unitResolver,
    user: userResolver,
    orderEntries: orderEntriesResolver,
} 