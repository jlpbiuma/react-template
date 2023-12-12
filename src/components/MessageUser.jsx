// MessageUser.jsx
import React from "react";

const userIconUrl =
  "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png";

const MessageUser = ({ message }) => {
  return (
    <div className="flex justify-end">
      <div className="flex items-center my-2">
        <div className="bg-blue-900 p-4 rounded-lg text-white max-w-md ml-4">
          {message.message}
        </div>
        {/* User icon */}
        <img
          src={userIconUrl}
          alt="User Icon"
          className="mx-4 h-8 w-8 rounded-full border-2 border-black"
        />
      </div>
    </div>
  );
};

export default MessageUser;
