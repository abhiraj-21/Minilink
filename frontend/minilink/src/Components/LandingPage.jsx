import React from 'react'
import { motion } from "framer-motion";
import Card from "./Card.jsx";

const LandingPage = () => {

    function dashBoardNavigateHandler() {

    }

    return (
        <div className="min-h-[calc(100vh-64px)]  lg:px-14 sm:px-8 px-4">
            <div className="lg:flex-row flex-col    lg:py-5   pt-16   lg:gap-10 gap-8 flex justify-between items-center">
                <div className=" flex-1">
                    <motion.h1
                    initial={{opacity: 0, y:-50}}
                    whileInView={{
                        opacity:1,
                        y:0,
                        transition: {duration: 0.8}
                    }}
                    viewport={{once:true}}
                    className="font-bold font-roboto text-slate-800 md:text-5xl sm:text-4xl text-3xl md:leading-[55px] sm:leading-[45px] leading-10 lg:w-full md:w-[70%] w-full">
                        MiniLink - URL Shortener
                    </motion.h1>
                    <p className="text-slate-700 text-sm my-5">
                        Welcome to MiniLink, your go-to URL shortener for creating concise and manageable link. Whether you're sharing links on social media, in emails, or through messaging apps, MiniLink makes it easy to
                        shorten and customize your URLs. Our user-friendly interface and robust features ensure that you can track link performance, manage your links, and enhance your online presence with ease.
                        Experience the convenience of MiniLink and transform your long URLs into sleek, shareable links today!
                    </p>
                    <div className="flex items-center gap-3">
                        <motion.button
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition:{ duration: 0.8 }
                            }}
                            viewport={{ once: true }}
                            onClick={dashBoardNavigateHandler}
                            className="bg-custom-gradient  w-40 text-white rounded-md  py-2 hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer hover:shadow-lg hover:shadow-btnColor/30"
                        >
                            Manage Links
                        </motion.button>
                        <motion.button
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition:{ duration: 0.8 }
                            }}
                            viewport={{ once: true }}
                            onClick={dashBoardNavigateHandler}
                            className="border-btnColor border w-40 text-btnColor rounded-md  py-2 hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer hover:shadow-lg hover:shadow-btnColor/30"
                        >
                            Create Short Link
                        </motion.button>
                    </div>
                </div>
                <div className="   flex-1 flex   justify-center w-full">
                    <motion.img
                        initial={{opacity:0}}
                        whileInView={{
                            opacity:1,
                            transition:{duration:0.8}
                        }}
                        viewport={{once:true}}
                        className="sm:w-[480px] w-[400px] object-cover rounded-md"
                        src="/images/img.png" alt=""/>
                </div>
            </div>
            <div className="sm:pt-12 pt-7">
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-slate-800 font-roboto font-bold lg:w-[60%]  md:w-[70%] sm:w-[80%] mx-auto text-3xl text-center"
                >
                    Trusted by individuals and teams at the world best companies{" "}
                </motion.p>
                <div className="pt-4 pb-7 grid lg:gap-7 gap-4 xl:grid-cols-4  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4">
                    <Card
                        title="Simple URL Shortening"
                        desc="Experience the ease of creating short, memorable URLs in just a few clicks. Our intuitive interface and quick setup process ensure you can start shortening URLs without any hassle."
                    />
                    <Card
                        title="Powerful Analytics"
                        desc="Gain insights into your link performance with our comprehensive analytics dashboard. Track clicks, geographical data, and referral sources to optimize your marketing strategies."
                    />
                    <Card
                        title="Enhanced Security"
                        desc="Rest assured with our robust security measures. All shortened URLs are protected with advanced encryption, ensuring your data remains safe and secure."
                    />
                    <Card
                        title="Fast and Reliable"
                        desc="Enjoy lightning-fast redirects and high uptime with our reliable infrastructure. Your shortened URLs will always be available and responsive, ensuring a seamless experience for your users.
"
                    />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;