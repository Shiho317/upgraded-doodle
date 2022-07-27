import React from "react";
import { Fade } from "react-awesome-reveal";
import { AboutDetails, AboutImage, AboutIntro, AboutTitle, AboutUs } from "./About.style";
import conceptImg from "../../img/concept_full_2x.jpg";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/Theme";

const About = () => {

  return (
    <ThemeProvider theme={theme}>
      <AboutUs id="about-us">
        <AboutDetails>
          <AboutTitle>
            <p>Our Concept</p>
            <h1>The Experience</h1>
          </AboutTitle>
          <Fade fraction={0.5} duration={4000}>
            <AboutIntro>
              <p>
                Kagome Coffee Roasters is a small batch roastery. We roast with
                care,keep it fresh,honest and handmade. Coffee matters to us.It
                is a core part of our offering and we see it as an opportunity
                to make someone’s day. For a few minutes,escape your busy day
                and enjoy a cup of coffee. A place for locals and visitors to
                meet,eat,drink and enjoy the simple things in life. We value
                sustainability, community and quality experiences. We invite you
                to be a part of it all with us and thank you for your on going
                support.
              </p>

              <p>
                かごめコーヒーロースターズはスモールバッチロースタリーです。
                新鮮な豆を丁寧に焙煎し高品質なコーヒーをお届けします。
                美味しいコーヒーは私たちの中核部分であり、それはあなたの何気ない1日をより良い物にできるツールだと考えています。少しの間、忙しい日々を忘れて美味しいコーヒーを。
                地元の人や訪れた方が出会い、食べ、飲み、そんな当たり前の楽しみを発見できる場所。
                コーヒーを通じて持続可能性、コミュニティ、質の高い体験をお約束します。
                皆様にお会いできる日を楽しみにしています。
              </p>
            </AboutIntro>
          </Fade>
        </AboutDetails>
        <AboutImage>
          <img src={conceptImg} alt="about" />
        </AboutImage>
      </AboutUs>
    </ThemeProvider>
  );
};

export default About;
