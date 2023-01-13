import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { initializeProduct } from '../../services/slices/productSlice';
import { RootState } from '../../services/store';

import SampleProductImg from '../../assets/images/sample.jpg';
import { useCheckout } from '../../mock-backend';

interface IProductItem {
  index: number;
  name: string;
  price: number;
  inventory: number;
}

const ProductItem: React.FC<IProductItem> = ({
  index,
  name,
  price,
  inventory,
}: IProductItem) => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.Product.products);
  const balance = useSelector((state: RootState) => state.Product.balance);
  const { buy } = useCheckout();

  const buyItem = async () => {
    try {
      const res = await buy(index, { items: products, balance });
      console.log('🚀 ~ file: index.tsx:37 ~ buyItem ~ res', res);
      if (res.isSucceed) {
        dispatch(
          initializeProduct({
            products: res.state.items,
            balance: res.state.balance,
          })
        );
        toast.success('You bought a ' + name);
      } else {
        toast.error(res.msg);
      }
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  return (
    <Card className="w-72">
      <CardHeader color="gray" className="relative h-52">
        <img
          src={SampleProductImg.src}
          alt="product"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          {name}
        </Typography>
        <div className="flex sm:flex-row flex-col justify-between gap-2 items-center w-full sm:mt-4 mt-2">
          <Typography variant="h5">
            ${price} * {inventory}
          </Typography>
          <Button
            color="red"
            className="p-3"
            onClick={() => {
              buyItem();
            }}
          >
            Buy
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProductItem;
