import { headerSocials } from "./data/headerSocials";

const HeaderSocials = () => {
  const data = headerSocials;
  return (
    <div className="header-socials">
      {data.map((item) => (
        <a
          key={item.id}
          className="header-socials-item"
          href={item.link}
          target="_blank"
          rel="noreferrer">
          <item.icon />
        </a>
      ))}
    </div>
  );
};

export default HeaderSocials;
