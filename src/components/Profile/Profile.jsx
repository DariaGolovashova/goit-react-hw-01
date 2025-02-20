import css from "./Profile.module.css"

export default function Profile({ name, tag, location, image, stats }) {  
  const statsArray = Object.entries(stats);
return (
  <div className={css.profile}>
    <div className={css.description}>
     <img className={css.avatar} src={image}
                alt="User avatar" width="480" />
      <p className={css.name}> {name}</p>
          <p className={css.tag}>@{tag}</p>
          <p className={css.location}>{location}</p>
          </div>
    
    <ul className={css.stats}>
      {
        statsArray.map(([key, value]) => ( 
        <li key={key}>
          <span className={css.label}>{ key.charAt(0).toUpperCase() + key.slice(1)}</span>
          <span className={css.quantity}>{value}</span>
        </li>
      ))} 
    </ul>
  </div>
  );
};
