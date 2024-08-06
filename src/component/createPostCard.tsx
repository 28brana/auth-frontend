import React from 'react';

const CreatePostCard: React.FC = () => {
    return (
        <div className="postcard">
            <div >
                <p className="text-large font-medium text-text-light">Create post</p>
            </div>

            <div className="flex rounded-lg items-center bg-[#191920] py-4 px-7 gap-4 mt-5">
                <div className="w-12 h-12 max-h-12 max-w-12 min-w-12 min-h-12 rounded-full justify-center items-center flex bg-card-bg text-large">
                    <span>💬</span>
                </div>
                <input type="text" className='py-2 text-[14px] font-normal text-text-lighter bg-transparent focus:outline-none w-full' placeholder='How are you feeling today?' />
            </div>

            <div className="flex justify-end mt-4">
                <button className='btn-primary w-[111px]'>Post</button>
            </div>
        </div>
    );
};

export default CreatePostCard;
