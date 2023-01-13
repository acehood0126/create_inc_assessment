import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

import SampleProductImg from '../../assets/images/sample.jpg';
import { addCart } from '../../services/slices/productSlice';

interface IProductItem {
  index: number;
  name: string;
  price: number;
  addedCart: boolean;
}

const ProductItem: React.FC<IProductItem> = ({
  index,
  name,
  price,
  addedCart,
}: IProductItem) => {
  const dispatch = useDispatch();
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
          <Typography variant="h5">${price}</Typography>
          <Button
            disabled={addedCart}
            color="red"
            variant={addedCart ? 'outlined' : 'filled'}
            className="p-3"
            onClick={() => {
              dispatch(addCart(Number(index)));
              toast.success('Added to cart');
            }}
          >
            {addedCart ? 'Added to Cart' : 'Add to Cart'}
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProductItem;
