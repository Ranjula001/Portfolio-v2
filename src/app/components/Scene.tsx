"use client";

import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import SceneContent from "./SceneContent";
import ProjectsSection from "./ProjectsSection";
import Loader from "./Loader";
import { motion } from "framer-motion";
//import Counter from "./Counter";
import DateCounter from "./DateCounter";
import { Button } from "@nextui-org/react";
import Navbar from "./Navbar";
import AnimatedCursor from "./AnimatedCursor";
import MagneticButton from "./MagneticButton";
import FadeInSection from "./FadeInSection";
import ScrollProgress from "./ScrollProgress";
import ScrollToTop from "./ScrollToTop";
import Footer from "./Footer";

export default function Scene() {
  return (
    <>
      <AnimatedCursor />
      <ScrollProgress />
      <Navbar />
      <Loader />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="h-screen w-screen fixed inset-0"
      />
      <Canvas key="main-canvas" camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} />

        <OrbitControls
          makeDefault // tells R3F to use Orbit as the active controller
          enablePan={false}
          enableZoom={false}
          enableRotate={false}
          minDistance={3}
          maxDistance={10}
        />

        <Suspense fallback={null}>
          <ScrollControls pages={4.5} damping={0.25}>
            <Scroll>
              <SceneContent />
            </Scroll>

            <Scroll html>
              <FadeInSection>
                <div className="cursor-none fixed top-0 left-0 w-full h-screen flex mt-8 px-8">
                  <DateCounter />
                </div>
                {/* 1: Landing */}
                <div className="text-start pt-32 md:pt-96">
                  <span className="text-[#f3dbc7] text-lg sm:text-xl md:text-2xl lg:text-4xl font-migraExtrabold">
                    creative
                  </span>
                  <motion.div className="text-[#f5eee6] text-[60px] sm:text-[100px] md:text-[180px] lg:text-[240px] font-drukXXCondTrial uppercase leading-none">
                    <span className="block">Designer</span>
                    <span className="block">Developer</span>
                  </motion.div>
                </div>
              </FadeInSection>

              {/* 2: Date/Stat Counter */}
              {/* <section className="snap-start h-screen w-full flex flex-col items-center justify-center text-white">
                <div className="text-6xl font-bold mb-4">
                  <Counter end={5} label="Years Experience" />
                </div>
                <div className="text-6xl font-bold mb-4">
                  <Counter end={20} label="Projects Completed" />
                </div>
                <div className="text-6xl font-bold">
                  <Counter end={1000} label="Cups of Tea" />
                </div>
              </section> */}

              {/* 3: Hello I'm Ranjula */}
              <FadeInSection
                id="about"
                className="mx-auto mt-32 md:mt-72 px-4 md:px-0"
              >
                <motion.div
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <MagneticButton>
                    <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:space-x-20">
                      <div className="md:pl-20">
                        <div className="md:pr-24">
                          <p className="font-hand-written text-[28px] md:text-[40px] lg:text-[90px] uppercase leading-tight text-[#f5eee6]">
                            Hello. I’m Ranjula
                          </p>
                          <p className="font-migraExtrabold text-lg md:text-xl text-[#f3dbc7]">
                            Ranjula Ilukpitiya — Designer. Developer. Dreamer.
                          </p>
                        </div>

                        <FadeInSection delay={0.3}>
                          <p className="text-base md:text-2xl text-[#f5eee6] font-hand-written mt-6 leading-relaxed max-w-2xl">
                            I craft{" "}
                            <span className="text-audi-purple font-semibold">
                              digital experiences
                            </span>{" "}
                            where design meets code. Whether it’s a startup
                            dashboard, an e-commerce interface, or a personal 3D
                            web journey — I aim to build things that feel{" "}
                            <em>alive</em>.<br />
                            <br />
                            With a focus on minimal aesthetics, responsiveness,
                            and micro-interactions, I bring brands to life
                            through clean, intuitive UIs. My stack is built on
                            React, Tailwind, Three.js, and a touch of rhythm
                            from my guitar. 
                            <br />
                            <br />I don’t just build websites — I build moments.
                          </p>
                        </FadeInSection>
                      </div>
                    </div>
                  </MagneticButton>
                </motion.div>
              </FadeInSection>

              {/* 4: Projects */}
              <ProjectsSection />

              {/* 5: Work Experience */}
              <FadeInSection
                className="w-full px-4 md:px-12 py-24 text-[#f5eee6]"
                id="experience"
              >
                <h2 className="text-4xl md:text-6xl font-drukXXCondTrial uppercase mb-12 text-center">
                  Work Experience
                </h2>
                <div className="max-w-4xl mx-auto space-y-12">
                  {/* Codezilla Internship */}
                  <div>
                    <p className="text-2xl font-bold mb-1">
                      Frontend Engineer Intern — Codezilla
                    </p>
                    <p className="text-sm text-[#cfcfcf] mb-4">
                      Remote, Sri Lanka — 2024–2025
                    </p>

                    <ul className="list-disc ml-6 space-y-2 text-sm md:text-base leading-relaxed">
                      <li>
                        <strong>Mealprep:</strong> Developed full web platform +
                        admin dashboard with React, Redux, and REST APIs.
                      </li>
                      <li>
                        <strong>Roshan-Ads Dashboard:</strong> Created intuitive
                        front-end UI with TypeScript, Ant Design, and Tailwind
                        CSS.
                      </li>
                      <li>
                        <strong>Crush.lk Dashboard:</strong> Worked directly
                        with the client to gather requirements and deliver
                        polished, responsive UIs.
                      </li>
                      <li>
                        Integrated image upload, pagination, and chart
                        visualizations using React Hook Form and Recharts.
                      </li>
                      <li>
                        Collaborated in Agile sprints, handled CRUD features,
                        and resolved real-world API and layout issues.
                      </li>
                      <li>
                        Enhanced UX using Framer Motion and custom animations.
                      </li>
                    </ul>

                    <p className="text-sm mt-4">
                      <strong>Tools:</strong> React.js, TypeScript, Tailwind,
                      Ant Design, REST APIs, Postman, Swagger, Git, Vite
                    </p>
                  </div>

                  {/* Freelance */}
                  <div>
                    <p className="text-2xl font-bold mb-1">
                      Freelance Web Designer
                    </p>
                    <p className="text-sm text-[#cfcfcf] mb-4">
                      2025 – Present
                    </p>

                    <ul className="list-disc ml-6 space-y-2 text-sm md:text-base leading-relaxed">
                      <li>
                        Designed modern, minimal UI for creative websites using
                        Figma and Tailwind.
                      </li>
                      <li>
                        Collaborated with clients to deliver mobile-responsive
                        and performance-optimized UIs.
                      </li>
                      <li>
                        Integrated NextUI and animation libraries to enhance
                        interactivity and visual polish.
                      </li>
                    </ul>
                  </div>
                </div>
              </FadeInSection>

              {/* 6: Contact */}
              <FadeInSection
                id="contact"
                className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 sm:px-6 md:px-12 py-12"
              >
                {/* Title */}
                <div className="lg:row-span-3 text-[#f5eee6] text-start text-[48px] sm:text-[72px] md:text-[100px] font-drukXXCondTrial uppercase leading-none">
                  <span className="block">LET&#39;S</span>
                  <span className="block">CONNECT.</span>
                </div>

                {/* Buttons + Text */}
                <div className="lg:col-span-2 lg:row-span-2">
                  <p className="uppercase text-xl sm:text-2xl md:text-[32px] lg:text-[50px]">
                    I&#39;m always interested about
                  </p>

                  {/* Row 1 buttons */}
                  <div className="flex flex-wrap mt-10 gap-4 sm:gap-5">
                    {["UI/UX Design", "Frontend Development"].map((label) => (
                      <MagneticButton key={label}>
                        <Button className="hover-trigger bg-transparent border-[#f5eee6] border text-[#f5eee6] rounded-full uppercase font-semibold text-sm sm:text-base md:text-xl px-4 py-2 md:px-6 md:py-3">
                          {label}
                        </Button>
                      </MagneticButton>
                    ))}
                  </div>

                  {/* Row 2 buttons */}
                  <div className="flex flex-wrap mt-6 gap-4 sm:gap-5">
                    {["New Business", "Hangout", "Coffee"].map((label) => (
                      <MagneticButton key={label}>
                        <Button className="hover-trigger bg-transparent border-[#f5eee6] border text-[#f5eee6] rounded-full uppercase font-semibold text-sm sm:text-base md:text-xl px-4 py-2 md:px-6 md:py-3">
                          {label}
                        </Button>
                      </MagneticButton>
                    ))}
                  </div>
                </div>
              </FadeInSection>
              <ScrollToTop />
              <Footer />
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </>
  );
}
