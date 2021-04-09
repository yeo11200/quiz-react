const MEMBER_API = 'member/';
const QUIZ_API = 'quiz/';

export const QUIZ_LIST = `${QUIZ_API}`;

export const QUIZ_VIEW = (state) => {
  const view = `${QUIZ_API}${state}`;
  return view;
}