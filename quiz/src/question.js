import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updatePerson, nextLevel, finishQuiz, reset } from "./actions";
import { QuestionDetails } from "./questionDetails";
import { Counter } from "./counter";
import { ScoreDetails } from "./scoreDetails";

const Question = ({
  quiz,
  level,
  person,
  changePerson,
  goNext,
  finish,
  rst,
}) => {
  const [remainingSeconds, setRemainingSeconds] = useState(5);
  useEffect(() => {
    const dec = setInterval(
      () => setRemainingSeconds((prevSeconds) => prevSeconds - 1),
      1000
    );
    return () => clearInterval(dec);
  }, []);

  useEffect(() => {
    if (level.currentLevel === level.levels) {
      finishQuiz();
    }
  }, [level.currentLevel, level.levels]);

  useEffect(() => {
    if (remainingSeconds === 0) {
      changePerson({ ...person, noAnswers: person.noAnswers + 1 });
      goNext();
      setRemainingSeconds(5);
    }
  }, [changePerson, remainingSeconds, goNext, person, level.currentLevel]);

  const chooseAnswer = (key) => {
    const currentQuestion = quiz.questions[level.currentLevel];
    if (key === currentQuestion.answerKey) {
      changePerson({
        ...person,
        rightAnswers: person.rightAnswers + 1,
        score: person.score + currentQuestion.score,
      });
    } else {
      changePerson({
        ...person,
        wrongAnswers: person.wrongAnswers + 1,
        score: person.score - 10,
      });
    }
    goNext();
    setRemainingSeconds(5);
  };

  return (
    <div>
      {!quiz.questions[level.currentLevel] || level.isFinished ? (
        <div>
          <ScoreDetails person={person} resetQuiz={rst} />
        </div>
      ) : (
        <div>
          <QuestionDetails
            currentQuestion={quiz.questions[level.currentLevel]}
            chooseAnswer={chooseAnswer}
          />
          <Counter
            currentLevel={level.currentLevel}
            seconds={remainingSeconds}
          />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    quiz: state.quiz,
    level: state.level,
    person: state.person,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  changePerson: (newPerson) => dispatch(updatePerson(newPerson)),
  goNext: () => dispatch(nextLevel()),
  finish: () => dispatch(finishQuiz()),
  rst: () => dispatch(reset()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Question);
