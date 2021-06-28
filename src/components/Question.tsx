import { ReactNode } from "react";
import cx from "classnames";

import "../styles/question.scss";

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isHighlighted?: false;
  isAnswered: false;
};

export function Question({
  content,
  author,
  children,
  isHighlighted = false,
  isAnswered = false,
}: QuestionProps) {
  return (
    <div
      className={cx(
        "question",
        { anwsered: isAnswered },
        { highlighted: isHighlighted && !isAnswered }
      )}
    >
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </div>
  );
}
