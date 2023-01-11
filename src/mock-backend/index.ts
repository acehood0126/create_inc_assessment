import { initialBalance, initialItems, Item } from './data';

type UseCheckout = {
  items: Item[];

  /**
   * Charges the current account with the `price` in USD and decrements an item's inventory
   *
   * @throws if the current account does not have enough or if no inventory
   *
   */
  buy: (itemId: Item['id']) => Promise<void>;
};

export const useCheckout = (): UseCheckout =>
  // @TODO: Not implemented
  ({
    buy: async (itemId: Item['id']) => {
      // @TODO: Not implemented
      // executePurchase(...)
    },
    items: initialItems, // @TODO: Not implemented
  });
