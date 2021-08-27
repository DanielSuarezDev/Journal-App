import React from "react";
import moment from "moment";
import { activeNote } from "../../actions/notes";
import { useDispatch } from "react-redux";

export const JournalEntry = ({ id, date, title, body, url }) => {
  const noteDate = moment(date);
  const dispatch = useDispatch();

  const handleEntryClick = () => {
    dispatch(
        activeNote(id, {
            date,title,body,url
        })
        );
  };

  return (
    <div className="journal__entry animate__animated animate__flash" onClick={handleEntryClick}>
      {url && (
        <div
          className="journal__entry-picture"
          style={{
            backgroundImage: `url(${url})`,
            backgroundSize: "contain",
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
      )}

      <div className="journal__entry-body">
        <p className="journal__entry-title animate__animated animate__bounce">{title}</p>
        <p className="journal__entry-content">{body}</p>
      </div>

      <div className="journal__entry-date-box">
        <span>{noteDate.format("dddd")}</span>
        <h4>{noteDate.format("Do")}</h4>
      </div>
    </div>
  );
};
