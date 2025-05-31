import React from 'react'
import {Avatar, Menu} from '@mantine/core'
const ProfileMenu = ({user,logout}) => {
  return (
     <Menu>
        <Menu.Target>
            <Avatar  src={user?.picture} alt='user image' radius="100%"/>
        </Menu.Target>
         
     </Menu>
  )
}

export default ProfileMenu
