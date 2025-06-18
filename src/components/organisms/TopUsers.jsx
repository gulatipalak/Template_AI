import { AvatarStack } from "../atoms"
import CardWapper from "../molecules/CardWapper"
import macrokelly from "../../assets/img/macroKelly.png"
import anaiahWhitten from "../../assets/img/anaiahWhitten.png"
import { Star } from "../../assets/icons";

const avatars = [
  {
    img: macrokelly,
    bg: "#E58C5D",
  },
  {
    icon: <Star/>,
    gradient: "radial-gradient(346.43% 346.43% at -246.13% 285.71%, #FD8240 0%, #FFFFFF 100%)",
  },
  {
    img: anaiahWhitten,
    bg: "#8A6CEA",
  },
];

const TopUsers = ({className=""}) => {
  return (
    <CardWapper className={`pt-8 px-8 pb-[33px] ${className}`}>
          <div className="gap-5 flex flex-col items-center justify-center h-full">
            <div className="space-y-3">
              <span className="text-transparent dark:bg-orange-pink bg-light-orange-pink bg-clip-text text-[62px] font-semibold leading-[56px] tracking-[-0.02em] transition duration-300">20</span>
              <h2 className="dark:text-[#B2A1FD] text-[#5942CA] text-lg transition duration-300">Top Users</h2>
            </div>
            <AvatarStack items={avatars} />
          </div>
        </CardWapper>
  )
}

export default TopUsers
