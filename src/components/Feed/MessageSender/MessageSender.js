import React, { useState } from "react";
import "./MessageSender.css";
import firebase from "firebase";

// icons
import { Avatar } from "@material-ui/core";
import { Videocam, PhotoLibrary, InsertEmoticon } from "@material-ui/icons";

// database
import db from "../../../firebase";

const MessageSender = () => {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // send data to database
    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: "https://avatars.githubusercontent.com/u/3384470?v=4",
      username: "Adrian Sudbury",
      image: imageUrl,
    });

    // clear form
    setInput("");
    setImageUrl("");
  };
  return (
    <div className="messageSender">
      <div className="messageSenderTop">
        <Avatar src="https://avatars.githubusercontent.com/u/3384470?v=4" />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSenderInput"
            placeholder={`What's on your mind, Adrian Sudbury?`}
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder={"Image URL (Optional)"}
          />
          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>

      <div className="messageSenderBottom">
        <div className="messageSenderOption">
          <Videocam style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>

        <div className="messageSenderOption">
          <PhotoLibrary style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>

        <div className="messageSenderOption">
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
