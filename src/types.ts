export interface IProduct {
  id: number;

  /**
   * In USD
   */
  price: number;

  /**
   * Display to the user
   */
  name: string;

  /**
   * amount remaining in inventory
   */
  inventory: number;
}

export interface ICart {
  id: number;
}
