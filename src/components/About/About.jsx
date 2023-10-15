import React from 'react'
import './About.css'
import {motion} from 'framer-motion'
const About = () => {
  return (
    <motion.div
    whileInView={{ x: 50 }}
    transition={{type: "spring", bounce: 0.25, duration: 3, ease: 'easeIn'}}
     className="microgreens" id='About'>
        <div className="title">
        <h2>What Are MicroGreens?</h2>
        </div>
     <div className="about">
        <p>
         Microgreens are young, edible plants harvested at an early stage of growth, typically 
         just a few weeks after germination when they have developed their first true
         {'\n'}
         leaves.
         These tiny greens are packed with flavor, nutrients, and vibrant colors, making them
         a popular choice for garnishes, salads, and a variety of culinary dishes. 
         Microgreens can be grown from a wide range of plant seeds, including herbs, vegetables,
         and even some grains. They are known for their intense flavors and concentrated
         nutritional content, often containing higher levels of vitamins, minerals,
         and antioxidants compared to their mature counterparts. Microgreens have
         gained popularity in recent years for their fresh taste, visual appeal,
         and health benefits, making them a favorite addition to gourmet and health-conscious
         cuisine.
        </p>
        <p> - Microgreens are young seedlings of edible vegetables, herbs, grains and flowers that are 7 to 14 days young and 2-4 inch tall.</p>
        <p> - Microgreens fall between sprouts and baby plants.</p>
        <p> - Stem and leaves are considered edible for any greens</p>
        <p> - The stem is cut just above the soil line during harvesting.</p>
        <p> - Microgreens have fully developed cotyledon leaves and usually one pair of very small, partially developed true leaves.</p>
    </div>
    <div className="about-2">
    <div className="title">
      <h2>What Are the Health Benefits of Microgreens?</h2>
      </div>
      <p>Microgreens have become increasingly popular in the past handful of years, 
        and a great deal of ongoing research seeks to understand all the health benefits
        these tiny 
        <br /> 
        plants offer. Early research has indicated that microgreens contain 
        up to 40% more phytochemicals (beneficial nutrients and components) than their 
        full-grown counterparts. These little greens are small in stature, they contain 
        extremely high levels of powerful vitamins, minerals, and health-supporting components.</p>
<p>- Microgreens can lower blood pressure. Foods that are high in fiber and vitamin K
   can be helpful in maintaining a healthy blood pressure, and microgreens are high in
    both of these important elements as well as other vitamins and minerals.</p>
<p>- Microgreens might help fight cancer. Research is ongoing into this subject, 
  but some early evidence suggests that sulforaphane — a compound found at especially
   high levels in broccoli sprouts — may help fight cancer.</p>
<p>- Microgreens can support gut health. Foods that are high in dietary fiber, 
  like microgreens, can ease constipation or other gastro-intestinal distress when eaten 
  as part of a healthy, balanced diet. Research also indicates that dietary fiber serves 
  as a " prebiotic," or material that provides an ideal environment for the "good" bacteria
   in the human microbiome to flourish.</p>
    </div>
    </motion.div>
  )
}

export default About
