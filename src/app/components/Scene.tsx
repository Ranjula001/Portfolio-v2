"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Button } from "@nextui-org/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import SceneContent from "./SceneContent";
import ProjectsSection from "./ProjectsSection";
import Loader from "./Loader";
import Navbar from "./Navbar";
import AnimatedCursor from "./AnimatedCursor";
import MagneticButton from "./MagneticButton";
import ScrollProgress from "./ScrollProgress";
import ScrollToTop from "./ScrollToTop";
import Footer from "./Footer";
import CommandMenu from "./CommandMenu";
import ContactForm from "./ContactForm";
import {
  certifications,
  education,
  experience,
  focusAreas,
  heroHighlights,
  personalInfo,
  quickFacts,
  skillGroups,
} from "../data/portfolio";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Scene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      setScrollProgress(Math.min(1, Math.max(0, progress)));
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  useGSAP(
    () => {
      gsap.fromTo(
        ".reveal-up",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
          },
        }
      );

      gsap.utils.toArray<HTMLElement>(".reveal-section").forEach((section) => {
        gsap.fromTo(
          section.querySelectorAll(".reveal-item"),
          { opacity: 0, y: 48 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 78%",
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(".parallax-card").forEach((card) => {
        gsap.to(card, {
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            scrub: true,
          },
        });
      });
    },
    { scope: containerRef }
  );

  const ctaPills = ["Frontend Development", "SaaS Product UI", "Creative Engineering"];

  return (
    <>
      <AnimatedCursor />
      <ScrollProgress />
      <Navbar />
      <CommandMenu />
      <Loader />
      <ScrollToTop />

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(123,97,255,0.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(243,219,199,0.18),transparent_26%),linear-gradient(180deg,#07090d_0%,#0b0f17_52%,#090a10_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.03)_0%,transparent_24%,transparent_76%,rgba(255,255,255,0.02)_100%)]" />
        <Canvas camera={{ position: [0, 0, 5], fov: 42 }} className="pointer-events-none">
          <ambientLight intensity={1.15} />
          <directionalLight position={[2, 4, 5]} intensity={2.2} />
          <spotLight position={[-3, 5, 4]} intensity={1.4} color="#f3dbc7" />
          <Suspense fallback={null}>
            <SceneContent progress={scrollProgress} />
            <Environment preset="city" />
          </Suspense>
        </Canvas>
      </div>

      <div ref={containerRef} className="relative z-10">
        <section
          id="hero"
          className="reveal-section mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-end px-4 pb-12 pt-24 sm:pb-16 sm:pt-28 md:px-8 md:pb-20"
        >
          <div className="grid items-end gap-6 sm:gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="reveal-item order-2 lg:order-1">
              <div className="mb-4 inline-flex max-w-full rounded-full border border-white/10 bg-white/6 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-[#f3dbc7] backdrop-blur-md sm:mb-5 sm:px-4 sm:text-[11px] sm:tracking-[0.26em]">
                Junior Developer / UI-UX minded frontend builder
              </div>
              <h1 className="font-drukXXCondTrial text-[52px] uppercase leading-[0.88] text-white sm:text-[84px] md:text-[132px] lg:text-[172px]">
                Ranjula
                <span className="block text-[#f3dbc7]">Ilukpitiya</span>
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8 md:mt-6 md:text-xl">
                {personalInfo.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">
                {ctaPills.map((item) => (
                  <MagneticButton key={item}>
                    <button
                      type="button"
                      className="hover-trigger rounded-full border border-white/12 bg-white/6 px-3 py-2.5 text-[10px] uppercase tracking-[0.14em] text-white/80 backdrop-blur-md transition-colors hover:border-[#f3dbc7] hover:text-white sm:px-4 sm:py-3 sm:text-xs sm:tracking-[0.18em]"
                    >
                      {item}
                    </button>
                  </MagneticButton>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
                <MagneticButton>
                  <Button
                    as="a"
                    href="#works"
                    className="hover-trigger w-full rounded-full bg-[#f3dbc7] px-6 py-5 text-sm font-semibold uppercase tracking-[0.18em] text-black sm:w-auto sm:py-6"
                  >
                    View Projects
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button
                    as="a"
                    href={personalInfo.resume}
                    target="_blank"
                    className="hover-trigger w-full rounded-full border border-white/12 bg-white/5 px-6 py-5 text-sm font-semibold uppercase tracking-[0.18em] text-white sm:w-auto sm:py-6"
                  >
                    Resume
                  </Button>
                </MagneticButton>
              </div>
            </div>

            <div className="order-1 grid gap-4 sm:gap-5 lg:order-2">
              <div className="parallax-card reveal-item relative overflow-hidden rounded-[28px] border border-white/10 bg-white/7 p-2.5 backdrop-blur-xl sm:rounded-[36px] sm:p-3">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_48%)]" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
                  <Image
                    src="/images/graduation-portrait.jpg"
                    alt="Ranjula Ilukpitiya graduation portrait"
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent_0%,rgba(6,9,14,0.88)_100%)] p-4 sm:p-5">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-[#f3dbc7] sm:text-xs sm:tracking-[0.24em]">Featured portrait</p>
                    <p className="mt-2 text-base text-white sm:text-lg">A human-centered portfolio with code, design, and motion in balance.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
                {quickFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="reveal-item rounded-[24px] border border-white/10 bg-white/7 p-4 backdrop-blur-xl sm:rounded-[28px] sm:p-5"
                  >
                    <p className="font-drukXXCondTrial text-3xl uppercase text-white sm:text-4xl md:text-5xl">{fact.value}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.14em] text-white/55 sm:text-sm sm:tracking-[0.18em]">{fact.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="reveal-section mx-auto max-w-7xl px-4 py-20 sm:py-24 md:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="reveal-item rounded-[28px] border border-white/10 bg-black/28 p-6 backdrop-blur-xl sm:rounded-[36px] sm:p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-[#f3dbc7]">About</p>
              <h2 className="mt-4 font-drukXXCondTrial text-4xl uppercase leading-none text-white sm:text-5xl md:text-7xl">
                Clean systems.
                <span className="block text-[#f3dbc7]">Human UI.</span>
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/72 sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
                I enjoy building product interfaces that feel premium without becoming noisy. The goal is always
                clarity first, then motion, depth, and personality in the right places.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
              {focusAreas.map((item, index) => {
                const icons = [Sparkles, BriefcaseBusiness, Zap, ShieldCheck];
                const Icon = icons[index % icons.length];
                return (
                  <div
                    key={item}
                    className="reveal-item rounded-[24px] border border-white/10 bg-white/7 p-5 backdrop-blur-xl sm:rounded-[32px] sm:p-6"
                  >
                    <Icon className="h-5 w-5 text-[#f3dbc7]" />
                    <p className="mt-4 text-base leading-7 text-white/80 sm:mt-6 sm:text-lg sm:leading-8">{item}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="skills" className="reveal-section mx-auto max-w-7xl px-4 py-20 sm:py-24 md:px-8">
          <div className="reveal-item mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.24em] text-[#f3dbc7]">Capabilities</p>
              <h2 className="font-drukXXCondTrial text-4xl uppercase leading-none text-white sm:text-5xl md:text-7xl">
                Modern Stack
              </h2>
            </div>
            <p className="max-w-xl text-sm text-white/70 md:text-base">
              Built for responsive product interfaces, scalable components, and shipping quickly without losing design quality.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="reveal-item rounded-[24px] border border-white/10 bg-black/28 p-5 backdrop-blur-xl sm:rounded-[32px] sm:p-6"
              >
                <p className="text-sm uppercase tracking-[0.22em] text-[#f3dbc7]">{group.title}</p>
                <div className="mt-5 flex flex-wrap gap-2 sm:mt-6 sm:gap-2.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] text-white/78 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.14em]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <ProjectsSection />

        <section id="experience" className="reveal-section mx-auto max-w-7xl px-4 py-20 sm:py-24 md:px-8">
          <div className="reveal-item mb-10 flex items-center gap-3 sm:mb-12 sm:gap-4">
            <BriefcaseBusiness className="h-6 w-6 text-[#f3dbc7]" />
            <h2 className="font-drukXXCondTrial text-4xl uppercase leading-none text-white sm:text-5xl md:text-7xl">
              Experience
            </h2>
          </div>

          <div className="grid gap-6">
            {experience.map((item) => (
              <div
                key={`${item.company}-${item.role}`}
                className="reveal-item rounded-[28px] border border-white/10 bg-white/7 p-5 backdrop-blur-xl sm:rounded-[36px] sm:p-7 md:p-9"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-[#f3dbc7]">{item.period}</p>
                    <h3 className="mt-3 text-xl font-semibold text-white sm:text-2xl md:text-3xl">{item.role}</h3>
                    <p className="mt-1 text-sm text-white/70 sm:text-base">{item.company} / {item.location}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-white/45" />
                </div>

                <div className="mt-6 grid gap-3 md:mt-8 md:grid-cols-2">
                  {item.bullets.map((bullet) => (
                    <div key={bullet} className="rounded-[20px] border border-white/8 bg-black/20 px-4 py-4 text-sm leading-6 text-white/76 sm:rounded-[24px] sm:leading-7">
                      {bullet}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="reveal-section mx-auto max-w-7xl px-4 py-20 sm:py-24 md:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="reveal-item rounded-[28px] border border-white/10 bg-black/28 p-6 backdrop-blur-xl sm:rounded-[36px] sm:p-8">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-[#f3dbc7]" />
                <p className="text-sm uppercase tracking-[0.24em] text-[#f3dbc7]">Education</p>
              </div>
              <h2 className="mt-6 font-drukXXCondTrial text-4xl uppercase leading-none text-white sm:text-5xl md:text-7xl">
                {education.degree}
              </h2>
              <p className="mt-5 text-lg text-white/78 sm:mt-6 sm:text-xl">{education.school}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-white/48 sm:text-sm sm:tracking-[0.18em]">
                {education.location} / {education.period}
              </p>
            </div>

            <div className="grid gap-3 sm:gap-4">
              {certifications.map((item) => (
                <div
                  key={item}
                  className="reveal-item rounded-[24px] border border-white/10 bg-white/7 px-5 py-4 text-sm text-white/80 backdrop-blur-xl sm:rounded-[28px] sm:px-6 sm:py-5 sm:text-base"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="reveal-section mx-auto max-w-7xl px-4 py-20 sm:py-24 md:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="reveal-item rounded-[28px] border border-white/10 bg-black/28 p-6 backdrop-blur-xl sm:rounded-[36px] sm:p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-[#f3dbc7]">Contact</p>
              <h2 className="mt-4 font-drukXXCondTrial text-4xl uppercase leading-none text-white sm:text-5xl md:text-7xl">
                Let&apos;s build
                <span className="block text-[#f3dbc7]">something real.</span>
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-7 text-white/72 sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
                Open to frontend roles, freelance work, and collaborations where product thinking matters as much as implementation quality.
              </p>

              <div className="mt-8 grid gap-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover-trigger rounded-[24px] border border-white/10 bg-white/6 p-4 text-white transition-colors hover:border-white/25 sm:rounded-[28px] sm:p-5"
                >
                  <p className="text-xs uppercase tracking-[0.24em] text-[#f3dbc7]">Email</p>
                  <p className="mt-2 break-all text-base sm:text-lg">{personalInfo.email}</p>
                </a>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
                  className="hover-trigger rounded-[24px] border border-white/10 bg-white/6 p-4 text-white transition-colors hover:border-white/25 sm:rounded-[28px] sm:p-5"
                >
                  <p className="text-xs uppercase tracking-[0.24em] text-[#f3dbc7]">Phone</p>
                  <p className="mt-2 text-base sm:text-lg">{personalInfo.phone}</p>
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">
                {heroHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] text-white/68 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.16em]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-item">
              <ContactForm />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
