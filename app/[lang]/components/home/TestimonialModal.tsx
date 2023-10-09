"use client";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import Image from "next/image";
import { BsCalendarDate } from "react-icons/bs";
import { FaPerson, FaPeoplePulling, FaPeopleGroup } from "react-icons/fa6";
import avatar from "../../assets/hero/avatar.png";

export function TestimonialModal() {
  const { openTestimonial, toggleTestimonialModal, selectedTestimonial } = useContext(AppContext);

  const visitorTypeNo = selectedTestimonial.visitorType.substring(0, 1);
  const visitorTypeNoPrefix = selectedTestimonial.visitorType.substring(2);

  return (
    <>
      {openTestimonial ? (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black/80 z-[100]">
          <div className="flex w-screen h-screen justify-center items-center">
            <div className="relative flex justify-center items-center w-screen max-w-md m-2">
              <div className="flex bg-white rounded-lg py-1 px-[1px]">
                <figure className="relative overflow-hidden">
                  <h4 className="flex justify-center items-center text-center text-stone-700 text-shadow-down shadow-stone-600 m-3 font-bold italic tracking-[1px]">
                    {selectedTestimonial.title}
                  </h4>
                  <div className="relative flex flex-col -mb-10 rounded-lg bg-stone-800 pt-7 pb-12 px-7 shadow-lg shadow-stone-600">
                    <div className="relative flex">
                      <p className="text-sm text-white text-center p-1">{selectedTestimonial.text}</p>

                      <button
                        onClick={toggleTestimonialModal}
                        className="absolute -top-4 -right-4 text-xl text-amber-600 z-50"
                      >
                        X
                      </button>
                      <span className="absolute -top-4 -left-4 text-5xl text-amber-600 z-20">“</span>
                      <span className="absolute bottom-0 -right-4 text-5xl text-amber-600 z-20">„</span>
                    </div>

                    <div className="flex w-full justify-center text-white text-sm p-3">
                      <div className="flex flex-col">
                        <div className="flex items-center h-7 border-b border-amber-600 pr-5">
                          <BsCalendarDate className="w-5 h-5 text-amber-600 mr-4" />
                          {selectedTestimonial.date}
                        </div>
                        <div className="flex items-center h-7 pr-5">
                          {visitorTypeNo === "1" ? (
                            <FaPerson className="w-5 h-5 text-amber-600 mr-4" />
                          ) : visitorTypeNo === "2" ? (
                            <FaPeoplePulling className="w-5 h-5 text-amber-600 mr-4" />
                          ) : (
                            <FaPeopleGroup className="w-5 h-5 text-amber-600 mr-4" />
                          )}
                          {visitorTypeNoPrefix}
                        </div>
                      </div>
                      <div className="flex h-12 w-12 justify-center items-center text-2xl font-bold border border-amber-600 rounded-tr-lg rounded-bl-lg text-amber-600">
                        {selectedTestimonial.rating}
                      </div>
                    </div>
                  </div>
                  <div className="relative flex justify-end items-center h-20 mb-2">
                    <Image
                      src={avatar}
                      height={80}
                      width={80}
                      alt="avatar"
                      className="absolute right-1/2 rounded-full mr-4 shadow-md shadow-stone-600 z-10"
                    />
                    <div className="flex flex-col justify-center items-start w-1/2">
                      <p className="uppercase text-amber-600 font-bold">{selectedTestimonial.name}</p>
                      <span className="text-sm text-stone-700 font-bold">{selectedTestimonial.country}</span>
                    </div>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
