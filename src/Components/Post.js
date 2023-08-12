import React, { useState } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

const Post = ({ name, username, days, textMsg, image }) => {
    const [expanded, setExpanded] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false); // Track dropdown visibility
    const handleDropdownToggle = () => {
        setShowDropdown(!showDropdown);
    };

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="bg-white p-4 shadow rounded-lg">
            <div className=" relative flex items-center">
                <div className="h-10 w-10 m-2 bg-black rounded-full"></div>
                <div className="ml-1">
                    <p className="text-gray-600">@{username} . <span className="text-orange-400 font-medium  ">{days}</span></p>
                    <h2 className="text-lg font-semibold">{name}</h2>
                </div>
                <div className="absolute right-[23%] top-[25%] text-orange-300"><AddIcon/></div>
                <div className="absolute right-[15%] top-[25%] text-gray-500">Follow</div>
                <div className="absolute right-2 top-[25%]">
                <MoreVertIcon onClick={handleDropdownToggle} />
                    {showDropdown && (
                        <div className="absolute bg-gray-100 rounded-lg right-3 w-20 dropdown-options shadow-xl flex flex-col">
                            <button className="dropdown-option">Option 1</button>
                            <button className="dropdown-option">Option 2</button>
                            <button className="dropdown-option">Option 3</button>
                        </div>
                    )}
                </div>
            </div>
            <div className="mt-4 overflow-auto no-scrollbar">
                {expanded ? (
                    <div>
                        <p>{textMsg}</p>
                        <button onClick={toggleExpand} className="text-blue-500 font-medium">
                            Read Less
                        </button>
                    </div>
                ) : (
                    <div>
                        <p>{textMsg.slice(0, 100)}</p>
                        {textMsg.length > 100 && (
                            <button onClick={toggleExpand} className="text-blue-500 font-medium">
                                Read More
                            </button>
                        )}
                    </div>
                )}
            </div>
            {image && <img src={image} alt="Post" className=" rounded-xl mt-4" />}
            <div className="flex space-x-6 mt-3 ml-2">
                <CommentOutlinedIcon/>
                <ThumbUpAltOutlinedIcon/>
                <ShareOutlinedIcon/>
            </div>
        </div>
    );
};

export default Post;
