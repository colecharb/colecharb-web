// export default function AboutPage() {
//   return (
//     <>
//       <p className='big-text'>
//         Helping businesses and organizations grow with modern, easy-to-use
//         websites and apps.
//       </p>

//       <p>
//         I love turning ideas into polished, practical tools. Whether it's a
//         simple website, a custom app, or improving an existing online presence,
//         I focus on creating experiences that feel effortless for your customers
//         and clients.
//       </p>

//       <p>
//         With a background in mathematics and years of hands-on development, I
//         bring both problem-solving and design thinking to every project. The
//         result: websites and applications that look great, run fast, and help
//         you do business more effectively.
//       </p>

//       <p>
//         Take a look at my projects for examples of past work, and get in touch
//         if you'd like to explore how we can make your digital presence work
//         harder for you.
//       </p>

//       <p>{'\u2013'} Cole</p>
//     </>
//   );
// }

import TypeWriter from '../components/TypeWriter';

export default function AboutPage({ active }: { active?: boolean }) {


  return (
    <div className="about-page">
      <p className="big-text">
        <TypeWriter text="full-stack engineer. part-time everything else. building software, making coffee, figuring things out." />
      </p>

      <p>
        Freelance engineer building for web and native mobile, your products and
        my own. React Native, Expo, Supabase, Shopify. Whatever ships the thing
        right. Currently working on Dial, a brew repository for the specialty
        coffee world. Pure math background, started a PhD, decided to build
        things instead.
      </p>
      <p>Say hi if you want to work together!</p>
      <p>{"\u2013"} Cole</p>
    </div>
  );
}
