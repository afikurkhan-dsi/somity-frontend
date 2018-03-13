import React from 'react';
import { Image, Divider } from 'semantic-ui-react';

export function UserInfo({user}) {
  return (
    <div className="userInfo">
      <h2>Profile</h2>
      <Divider />
      <Image src="http://via.placeholder.com/80x80" circular/>
      <div className="text-center">
        <h3 style={{fontWeight: '700'}}>{user.FirstName} {user.LastName}</h3>
        <address>
          {user.Address}
        </address>
        <p>{user.Phone} &#9675; {user.Email}</p>
      </div>
    </div>
  );
}
