"use client"
import Lottie from "lottie-react";
import loginLottie from '../../../public/login.json'
import {  BsFillPersonFill } from "react-icons/bs";
import { BiLinkExternal, BiSolidLock } from "react-icons/bi";
import { useState } from "react";
import Link from "next/link";
const LoginPage = () => {
    const [show, setShow] = useState(false)
    return (
        <div className="grid md:grid-cols-2 max-w-7xl mx-auto mt-32 items-center">
            {/* lottie */}

            <div className="">
                <Lottie animationData={loginLottie} loop={true} className="w-[85%] mx-auto hidden md:block" />
                <Link className="hidden md:block" href='/register'>  <div className="flex justify-center items-center mt-10 underline font-semibold hover:text-blue-600">New To JobLinker? Create an Account
                    <span className="ml-1"><BiLinkExternal></BiLinkExternal></span>
                </div></Link>

            </div>

            {/* lottie */}
            {/* form */}
            <div className="px-4">
                <div>
                    <h2
                        className="text-5xl font-semibold mb-14">
                        Login In
                    </h2>
                </div>

                <div className="flex items-center border border-x-0 border-t-0 border-b-2 border-black rounded-none">
                    <BsFillPersonFill className="text-3xl mr-3 text-black" />
                    <input
                        name="name"
                        type="text"
                        placeholder="Enter Email"
                        className="input w-full font-semibold"
                        required />
                </div>

                <div className="my-10 flex items-center border border-x-0 border-t-0 border-b-2 border-black rounded-none">
                    <BiSolidLock className="text-3xl mr-3 text-black" />
                    <input
                        name="name"
                        type={show ? 'text' : 'password'}
                        placeholder="Enter Password"
                        className="input w-full font-semibold "
                        required />
                </div>
                <p className="relative  font-semibold" onClick={() => setShow(!show)}>
                    <small className="font-medium flex justify-end">
                        {
                            show ? <span>Show Password</span> : <span>Hide Password</span>
                        }
                    </small>
                </p>
                <label className="label my-5">
                    <a href="#" className="label-text-alt link link-hover font-semibold">Forgot password?</a>
                </label>

                <div>
                    <button className=" btn btn-info w-[100%] md:w-[25%] text-white text-center">Login</button>
                </div>

                <div className="flex gap-5 items-center justify-center md:justify-start mt-5 md:mt-28  ">
                <h4 className="font-semibold ">Or Login With</h4>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/><path fill="#FF3D00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"/><path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 128 128"><g fill="#181616"><path fillRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388c0 26.682 17.303 49.317 41.297 57.303c3.017.56 4.125-1.31 4.125-2.905c0-1.44-.056-6.197-.082-11.243c-16.8 3.653-20.345-7.125-20.345-7.125c-2.747-6.98-6.705-8.836-6.705-8.836c-5.48-3.748.413-3.67.413-3.67c6.063.425 9.257 6.223 9.257 6.223c5.386 9.23 14.127 6.562 17.573 5.02c.542-3.903 2.107-6.568 3.834-8.076c-13.413-1.525-27.514-6.704-27.514-29.843c0-6.593 2.36-11.98 6.223-16.21c-.628-1.52-2.695-7.662.584-15.98c0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033c11.526-7.813 16.59-6.19 16.59-6.19c3.287 8.317 1.22 14.46.593 15.98c3.872 4.23 6.215 9.617 6.215 16.21c0 23.194-14.127 28.3-27.574 29.796c2.167 1.874 4.097 5.55 4.097 11.183c0 8.08-.07 14.583-.07 16.572c0 1.607 1.088 3.49 4.148 2.897c23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z" clipRule="evenodd"/><path d="M26.484 91.806c-.133.3-.605.39-1.035.185c-.44-.196-.685-.605-.543-.906c.13-.31.603-.395 1.04-.188c.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28c-.396-.42-.47-.983-.177-1.254c.298-.266.844-.14 1.24.28c.394.426.472.984.17 1.255zm2.382 3.477c-.37.258-.976.017-1.35-.52c-.37-.538-.37-1.183.01-1.44c.373-.258.97-.025 1.35.507c.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23c-.527-.487-.674-1.18-.343-1.544c.336-.366 1.045-.264 1.564.23c.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486c-.683-.207-1.13-.76-.99-1.238c.14-.477.823-.7 1.512-.485c.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92c-.723.017-1.308-.387-1.315-.877c0-.503.568-.91 1.29-.924c.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117c-.7.13-1.35-.172-1.44-.653c-.086-.498.422-.997 1.122-1.126c.714-.123 1.354.17 1.444.663zm0 0"/></g></svg>
                </div>

                <Link href='/register'>  <div className="md:hidden flex justify-center items-center mt-10 underline font-semibold hover:text-blue-600">New To JobLinker? Create an Account
                    <span className="ml-1"><BiLinkExternal></BiLinkExternal></span>
                </div></Link>



            </div>

           


            {/* form */}


        </div>
    );
};

export default LoginPage;