const MEMBER_API = 'member/';
const QUIZ_API = 'quiz/';
export const quiz = QUIZ_API;
export const LOGIN = `${MEMBER_API}login`;
export const REGISTOR = `${MEMBER_API}registor`;
export const ID_CHECK = `${MEMBER_API}check`;
export const QUIZ_LIST = `${QUIZ_API}`;
export const QUIZ_VIEW = (state) => {
  const view = `${QUIZ_API}${state}`;
  return view;
};
