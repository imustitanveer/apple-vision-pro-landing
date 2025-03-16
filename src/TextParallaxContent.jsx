import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi";

export const TextParallaxContentExample = () => {
    return (
        <div className="bg-white">
        <TextParallaxContent
                    imageUrl="https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/foundation/small.mp4"
                    subheading={["Apple Vision Pro seamlessly blends digital content with your physical space.", "So you can work, watch, relive memories, and connect in ways never before possible.", "The era of spatial computing is here."]}>
            <div className="flex flex-col items-center mb-10">
                <div className="mb-4 flex flex-row items-center mb-30">
                <svg className="text-black w-12 h-12" viewBox="-1.5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>apple [#173]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-102.000000, -7439.000000)" fill="currentColor"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M57.5708873,7282.19296 C58.2999598,7281.34797 58.7914012,7280.17098 58.6569121,7279 C57.6062792,7279.04 56.3352055,7279.67099 55.5818643,7280.51498 C54.905374,7281.26397 54.3148354,7282.46095 54.4735932,7283.60894 C55.6455696,7283.69593 56.8418148,7283.03894 57.5708873,7282.19296 M60.1989864,7289.62485 C60.2283111,7292.65181 62.9696641,7293.65879 63,7293.67179 C62.9777537,7293.74279 62.562152,7295.10677 61.5560117,7296.51675 C60.6853718,7297.73474 59.7823735,7298.94772 58.3596204,7298.97372 C56.9621472,7298.99872 56.5121648,7298.17973 54.9134635,7298.17973 C53.3157735,7298.17973 52.8162425,7298.94772 51.4935978,7298.99872 C50.1203933,7299.04772 49.0738052,7297.68074 48.197098,7296.46676 C46.4032359,7293.98379 45.0330649,7289.44985 46.8734421,7286.3899 C47.7875635,7284.87092 49.4206455,7283.90793 51.1942837,7283.88393 C52.5422083,7283.85893 53.8153044,7284.75292 54.6394294,7284.75292 C55.4635543,7284.75292 57.0106846,7283.67793 58.6366882,7283.83593 C59.3172232,7283.86293 61.2283842,7284.09893 62.4549652,7285.8199 C62.355868,7285.8789 60.1747177,7287.09489 60.1989864,7289.62485" id="apple-[#173]"> </path> </g> </g> </g> </g></svg>
                <h1 className="text-6xl font-semibold">Vision Pro</h1>
                </div>
                <img src="https://www.apple.com/v/apple-vision-pro/f/images/overview/intro/hardware_base__ecl2v43j73o2_small_2x.jpg" alt="vision-pro" className="mb-30"/>
                <button className="md:w-full rounded-full bg-white px-9 py-4 text-xl text-black border-3 font-semibold border-black transition-colors hover:bg-black hover:text-white hover:cursor-pointer md:w-fit flex items-center gap-2 duration-300">
                    <FiPlus className="inline" /> Take a closer look
                </button>
            </div>
        </TextParallaxContent>
        <TextParallaxContent
                    imageUrl="https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/experience-entertainment-a/small.mp4"
                    subheading="Entertainment"
                    heading={["The Ultimate Theatre.", "Wherever you are."]}>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
        <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
            A new dimension for entertainment.
        </h2>
        <div className="col-span-1 md:col-span-8">
            <p className="mb-4 text-xl text-neutral-600 md:text-2xl text-justify">
            Apple Vision Pro can transform any room into your own personal theater. Expand your movies, shows, and games to your perfect size and experience them in Spatial Audio. Apple Immersive Video puts you in the center of the action with mind‑blowing immersion. And with more pixels than a 4K TV for each eye, you can enjoy stunning content wherever you are — on a long flight or the couch at home.
            </p>
            <button className="w-full rounded-full bg-orange-500 px-9 py-4 text-xl font-semibold text-white transition-colors hover:bg-orange-400 hover:cursor-pointer md:w-fit flex items-center gap-2">
            <FiPlus className="inline" /> Learn more about entertainment
            </button>
        </div>
        </div>
        </TextParallaxContent>
        <TextParallaxContent
                    imageUrl="https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/experience-productivity-a/large.mp4"
                    subheading="Productivity"
                    heading={["A workspace with", "infinite space."]}>
        
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
        <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
                Discover new ways to work.
        </h2>
        <div className="col-span-1 md:col-span-8">
            <p className="mb-4 text-xl text-neutral-600 md:text-2xl text-justify">
            Apple Vision Pro gives you limitless space to get things done. Organize everything you need anywhere around you, in any way you like. Seamlessly bring in your Mac workflows using Mac Virtual Display. Connect a Magic Keyboard, a Magic Trackpad, and other Bluetooth accessories to expand how you navigate. And with SharePlay in FaceTime, you can collaborate with colleagues using apps together in real time.
            </p>
            <button className="w-full rounded-full bg-orange-500 px-9 py-4 text-xl font-semibold text-white transition-colors hover:bg-orange-400 hover:cursor-pointer md:w-fit flex items-center gap-2">
            <FiPlus className="inline" /> Learn more about productivity
            </button>
        </div>
        </div>
        </TextParallaxContent>
        <TextParallaxContent
                    imageUrl="https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/experience-photos-videos/large.mp4"
                    subheading="Photos and Videos"
                    heading={["Be in the moment.", "All over again."]}>
        
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
        <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
                Your memories come alive.
        </h2>
        <div className="col-span-1 md:col-span-8">
            <p className="mb-4 text-xl text-neutral-600 md:text-2xl text-justify">
            Apple Vision Pro is Apple’s first 3D camera. You can capture magical spatial photos and spatial videos in 3D, then relive those cherished moments like never before with immersive Spatial Audio. Your existing library of photos and videos looks incredible at remarkable scale — and now you can transform your 2D photos into spatial photos with just a tap. Even panoramas wrap around you — making you feel like you’re standing right where you took them. You can also take spatial videos with iPhone 16 Pro, iPhone 16, or iPhone 15 Pro, as well as spatial photos with iPhone 16 Pro or iPhone 16, then view them on Apple Vision Pro.
            </p>
            <button className="w-full rounded-full bg-orange-500 px-9 py-4 text-xl font-semibold text-white transition-colors hover:bg-orange-400 hover:cursor-pointer md:w-fit flex items-center gap-2">
            <FiPlus className="inline" /> Learn more about photos and videos
            </button>
        </div>
        </div>
        </TextParallaxContent>
        <TextParallaxContent
                    imageUrl="https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/experience-connection-a/large.mp4"
                    subheading="Connection"
                    heading={["Share quality time.", "And space."]}>
        
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
        <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
                A more engaging way to get together.
        </h2>
        <div className="col-span-1 md:col-span-8">
            <p className="mb-4 text-xl text-neutral-600 md:text-2xl text-justify">
            Apple Vision Pro makes it easy to collaborate and connect wherever you are. You can see FaceTime participants in life-size video tiles, or you can choose to use your spatial Persona and feel like you are sharing the same space with others. And use SharePlay to watch, listen, and play together with your favorite people.
            </p>
            <button className="w-full rounded-full bg-orange-500 px-9 py-4 text-xl font-semibold text-white transition-colors hover:bg-orange-400 hover:cursor-pointer md:w-fit flex items-center gap-2">
            <FiPlus className="inline" /> Learn more about connection
            </button>
        </div>
        </div>
        </TextParallaxContent>
        <TextParallaxContent
                    imageUrl="https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/experience-apps-a/large.mp4"
                    subheading="Apps"
                    heading={["Do what you love.", "Reimagine how", "you do it."]}>
        
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
        <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
            A world of apps.<br/>A world of discovery.
        </h2>
        <div className="col-span-1 md:col-span-8">
            <p className="mb-4 text-xl text-neutral-600 md:text-2xl text-justify">
            Apple Vision Pro expands the experience of your go‑to apps and opens up new possibilities in entertainment, productivity, gaming, and more. Browse the web in Safari, create a to‑do list in Notes, chat in Messages, and seamlessly move between them with a glance. And explore the App Store to discover an ever-expanding collection of awe-inspiring spatial apps designed for Apple Vision Pro.
            </p>
            <a href="https://apps.apple.com/us/vision" target='_blank' className='flex items-center gap-2 text-xl md:text-2xl mt-4 mb-6 text-blue-600 group'><p className='text-blue-600 text-xl group-hover:cursor-pointer group-hover:underline md:text-2xl'>Visit Apple Store</p><FiArrowUpRight className="inline" /></a>
            <button className="w-full rounded-full bg-orange-500 px-9 py-4 text-xl font-semibold text-white transition-colors hover:bg-orange-400 hover:cursor-pointer md:w-fit flex items-center gap-2">
            <FiPlus className="inline" /> Learn more about apps
            </button>
        </div>
        </div>
        </TextParallaxContent>
        <TextParallaxContent
                    imageUrl="https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/visionos-a/large.mp4"
                    subheading="visionOS"
                    heading={["An operating system", "designed for spatial."]}>
        
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
        <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
            Navigate spatial experiences. <br/> Naturally.
        </h2>
        <div className="col-span-1 md:col-span-8">
            <p className="mb-4 text-xl text-neutral-600 md:text-2xl text-justify">
            Apple Vision Pro makes it easy to collaborate and connect wherever you are. You can see FaceTime participants in life-size video tiles, or you can choose to use your spatial Persona and feel like you are sharing the same space with others. And use SharePlay to watch, listen, and play together with your favorite people.
            </p>
            <a href="https://apps.apple.com/us/vision" target='_blank' className='flex items-center gap-2 text-xl md:text-2xl mt-4 mb-6 text-blue-600 group'><p className='text-blue-600 text-xl group-hover:cursor-pointer group-hover:underline md:text-2xl'>Learn more about visionOS 2</p><FiArrowUpRight className="inline" /></a>
            <button className="w-full rounded-full bg-orange-500 px-9 py-4 text-xl font-semibold text-white transition-colors hover:bg-orange-400 hover:cursor-pointer md:w-fit flex items-center gap-2">
            <FiPlus className="inline" /> Learn more about connection
            </button>
        </div>
        </div>
        </TextParallaxContent>
    </div>
    );
};

const TextParallaxContent = ({imageUrl, subheading, heading, children}) => {
    return <div>
        <div className="relative h-[150vh]">
            <StickyImage imageUrl={imageUrl} />
            <OverlayCopy heading={heading} subheading={subheading} />
        </div>
        {children}
    </div>;
};

const StickyImage = ({ imageUrl }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    const isVideo = imageUrl.endsWith(".mp4");

    return (
        <motion.div
            style={{
                height: "100vh",
                scale,
            }}
            ref={targetRef}
            className="sticky top-0 z-0 overflow-hidden"
        >
            {isVideo ? (
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src={imageUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <div
                    style={{
                        backgroundImage: `url(${imageUrl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    className="absolute inset-0 w-full h-full"
                />
            )}
            <motion.div
                style={{ opacity }}
                className="absolute inset-0 bg-neutral-950/70"
            />
        </motion.div>
    );
};

const OverlayCopy = ({ heading, subheading }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
    const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

    return (
        <motion.div ref={targetRef}
            style={{
                y,
                opacity,
            }}
            className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
        >
            {Array.isArray(subheading) ? (
                <div className="flex flex-col gap-6 items-center space-y-2 md:space-y-4 lg:mx-60 p-10 md:p-10 text-2xl md:text-5xl font-bold text-center">
                    {subheading.map((line, index) => (
                        <span key={index} className="block">
                            {line}
                        </span>
                    ))}
                </div>
            ) : (
                <p className="mb-2 text-xl md:mb-4 md:text-3xl">{subheading}</p>
            )}

            <p className="text-center text-4xl font-bold md:text-7xl">
                {Array.isArray(heading)
                    ? heading.map((line, index) => (
                          <span key={index} className="block">
                              {line}
                          </span>
                      ))
                    : heading}
            </p>
        </motion.div>
    );
};