import css from './ProfileStyle.css';

const profileStyle = ({ name, tag, location, image, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div className={css['profile-container']}>
      <div className={css['profile-info']}>
        <div className={css['avatar-container']}>
          <img
            className={css['avatar-img']}
            src={image}
            alt={`${name}'s avatar`}
          />
        </div>
        <p className={css['avatar-name']}>{name}</p>
        <p className={css['avatar-tag']}>@{tag}</p>
        <p className={css['avatar-location']}>{location}</p>
      </div>
      <ul className={css['stats-list']}>
        <li className={css['stats-item']}>
          <span className={css['label']}>Followers</span>
          <span className={css['value']}>{followers}</span>
        </li>
        <li className={css['stats-item']}>
          <span className={css['label']}>Views</span>
          <span className={css['value']}>{views}</span>
        </li>
        <li className={css['stats-item']}>
          <span className={css['label']}>Likes</span>
          <span className={css['value']}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default profileStyle;
