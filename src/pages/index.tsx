import { Input } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

import ProductItem from '../components/ProductItem';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { useCheckout } from '../mock-backend';
import { initializeProduct } from '../services/slices/productSlice';
import { RootState } from '../services/store';

import SearchImg from '../assets/images/search.png';

const Home: React.FC = () => {
  const { items } = useCheckout();
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const products = useSelector((state: RootState) => state.Product.products);
  const balance = useSelector((state: RootState) => state.Product.balance);

  const scrollPosition = useScrollPosition();
  const hasWindow = typeof window !== 'undefined';

  const getProductList = async () => {
    if (items) {
      dispatch(initializeProduct({ products: items, balance: 20 }));
    } else {
      toast.error('Connection failed with server!');
    }
  };

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full pb-[50px]">
        <div
          className={`${
            scrollPosition > (hasWindow ? window.innerHeight : 0) / 2 + 100
              ? 'bg-white/30 backdrop-blur-lg justify-between'
              : 'bg-none backdrop-blur-none  justify-end'
          } fixed w-full flex flex-row items-center z-10 top-0 transition ease-in-out sm:py-5 py-3 sm:px-10 px-5`}
        >
          <button
            className={`${
              scrollPosition > (hasWindow ? window.innerHeight : 0) / 2 + 100
                ? 'block'
                : 'invisible'
            } font-Sacramento sm:text-[30px] text-[20px] leading-[30px] text-center text-black`}
          >
            Create, Inc. Store
          </button>
          <p className="text-black sm:text-[20px] text-[15px]">
            Balance : ${balance}
          </p>
        </div>

        <div className="w-full h-screen bg-hero-pattern bg-cover">
          <div className="relative w-full h-full backdrop-blur-lg flex flex-col justify-center items-center">
            <h1 className="font-Sacramento lg:text-[150px] sm:text-[100px] text-[80px] md:leading-[150px] leading-[100px] text-center text-black">
              Create, Inc. Store
            </h1>
          </div>
        </div>

        <div className="m-10 max-w-[1440px]">
          <div className="flex flex-col md:gap-10 gap-5 justify-center items-center mt-[30px] mx-[10px] mb-[80px]">
            <p className="text-black md:text-[30px] text-[20px] text-center">
              Browse the Catalogue
            </p>
            <div className="max-w-[600px] w-full">
              <Input
                label="Search for products..."
                icon={<img src={SearchImg.src} alt="" />}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex flex-row gap-10 justify-center flex-wrap w-full">
            {products.map((item, index) => {
              if (item.name.toLowerCase().search(search.toLowerCase()) > -1) {
                return <ProductItem {...item} index={index} key={index} />;
              }
              return <></>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
