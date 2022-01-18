import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteQuestion }) {
  const questionsArray = questions.map((question) => {
    return (
      <QuestionItem
        key={question.id}
        question={question}
        onDeleteQuestion={onDeleteQuestion}
      />
    );
  });

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionsArray}</ul>
    </section>
  );
}

export default QuestionList;
