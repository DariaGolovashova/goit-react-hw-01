import clsx from "clsx";
import css from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
    const statusFriend = clsx(css.status, isOnline ? css.online : css.offline);
    return (
        <li className={css.items}>
            <img src={avatar} alt="Avatar" width="48" />
            <p className={css.text}>{name}</p>
            <p className={statusFriend}> { isOnline ? 'Online' : 'Offline' }

            </p>
            
 </li>
    )
 }