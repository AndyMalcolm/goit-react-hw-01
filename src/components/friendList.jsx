import css from './friendListStyle.css';
import friendListBlock from '../friendListBlock';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendsList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={css.friendsListItem} key={id}>
          <friendListBlock avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
}