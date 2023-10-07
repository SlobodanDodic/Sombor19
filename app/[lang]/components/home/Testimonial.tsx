import Image from "next/image";
import avatar from "../../assets/hero/avatar.png";

export function Testimonial() {
  return (
    <div className="flex justify-center items-center w-screen max-w-6xl mx-auto mr-5">
      <div className="flex">
        <figure className="snip1204">
          <blockquote>
            The apartment was spacious and super clean with everything you'd need. It is located close to downtown and I
            parked my vehicle and walked to buy groceries and get to a bank. I received help with my bags both arriving
            and leaving as well as...
          </blockquote>
          <div className="author">
            <Image src={avatar} height={80} width={80} alt="avatar" />
            <h5>Milutinovic</h5>
            <span>Canada</span>
          </div>
        </figure>
      </div>
    </div>
  );
}
