import React from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';

const Card = ({ logo, name, userID, isFollowing }) => {
    return (
        <div className='bg-white p-4 flex rounded-lg shadow-md mb-4'>
            <div className='flex flex-1 items-center'>
                <div className='h-10 w-10 bg-black rounded-full'></div>
                <div className='ml-4'>
                    <div className='font-semibold'>{name}</div>
                    <div className='text-sm text-gray-500'>@{userID}</div> {/* Adjusted text size */}
                </div>
            </div>
            <div className='flex items-center'>
                {isFollowing ? <DoneOutlinedIcon fontSize='small' /> : <AddOutlinedIcon fontSize='small' />} {/* Adjusted icon size */}
                <button className={`text-xs text-black ${isFollowing ? 'text-gray-400' : 'font-semibold'} rounded-full ml-1`}>
                    {isFollowing ? 'Following' : 'Follow'}
                </button>
            </div>
        </div>
    );
};

const Left3 = () => {
    const users = [
        {
            logo: 'logo1.jpg',
            name: 'User1',
            userID: 'user1_id',
            isFollowing: true,
        },
        {
            logo: 'logo2.jpg',
            name: 'User2',
            userID: 'user2_id',
            isFollowing: false,
        },
        {
            logo: 'logo2.jpg',
            name: 'User2',
            userID: 'user2_id',
            isFollowing: false,
        },
        {
            logo: 'logo2.jpg',
            name: 'User2',
            userID: 'user2_id',
            isFollowing: false,
        },
        // Add more users...
    ];

    return (
        <div className=''>
            {users.map((user, index) => (
                <Card key={index} logo={user.logo} name={user.name} userID={user.userID} isFollowing={user.isFollowing} />
            ))}
        </div>
    );
};

export default Left3;
