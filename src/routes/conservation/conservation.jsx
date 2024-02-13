import { Link } from "react-router-dom";
import Button from "../../components/button/button";
import "./conservation.scss";

function Conservation() {
  return (
    <div className="conservation-container">
      <img
        src="https://scontent.flba3-2.fna.fbcdn.net/v/t39.30808-6/239221600_10161364568484778_3695059215571161848_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd477f&_nc_ohc=iPOoxoj118sAX_6YeIp&_nc_ht=scontent.flba3-2.fna&oh=00_AfBgdV3qW4GmkPyoCeuoHYPWbExDLxW5jryTTCrtGqOgmQ&oe=65C38595"
        alt="leopard yawn"
      />
      <div className="conservation-container-right">
        <h1>
          Preserving the Pilanesberg: Unleashing the Power of Conservation
          Through Your Support
        </h1>
        <p>
                In our collective pursuit to preserve the wonders of our planet, your generous donations will find a meaningful purpose with the Pilanesberg Wildlife Trust. Their unwavering commitment to the well-being of wildlife and ecosystems is crucial for the delicate balance of our natural world.
            </p>
            <p>
                By supporting this remarkable organization, you directly contribute to the thriving ecosystem of the Pilanesberg region, ensuring the protection of diverse species and their habitats. The Pilanesberg Wildlife Trust's impactful initiatives range from wildlife conservation and habitat restoration to community education, fostering a harmonious relationship between humanity and nature.
            </p>
            <p>
                Your contribution becomes a catalyst for positive change, enabling the trust to continue its vital work in safeguarding the interconnected web of life. Every donation, regardless of size, acts as a lifeline for the Pilanesberg ecosystem, allowing it to flourish and sustain the rich biodiversity that makes our planet truly extraordinary.
            </p>
            <p>
                Join hands with the Pilanesberg Wildlife Trust today and become an integral part of the force working tirelessly to ensure a future where nature thrives. Your support is a beacon of hope for a healthier, more vibrant planet. Donate now and make a lasting impact on the world we share.
            </p>
        <Link
          to="https://pilanesbergwildlifetrust.co.za/projects/"
          target="blank"
        >
          <Button buttonType="white" text="Donate" />
        </Link>
      </div>
    </div>
  );
}

export default Conservation;
