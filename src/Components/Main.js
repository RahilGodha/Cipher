import React, { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Post from './Post';
import img1 from '../Assets/Images/6530.jpg'
import '../styles/main.css'


const posts = [
    {
        name: 'John Doe',
        username: 'johndoe',
        days: '2 days ago',
        textMsg: 'Lorem ipsum dolor sit amet. Qui voluptatem minus ad ipsam illum est iusto nisi ut repudiandae galisum. Et sint voluptate non nulla beatae et molestias veritatis non galisum consequatur. Qui labore sequi sit quia itaque aut numquam velit. Non aspernatur sint est inventore tempora est soluta sunt sit obcaecati optio non veritatis aliquam. Sit debitis possimus ad quos alias ut natus magnam nam voluptatibus soluta! Sit consequatur quis ut Quis voluptatem id illo dolorum non sint itaque aut sint quaerat nam omnis rerum eum omnis aliquam. Non sunt accusamus ut quaerat repellat ab dolores facilis! Eum tempore atque qui neque eaque ut odio veritatis est rerum culpa est consectetur fugiat quo temporibus doloremque',
        image: img1,
    },
    {
        name: 'Jane Smith',
        username: 'janesmith',
        days: '1 day ago',
        textMsg: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: img1,
    },
    // ... more posts
];

const Main = () => {
    const [selectedTab, setSelectedTab] = useState('posts'); // To keep track of which tab is selected
    const [user, setUser] = useState("rahil");
    const [showDropdown, setShowDropdown] = useState(false); // Track dropdown visibility

    const communityDetails = {
        name: 'DSA Community',
        description: '90 Members',
    };

    const handleJoinLeave = () => {
        if (user) {
            // Handle leaving the community
        } else {
            // Handle joining the community
        }
    };

    const handleDropdownToggle = () => {
        setShowDropdown(!showDropdown);
    };
    return (
        <div className="flex flex-col">

            <div className=" relative flex  bg-white w-full rounded-lg mb-1 ">
                <div className='h-10 w-10 m-2 bg-black rounded-full' ></div>
                <div className='ml-10'>
                    <h2 className="text-xl font-semibold">{communityDetails.name}</h2>
                    <p className="text-gray-600">{communityDetails.description}</p>
                </div>
                <div
                    className={`absolute right-[15%] top-[25%] text-gray-500 cursor-pointer`}
                    onClick={handleJoinLeave}
                >
                    {user ? 'Leave' : 'Join'}
                </div>
                <icon className="absolute right-[2%] top-[25%] cursor-pointer">
                    <MoreVertIcon onClick={handleDropdownToggle} />
                    {showDropdown && (
                        <div className="absolute bg-gray-100 rounded right-3 w-20 dropdown-options shadow-xl flex flex-col">
                            <button className="dropdown-option">Option 1</button>
                            <button className="dropdown-option">Option 2</button>
                            <button className="dropdown-option">Option 3</button>
                        </div>
                    )}
                </icon>
            </div>
            <div className="flex mb-1 h-[5vh]">
                <button
                    className={`text-xl font-semibold flex-1 ${selectedTab === 'posts' ? 'bg-gray-300 text-orange-400  ' : 'bg-white text-gray-700'
                        }`}
                    onClick={() => setSelectedTab('posts')}
                >
                    Posts
                </button>
                <button
                    className={`text-xl font-semibold flex-1 ${selectedTab === 'assignments' ? 'bg-gray-300 text-orange-400 ' : 'bg-white text-gray-700'
                        }`}
                    onClick={() => setSelectedTab('assignments')}
                >
                    Assignments
                </button>
            </div>
            <div className="h-[69.5vh] md:h-[78.5vh] rounded-xl overflow-y-auto no_scrollbar">
                {selectedTab === 'posts' && (
                    <div>
                        <div className="space-y-4">
                            {posts.map((post, index) => (
                                <Post
                                    key={index}
                                    name={post.name}
                                    username={post.username}
                                    days={post.days}
                                    textMsg={post.textMsg}
                                    image={post.image}
                                />
                            ))}</div>

                    </div>
                )}
                {selectedTab === 'assignments' && (
                    <div className="bg-white p-4 shadow rounded-lg">
                        {/* Render assignments here */}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Main;
