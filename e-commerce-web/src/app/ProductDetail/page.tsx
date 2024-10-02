"use client";

import { HeartIconSvg } from "@/components/HeartIcon";
import { Button } from "@/components/ui/button";
import { Star, Type } from "lucide-react";
import { useEffect, useState } from "react";
import datas from "@/app/datas.json";

import Link from "next/link";
import Card from "@/components/Card";
import { stringify } from "querystring";
import { headers } from "next/headers";
import { useSearchParams } from "next/navigation";
import { ProductType } from "../dashboard/product/page";

export const ProductDetail = () => {
  const [selectPhoto, setSelectPhoto] = useState("item1");

  const productPhotos = [
    { photo: "item1" },
    { photo: "item2" },
    { photo: "item3" },
    { photo: "item4" },
  ];

  const reset = () => {
    setNumber(1);
  };

  const productSize = [
    { size: "S", qty: 10},
    { size: "M", qty: 10},
    { size: "L", qty: 10},
    { size: "XL", qty: 10},
    { size: "2XL", qty: 10 },
  ];



  const defaultSize = productSize.find((p) => p.qty > 0)?.size || "";
  const [selectedSize, setSelectedSize] = useState<string>(defaultSize);
  const [number, setNumber] = useState<number>(0);

  const currentQty =
    productSize.find((item) => item.size === selectedSize)?.qty || 0;

  useEffect(() => {
    if (currentQty === 0) {
      const availableSize = productSize.find((item) => item.qty > 0)?.size || "";
      setSelectedSize(availableSize);
      setNumber(0);
    }
  }, [currentQty, productSize]);
  const nemeh = () => {
    setNumber((oldNumber) =>
      oldNumber < currentQty ? oldNumber + 1 : oldNumber
    );
  };

  const hasah = () => {
    setNumber((oldNumber) => (oldNumber > 1 ? oldNumber - 1 : oldNumber));
  };

  
  const productComment = [
    { name: "Nymbaa", value: "Ваав материал ёстой гоё  байна 😍" },
    { name: "Tommy", value: "🔥🔥🔥" },
    { name: "Badral", value: "Ваав материал ёстой гоё  байна" },
    { name: "Galt", value: "Ваав гоё харагдаж байна. " },
    { name: "OyunDari", value: "Ваав материал ёстой гоё  байна" },
  ];
  const [ready, setReady] = useState(false);
  const filled = () => {
    if (ready) {
      setReady(false);
    } else {
      setReady(true);
    }
  };
  // const [price, setPrice] = useState<number>(0);

  
  const [enable, setEnable] = useState<boolean>(true);
  

  
  const searchParams = useSearchParams();
  const search = searchParams.get("id")
  
  const [uploadShoppingCart , setUploadShoppingCart] = useState <ProductType>();
  
  const getShoppingCart = async () => {
    const response = await fetch(`http://localhost:4000/products/${search}`);
    const data = await response.json();
    setUploadShoppingCart(data);
    console.log(setUploadShoppingCart)
  }
  useEffect(() => {
    getShoppingCart();
  }, [])

  const createShoppingCart = async () => {
    const data = await fetch("http://localhost:4000/ShoppingCart" ,{
      method: "POST",
      body: JSON.stringify({
        // orderNumber: ,
        productCount: number,
        size: selectedSize,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    });
    reseted(),
    console.log(data)
  }

  const reseted = () => {
    setSelectedSize(""),
    setNumber(0)
  }
  
  
  return (
    <div className="max-w-[1040px] mx-auto gap-5 pt-[52px] pb-20">
      <div className="flex justify-center gap-5 mb-20 ">
        <div className=" w-[509px] ">
          <div className=" flex gap-5 sticky top-10">
            <div className="mt-[100px] flex flex-col gap-3">
              {productPhotos.map((item, index) => (
                <div
                  className={`w-[67px] h-[67px] rounded-[4px] bg-slate-400 ${
                    selectPhoto === item.photo ? "border border-black" : " "
                  }`}
                  onClick={() => setSelectPhoto(item.photo)}
                  key={index}
                >
                  {item.photo}
                </div>
              ))}
            </div>
            <div className="w-[422px] h-[521px] bg-slate-400 rounded-[16px] flex flex-col">
              {selectPhoto}
            </div>
          </div>
        </div>
        {/* 2th divition*/}

        <div className="w-[511px]">
          <div className="pt-[100px]  pb-[55px]">
            <div className="mb-6">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <div className="border-black border-[1px] w-[55px] text-center rounded-full py-1">
                    New
                  </div>
                  <div className="flex gap-2 items-center">
                    <p className="text-2xl font-bold ">{uploadShoppingCart?.productName}</p>
                    <div onClick={filled} className="cursor-pointer">
                      <HeartIconSvg fill={ready} />
                    </div>
                  </div>
                  <div className="text-base font-normal ">
                    {uploadShoppingCart?.description}
                  </div>
                </div>
                <div>
                  <div className="mb-2">Хэмжээний заавар</div>
                  <div className="flex gap-1">
                    {productSize.map((item) => (
                      <div
                        onClick={() => {
                          item.qty > 0 && setSelectedSize(item.size);
                          item.qty > 0 && reset();
                        }}
                        className={`size-8 rounded-full border border-black cursor-pointer font-normal text-xs text-center content-center ${ 
                          selectedSize === item.size
                            ? "bg-black text-white duration-500"
                            : "duration-300"
                        } ${
                          item.qty === 0
                            ? "bg-[#E4E4E7] opacity-50 text-black cursor-not-allowed"
                            : ""
                        }`}
                        key={item.size}
                      >
                        {item.size}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-1">
                  <div
                    onClick={hasah}
                    className="content-center size-8 rounded-[16px] border-[1px] border-black cursor-pointer text-center"
                  >
                    -
                  </div>
                  <div className="size-8 text-center content-center text-xs font-normal">
                    {number}
                  </div>
                  <div
                    onClick={nemeh}
                    className="content-center size-8 rounded-[16px] border-[1px] border-black cursor-pointer text-center"
                  >
                    +
                  </div>
                </div>
              </div>
              <div>
                <div className="pb-2 font-bold text-xl">{uploadShoppingCart && uploadShoppingCart.price * number}₮</div>
                <div>
                  <Button onClick={createShoppingCart} className="py-2 px-9 bg-[#2563EB] rounded-[20px]">
                    Сагсанд нэмэх
                  </Button>
                </div>
              </div>
            </div>

            <div></div>
          </div>

          <div className="flex flex-col gap-6 max-w-[551px]">
            <div>
              <div className="flex gap-4 text-sm font-normal">
                <div>Үнэлгээ</div>
                {enable === true ? (
                  <div
                    className="cursor-pointer text-[#2563EB] border-b border-[#2563EB]"
                    onClick={() => setEnable(false)}
                  >
                    бүгдийг харах
                  </div>
                ) : (
                  <div
                    className="cursor-pointer text-[#2563EB] border-b border-[#2563EB]"
                    onClick={() => setEnable(true)}
                  >
                    бүгдийг хураах
                  </div>
                )}
              </div>
              <div className="flex">
                <Starrr />
                4.6 (24)
              </div>
            </div>

            {!enable
              ? productComment.map((item, index) => (
                  <div key={item.name}>
                    <div
                      className={`grid gap-1 text-sm font-normal border-t ${
                        index === 0
                          ? "border-none"
                          : "border-dashed border-gray-300 pt-4"
                      }`}
                    >
                      <div className="flex gap-1">
                        {item.name}
                        <div className="flex items-center">
                          <Starr />
                        </div>
                      </div>
                      <div className="text-[#71717A]">{item.value}</div>
                    </div>
                  </div>
                ))
              : null}
            {!enable ? (
              <div className="bg-[#F4F4F5] p-6 rounded-2xl h-[294px] text-sm font-normal">
                <div className="grid gap-6">
                  <div className="grid gap-2">
                    <div className="leading-[14px]">Одоор үнэлэх:</div>
                    <div className="flex items-center">
                      <Starrr />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <div className="leading-[14px]">Сэтгэгдэл үлдээх:</div>
                    <div className="h-[94px]">
                      <textarea
                        className="p-[8px_12px] border border-[#E4E4E7] rounded-md w-full h-[100px] outline-none resize-none"
                        placeholder="Энд бичнэ үү"
                      />
                    </div>
                  </div>
                  <div>
                    <Button className="px-9 font-medium">Үнэлэх</Button>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="grid ">
        <div className="text-3xl font-bold mb-6">Холбоотой бараа</div>
        <div className="flex-1 grid grid-cols-4 gap-x-[21px] gap-y-12">
          {datas.map(
            (cardItems, index) =>
              index < 8 && (
                <div key={index}>
                  {/* <Card cardItems={cardItems} /> */}
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export const Starr = () => {
  return (
    <div className="flex">
      <Star size={16} fill="#FDE047" stroke="" />
      <Star size={16} fill="#FDE047" stroke="" />
      <Star size={16} fill="#FDE047" stroke="" />
      <Star size={16} fill="#FDE047" stroke="" />
      <Star size={16} fill="#FDE047" stroke="" />
    </div>
  );
};

export const Starrr = () => {
  return (
    <div className="flex">
      <Star fill="#FDE047" stroke="" />
      <Star fill="#FDE047" stroke="" />
      <Star fill="#FDE047" stroke="" />
      <Star fill="#FDE047" stroke="" />
      <Star fill="gray" stroke="" />
    </div>
  );
};

export default ProductDetail;
