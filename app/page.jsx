import Image from "next/image";
import Link from "next/link";
import star from "@/images/star.svg";
import stepsCurve from "@/images/steps-curve.svg";
import hero from "@/images/hero.webp";
import event1 from "@/images/event1.avif";
import event2 from "@/images/event2.avif";
import event3 from "@/images/event3.avif";
import contact from "@/images/contact.jpg";

import Countries from "@/components/Countries";
import FAQ from "@/components/FAQ";
import Button from "@/components/Button";
import Reviews from "@/components/Reviews";
import Form from "@/components/Form";
import Loader from "@/components/Loader";

export default function Home() {
  return (
    <>
      <Loader />
      <main>
        <section className="px-4 xl:px-0 xl:max-w-[1232px] mx-auto pt-14 pb-16 flex flex-col lg:flex-row gap-16 lg:gap-32">
          <div className="relative w-full max-w-[464px] mx-auto aspect-[464/632] lg:w-[464px] lg:h-[632px] rounded-t-full bg-[#F7F2EE] after:absolute after:inset-0 after:border after:border-[#D6B981] after:rounded-t-full after:scale-[1.05]">
            <Image
              src={hero}
              alt="Hero image"
              className="w-full h-full object-cover object-bottom rounded-t-full"
            />
          </div>
          <div className="flex-1">
            <h1 className="flex justify-center lg:justify-start">
              <Image
                src="./name.svg"
                alt="Maria Babenkova"
                width={334}
                height={72}
              />
            </h1>
            <p className="text-base font-poppins font-light mt-12 text-center lg:text-left">
              Welcome! I'm Maria, an event planner with a passion for helping
              businesses host remarkable events.
            </p>
            <p className="text-base font-poppins font-light mt-8 text-center lg:text-left">
              My approach is simple: listen, create, and deliver events that are
              perfectly tailored to your goals and vision. Whether it's a
              high-level corporate gathering, a networking summit, or an
              industry-defining conference, I'm here to make the process
              seamless and enjoyable. From the initial idea to the final detail,
              I'll ensure everything is taken care of.
            </p>
            <div className="text-center lg:text-left">
              <Link
                href="/#contact"
                className="inline-block mt-12 font-poppins font-light border border-[#D6B981] rounded-[100%] py-5 px-10 relative after:absolute after:inset-0 after:border after:rounded-[100%] after:border-[#D6B981] after:-rotate-6 after:z-10 after:transition-all after:duration-300 after:ease-in-out after:hover:rotate-0"
              >
                Book a call
              </Link>
            </div>
            <div className="mt-16 lg:mt-20 flex flex-wrap items-center justify-center lg:justify-start gap-8 lg:gap-16">
              <div className="text-center lg:text-left">
                <p className="text-4xl lg:text-5xl font-playfairDisplay leading-normal">
                  4+
                </p>
                <span className="text-base font-poppins font-light mt-1">
                  years of experience
                </span>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-4xl lg:text-5xl font-playfairDisplay leading-normal text-dun">
                  40+
                </p>
                <span className="text-base font-poppins font-light mt-1">
                  events
                </span>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-4xl lg:text-5xl font-playfairDisplay leading-normal">
                  300+
                </p>
                <span className="text-base font-poppins font-light mt-1">
                  satisfied clients
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* <section id="slogan" className="relative">
        <div className="px-4 xl:px-0 xl:max-w-[1232px] mx-auto pt-14 pb-12">
          <div className="flex">
            <h2 className="hidden lg:block text-4xl lg:text-5xl font-playfairDisplay leading-tight relative -rotate-90 whitespace-nowrap origin-center">
              my slogan
            </h2>
            <div>
              <p className="block text-base lg:text-2xl font-poppins font-light mb-10">
                <b>Professional events, personal touch.</b> With a focus on quality and care, I craft events that are polished yet personal, reflecting your unique story and objectives.
              </p>
              <Button className="block" href="#contact" variant="inverse">
                Book a call
              </Button>
            </div>
          </div>
        </div>
      </section> */}
        <section className="relative">
          <Image
            src={star}
            alt="star"
            className="hidden lg:block absolute top-8 left-5"
            width={100}
            height={100}
          />
          <div className="px-4 xl:px-0 xl:max-w-[1232px] mx-auto pt-10 pb-24">
            <h2 className="text-4xl lg:text-6xl font-playfairDisplay leading-normal relative text-center">
              <span className="relative after:hidden lg:after:block after:absolute after:content-[''] after:w-[100px] after:h-[1px] after:bg-[#D6B981] after:left-full after:top-1/2 after:ml-4">
                Step
              </span>{" "}
              <span className="text-[#D6B981] relative lg:-bottom-10">
                guide
              </span>
            </h2>
            <div className="mt-10 lg:mt-20">
              <div className="flex flex-col lg:flex-row lg:gap-[170px] gap-6 pb-0 lg:py-10 relative">
                <Image
                  src={stepsCurve}
                  alt="steps curve"
                  className="hidden lg:block -z-10 absolute top-0 left-0 w-full h-full"
                  width={100}
                  height={100}
                />

                <div className="flex flex-col lg:flex-row gap-6 lg:gap-[170px]">
                  <div className="p-6 lg:p-8 border border-dun rounded-[40px] flex flex-col gap-4 items-center justify-center max-w-[300px] mx-auto w-full hover:bg-dun transition-all duration-300">
                    <h3 className="text-2xl lg:text-[32px] font-playfairDisplay">
                      Step 1
                    </h3>
                    <p className="text-sm lg:text-base font-poppins font-light text-center">
                      Let's start the conversation! Share your ideas, goals, and
                      initial details about the event you envision.
                    </p>
                  </div>
                  <div className="p-6 lg:p-8 border border-dun rounded-[40px] flex flex-col gap-4 items-center justify-center max-w-[300px] mx-auto w-full hover:bg-dun transition-all duration-300">
                    <h3 className="text-2xl lg:text-[32px] font-playfairDisplay">
                      Step 2
                    </h3>
                    <p className="text-sm lg:text-base font-poppins font-light text-center">
                      We'll sit down (virtually or in person) to dive deeper
                      into your needs, discuss your vision, and explore how I
                      can help bring your ideas to life.
                    </p>
                  </div>
                  <div className="p-6 lg:p-8 border border-dun rounded-[40px] flex flex-col gap-4 items-center justify-center max-w-[300px] mx-auto w-full hover:bg-dun transition-all duration-300">
                    <h3 className="text-2xl lg:text-[32px] font-playfairDisplay">
                      Step 3
                    </h3>
                    <p className="text-sm lg:text-base font-poppins font-light text-center">
                      I'll create a customized event strategy and provide a
                      detailed plan that aligns with your goals and aspirations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row justify-center gap-6 lg:gap-[200px] mt-6 lg:mt-10">
                <div className="p-6 lg:p-8 border border-dun rounded-[40px] flex flex-col gap-4 items-center justify-center max-w-[300px] mx-auto w-full hover:bg-dun transition-all duration-300">
                  <h3 className="text-2xl lg:text-[32px] font-playfairDisplay">
                    Step 4
                  </h3>
                  <p className="text-sm lg:text-base font-poppins font-light text-center">
                    Together, we'll review everything step-by-step to ensure
                    each detail is just right and reflects your vision
                    perfectly.
                  </p>
                </div>
                <div className="p-6 lg:p-8 border border-dun rounded-[40px] flex flex-col gap-4 items-center justify-center max-w-[300px] mx-auto w-full hover:bg-dun transition-all duration-300">
                  <h3 className="text-2xl lg:text-[32px] font-playfairDisplay">
                    Step 5
                  </h3>
                  <p className="text-sm lg:text-base font-poppins font-light text-center">
                    Once everything is finalized, I'll take care of the
                    execution to make your event a success—and provide
                    post-event insights to help with future projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Countries />
        <section className="relative" id="howcanihelp">
          <div className="px-4 xl:px-0 xl:max-w-[1232px] mx-auto pt-10 pb-24">
            <h2 className="text-4xl lg:text-6xl font-playfairDisplay leading-normal relative text-center">
              How I Can <span className="text-[#D6B981]">Help</span>
            </h2>

            <div className="mt-10 lg:mt-20">
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                <div className="flex-1 flex flex-col gap-6 border border-dun rounded-[20px] hover:bg-dun transition-all duration-300 p-6 lg:p-8 justify-between">
                  <h3 className="text-2xl lg:text-[32px] font-playfairDisplay text-center h-auto md:h-16">
                    Full-Service Event Management
                  </h3>
                  <div className="flex items-center h-auto flex-col gap-4">
                    <p className="text-sm lg:text-base font-poppins text-center font-light">
                      I take care of everything - from the first idea to a
                      flawless event day.
                    </p>
                    <p className="text-sm lg:text-base font-poppins text-center font-light">
                      Venue sourcing, speaker coordination, on-site execution
                      and more.
                    </p>
                    <p className="text-sm lg:text-base font-poppins text-center font-light">
                      Best for companies launching corporate conferences and
                      networking events.
                    </p>
                  </div>
                </div>

                <div className="flex-1 flex flex-col gap-6 border border-dun rounded-[20px] hover:bg-dun transition-all duration-300 p-6 lg:p-8 justify-between">
                  <h3 className="text-2xl lg:text-[32px] font-playfairDisplay text-center h-auto md:h-16">
                    Event Consulting & Project Management
                  </h3>
                  <div className="flex items-center h-auto flex-col gap-4">
                    <p className="text-sm lg:text-base font-poppins text-center font-light">
                      Already have a team but need insights? I help you refine
                      strategy, budgeting & logistics.
                    </p>
                    <p className="text-sm lg:text-base font-poppins text-center font-light">
                      Support with planning, vendor coordination and management.
                    </p>
                    <p className="text-sm lg:text-base font-poppins text-center font-light">
                      Perfect for teams who want hands-on support while staying
                      in control.
                    </p>
                  </div>
                </div>

                <div className="flex-1 flex flex-col gap-6 border border-dun rounded-[20px] hover:bg-dun transition-all duration-300 p-6 lg:p-8 justify-between">
                  <h3 className="text-2xl lg:text-[32px] font-playfairDisplay text-center h-auto md:h-16">
                    Let's Collaborate
                  </h3>
                  <div className="flex items-center h-auto flex-col gap-4">
                    <p className="text-sm lg:text-base font-poppins text-center font-light">
                      Open to creative collaborations, partnerships, and
                      tailor-made event solutions. Let's create something great
                      together!
                    </p>
                    <p className="text-sm lg:text-base font-poppins text-center font-light">
                      Co-hosting events or managing specific event aspects.
                    </p>
                    <p className="text-sm lg:text-base font-poppins text-center font-light">
                      Great for businesses looking for a trusted event partner
                      with a flexible approach.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="px-4 xl:px-0 xl:max-w-[1232px] mx-auto py-14 lg:py-[104px]">
        <h2 className="text-4xl lg:text-6xl font-playfairDisplay leading-tight relative text-center">Upcoming <br /><span className="text-[#D6B981] relative lg:left-32">events</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16 mt-10 lg:mt-16">
          <div className="max-w-[350px] mx-auto w-full">
            <div className="relative bg-red-200 rounded-t-full w-full h-[280px] lg:h-[350px] grayscale hover:grayscale-0 transition-all duration-300 p-6 lg:p-8 after:absolute after:inset-0 after:border after:border-[#D6B981] after:rounded-t-full after:scale-[1.05] after:transition-all after:duration-300">
              <Image src={event1} alt="Event 1" className="rounded-t-full w-full h-full object-cover" />
            </div>
            <h3 className="text-xl lg:text-2xl font-playfairDisplay mt-4 lg:mt-6">Event 1</h3>
            <span className="block font-poppins font-light text-sm text-foreground/60 mt-2 lg:mt-3">
              Day : 22.12.24
            </span>
            <span className="block font-poppins font-light text-sm text-foreground/60">
              Time: 12:00
            </span>
          </div>

          <div className="max-w-[350px] mx-auto w-full lg:mt-14">
            <div className="bg-green-200 rounded-br-[70%] w-full h-[280px] lg:h-[350px] grayscale hover:grayscale-0 transition-all duration-300 relative after:absolute after:inset-0 after:border after:border-[#D6B981] after:rounded-br-[70%] after:scale-[1.05] after:transition-all after:duration-300">
              <Image src={event2} alt="Event 2" className="rounded-br-[70%] w-full h-full object-cover" />
            </div>
            <h3 className="text-xl lg:text-2xl font-playfairDisplay mt-4 lg:mt-6">Event 2</h3>
            <span className="block font-poppins font-light text-sm text-foreground/60 mt-2 lg:mt-3">
              Day : 22.12.24
            </span>
            <span className="block font-poppins font-light text-sm text-foreground/60">
              Time: 12:00
            </span>
          </div>

          <div className="max-w-[350px] mx-auto w-full">
            <div className="bg-blue-200 rounded-tl-[70%] w-full h-[280px] lg:h-[350px] grayscale hover:grayscale-0 transition-all duration-300 relative after:absolute after:inset-0 after:border after:border-[#D6B981] after:rounded-tl-[70%] after:scale-[1.05] after:transition-all after:duration-300">
              <Image src={event3} alt="Event 3" className="rounded-tl-[70%] w-full h-full object-cover" />
            </div>
            <h3 className="text-xl lg:text-2xl font-playfairDisplay mt-4 lg:mt-6">Event 3</h3>
            <span className="block font-poppins font-light text-sm text-foreground/60 mt-2 lg:mt-3">
              Day : 22.12.24
            </span>
            <span className="block font-poppins font-light text-sm text-foreground/60">
              Time: 12:00
            </span>
          </div>
        </div>
      </section> */}
        <Reviews />
        <FAQ />
        <section
          id="contact"
          className="px-4 xl:px-0 xl:max-w-[1232px] mx-auto py-[100px] flex flex-col lg:flex-row items-center justify-between gap-[100px]"
        >
          <div className="relative w-full max-w-[500px] aspect-square lg:size-[500px] bg-foreground rounded-tr-[50%] after:absolute after:inset-0 after:border after:border-[#D6B981] after:rounded-tr-[50%] after:scale-[1.05]">
            <Image
              src={contact}
              alt="Contact"
              className="w-full h-full rounded-tr-[50%] object-cover"
            />
          </div>
          <div className="w-full lg:max-w-[560px] lg:flex-1">
            <h2 className="text-4xl lg:text-5xl font-playfairDisplay leading-tight text-dun">
              Contact Me
            </h2>
            <p className="text-base font-poppins font-light text-foreground mt-4">
              Do you have questions or are you ready to start planning your next
              event? Fill out the form below, and I'll get back to you soon!
            </p>
            <Form />
          </div>
        </section>
      </main>
    </>
  );
}
