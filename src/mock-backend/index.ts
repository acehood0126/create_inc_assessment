import { initialItems, Item, UserAndItemState } from './data';
import { executePurchase } from './purchase';

type UseCheckout = {
  items: Item[];

  /**
   * Charges the current account with the `price` in USD and decrements an item's inventory
   *
   * @throws if the current account does not have enough or if no inventory
   *
   */
  buy: (
    itemId: Item['id'],
    state: UserAndItemState
  ) => Promise<{ state: UserAndItemState; isSucceed: boolean; msg: string }>;
};

export const useCheckout = (): UseCheckout =>
  // @TODO: Not implemented
  ({
    buy: async (
      itemId: Item['id'],
      state: UserAndItemState
    ): Promise<{
      state: UserAndItemState;
      isSucceed: boolean;
      msg: string;
    }> => {
      // @TODO: Not implemented
      const res = await executePurchase(itemId, state);
      return res;
    },
    items: initialItems, // @TODO: Not implemented
  });
