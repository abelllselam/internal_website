"use client";

import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Users,
  Heart,
  Zap,
  Building,
  Award,
  Star,
} from "lucide-react";

const essenceData = [
  {
    id: "vision",
    title: "Vision",
    subtitle: "Transforming Tomorrow",
    description:
      "To become a leading innovation-driven think-and-do hub that transforms data, knowledge, and creativity into scalable and sustainable solutions—shaping resilient societies and future-ready institutions across Africa and beyond.",
    icon: Eye,
    image: "https://justoborn.com/wp-content/uploads/2024/11/dpi_enhancer.jpeg",
  },

  {
    id: "mission",
    title: "Mandate",
    subtitle: "Bridging Innovation and Impact",
    description:
      "Our mission is to bridge the gap between innovation and impact by advancing policy research, digital innovation, strategic advisory, and capacity building. We exist to empower governments, institutions, and communities to design and implement inclusive and sustainable solutions.",
    icon: Target,
    image:
      "https://blog.aiconnect.cloud/wp-content/uploads/2024/11/38ac466a-5244-48ad-8535-f32f1421c0c7aaaaaaa.png",
  },

  {
    id: "identity",
    title: "Imprint",
    subtitle: "Bridge Between Ideas and Action",
    description:
      "Our identity is shaped by a multidisciplinary approach that blends think tank rigor with practical execution, data intelligence with digital transformation, policy advocacy with grassroots engagement, and global standards with local relevance.",
    highlights: [
      "Think tank rigor with practical execution",
      "Data intelligence with digital transformation",
      "Policy advocacy with grassroots engagement",
      "Global standards with local relevance",
    ],
    icon: Building,
    image: "https://justoborn.com/wp-content/uploads/2024/11/dpi_enhancer.jpeg",
  },

  {
    id: "brand-promise",
    title: "Brand Promise",
    subtitle: "Insight. Innovation. Impact.",
    description:
      "We promise to consistently deliver deep, data-driven insights, forward-looking creative solutions, and practical results that matter to communities, policymakers, and change-makers.",
    promises: [
      "Deep, data-driven insights",
      "Forward-looking, creative solutions",
      "Practical results that matter",
    ],
    icon: Award,
    image:
      "https://www.unite.ai/wp-content/uploads/2024/02/Hyperautomation-AI.webp",
  },

  {
    id: "core-values",
    title: "Core Values",
    subtitle: "Our Ethical Foundation",
    description:
      "The ethical and operational backbone of our organization, guiding every decision and action we take.",
    values: [
      {
        name: "Innovation",
        desc: "We think beyond conventional solutions and pioneer bold ideas that shape the future.",
      },
      {
        name: "Excellence",
        desc: "We commit to high standards in everything we do—from research to execution.",
      },
      {
        name: "Integrity",
        desc: "We operate with transparency, honesty, and ethical responsibility.",
      },
      {
        name: "Collaboration",
        desc: "We value co-creation and actively engage with partners, clients, and communities.",
      },
      {
        name: "Inclusivity",
        desc: "We embrace diversity and equity, ensuring all voices are heard and respected.",
      },
      {
        name: "Impact",
        desc: "We measure success by the tangible, sustainable difference we make in people's lives and systems.",
      },
    ],
    icon: Heart,
    image:
      "https://www.shutterstock.com/image-photo/ai-ethics-law-concept-developing-260nw-2501568763.jpg",
  },
  {
    id: "culture",
    title: "Ethos",
    subtitle: "Progressive & Human-Centered",
    description:
      "We cultivate a progressive, agile, and human-centered culture characterized by open communication, experimentation, purposeful collaboration, and strong commitment to results, equity, and ethics.",
    characteristics: [
      "Open communication and shared leadership",
      "Experimentation and continuous learning",
      "Purposeful collaboration across disciplines",
      "Strong commitment to results, equity, and ethics",
    ],
    icon: Users,
    image:
      "https://cloudwars.com/wp-content/uploads/2023/08/ai-business-culture.png",
  },

  {
    id: "strategic-pillars",
    title: "Strategic Pillars",
    subtitle: "Foundation of Our Work",
    description:
      "Our work is anchored in five strategic pillars that define our approach to creating sustainable impact.",
    pillars: [
      {
        name: "Research & Policy",
        desc: "Generating evidence-based insights to inform public policy and institutional reform.",
      },
      {
        name: "Diginovation",
        desc: "Leveraging digital tools and emerging technologies to solve social, economic, and governance challenges.",
      },
      {
        name: "Capacity Building & Training",
        desc: "Equipping individuals and institutions with the knowledge and skills to lead and adapt.",
      },
      {
        name: "Expert Network & Advisory",
        desc: "Providing high-level consultancy and technical support to clients and partners.",
      },
      {
        name: "Event Curation & Policy Engagement",
        desc: "Designing high-level forums, labs, and dialogues that shape discourse and inspire action.",
      },
    ],
    icon: Zap,
    image:
      "https://i.ytimg.com/vi/2KnE8_lpcW4/oardefault.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLAp6RjNjLC5BwP1WxNSgdSt-asJYw",
  },

  {
    id: "reputation",
    title: "Reputation",
    subtitle: "Known for Excellence",
    description:
      "InnovationXcellence Hub is recognized for credibility, multisectoral partnerships, agility, and thought leadership that shapes policy and inspires innovation ecosystems.",
    attributes: [
      "Credibility and expertise in research, governance, and innovation",
      "Multisectoral partnerships with governments, academia, development actors, and the private sector",
      "Agility and reliability in managing complex projects across diverse sectors",
      "Thought leadership that shapes policy and inspires innovation ecosystems",
    ],
    icon: Star,
    image:
      "https://media.licdn.com/dms/image/v2/D5612AQFdunbI5U-Zxw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721357791484?e=2147483647&v=beta&t=iZRFkNiuAFlteeYDR3jCrRsQVBLsom_059eQbkAQo7o",
  },
];

const AboutDemo = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('https://easy-peasy.ai/cdn-cgi/image/quality=70,format=auto,width=500/https://media.easy-peasy.ai/27feb2bb-aeb4-4a83-9fb6-8f3f2a15885e/e2b93451-eaf0-4e58-b336-693e905b7e53.png')",
          }}
        />
        <div className="absolute inset-0 bg-slate-900/80" />
        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Essence
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            Discover the core components that define InnovationXcellence Hub
          </p>
          <div className="flex items-center justify-center space-x-4">
            <span className="text-blue-400 font-semibold">
              INNOVATION • EXCELLENCE • IMPACT
            </span>
            <div className="w-12 h-0.5 bg-blue-400"></div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          // transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Essence Components */}
      {essenceData.map((component, index) => {
        const Icon = component.icon;
        const isEven = index % 2 === 0;

        return (
          <section
            key={component.id}
            className="relative min-h-screen flex items-center"
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{ backgroundImage: `url('${component.image}')` }}
            />
            <div className="absolute inset-0 bg-slate-900/85" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  isEven ? "" : "lg:grid-flow-col-dense"
                }`}
              >
                <motion.div
                  className={`space-y-8 ${isEven ? "" : "lg:col-start-2"}`}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-500/20 rounded-lg">
                      <Icon className="w-8 h-8 text-blue-400" />
                    </div>
                    <div>
                      <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                        {component.title}
                      </h2>
                      <p className="text-blue-400 text-lg font-semibold">
                        {component.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-300 text-lg leading-relaxed">
                    {component.description}
                  </p>
                  {/* Core Values */}
                  {component.values && (
                    <div className="grid gap-4">
                      {component.values.map((value, idx) => (
                        <motion.div
                          key={idx}
                          className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <h4 className="text-blue-400 font-semibold mb-2">
                            {value.name}
                          </h4>
                          <p className="text-slate-300 text-sm">{value.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Culture Characteristics */}
                  {component.characteristics && (
                    <div className="space-y-3">
                      {component.characteristics.map((char, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <p className="text-slate-300">{char}</p>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Identity Highlights */}
                  {component.highlights && (
                    <div className="grid gap-3">
                      {component.highlights.map((highlight, idx) => (
                        <motion.div
                          key={idx}
                          className="p-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20"
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <p className="text-slate-300">{highlight}</p>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Strategic Pillars */}
                  {component.pillars && (
                    <div className="grid gap-4">
                      {component.pillars.map((pillar, idx) => (
                        <motion.div
                          key={idx}
                          className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <h4 className="text-blue-400 font-semibold mb-2">
                            {pillar.name}
                          </h4>
                          <p className="text-slate-300 text-sm">
                            {pillar.desc}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  )}
                  {/* Brand Promises */}
                  {component.promises && (
                    <div className="space-y-3">
                      {component.promises.map((promise, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <p className="text-slate-300">{promise}</p>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Reputation Attributes */}
                  {component.attributes && (
                    <div className="space-y-3">
                      {component.attributes.map((attr, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-slate-300">{attr}</p>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>

                <motion.div
                  className={`relative ${
                    isEven ? "" : "lg:col-start-1 lg:row-start-1"
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl transform rotate-3"></div>
                    <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 ">
                      {/* <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-6">
                        <Icon className="w-12 h-12 text-white" />
                      </div> */}
                      <div className="text-center">
                        {/* <h3 className="text-2xl font-bold text-white mb-2">{component.title}</h3> */}
                        {/* <p className="text-blue-400 font-semibold">{component.subtitle}</p> */}
                        <img
                          src={component.image}
                          alt={component.title}
                          className="w-full h-72 object-cover rounded-lg mb-4"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};
export default  AboutDemo ;
