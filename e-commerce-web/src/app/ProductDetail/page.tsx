"use client";

import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";
import { useState } from "react";

export const ProductDetail = () => {
  const productPhotos = [
    { photo: "picture1" },
    { photo: "picture2" },
    { photo: "picture3" },
    { photo: "picture4" },
  ];

  const productSize = [
    { size: "S" },
    { size: "M" },
    { size: "L" },
    { size: "XL" },
    { size: "2XL" },
  ];

  const productComment = [
    { name: "Nymbaa", value: "Ваав материал ёстой гоё  байна 😍" },
    { name: "Tommy", value: "🔥🔥🔥" },
    { name: "Badral", value: "Ваав материал ёстой гоё  байна" },
    { name: "Galt", value: "Ваав гоё харагдаж байна. " },
    { name: "OyunDari", value: "Ваав материал ёстой гоё  байна" },
  ];

  const [selectPhoto, setSelectPhoto] = useState("picture1");
  const [number, setNumber] = useState<number>(1);
  const price: number = 120000;

  const nemeh = () => {
    setNumber(number + 1);
  };

  const hasah = () => {
    setNumber(number - 1);
  };

  const [enable, setEnable] = useState<boolean>(true);

  return (
    <div className="max-w-[1040px] mx-auto flex justify-between gap-5 pt-[52px] pb-20">

      <div className="flex justify-center gap-5">
        <div className="w-[509px] flex gap-5">
          <div className="mt-[100px] flex flex-col gap-3">
            {productPhotos.map((item) => (
              <div
                className={`w-[67px] h-[67px] rounded-[4px] bg-slate-400 ${
                  selectPhoto === item.photo ? "border border-black" : " "
                }`}
                onClick={() => setSelectPhoto(item.photo)}
                key={item.photo}
              >
                {item.photo}
              </div>
            ))}
          </div>
          <div className="w-[422px] h-[521px] bg-slate-400 rounded-[16px] flex flex-col">
            {selectPhoto}
          </div>
        </div>
        {/* 2th divition*/}

        <div className="w-[511px]">
          <div className="pt-[100px] mr-[93px] pb-[55px]">
            <div className="mb-6">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <div className="border-black border-[1px] w-[55px] text-center rounded-full py-1">
                    New
                  </div>
                  <div className="flex gap-2 items-center">
                    <p className="text-2xl font-bold">title</p>
                    <Heart />
                  </div>
                  <div className="text-base font-normal"></div>
                </div>
                <div>
                  <div className="mb-2">Хэмжээний заавар</div>
                  <div className="flex gap-1">
                    {productSize.map((item) => (
                      <div
                        key={item.size}
                        className="size-8 rounded-[16px] border-black border-[1px] text-xs font-normal flex items-center justify-center"
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
                  <div className="size-8 text-center content-center text-xs font-normal outline-none">
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
                <div className="mb-2 font-bold text-xl">{price * number}₮</div>
                <Button className="py-4 px-9 bg-[#2563EB] rounded-[20px]">
                  Сагсанд нэмэх
                </Button>
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
      <Star fill="#FDE047" stroke="" />
    </div>
  );
};

export default ProductDetail;
