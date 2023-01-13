import { Item, UserAndItemState } from './data';
import { sleep } from './utils';

/**
 * Modifies `state`, given an `itemId` to purchase
 * @returns {UserAndItemState} the updated state if a purchase should succeed
 */
export const executePurchase = async (
  itemId: Item['id'],
  state: UserAndItemState
): Promise<{ state: UserAndItemState; isSucceed: boolean; msg: string }> => {
  // NOTE: the following line intentionally pauses execution in this
  // function and MUST remain in tact for the assignment to replicate a
  // network request.
  await sleep(1000);
  const { balance, items } = JSON.parse(JSON.stringify(state));
  if (balance < items[itemId].price) {
    return { state, isSucceed: false, msg: 'Not enough balance' };
  }
  if (items[itemId].inventory === 0) {
    return { state, isSucceed: false, msg: 'Not enough inventory' };
  }
  items[itemId].inventory--;
  return {
    state: { items, balance: balance - items[itemId].price },
    isSucceed: true,
    msg: 'Success',
  };

  // @TODO: Not implemented
};
