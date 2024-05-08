import React from "react";
import { formatMoney } from "../utils/format";

/**
 *
 * @param {{
 * id:string
 * name:string
 * price:number
 * star:number
 * votes:number
 * isSoldOut:boolean
 * isPopular:boolean
 * url:string
 * }} props
 * @returns
 */
const Card = (props) => {
    return (
        <div className="hover:cursor-pointer">
            <div className="relative">
                {props.isPopular && (
                    <div className="absolute top-2 left-2 rounded-full bg-[#F6C768] px-2 w-fit text-[#111315] h-5 text-center font-semibold leading-[18px] text-sm">
                        Popular
                    </div>
                )}

                <img
                    className="rounded-2xl aspect-[3/2]"
                    src={props.url}
                    alt={props.name}
                />
            </div>
            <div>
                <div className="flex justify-between py-2 items-center">
                    <p className="text-[#FEF7EE] font-bold text-base">
                        {props.name}
                    </p>
                    <p className="px-2 py-1 text-[#1B1D1F] font-bold text-sm bg-[#BEE3CC] rounded">
                        ${formatMoney(props.price)}
                    </p>
                </div>
                <div className="flex justify-between  font-semibold mt-1">
                    <div className="flex text-sm">
                        <img
                            className="mr-1"
                            src="./svg/Star_fill.svg"
                            alt="star"
                        />
                        <p className="mr-1">{props.star}</p>
                        <p className="text-[#6F757C]">({props.votes} votes)</p>
                    </div>
                    <div className="text-[#ED735D]">
                        {props.isSoldOut ? "Sold out" : ""}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
