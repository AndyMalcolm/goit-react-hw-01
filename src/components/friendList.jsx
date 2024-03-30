import css from './friendListStyle.css';
import FriendListBlock from './FriendListBlock';

export default function FriendListBlock({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={css.friendsListBlock} key={id}>
          <friendListBlock avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
}
// test