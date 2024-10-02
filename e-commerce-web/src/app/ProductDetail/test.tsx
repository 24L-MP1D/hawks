"use client"
 
import { Heart, Star } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
 
 
export const Detail= () => {
    const price = 120000;
 
    const photo = [
        { photo: "p1" },
        { photo: "p2" },
        { photo: "p3" },
        { photo: "p4" },
    ];
    const [selectedPhoto, setSelectedPhoto] = useState("p1");
    const reset=() => {
        setNumber(1)
    }
    const product = [
        { size: "S", stock: 0 },
        { size: "M", stock: 0 },
        { size: "L", stock: 0 },
        { size: "XL", stock: 0 },
        { size: "2XL", stock: 0 },
    ];
    const defaultSize = product.find(pr => pr.stock > 0)?.size || "";
    const [selectedSize, setSelectedSize] = useState<string>(defaultSize);
    const [isSaved, setIsSaved] = useState<boolean>(false);
    const [number, setNumber] = useState<number>(1);
 
    const currentStock = product.find(p => p.size === selectedSize)?.stock || 0;
    const comment = [
        {name: "Saraa", comment: "Ваав материал ёстой гоё  байна 😍"},
        {name: "Saraa", comment: "🔥🔥🔥"},
        {name: "Saraa", comment: "Ваав материал ёстой гоё  байна"},
        {name: "Saraa", comment: "Ваав материал ёстой гоё харагдаж байна Ваав материал ёстой гоё  байна "},
        {name: "Saraa", comment: "Ваав материал ёстой гоё  байна"},
    ]
 
    useEffect(() => {
        if (currentStock === 0) {
            const availableSize = product.find(p => p.stock > 0)?.size || "";
            setSelectedSize(availableSize);
            setNumber(0)
        }
    }, [currentStock, product]);
 
    const nemeh = () => {
        setNumber(prevNumber => (prevNumber < currentStock ? prevNumber + 1 : prevNumber));
    };
 
    const hasah = () => {
        setNumber(prevNumber => (prevNumber > 1 ? prevNumber - 1 : prevNumber));
    };
 
    const totalPrice = price * number;
 
    const [show, setShow] = useState<boolean>(true)
    return (
        <div className="w-[1040px] mx-auto flex flex-col gap-20 mt-[100px]">
            <div className="flex gap-5">
                <div className="w-[67px] h-[392px] grid gap-2 pt-[100px]">
                    {photo.map((p) => (
                        <div className={`size-[67px] rounded ${selectedPhoto === p.photo ? "border border-black" : ""}`} onClick={() => setSelectedPhoto(p.photo)} key={p.photo}>{p.photo}</div>
                    ))}
                </div>
                <div className="w-[422px] h-[521px] rounded-2xl border-[2px] border-black text-center content-center text-5xl">{selectedPhoto}</div>
                <div className="pt-[100px] flex flex-col gap-[55px]">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <div>new</div>
                                <div className="flex gap-2 items-center">
                                    <div>product name</div>
                                    <div className="size-10 flex justify-center items-center"><Heart onClick={()=>setIsSaved(x =>!x)} strokeWidth={1} fill={`${isSaved ? "black" : "transparent"}`} className="duration-500"/> </div>
                                </div>
                                <div>product details</div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <div>Size</div>
                                <div className="flex gap-1">{product.map((pr) => (
                                    <div onClick={() => {pr.stock > 0  && setSelectedSize(pr.size);
                                        pr.stock > 0  && reset()
                                    }} className={`size-8 rounded-full border border-black cursor-pointer font-normal text-xs text-center content-center ${selectedSize === pr.size ? "bg-black text-white duration-500" : "duration-300"} ${pr.stock === 0 ? "bg-[#E4E4E7] opacity-50 text-black cursor-not-allowed" : ""}`} key={pr.size}>{pr.size}</div>
                                ))}</div>
                            </div>
                            <div className="flex gap-1">
                                <div onClick={hasah} className="size-8 rounded-full border border-black cursor-pointer text-center content-center">-</div>
                                <div className="size-8 text-center content-center text-xs font-normal outline-none">{number}</div>
                                <div onClick={nemeh} className="size-8 rounded-full border border-black cursor-pointer text-center content-center">+</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-xl font-bold tracking-wide flex">{totalPrice}<div>₮</div></div>
                            <Button className="cursor-pointer w-[175px]" disabled={currentStock === 0}>Сагсанд нэмэх</Button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 max-w-[551px] ">
                        <div>
                            <div className="flex gap-4 text-sm font-normal">
                                <div>Үнэлгээ</div>
                                {show === true ? <div className="cursor-pointer text-[#2563EB] border-b border-[#2563EB]" onClick={() => setShow(false)}>бүгдийг харах</div> : <div className="cursor-pointer text-[#2563EB] border-b border-[#2563EB]" onClick={() => setShow(true)}>бүгдийг хураах</div>}
                            </div>
                            <div className="flex">
                                <Star fill="gold" stroke=""/>
                                <Star fill="gold" stroke=""/>
                                <Star fill="gold" stroke=""/>
                                <Star fill="gold" stroke=""/>
                                <Star fill="gold" stroke=""/>
                                4.6 (24)
                            </div>
                        </div>
                        
                        {!show ? (comment.map((com, index) => (
                            <div key={com.name}>
                              <div className={`grid gap-1 text-sm font-normal border-t ${index === 0 ? 'border-none' : 'border-dashed border-gray-300 pt-4'}`}>
                                <div className="flex gap-1">
                                  {com.name}
                                  <div className="flex items-center">
                                    <Star size={16} fill="gold" stroke="" />
                                    <Star size={16} fill="gold" stroke="" />
                                    <Star size={16} fill="gold" stroke="" />
                                    <Star size={16} fill="gold" stroke="" />
                                    <Star size={16} fill="gold" stroke="" />
                                  </div>
                                </div>
                                <div className="text-[#71717A]">{com.comment}</div>
                              </div>
                            </div>
                          ))
                        ) : null}
                        {!show ? (<div className="bg-[#F4F4F5] p-6 rounded-2xl h-[294px] text-sm font-normal">
                        <div className="grid gap-6">
                            <div className="grid gap-2">
                                <div className="leading-[14px]">Одоор үнэлэх:</div>
                                <div className="flex items-center">                                    
                                    <Star fill="gold" stroke="" />
                                    <Star fill="gold" stroke="" />
                                    <Star fill="gold" stroke="" />
                                    <Star fill="gold" stroke="" />
                                    <Star fill="gold" stroke="" />
                                </div>
                            </div>
                            <div  className="grid gap-2">
                                <div className="leading-[14px]">Сэтгэгдэл үлдээх:</div>
                                <div className="h-[94px]">
                                    <textarea className="p-[8px_12px] border border-[#E4E4E7] rounded-md w-full h-[94px] outline-none resize-none" placeholder="Энд бичнэ үү"/>
                                </div>
                            </div>
                            <div><Button className="px-9 font-medium">Үнэлэх</Button></div>
                        </div>
                    </div>) : null}
                    </div>
                </div>
            </div>
            <div>Holbootoi baraa</div>
        </div>
    )
}