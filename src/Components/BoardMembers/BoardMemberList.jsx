import React from "react";
import BoardMember from "./BoardMembers";
import './boardMemberList.css';
// import {Board2023Images} from './BoardList';
function BoardMemberList(props) {
    return (
        <div className="member-lists">
            <h2 className="board-year">{props.yearheading}</h2>
            {props.BoardList.map((list, i) => {
                return (
                    <div className="member-yearlist" key={i} >

                        {list.map((value, index) => {
                            return (
                                <div key={index}>
                                    <BoardMember
                                        image={value.src}
                                        heading={value.designation}
                                        alt={value.alt}
                                        name={value.mname}
                                        link={value.link}
                                    />
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default BoardMemberList;