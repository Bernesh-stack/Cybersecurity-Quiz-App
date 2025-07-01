import React from 'react'
import Navbar from '../Components/Navbar'
import userImage from "../assets/user.jpeg"
import backgroundImage from "../assets/background.png"
import SplitHeading from '../Components/SplitHeading'
import VariableText from '../Components/VariableText'
import { Shield } from 'lucide-react'
import { Brain } from 'lucide-react'
import { AlertCircle} from 'lucide-react'
import CB from '../assets/CB.jpeg'
import CB2 from '../assets/CB2.jpeg'
import CB3 from '../assets/CB3.jpeg'
import { Button } from '../Components/ui/button'
import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt';
import ScrollReveal from '../Components/ScrollReveal'





const Home = () => {
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: "easeOut"
      }
    }),
  };
  return (
    <div  >
      <Navbar /> 
      {/* full Home page */}
      <div className='min-h-screen w-full bg-[#0b1120] '>
        <div className='flex flex-col items-center justify-center w-full bg-cover bg-center text-white px-4 py-20 'style={{backgroundImage:`url(${backgroundImage})`}}>
          <SplitHeading  />
          {/* <p className="mt-4 max-w-2xl text-center text-gray-200 text-sm md:text-base">
             Embark on a journey to become a Cyber Warrior. This platform equips you with the skills to recognize, prevent, and respond to social engineering attacks through immersive training modules and real-world simulations.
        </p> */}
        <VariableText text="Embark on a journey to become a Cyber Warrior. This platform equips you with the skills to recognize, prevent, and respond to social engineering attacks through immersive training modules and real-world simulation" />
          
        </div>
        <div className="px-6 md:px-10 py-12">
<motion.h2
  className="text-white text-2xl md:text-3xl font-bold mb-4 tracking-tight px-8"
  variants={headingVariants}
  initial="hidden"
  animate="visible"
>
  Training Levels
</motion.h2>

      <div className="px-4 py-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          {[ // Cards content array for mapping
            {
              icon: <Shield className="w-5 h-5 text-blue-400" />,
              title: "Level 1: Foundation",
              desc: "Learn the basics of social engineering, including common tactics and red flags to watch out for."
            },
            {
              icon: <Brain className="w-5 h-5 text-blue-400" />,
              title: "Level 2: Advanced Techniques",
              desc: "Explore deeper into phishing, pretexting, baiting, and more with simulations and use-case practice."
            },
            {
              icon: <AlertCircle className="w-5 h-5 text-blue-400" />,
              title: "Level 3: Real-World Scenarios",
              desc: "Put your skills to the test with real-world inspired challenges and organizational threat modeling."
            }
          ].map((card, index) => (
            <motion.div
              key={index}
              className="flex-1 flex flex-col gap-3 bg-[#0B1120] border border-slate-700 text-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 24px rgba(59,130,246,0.3)", // subtle blue glow
                transition: { duration: 0.4, ease: "easeOut" },
              }}
              custom={index}
            >
              {card.icon}
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="text-sm md:text-base text-gray-300">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
<div className='px-6 md:px-10 py-8'>
  <h2 className="text-white text-2xl md:text-3xl font-bold mb-6 tracking-tight px-8">
    Overview
  </h2>

  <div className='flex flex-col gap-20 px-8 mb-4'>
    <div className='flex flex-col lg:flex-row items-center gap-6'>

      {/* Image */}
      <Tilt
  glareEnable={true}
  glareMaxOpacity={0.4}
  glareColor="#3b82f6"
  glarePosition="all"
  tiltMaxAngleX={10}
  tiltMaxAngleY={10}
  transitionSpeed={1000}
  scale={1.02}
  className="rounded-xl shadow-lg"
>
      <img
        src={CB}
        alt="Social Engineering"
        className="w-full lg:w-[480px] h-auto rounded-xl shadow-lg object-cover"
      />
      </Tilt>

      {/* Text Box */}
      <div className='w-full h-auto bg-[#0B1120] border border-slate-700 rounded-xl p-6 text-white shadow-sm transform transition duration-400 ease-out hover:scale-105 hover:shadow-[0_8px_24px_rgba(59,130,246,0.3)]'>
        <div className="flex items-center gap-2 mb-3">
          <Shield className='w-5 h-5 text-blue-400' />
          <h3 className="text-lg font-semibold">What is Social Engineering?</h3>
        </div>
        <ScrollReveal
  baseOpacity={0}
  enableBlur={true}
  baseRotation={5}
  blurStrength={10}
>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque harum eligendi tempore asperiores, aliquam repellat tempora corrupti sapiente aspernatur possimus esse illo eos dicta ratione veniam expedita, veritatis obcaecati aliquid? Aspernatur, sed excepturi incidunt, quibusdam totam cum saepe quam eum ipsa, doloremque neque quas magnam sapiente! Atque laboriosam excepturi odit sunt distinctio, commodi ipsum cupiditate tempora saepe deserunt debitis voluptate eius est, eveniet veniam aliquam suscipit nostrum similique. Placeat odio fuga voluptates, expedita error architecto, necessitatibus accusantium cum explicabo, tempore in quis ipsam aspernatur optio sint voluptas minus! Doloribus rerum aliquam facere porro inventore. Pariatur animi sed corrupti tempora voluptatibus expedita. Alias eveniet, quia excepturi recusandae sit corporis maxime dolores expedita porro, consequatur mollitia minus nostrum culpa consequuntur qui aperiam rem id molestiae. Harum odio minima id esse repellat fugit.
</ScrollReveal>
      </div>

    </div>

    <div className='flex flex-col lg:flex-row items-center gap-6'>

{/* Image */}
<Tilt
  glareEnable={true}
  glareMaxOpacity={0.4}
  glareColor="#3b82f6"
  glarePosition="all"
  tiltMaxAngleX={10}
  tiltMaxAngleY={10}
  transitionSpeed={1000}
  scale={1.02}
  className="rounded-xl shadow-lg"
>
<img
  src={CB2}
  alt="Social Engineering"
  className="w-full lg:w-[480px] h-auto rounded-xl shadow-lg object-cover"
/>
</Tilt>

{/* Text Box */}
<div className='w-full h-auto bg-[#0B1120] border border-slate-700 rounded-xl p-6 text-white shadow-sm transform transition duration-400 ease-out hover:scale-105 hover:shadow-[0_8px_24px_rgba(59,130,246,0.3)]'>
  <div className="flex items-center gap-2 mb-3">
    <Shield className='w-5 h-5 text-blue-400' />
    <h3 className="text-lg font-semibold">Heading</h3>
  </div>
  <ScrollReveal
  baseOpacity={0}
  enableBlur={true}
  baseRotation={5}
  blurStrength={10}
>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque harum eligendi tempore asperiores, aliquam repellat tempora corrupti sapiente aspernatur possimus esse illo eos dicta ratione veniam expedita, veritatis obcaecati aliquid? Aspernatur, sed excepturi incidunt, quibusdam totam cum saepe quam eum ipsa, doloremque neque quas magnam sapiente! Atque laboriosam excepturi odit sunt distinctio, commodi ipsum cupiditate tempora saepe deserunt debitis voluptate eius est, eveniet veniam aliquam suscipit nostrum similique. Placeat odio fuga voluptates, expedita error architecto, necessitatibus accusantium cum explicabo, tempore in quis ipsam aspernatur optio sint voluptas minus! Doloribus rerum aliquam facere porro inventore. Pariatur animi sed corrupti tempora voluptatibus expedita. Alias eveniet, quia excepturi recusandae sit corporis maxime dolores expedita porro, consequatur mollitia minus nostrum culpa consequuntur qui aperiam rem id molestiae. Harum odio minima id esse repellat fugit.
</ScrollReveal>
</div>

</div>

<div className='flex flex-col lg:flex-row items-center gap-6'>

{/* Image */}
<Tilt
  glareEnable={true}
  glareMaxOpacity={0.4}
  glareColor="#3b82f6"
  glarePosition="all"
  tiltMaxAngleX={10}
  tiltMaxAngleY={10}
  transitionSpeed={1000}
  scale={1.02}
  className="rounded-xl shadow-lg"
>
<img
  src={CB3}
  alt="Heading"
  className="w-full lg:w-[480px] h-auto rounded-xl shadow-lg object-cover"
/>
</Tilt>

{/* Text Box */}
<div className='w-full h-auto bg-[#0B1120] border border-slate-700 rounded-xl p-6 text-white shadow-sm transform transition duration-400 ease-out hover:scale-105 hover:shadow-[0_8px_24px_rgba(59,130,246,0.3)]'>
  <div className="flex items-center gap-2 mb-3">
    <Shield className='w-5 h-5 text-blue-400' />
    <h3 className="text-lg font-semibold">Heading</h3>
  </div>

  <ScrollReveal
  baseOpacity={1}
  enableBlur={true}
  baseRotation={6}
  blurStrength={15}
>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque harum eligendi tempore asperiores, aliquam repellat tempora corrupti sapiente aspernatur possimus esse illo eos dicta ratione veniam expedita, veritatis obcaecati aliquid? Aspernatur, sed excepturi incidunt, quibusdam totam cum saepe quam eum ipsa, doloremque neque quas magnam sapiente! Atque laboriosam excepturi odit sunt distinctio, commodi ipsum cupiditate tempora saepe deserunt debitis voluptate eius est, eveniet veniam aliquam suscipit nostrum similique. Placeat odio fuga voluptates, expedita error architecto, necessitatibus accusantium cum explicabo, tempore in quis ipsam aspernatur optio sint voluptas minus! Doloribus rerum aliquam facere porro inventore. Pariatur animi sed corrupti tempora voluptatibus expedita. Alias eveniet, quia excepturi recusandae sit corporis maxime dolores expedita porro, consequatur mollitia minus nostrum culpa consequuntur qui aperiam rem id molestiae. Harum odio minima id esse repellat fugit.
</ScrollReveal>


</div>

</div>


  </div>

  <div className='px-6 md:px-10 py-8'>
  <h2 className="text-white text-2xl md:text-3xl font-bold mb-6 tracking-tight px-8">
    About Quiz

  </h2>
   <p className=' md:px-10 text-gray-300 text-sm md:text-base'>From below you can take a quiz to test your knowledge of social engineering and phishing.</p>
   <div className='flex flex-col gap-4 align-middle justify-center items-center'>
   <Button className='bg-blue-500 text-white mt-4 '>Start</Button></div>
  </div>
</div>
       
      </div>
    </div>
  )
}

export default Home